import React from 'react';
import { AddCourier } from '../components/AddCourier/AddCourier';
import { CouriersList } from '../components/Couriers/CouriersList';

export const CourierView = () => (
    <>
        <CouriersList/>
        <AddCourier/>
    </>
);
