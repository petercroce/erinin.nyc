import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import Reset from './styles/Reset'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Initialize our styles on the page.
let styles = ReactDOMServer.renderToStaticMarkup(<Reset />);
document.head.insertAdjacentHTML('beforeEnd', styles);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
