import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home4 } from "./Home4";
import { NotFound } from "./404";
import Blog from "./component/Blog/Blog";
import { Article } from "./component/Blog/Article";
import ScrollToTop from "./scrollTop";
import { RenderMetaData, JsonLd } from './constants/seo';          
import { siteNavScript } from './constants/navigation';

class App extends Component {
  render() {
    return (
      <div>
        <RenderMetaData />
        <JsonLd data={siteNavScript} />
        <React.Fragment>

          <Router>
            {/* scrolling to top for each route to prevent browser behavior */}
            <ScrollToTop />
            <Switch>
              <Route path="/Home4" component={Home4} />
              <Route exact path="/" component={Home4} />
              <Route exact path="/articole" component={Blog} />
              {/* Dynamic route for individual posts */}
              <Route path="/articole/:slug" component={Article} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
