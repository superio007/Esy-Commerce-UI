import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const isContactPage = location.pathname === "/contact";
  if (location.pathname === "/") return null;

  return (
    <section className={`${isContactPage ? 'bg-transparent' : 'bg-[#007fff]'}`}>
      <nav className="relative p-2 xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <ol className="list-reset flex flex-wrap text-gray-500">
          <li>
            <Link to="/" className="text-[#fff] hover:text-blue-600">
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
                  <span className="text-white capitalize">{(value).length > 15 ? (value).slice(0, 15) + "..." : value}</span>
                ) : (
                  <Link
                    to={to}
                    className="text-[#fff] hover:text-blue-600 capitalize"
                  >
                    {value}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </section>
  );
};

export default Breadcrumbs;
