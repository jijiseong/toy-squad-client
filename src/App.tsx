import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
       <GlobalStyle />
       <div className="App">
        <Routes>
          <Route path="/main" element={<div>메인 페이지</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
