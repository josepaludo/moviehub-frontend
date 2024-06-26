import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


export default function LayoutPage() {

    return <>
        <NavBar />

        <main className="
            grow overflow-scroll
            p-5 pb-12 xl:px-20
            max-w-screen-2xl 2xl:mx-auto 
            2xl:w-screen
        ">
            <Outlet />
        </main>

        <Footer />
    </>
}