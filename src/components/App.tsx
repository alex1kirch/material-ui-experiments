import * as React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router";
import HomePage from "./routes/HomePage";
import NotFound from "./routes/NotFound";

class App extends React.Component {
    public render() {
        return (
            <div>
                <Switch>
                    <Route exact={true} path="/" component={HomePage} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default hot(module)(App);
