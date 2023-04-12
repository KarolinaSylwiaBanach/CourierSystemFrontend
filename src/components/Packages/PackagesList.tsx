import React, {useEffect, useState} from 'react';
import { ListCouriersRes } from 'types';
import {Spinner} from "../common/Spinner/Spinner";
import { PackagesTable } from './PackagesTable';

export const PackagesList = () => {
    const [data, setData] = useState <ListCouriersRes | null>(null);

    const refreshPackages = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/package');
        setData(await res.json());
    };

    useEffect(() => {
        refreshPackages();
    }, []);

    if (data === null) {
        return <Spinner/>;
    }
    return <>
        <h1>Packages</h1>
        <PackagesTable packagesList={data.packagesList} couriersList={data.couriersList}/>
    </>;
};