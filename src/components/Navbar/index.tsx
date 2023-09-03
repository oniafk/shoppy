import { ShoppingCartContext } from "../../Context/index";
import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function NavBar() {
  const context = useContext(ShoppingCartContext);

  const activeStyle = "underline undeline-offset-4";

  return (
    <nav className="w-full flex justify-between items-center fixed z-10 py-5 px-8 text-sm font-light top-0 bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="./"> Shoppi </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            // onClick={() => context.setSearchByCategory(null)}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Men"
            // onClick={() => context.setSearchByCategory("men's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men's
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women"
            // onClick={() => context.setSearchByCategory("women's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women's
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            // onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">MyEmail@NotYourEmail.com</li>
        <li>
          <NavLink
            to="my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            to="my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>

        <li>
          <NavLink
            to="sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>

        <li>
          <NavLink
            to="car"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className="flex align-middle">
              <ShoppingCartIcon className="h-6 w-6 text-black-500" />
              {context.count}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
