import React, {useEffect, useState} from 'react';
import { ListCouriers } from '../../../../backend/types/courier/courier';
import {Spinner} from "../common/Spinner/Spinner";
import { CouriersTable } from './CouriersTable';

export const CouriersList = () => {
    const [data, setData] = useState<ListCouriers | null>(null);

    const refreshGifts = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/courier');
        setData(await res.json());
    };

    useEffect(() => {
        refreshGifts();
    }, []);

    if (data === null) {
        return <Spinner/>;
    }

    return <>
        <h1>Couriers</h1>
        <CouriersTable couriersList={data.couriersList}/>
    </>;
};
