import React, {useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
  getSortTypeSelector,
  getActiveSortTypeSelector,
  getSortMenuStatusSelector,
} from '../../store/reducers/app-state/selectors';
import {AppStateActionCreator} from '../../store/reducers/app-state/app-state';

import './sorting.scss';

const Sorting = ({
  isSortMenuOpen,
  onToggledSortMenu,
  sortType,
  activeSortType,
  onChageSortType,
  onResetSortMenu,
}) => {
  const sortingRef = useRef(null);
  const toggledSortMenuEnterHandler = (evt) => {
    if (evt.code === 'Enter') {
      onToggledSortMenu();
    }
  };

  const clickOutsideHandler = useCallback(
    (evt) => {
      const path = evt.path || (evt.composedPath && evt.composedPath());
      if (!path.includes(sortingRef.current)) {
        onResetSortMenu();
      }
    },
    [onResetSortMenu],
  );

  useEffect(() => {
    document.body.addEventListener('click', clickOutsideHandler);

    return () => {
      document.body.removeEventListener('click', clickOutsideHandler);
    };
  }, [clickOutsideHandler, isSortMenuOpen]);
  return (
    <div ref={sortingRef} className="section-pizza__sorting sorting">
      <span className="sorting__caption">Сортировка по:</span>
      <span
        onClick={onToggledSortMenu}
        onKeyDown={toggledSortMenuEnterHandler}
        className="sorting__type"
        tabIndex="0"
        role="button"
      >
        {activeSortType}
      </span>
      {isSortMenuOpen && (
        <ul className="sorting__options">
          {Object.values(sortType).map((type) => {
            return (
              <li
                key={type}
                className={classNames('sorting__option', {
                  'sorting__option--active': activeSortType === type,
                })}
                tabIndex="-1"
              >
                <Link className="sorting__link" to="/" onClick={() => onChageSortType(type)}>
                  {type}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Sorting.propTypes = {
  isSortMenuOpen: PropTypes.bool.isRequired,
  onToggledSortMenu: PropTypes.func.isRequired,
  sortType: PropTypes.object.isRequired,
  activeSortType: PropTypes.string,
  onChageSortType: PropTypes.func.isRequired,
  onResetSortMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isSortMenuOpen: getSortMenuStatusSelector(state),
  activeSortType: getActiveSortTypeSelector(state),
  sortType: getSortTypeSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  onToggledSortMenu: () => {
    dispatch(AppStateActionCreator.toggledSortMenu());
  },
  onResetSortMenu: () => {
    dispatch(AppStateActionCreator.resetSortMenu());
  },
  onChageSortType: (type) => {
    dispatch(AppStateActionCreator.changeSortType(type));
    dispatch(AppStateActionCreator.toggledSortMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
