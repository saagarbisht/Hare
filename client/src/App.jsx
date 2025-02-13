import {Routes,Route, Navigate} from "react-router";
import UserLayout from './components/Layout/UserLayout';
import AdminLayout from './components/Layout/AdminLayout';
import HomePage from "./pages/HomePage";
import AuthLayout from "./components/Layout/AuthLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="auth" element={<AuthLayout/>}>
            <Route index element={<Navigate to={"login"} replace/> }/>
            <Route path="login" index element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
          </Route>
          <Route path="profile" element={<Profile/>}/>
          <Route path="collections/:collection" element={<CollectionPage/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App