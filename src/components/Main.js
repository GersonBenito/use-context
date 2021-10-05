import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NotFound } from '../container/NotFound';
import { Context } from '../context/Context';
import { Layout } from '../layout/Layout';
import { About } from './About';
import { HomeScreen } from './HomeScreen';
import { Login } from './Login';

export const Main = () => {

    const [user, setUser] = useState({});

    return (
        <Context.Provider value={{ user, setUser }} >
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/about' component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Context.Provider>
    )
}
