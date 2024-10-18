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
  highscores.sort((highscoreA, highscoreB) => highscoreA.id - highscoreB.id);
  return highscores;
});

export const updateHighscoreInsecure = cache(
  async (newHighscore: Highscore) => {
    const [highscore] = await sql<Highscore[]>`
      UPDATE highscores
      SET
        name = ${newHighscore.name},
        score = ${newHighscore.score}
      WHERE
        id = ${newHighscore.id}
      RETURNING
        highscores.*
    `;

    return highscore;
  },
);
