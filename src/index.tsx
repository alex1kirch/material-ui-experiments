import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./components/Root";
import registerServiceWorker from "./registerServiceWorker";

// tslint:disable-next-line:no-shadowed-variable
function renderApp(Component: typeof Root) {
    ReactDOM.render(<Component />, document.getElementById("root") as HTMLElement);
}

if (module.hot) {
    module.hot.accept("./components/Root", () => renderApp(Root));
}

renderApp(Root);
registerServiceWorker();
