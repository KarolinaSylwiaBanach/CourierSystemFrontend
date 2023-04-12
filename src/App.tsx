import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {PackagesView} from "./views/PackagesView";
import {Header} from "./components/Header/Header";
import {NotFoundView} from "./views/NotFoundView";
import { CourierView } from './views/CourierView';
import { AddPackage } from './components/AddPackage/AddPackage';
import { SinglePackageView } from './views/SinglePackageView';

export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/package" element={<PackagesView/>}/>
                <Route path="/package" element={<PackagesView/>}/>
                <Route path="/package/:packageId" element={<SinglePackageView/>}/>
                <Route path="/courier" element={<CourierView/>}/>
                <Route path="*" element={<NotFoundView/>}/>
            </Routes>
        </>
    );
}
