import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./components/Root";
import registerServiceWorker from "./registerServiceWorker";

function renderApp(Component: typeof Root) {
    ReactDOM.render(<Component />, document.getElementById("root") as HTMLElement);
}

// For hot reloading of react components
if (module.hot) {
    module.hot.accept("./components/Root", () => renderApp(Root));
}

renderApp(Root);
registerServiceWorker();
