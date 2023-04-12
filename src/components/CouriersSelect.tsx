import React, {FormEvent, useState} from 'react';
import { CourierEntity } from '../../../backend/types/courier/courier.entity';
import { SetCourierForPackageReq } from '../../../backend/types/package/package';

interface Props {
    couriersList: CourierEntity[];
    selectedId: string;
    packageId: string;
}

export const CouriersSelect = (props: Props) => {
    const [selected, setSelected] = useState<string>(props.selectedId);

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        await fetch(`http://localhost:3001/package/courier/${props.packageId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                courierId: selected,
            } as SetCourierForPackageReq),
        });
    };

    return (
        <form onSubmit={sendForm}>
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                {
                    props.couriersList.map(courier => (
                        <option key={courier.id} value={courier.id}>
                            {courier.name} {courier.lastname}
                        </option>
                    ))
                }
            </select>
            <button type="submit">Save</button>
        </form>
    );
};
