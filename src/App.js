import { Route, Switch } from "react-router-dom";

import AllMeetUps from "./pages/AllMeetUps";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUps />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/newmeetups">
          <NewMeetups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
