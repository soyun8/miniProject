import { Route, Switch, Redirect } from "react-router-dom";

import Main from "./pages/Main";
import Detail from "./pages/Details";
import Write from "./pages/Write";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/detail" exact>
          <Detail />
        </Route>
        <Route path="/write" exact>
          <Write />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
