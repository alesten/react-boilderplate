import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {IntlProvider, addLocaleData} from 'react-intl'
import daLocaleData from 'react-intl/locale-data/da';

import configureStore from './stores/configureStore';

import "~styles/vendors.scss"

import App from './App'
import Message from '~components/Message'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const currentLang = "da";
addLocaleData(daLocaleData);

ReactDOM.render(
    <IntlProvider locale={currentLang}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Message} />
                </Route>
            </Router>
        </Provider>
    </IntlProvider>
    ,
    document.getElementById('react-container'))