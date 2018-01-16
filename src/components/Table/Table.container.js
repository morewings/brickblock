import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Table from 'components/Table/Table';

const mapStateToProps = (state, props) => ({
  content: state.contributors[props.dataSource].visible,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Table);
