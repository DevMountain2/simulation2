import React from 'react';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard'
import { Route, BrowserRouter} from 'react-router-dom';



export default (    
            <BrowserRouter>
                <div>
                <Route exact path= '/' component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                </div>        
            </BrowserRouter>
        )

 

 