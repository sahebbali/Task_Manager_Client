import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import CreatePage from './pages/CreatePage';
import ProgressPage from "./pages/ProgressPage";
import CanceledPage from "./pages/CanceledPage";
import NewPage from './pages/NewPage';
import ForgetpassPage from './pages/ForgetpassPage';
import CompletedPage from './pages/CompletedPage';
import Page404 from './pages/Page404';

import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<DashboardPage  />}  />
          <Route exact path="/login" element={<LoginPage />} /> 
          <Route exact path="/Registration" element={<RegistrationPage />} /> 
          <Route exact path="/Create" element={<CreatePage />} /> 
          <Route exact path="/All" element={<NewPage />} />
          <Route exact path="/Progress"  element={<ProgressPage />}/>
          <Route exact path="/Completed"  element={<CompletedPage />}/>
          <Route exact path="/Canceled" element={<CanceledPage />}/>
         <Route exact path="/Profile" element={<ProfilePage />}/>
        <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </Fragment>
  )
}

export default App
