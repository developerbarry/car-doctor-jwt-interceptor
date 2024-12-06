import { Outlet } from "react-router-dom";
import Header from "../../pages/HomePage/layouts/Shared/Header/Header";
import Footer from "../../pages/HomePage/layouts/Shared/Footer/Footer";

const Root = () => {
    return (
        <main>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default Root;