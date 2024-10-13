import { filterCookieName } from '../../util/constants';
import { getCookieValue } from '../../util/cookies';
import FilterButton from './FilterButton';
import FilterType from './FilterType';
import styles from './ProductFilter.module.css';

export default async function ProductFilter() {
  // Get cart preview info from cookie
  let showFilter = await getCookieValue(filterCookieName);
  if (showFilter === undefined) showFilter = true;

  return (
    <div className={styles.container}>
      <FilterButton showFilter={showFilter} />
      {showFilter && (
        <div className={styles.filterArea}>
          <h3>Filter Products</h3>
          <FilterType />
        </div>
      )}
    </div>
  );
}
