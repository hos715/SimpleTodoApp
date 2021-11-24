import React from 'react';
import {render} from 'react-dom';

import App from './container/App';
import GlobalState from './container/GlobalState';

render(<GlobalState><App /></GlobalState>, document.getElementById('root'));
