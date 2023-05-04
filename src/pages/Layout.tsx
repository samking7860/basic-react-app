import { Outlet, Link } from "react-router-dom";
export {};

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <h1>Hello</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;