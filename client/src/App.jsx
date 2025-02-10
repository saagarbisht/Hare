import {Routes,Route} from "react-router";
import UserLayout from './components/Layout/UserLayout';
import AdminLayout from './components/Layout/AdminLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App