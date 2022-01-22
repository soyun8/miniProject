import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import NotFound from "./pages/404";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/write" exact>
          <Write />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
