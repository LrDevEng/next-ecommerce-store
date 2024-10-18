import { getHighscoresInsecure } from '../../../database/highscores';
import styles from './Podium.module.css';

export default async function Podium() {
  const highscores = await getHighscoresInsecure();

  return (
    <div className={styles.container}>
      <div className={styles.second}>
        <div className={styles.position}>
          <div>2</div>
        </div>
        <div>{highscores[1]?.name}</div>
        <div>Score: {highscores[1]?.score}</div>
      </div>
      <div className={styles.first}>
        <div className={styles.position}>
          <div>1</div>
        </div>
        <div>{highscores[0]?.name}</div>
        <div>Score: {highscores[0]?.score}</div>
      </div>
      <div className={styles.third}>
        <div className={styles.position}>
          <div>3</div>
        </div>
        <div>{highscores[2]?.name}</div>
        <div>Score: {highscores[2]?.score}</div>
      </div>
    </div>
  );
}
