import React from 'react';
import {NavLink} from "react-router-dom";

export const Header = () => {
    const colorOfLink = ({isActive}: {
        isActive: boolean;
    }) => ({color: isActive ? 'green' : 'red'});

    return (
        <>
            <h1>Courier App</h1>
            Menu: <NavLink style={colorOfLink} to="/package">Package</NavLink> | <NavLink style={colorOfLink}
                                                                                     to="/courier">Couriers</NavLink>
            <hr/>
        </>
    );
};
