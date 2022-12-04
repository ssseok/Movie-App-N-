import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  const path = process.env.PUBLIC_URL + "/";
  const router = createBrowserRouter([
    {
      path,
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/movie/:movieId",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
