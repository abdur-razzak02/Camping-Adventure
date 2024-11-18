import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto"><Navbar></Navbar></nav>
            <main className="min-h-[calc(100vh-308px)]">
            <h1>Home layout</h1>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;