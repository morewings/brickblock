import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getData} from 'Redux/actions/index';
import Table from 'components/Table/Table';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({getData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Table);
