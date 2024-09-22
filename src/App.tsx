import { Route, Switch } from "wouter";
import IndexPage from "./pages/Index";

function App() {
  return (
    <Switch>
      <Route path="/" component={IndexPage} />
    </Switch>
  );
}

export default App;
