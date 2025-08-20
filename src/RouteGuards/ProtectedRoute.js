import { Navigate,  Outlet} from "react-router-dom"


const ProtectedRoute = ({user}) =>{
    console.log(user)
    // if(!user?.email?.length){
    if(false){

        return (
            <Navigate to='/'></Navigate>
        )
    }
    return <Outlet />;
}


export default ProtectedRoute;