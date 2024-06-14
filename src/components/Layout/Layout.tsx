import { Outlet } from "react-router-dom";

const Layout = (): React.ReactElement => {
  return (
    <div>
      <h1>My Marvel</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
