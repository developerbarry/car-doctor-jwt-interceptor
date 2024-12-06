import { Outlet } from "react-router-dom";
import Header from "../../../pages/HomePage/layouts/Shared/Header/Header";
import PropTypes from "prop-types";
const LogInRoot = ({isTrue}) => {

    return (
        <main>
            <Header isTrue={isTrue} />
            <div>
                <Outlet />
            </div>
        </main>
    );
};

LogInRoot.propTypes ={
    isTrue: PropTypes.bool
}

export default LogInRoot;