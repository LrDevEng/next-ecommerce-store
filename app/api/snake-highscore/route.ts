import { NextResponse } from 'next/server';
import {
  getHighscoresInsecure,
  type Highscore,
  updateHighscoreInsecure,
} from '../../../database/highscores';
import { highscoreSchema } from '../../../migrations/00002-createTableHighscore';

type HighscoreResponseBodyPut =
  | {
      success: boolean;
      message: string;
      highscore: Omit<Highscore, 'id'> | Highscore;
    }
  | {
      error: string;
    };

export async function PUT(
  request: Request,
): Promise<NextResponse<HighscoreResponseBodyPut>> {
  const requestBody = await request.json();

  const result = highscoreSchema.safeParse(requestBody);

  if (!result.success) {
    return NextResponse.json(
      {
        error: 'Request does not contain highscore object',
        errorIssues: result.error.issues,
      },
      {
        status: 400,
      },
    );
  }

  const highscores = await getHighscoresInsecure();
  highscores.push({
    id: 4,
    name: result.data.name,
    score: result.data.score,
  });

  highscores.sort(
    (highscoreA, highscoreB) => highscoreB.score - highscoreA.score,
  );
  const lowest = highscores.pop();

  if (lowest?.id === 4) {
    return NextResponse.json({
      success: false,
      message: 'No new highscore.',
      highscore: result.data,
    });
  }

  let updatedHighscore: Highscore | undefined = undefined;
  for (let i = 0; i < 3; i++) {
    if (highscores[i]?.id === 4) {
      updatedHighscore = await updateHighscoreInsecure({
        id: i + 1,
        name: result.data.name,
        score: result.data.score,
      });
    } else {
      await updateHighscoreInsecure({
        id: i + 1,
        name: highscores[i]!.name,
        score: highscores[i]!.score,
      });
    }
  }

  if (!updatedHighscore) {
    return NextResponse.json(
      {
        error: 'Internal Server Error.',
      },
      {
        status: 500,
      },
    );
  }

  return NextResponse.json({
    success: true,
    message: 'New highscore added!',
    highscore: updatedHighscore,
  });
}
