import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/") return null;

  return (
    <nav className="p-2 xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
      <ol className="list-reset flex text-gray-500">
        <li>
          <Link to="/" className="text-[#007fff] hover:text-blue-600">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <li key={to}>
              <span className="mx-2">/</span>
              {last ? (
                <span className="text-gray-700 capitalize">{value}</span>
              ) : (
                <Link
                  to={to}
                  className="text-[#007fff] hover:text-blue-600 capitalize"
                >
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
