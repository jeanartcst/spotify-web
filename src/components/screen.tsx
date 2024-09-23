import { Footer } from "./footer";
import { NavBar } from "./nav-bar";
import { SideBar } from "./side-bar";
// import { MainContainer } from "./main-container";

export function Screen() {
  return (
    <div className="h-screen m-0 bg-black flex flex-row ">
      <NavBar />
      <SideBar />
      {/* <MainContainer /> */}
      <Footer />
    </div>
  );
}
