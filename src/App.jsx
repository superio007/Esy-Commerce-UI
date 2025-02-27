import HomePage from "./pages/HomePage";
import NotFound from "./pages/notFound";
import MainLayout from "./layouts/MainLayout";
import Try from "./components/try"
import LandPage from "./pages/LandPage";
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
        <Route path="/Land" element={<LandPage />} />
        <Route path="/try" element={<Try />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
