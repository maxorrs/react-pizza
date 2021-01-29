import {DataActionCreator} from './reducers/data/data';
import pizzas from '../mocks/pizzas';

const fetchPizzas = () => (dispatch, _getState, api) => {
  dispatch(DataActionCreator.toggleLoadingStatusPizzas(true));

  return api
    .get('/pizzas.json')
    .then(({data}) => {
      dispatch(DataActionCreator.loadPizzas(data));
      dispatch(DataActionCreator.toggleLoadingStatusPizzas(false));
    })
    .catch(() => {
      dispatch(DataActionCreator.loadPizzas(pizzas));
      dispatch(DataActionCreator.toggleLoadingStatusPizzas(false));
      // eslint-disable-next-line no-alert
      alert(
        `Из-за политики CORS в Redux были подгружены локальные данные.
LocalStorage может работать некорректно из-за динамического создания айдишников`,
      );
    });
};

export default fetchPizzas;
