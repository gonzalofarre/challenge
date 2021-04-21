import {connect} from 'react-redux';
import resultsPageView from '../components/resultsPage/resultsPageView';
import {getProducts} from '../actions/resultPageActions';
import {getProducts as getProductsSelector} from '../selectors/resultsPageSelectors';
import {getSearchInput} from '../selectors/resultsPageSelectors';

const mapStateToProps = (state, ownProps) => ({
  products: getProductsSelector(state),
  searchInput: getSearchInput(state)
});

const mapDispatchToProps = dispatch => ({
  getProducts: (payload) => {
    dispatch(getProducts(payload));
  },
});

const resultsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(resultsPageView);

export default resultsPageContainer;
