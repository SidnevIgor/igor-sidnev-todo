import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Wrapper } from "./App.styled";
import { Home, NotFound } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo/:id",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
