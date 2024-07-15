import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import MoviePage from "./MoviePage";

const Body = () => {
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:id",
      element: <MoviePage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
