import React from 'react';
import { CourierEntity } from '../../../../backend/types/courier/courier.entity';
import { PackageEntity } from '../../../../backend/types/package/package.entity';
import { PackageTableRow } from './PackageTableRow';

interface Props {
    couriersList: CourierEntity[];
    packagesList: PackageEntity[];
}

export const PackagesTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Size</th>
            <th>Sender's name</th>
            <th>Sender's address</th>
            <th>Recipient's name</th>
            <th>Recipient's address</th>
            <th>Status</th>
            <th>Courier</th>
        </tr>
        </thead>
        <tbody>
        {
            props.packagesList.map(singlePackage => (
                <PackageTableRow
                    key={singlePackage.id}
                    package={singlePackage}
                    couriersList={props.couriersList}
                />
            ))
        }
        </tbody>
    </table>
);
