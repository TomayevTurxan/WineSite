import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes";
import WineContextItemProvider from "./context/WineContext";
import DetailWineContextItemProvider from "./context/DetailWineContext";
import UserContextProvider from "./context/UserContext";
function App() {
  const routes = createBrowserRouter(ROUTES);
  return (
    <UserContextProvider>
      <DetailWineContextItemProvider>
        <WineContextItemProvider>
          <RouterProvider router={routes} />
        </WineContextItemProvider>
      </DetailWineContextItemProvider>
    </UserContextProvider>
  );
}

export default App;
