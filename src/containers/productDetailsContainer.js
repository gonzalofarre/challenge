import {connect} from 'react-redux';
import {getProductDetails} from '../actions/productDetailsActions';
import productDetailsPageView from '../components/productDetailsPage/productDetailsPageView';
import {getProductDetails as getProductDetailsSelector} from  '../selectors/productDetailsSelector';

const mapStateToProps = (state, ownProps) => ({
  productDetails: getProductDetailsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getProductDetails: (payload) => {
    dispatch(getProductDetails(payload));
  },
});

const productDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(productDetailsPageView);

export default productDetailsContainer;
