import React from 'react';
import {Wrapper} from "./components";
import Header from "../Header";
import {Link} from "react-router-dom";

const Index = ({open, children}) => {

    return (
        <Wrapper theme={{open: open}}>
            <Header/>
            <Link to={"/"}> HomePage </Link> |
            <Link to={"/contract"}> Contract </Link>
            <div className={"border"}/>
            <div className={"main-content"}>
                {children}
            </div>
        </Wrapper>
    );
};

export default Index;
