import { Routes, Route } from "react-router-dom";

import Navbar from "./components/core/Header/Navbar";
import Footer from "./components/core/Footer/Footer";
import RegisterCard from "./components/user/Register";
import LoginCard from "./components/user/Login";
import Home from "./components/core/Home";
import NotFound from "./components/error/NotFound";
import ThemesList from "./components/theme/themes-lists/ThemesList";
import Details from "./components/theme/current-theme/DetailsTheme";
import CreateTheme from "./components/theme/create-theme/CreateTheme";
import EditTheme from "./components/theme/edit-theme/EditTheme";
import SearchTheme from "./components/theme/search-theme/SearchTheme";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<RegisterCard></RegisterCard>}></Route>
        <Route path="/login" element={<LoginCard></LoginCard>}></Route>
        <Route path="/themes" element={<ThemesList></ThemesList>}></Route>
        <Route path="/:themesId/details" element={<Details></Details>}></Route>
        <Route path="/:themesId/edit" element={<EditTheme></EditTheme>}></Route>
        <Route path="/search" element={<SearchTheme></SearchTheme>}></Route>
        <Route path="/create" element={<CreateTheme></CreateTheme>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
