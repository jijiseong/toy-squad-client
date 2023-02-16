import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AccountModal from "./components/account/account";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import ExposPage from "./pages/expos";
import Home from "./pages/home";
import MyPage from "./pages/mypage";
import ProjectsPage from "./pages/projects";
import UsersPage from "./pages/users";
import ListPage from "./pages/list";
import { GlobalStyle } from "./styles/global.style";

function App() {
  const onAccount = useSelector((state: { onAccount: boolean }) => {
    return state.onAccount;
  });
  return (
    <>
      {onAccount && <AccountModal />}
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/main" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/expos" element={<ExposPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
