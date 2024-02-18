import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes";
import WineContextItemProvider from "./context/WineContext";
function App() {
  const routes = createBrowserRouter(ROUTES);
  return (
    <WineContextItemProvider>
      <RouterProvider router={routes} />
    </WineContextItemProvider>
  );
}

export default App;
