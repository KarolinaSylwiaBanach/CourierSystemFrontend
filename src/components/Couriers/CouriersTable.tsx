import React from 'react';
import { CourierEntity } from '../../../../backend/types/courier/courier.entity';
import { CouriersTableRow } from './CouriersTableRow';

interface Props {
    couriersList: CourierEntity[];
}

export const CouriersTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Last name</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {
            props.couriersList.map(courier => (
                <CouriersTableRow
                    key={courier.id}
                    courier={courier}
                />
            ))
        }
        </tbody>
    </table>
);
