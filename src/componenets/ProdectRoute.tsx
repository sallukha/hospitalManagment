 
 import { Navigate } from "react-router-dom";
 const ProdectRoute = ({isAuthanticate, children}: {isAuthanticate: boolean, children: React.ReactNode}) => {
    if (!isAuthanticate) {
        return <Navigate to="/login" />;
    }
    return children;
   
 }
 
 export default ProdectRoute