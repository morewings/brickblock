import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const axiosMock = new MockAdapter(axios);

configure({ adapter: new Adapter() });

