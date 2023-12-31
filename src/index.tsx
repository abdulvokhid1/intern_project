import ReactDOM from "react-dom/client";
import "./index.css";
import Provider from "./tools/provider";
import Home from "./pages/Home";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider>
    <Home />
  </Provider>,
);
