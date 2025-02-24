import HomePage from "./pages/HomePage";
import NotFound from "./pages/notFound";
import MainLayout from "./layouts/MainLayout";
import Try from "./components/try"
import Land from "./pages/Land";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Land" element={<Land/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
