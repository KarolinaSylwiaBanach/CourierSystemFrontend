import React from 'react';
import {CourierEntity} from '../../../../backend/types/courier/courier.entity';
import {PackageEntity} from '../../../../backend/types/package/package.entity';
import {CouriersSelect} from '../CouriersSelect';
import {NavLink} from "react-router-dom";

interface Props {
    couriersList: CourierEntity[];
    package: PackageEntity;
}

export const PackageTableRow = (props: Props) => {
    const link = `/package/${props.package.id}`
    return (
        <tr>
            <td>{props.package.size}</td>
            <td>{props.package.nameSender}</td>
            <td>{props.package.addressSender}</td>
            <td>{props.package.nameRecipient}</td>
            <td>{props.package.addressRecipient}</td>
            <td>{props.package.status}</td>
            <td>
            <CouriersSelect
                couriersList={props.couriersList}
                selectedId = {props.package.courierId as string}
                packageId = {props.package.id as string}
            /></td>
            <td>
                <NavLink to={link}>✏️</NavLink>
            </td>
        </tr>
    );
};
