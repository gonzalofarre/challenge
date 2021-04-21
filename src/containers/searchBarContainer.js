import {connect} from 'react-redux';
import searchBar from '../components/searchBar/searchBarView'
import {setSearchInput} from '../actions/resultPageActions';
import {getSearchInput} from '../selectors/resultsPageSelectors';

const mapStateToProps = (state, ownProps) => ({
  searchInput: getSearchInput(state)
});

const mapDispatchToProps = dispatch => ({
  setSearchInput: (payload) => {
    dispatch(setSearchInput(payload));
  }
});

const searchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(searchBar);

export default searchBarContainer;
