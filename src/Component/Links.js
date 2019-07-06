import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Index from "./index";
import Pages from "./Pages";
import Contact from "./Contact";

class Links extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Pricing" component={Pricing} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Pages" component={Pages} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Links;
