import { Route, Routes as RouterRoutes } from "react-router-dom";
import { SurveyList, NotFound } from "./pages";
import { Header, Footer } from "./components/Layout/";

function Routes() {
  return (
    <>
      <Header />
      <RouterRoutes>
        <Route path="/" element={<SurveyList />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <Footer />
    </>
  );
}

export default Routes;
