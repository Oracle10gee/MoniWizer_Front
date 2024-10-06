import { Auth_route_group } from "routes/Auth/Auth";
import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import { Pages_route_group } from "routes/routes";
import { Layout } from "components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  // const handleGetPathName = () => {
  //   // const pathName =  window.path
  // };
  return (
    <div className="font-sarabun text-[#667185] font-normal text-base leading-[23.2px]">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        {Auth_route_group.map((route: any, idx: any) => {
          const { path } = route;
          return <Route key={idx} path={path} element={<route.element />} />;
        })}
        {Pages_route_group.map((route, idx) => {
          const { path, title } = route;
          return (
            <Route
              key={idx}
              path={path}
              element={
                <Layout navTitle={title} navInitials={"HB"}>
                  <route.element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
