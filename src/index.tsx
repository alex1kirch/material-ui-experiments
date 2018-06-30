import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./components/Root";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Root />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
