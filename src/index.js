import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { EntryContext } from "./UseContext";
import App from "App";
import { MaterialUIControllerProvider } from "context";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
