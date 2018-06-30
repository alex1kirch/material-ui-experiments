import { TextField } from "@material-ui/core";
import * as React from "react";
import { Route, Switch } from "react-router";

const miss = () => <div>Miss</div>;
const match = () => <div>Match</div>;

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <div>
                    <TextField label="Name" />
                    <input type="text" placeholder="Name" />
                </div>
                <Switch>
                    <Route exact={true} path="/" render={match} />
                    <Route render={miss} />
                </Switch>
            </div>
        );
    }
}

export default App;
