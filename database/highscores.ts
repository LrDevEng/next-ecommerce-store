import { cache } from 'react';
import { sql } from './connect';

export type Highscore = {
  id: number;
  name: string;
  score: number;
};

export const getHighscoresInsecure = cache(async () => {
  const highscores = await sql<Highscore[]>`
    SELECT
      *
    FROM
      highscores
  `;
  return highscores;
});

export const updateHighscoreInsecure = cache(
  async (newHighscore: Highscore) => {
    const [highscore] = await sql<Highscore[]>`
      INSERT INTO
        highscores (name, score)
      VALUES
        (
          ${newHighscore.name},
          ${newHighscore.score}
        )
      RETURNING
        highscores.*
    `;

    return highscore;
  },
);
