import * as react from "react";
import TopMenu from "../../../components/layout/TopMenu";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <TopMenu />
      <Outlet />
    </>
  );
}

export default Index;
