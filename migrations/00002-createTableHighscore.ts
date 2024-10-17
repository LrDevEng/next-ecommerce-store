import type { Sql } from 'postgres';
import { z } from 'zod';

export const highscoreSchema = z.object({
  name: z.string().max(100),
  score: z.number(),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE highscores (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(100) NOT NULL,
      score integer NOT NULL,
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE highscores`;
}
