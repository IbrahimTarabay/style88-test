import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';/*to keep your UI in sync with the URL*/ 

import App from './App';

import * as serviceWorker from './serviceWorker';

import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';/*to use redux*/
import {store,persistor} from './redux/store';
/*Provider gives us ability to use store and reducers*/
/*provider is component which is parent of everything in our app*/
/*we don't pass store={store} into <App /> because we don't want to pass all store to all components*/

ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
   </Provider>,
 document.getElementById('root'));

 serviceWorker.register();
