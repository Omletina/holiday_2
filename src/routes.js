import React from 'react';
import App from './components/App'
import List from './components/list/List'
import Page_2 from './components/page_2/Page_2'
import ListItem from './components/listItem/ListItem'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();




// then our route config
const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/page_2',
        component: Page_2
    },
    {
        path: '/list',
        component: List,
        routes: [
            {
                path: '/list/:id',
                component: ListItem
            },
            {
                path: '/list/bus',
                component: Page_2
            },
        ]
    }
];

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
);


export default (
    <Router>
        <div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    </Router>
);




