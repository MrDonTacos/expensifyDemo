import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDasboardPage';
import EditExpensePage from '../components/EditExpensePage' ;
import HelpPage from '../components/HelpPage' ;
import NotFoundPage from '../components/NotFoundPage'; 
import Header from '../components/Header' ;


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
    </div>
    <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
</BrowserRouter>
)

export default AppRouter;