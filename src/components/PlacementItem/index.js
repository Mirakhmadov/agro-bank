import React from 'react';
import {PlacementItem} from "./components";

const Index = ({placement}) => {
    const {} = placement

    return (
        <PlacementItem>
            {JSON.stringify(placement)}
        </PlacementItem>
    );
};

export default Index;
