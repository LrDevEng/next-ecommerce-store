'use client';

import Image from 'next/image';
import { filterCookieName } from '../../util/constants';
import { setCookie } from '../../util/cookies';
import styles from './FilterButton.module.css';

export default function CheckOutButton({ showFilter }) {
  return (
    <button
      className={styles.button}
      onClick={async () => {
        await setCookie(filterCookieName, !showFilter);
      }}
    >
      <Image
        src={
          showFilter
            ? '/icons/icon-arrow-forward.svg'
            : '/icons/icon-arrow-back.svg'
        }
        alt="About"
        width={36}
        height={36}
      />
    </button>
  );
}
