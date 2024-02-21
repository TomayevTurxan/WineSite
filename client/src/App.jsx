import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes";
import WineContextItemProvider from "./context/WineContext";
import DetailWineContextItemProvider from "./context/DetailWineContext";
import UserContextProvider, { UserContext } from "./context/UserContext";
import TypeContextItemProvider from "./context/TypeContext";
import { Toaster } from "react-hot-toast";
import Loader from "./pages/loading";

function App() {
  const routes = createBrowserRouter(ROUTES);

  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <UserContextProvider>
        <TypeContextItemProvider>
          <DetailWineContextItemProvider>
            <WineContextItemProvider>
              <RouterProvider router={routes} />
            </WineContextItemProvider>
          </DetailWineContextItemProvider>
        </TypeContextItemProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
