import { Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Header/Navbar";
import Footer from "./components/core/Footer/Footer";
import RegisterCard from "./components/user/Register";
import Home from "./components/core/Home";
import NotFound from "./components/error/NotFound";
import ThemesList from "./components/theme/themes-lists/ThemesList";
import Details from "./components/theme/current-theme/DetailsTheme";
import CreateTheme from "./components/theme/create-theme/CreateTheme";
import EditTheme from "./components/theme/edit-theme/EditTheme";
import SearchTheme from "./components/theme/search-theme/SearchTheme";
import LoginFinal from "./components/user/LoginFinal";
import useToken from "./hooks/useToken";
import NavbarUser from "./components/core/Header/NavbarUser";

function App() {
  const { token, setToken, removeToken } = useToken();

  if (!token) {
    return (
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/register"
            element={<RegisterCard setToken={setToken}></RegisterCard>}
          ></Route>

          <Route
            path="/login"
            element={<LoginFinal setToken={setToken}></LoginFinal>}
          ></Route>

          <Route path="/themes" element={<ThemesList></ThemesList>}></Route>
          <Route
            path="/themes/:themesId/details"
            element={<Details token={token}></Details>}
          ></Route>
          <Route
            path="/themes/:themesId/edit"
            element={<EditTheme></EditTheme>}
          ></Route>
          <Route path="/search" element={<SearchTheme></SearchTheme>}></Route>
          <Route
            path="/create"
            element={<CreateTheme token={token}></CreateTheme>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </>
    );
  }
  return (
    <>
      <NavbarUser removeToken={removeToken}></NavbarUser>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/register"
          element={<RegisterCard setToken={setToken}></RegisterCard>}
        ></Route>
        <Route path="/themes" element={<ThemesList></ThemesList>}></Route>
        <Route
          path="/login"
          element={<LoginFinal setToken={setToken}></LoginFinal>}
        ></Route>
        <Route
          path="/themes/:themesId/details"
          element={<Details token={token}></Details>}
        ></Route>
        <Route
          path="/themes/:themesId/edit"
          element={<EditTheme token={token}></EditTheme>}
        ></Route>
        <Route path="/search" element={<SearchTheme></SearchTheme>}></Route>
        <Route
          path="/create"
          element={
            <CreateTheme setToken={setToken} token={token}></CreateTheme>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
