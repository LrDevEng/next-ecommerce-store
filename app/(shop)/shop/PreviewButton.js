'use client';

import Image from 'next/image';
import { previewCookieName } from '../../util/constants';
import { setCookie } from '../../util/cookies';
import styles from './PreviewButton.module.css';

export default function CheckOutButton({ showPreview }) {
  return (
    <button
      className={styles.button}
      onClick={async () => {
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 14);

        await setCookie(previewCookieName, !showPreview, {
          httpOnly: true,
          secure: true,
          expires: expiresAt,
        });
      }}
    >
      <Image
        src={
          showPreview
            ? '/icons/icon-arrow-back.svg'
            : '/icons/icon-arrow-forward.svg'
        }
        alt="About"
        width={36}
        height={36}
      />
    </button>
  );
}
