import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getData} from 'Redux/actions/index';
import App from 'App';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({getData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

