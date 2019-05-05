import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/stores';

// eslint-disable-next-line react/prop-types
export default ({ element }) => <Provider store={configureStore()}>{element}</Provider>;
