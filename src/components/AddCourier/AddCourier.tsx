import React, {FormEvent, useState} from 'react';
import {Spinner} from "../common/Spinner/Spinner";
import { CreateCourierReq } from '../../../../backend/types/courier/courier';
import { CourierEntity } from '../../../../backend/types/courier/courier.entity';

export const AddCourier = () => {
    const [form, setForm] = useState<CreateCourierReq>({
        name: '',
        lastname: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3001/courier`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: CourierEntity = await res.json();

            setResultInfo(`${data.name} has been created on Couriers's list.`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner />;
    }

    if (resultInfo !== null) {
        return <div>
            <p><strong>{resultInfo}</strong></p>
            <button onClick={() => setResultInfo(null)}>Add another one</button>
        </div>;
    }

    return <form onSubmit={sendForm}>
        <h2>Add courier</h2>
        <p>
            <label>
                Name: <br/>
                <input
                    type="text"
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Last name: <br/>
                <input
                    type="text"
                    value={form.lastname}
                    onChange={e => updateForm('lastname', e.target.value)}
                />
            </label>
        </p>
        <button type="submit">Add</button>
    </form>;
};
