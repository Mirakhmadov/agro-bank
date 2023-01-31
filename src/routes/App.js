import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom"
import Sidebar from "../layouts/Sidebar";
import NotFound from "../pages/NotFound";
import Content from "../layouts/Content";
import "../styles/app.css"
import {log_s} from "../funcs";
import HomePage from "../pages/HomePage";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    useEffect(() => {
        log_s("Log", "component loaded :)")
    }, [])

    return (
        <div className={"main-wrapper"}>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
            <Content open={sidebarOpen}>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>

                    <Route path={"/*"} element={<NotFound/>}/>
                </Routes>
            </Content>
        </div>
    );
}

export default App;
