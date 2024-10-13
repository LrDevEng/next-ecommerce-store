'use client';

import { useFilterType } from '../../stores/useFilterType';
import { productType } from '../../util/constants';
import styles from './FilterType.module.css';

export default function FilterType() {
  // Get filter state
  const filterType = useFilterType((state) => state.filter);
  const updateFilterType = useFilterType((state) => state.update);

  return (
    <div className={styles.container}>
      <hr />
      <div>Type</div>
      <label>
        <input
          type="radio"
          name="filterType"
          checked={filterType === productType.all}
          onChange={() => {
            updateFilterType(productType.all);
          }}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filterType"
          checked={filterType === productType.button}
          onChange={() => {
            updateFilterType(productType.button);
          }}
        />
        Buttons
      </label>
      <label>
        <input
          type="radio"
          name="filterType"
          checked={filterType === productType.joystick}
          onChange={() => {
            updateFilterType(productType.joystick);
          }}
        />
        Joysticks
      </label>
      <label>
        <input
          type="radio"
          name="filterType"
          checked={filterType === productType.microcontroller}
          onChange={() => {
            updateFilterType(productType.microcontroller);
          }}
        />
        Controllers
      </label>
    </div>
  );
}
