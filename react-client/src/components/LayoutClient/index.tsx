

import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"
const LayoutClient = () => {
  return (
    <>
     <Header />
        <main className="container mx-auto my-10">
            <Outlet />
         
        </main>
    <Footer />
    </>
  )
}

export default LayoutClient