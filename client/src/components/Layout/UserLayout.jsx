import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header/>

        {/* Main */}
        <main className="flex-1">
          <Outlet/>
        </main>
        
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default UserLayout