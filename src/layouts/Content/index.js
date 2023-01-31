import React from 'react';
import {Wrapper} from "./components";
import Header from "../Header";

const Index = ({open, children}) => {
    return (
        <Wrapper theme={{open: open}}>
            <Header/>
            <div className={"border"}/>
            <div className={"main-content"}>
                {children}
            </div>
        </Wrapper>
    );
};

export default Index;
