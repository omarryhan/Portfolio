import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/stores';


export default ({ element }) => <Provider store={configureStore()}>{element}</Provider>;
