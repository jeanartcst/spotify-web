import { Footer } from "./footer";
import { MainContainer } from "./main-container";
import { NavBar } from "./nav-bar";
import { SideBar } from "./side-bar";
// import { MainContainer } from "./main-container";

export function Screen() {
  return (
    <div className="h-screen flex flex-col ">
      <NavBar />
      <div className="flex flex-row items-center justify-between h-[717px]">
        <SideBar />
        <MainContainer />
        <div className="flex-auto mx-4 bg-blue-600 h-full">
          {" "}
          <span>teste</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
