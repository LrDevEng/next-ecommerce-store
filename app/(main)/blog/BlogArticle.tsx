import styles from './BlogArticle.module.css';

type Props = {
  author: string;
  date: Date;
  title: string;
  articleText: string;
};

export default function BlogArticle({
  author,
  date,
  title,
  articleText,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>by: {author}</div>
        <div>{date.toLocaleDateString()}</div>
      </div>
      <br />
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <br />
      <article className={styles.text}>{articleText}</article>
    </div>
  );
}
