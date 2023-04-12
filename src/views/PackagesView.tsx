import React from 'react';
import {Link} from "react-router-dom";
import { AddPackage } from '../components/AddPackage/AddPackage';
import { PackagesList } from '../components/Packages/PackagesList';


export const PackagesView = () => (
    <>
        <PackagesList/>
        <AddPackage/>
    </>
);
