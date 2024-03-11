import { Suspense, lazy } from "react";
const MainPages = lazy(() => import("./pages/mainPages"))
const FooterComp = lazy(() => import("./components/footerComp"))
const TopNavBar = lazy(() => import("./components/navComp"))
import { ItemProvider } from "../src/_context/ItemProvider";
import { Loading } from "./_helper";


function App() {
  return (
    <>
      <ItemProvider>
        {/* <Loading/> */}
        <Suspense fallback={<Loading />}>
          <TopNavBar />
          <MainPages />
          <FooterComp />
        </Suspense>
      </ItemProvider>
    </>
  );
}

export default App;


// function Loading() {
//   return (
//     // <h1>Loading.........</h1>
//     <Loader
//       type="spinner-default"
//       bgColor="red"
//       color=" orange"
//       title={"Loading"}
//       size={100}
//     />
//   );
// }



