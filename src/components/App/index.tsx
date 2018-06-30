import * as React from "react";
import { Route, Switch } from "react-router";
import withRoot from "../../decorators/withRoot";
import logo from "./logo.svg";

const miss = () => <div>Miss</div>;
const match = () => <div>Match</div>;

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Switch>
                    <Route exact={true} path="/" render={match} />
                    <Route render={miss} />
                </Switch>
            </div>
        );
    }
}

export default withRoot(App);
