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
  const highscoreToUpdate = highscores.find(
    (highscore) => result.data.score > highscore.score,
  );

  if (!highscoreToUpdate) {
    return NextResponse.json({
      success: false,
      message: 'No new highscore.',
      highscore: result.data,
    });
  }

  const updatedHighscore = await updateHighscoreInsecure({
    id: highscoreToUpdate.id,
    name: result.data.name,
    score: result.data.score,
  });

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
