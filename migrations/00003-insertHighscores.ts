import type { Sql } from 'postgres';

const highscores = [
  { id: 1, name: 'Player 1', score: 3 },
  { id: 2, name: 'Player 2', score: 2 },
  { id: 3, name: 'Player 3', score: 1 },
];

export async function up(sql: Sql) {
  for (const highscore of highscores) {
    await sql`
      INSERT INTO
        highscores (name, score)
      VALUES
        (
          ${highscore.name},
          ${highscore.score}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const highscore of highscores) {
    await sql`
      DELETE FROM highscores
      WHERE
        id = ${highscore.id}
    `;
  }
}
