import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Puff } from 'react-loader-spinner'
import PropTypes from 'prop-types';
const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center p-20"><Puff
            height="80"
            width="80"
            radius={1}
            color="#000"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        /></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/logIn'></Navigate>
};

export default PrivateRouter;

PrivateRouter.propTypes = {
    children: PropTypes.node,

}