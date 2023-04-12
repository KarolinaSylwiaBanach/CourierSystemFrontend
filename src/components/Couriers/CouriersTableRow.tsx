import React from 'react';
import { CourierEntity } from '../../../../backend/types/courier/courier.entity';

interface Props {
    courier: CourierEntity;
}

export const CouriersTableRow = (props: Props) => {
    return (
        <tr>
            <th>{props.courier.lastname}</th>
            <th>{props.courier.name}</th>
        </tr>
    );
};
