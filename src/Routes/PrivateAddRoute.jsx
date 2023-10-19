import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAddRoute = ({children }) => {
   
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

  
    
    if(loading)
    {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user)
    {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
     
};

PrivateAddRoute.propTypes={
    children: PropTypes.node
}
export default PrivateAddRoute;