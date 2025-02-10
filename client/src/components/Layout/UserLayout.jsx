import Header from "../Common/Header"
import Footer from "../Common/Footer"

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header/>

        {/* Main */}
        <main className="flex-1">

        </main>
        
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default UserLayout