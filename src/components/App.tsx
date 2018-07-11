import * as React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router";
import AppBar from "./common/AppBar";
import ContextMenuPage from "./routes/ContextMenuPage";
import HomePage from "./routes/HomePage";
import NotFoundPage from "./routes/NotFoundPage";

class App extends React.Component {
    public render() {
        return (
            <div>
                <AppBar />
                <Switch>
                    <Route exact={true} path="/" component={HomePage} />
                    <Route path="/contextMenu" component={ContextMenuPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default hot(module)(App);
