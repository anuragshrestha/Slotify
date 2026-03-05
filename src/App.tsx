import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SigninPage from "./pages/auth/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
