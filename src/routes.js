import React from 'react';
//import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import Page_1 from './components/page_1/Page_1'
import Page_2 from './components/page_2/Page_2'

import {HashRouter,Route} from 'react-router-dom';


export default (
    <HashRouter>

         <Route exact path="/" component={App} >
            <div>
                <Route path="/page_1" component={Page_1} />
                <Route path="/page_2" component={Page_2} />
            </div>
         </Route>

    </HashRouter>
)