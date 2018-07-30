import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import client from './config/apollo'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
document.getElementById('root'));

registerServiceWorker();