import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Creators from "./pages/Creators";
import Events from "./pages/Events";
import Series from "./pages/Series";
import Stories from "./pages/Stories";
import Error from "./pages/Error";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/characters" component={Characters} />
                <Route exact path="/comics" component={Comics} />
                <Route exact path="/creators" component={Creators} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/series" component={Series} />
                <Route exact path="/stories" component={Stories} />
                <Route exact path="*" component={Error} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default Routes;
