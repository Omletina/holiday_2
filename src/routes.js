import React from 'react';
import App from './components/App'
import Lists from './components/lists/Lists'
import Page_2 from './components/page_2/Page_2'
import ListItem from './components/listItem/ListItem'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

export default (
    <Router history={history}>
        <div>
            <Route path="/" component={App} />
            <Route path="/lists" component={Lists} >
                <Route path="/listItem" component={ListItem} />
            </Route>
            <Route path="/page_2" component={Page_2} />
        </div>
    </Router>
)