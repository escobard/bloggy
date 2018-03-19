import Enzyme, { shallow, render, mount, expect } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
// SUPER USEFUL SYNTAX HERE!
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.expect = expect;