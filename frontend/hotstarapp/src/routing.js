import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './header';
import Footer from './footer';

function Routing() {
    return (
        <BrowserRouter>
            <Header />
                <Route path="/Home" component={Home} />
            <Footer />
        </BrowserRouter>
    );
}

export default Routing