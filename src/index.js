import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import registerServiceWorker from './registerServiceWorker';

import Reset from './styles/Reset'
import App from './App';

// Initialize our styles on the page.
let styles = ReactDOMServer.renderToStaticMarkup(<Reset />);
document.head.insertAdjacentHTML('beforeEnd', styles);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
