import React, {useState} from 'react';
import Sidebar from "../layouts/Sidebar";
import Content from "../layouts/Content";
import {useParams} from "react-router-dom";
import Contract from "./Contract";
import NotFound from "./NotFound";
import HomePage from "./HomePage";

const Cabinet = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const {page, sub} = useParams()

    const choose = () => {
        switch (page) {
            case undefined:
                return <HomePage/>

            case "contract":
                return <Contract/>

            default :
                return <NotFound/>
        }
    }


    return (
        <>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
            <Content open={sidebarOpen}>
                {choose()}
            </Content>
        </>
    );
};

export default Cabinet;
