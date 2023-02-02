import {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom"
import NotFound from "../pages/NotFound";
import "../styles/app.css"
import Cabinet from "../pages/Cabinet";
import ContractCreate from "../pages/Contract/Create";
import ContractCreate2 from "../pages/Contract/Create2";
import {useDispatch, useSelector} from "react-redux";
import {getToken} from "../redux/actions/ActionCreaters";

function App() {
    const dispatch = useDispatch();
    const {pathname} = useLocation()
    const {user, isAuthenticated, isLoading, error} = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated === false) {
            dispatch(getToken())
        }
    }, [dispatch, isAuthenticated, pathname])

    return (
        <div className={"main-wrapper"}>
            <Routes>
                <Route path={"/contract/create/:id"} element={<ContractCreate/>}/>
                <Route path={"/contract/create-two/:id"} element={<ContractCreate2/>}/>

                <Route path={"/:page/:sub"} element={<Cabinet/>}/>
                <Route path={"/:page"} element={<Cabinet/>}/>
                <Route path={"/"} element={<Cabinet/>}/>


                <Route path={"/*"} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
