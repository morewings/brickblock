import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCurrentPage} from 'Redux/actions';
import Pages from 'components/Pages/Pages';

function mapStateToProps(state, props) {
  return {
    dataLength: state.contributors[props.dataSource].raw.length,
    currentPage: state.pagination[props.dataSource].page,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setCurrentPage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
