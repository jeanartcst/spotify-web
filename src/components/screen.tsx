import { Footer } from "./footer";
import { MainContainer } from "./main-container";
import { NavBar } from "./nav-bar";
import { SideBar } from "./side-bar";
// import { MainContainer } from "./main-container";

export function Screen() {
  return (
    <div className="h-screen flex flex-col ">
      <NavBar />
      <div className="flex flex-row items-center justify-between min-h-[717px] h-full w-full">
        <SideBar />
        <MainContainer />
        <div className="flex-auto mx-2 bg-blue-600 h-full rounded-md p-2 hidden xl:block">
          {" "}
          <span>teste</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
