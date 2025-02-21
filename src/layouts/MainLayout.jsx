import { Outlet } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import Sticky from "../components/StickyFrom";
const MainLayout = () => {
    return (
      <div>
        <Navbar3 />
        <Outlet />
        <Sticky />
      </div>
    );
}

export default MainLayout