import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return(
    <>
      <header className='h-30'>{Temporal.Now.plainDateISO().toString()}</header>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;