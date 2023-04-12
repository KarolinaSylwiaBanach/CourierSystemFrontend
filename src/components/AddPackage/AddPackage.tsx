import React, {FormEvent, useEffect, useState} from 'react';
import { CreatePackageReq, ListCouriersRes } from '../../../../backend/types/package/package';
import { PackageEntity } from '../../../../backend/types/package/package.entity';
import {Spinner} from "../common/Spinner/Spinner";
import { CouriersSelect } from '../CouriersSelect';

export const AddPackage = () => {
    const [form, setForm] = useState<CreatePackageReq>({
        size: '',
        nameSender: '',
        nameRecipient: '',
        addressSender: '',
        addressRecipient: '',
        status: 'new',
        courierId: '',
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
            const res = await fetch(`http://localhost:3001/package`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: PackageEntity = await res.json();

            //setResultInfo(`${data.name} added with ID ${data.id}.`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner/>;
    }

    if (resultInfo !== null) {
        return <div>
            <p><strong>{resultInfo}</strong></p>
            <button onClick={() => setResultInfo(null)}>Add another one</button>
        </div>;
    }
    

    return <form onSubmit={sendForm}>
        <h2>Send package</h2>
        <p>
            <label>
                Size: <br/>
                <select value={form.size}
                        onChange={e => updateForm('size', e.target.value)}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="big">Big</option>
                </select>
            </label>
        </p>
        <p>
            <label>
                Sender's name: <br/>
                <input
                    type="text"
                    value={form.nameSender}
                    onChange={e => updateForm('nameSender', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Sender's address: <br/>
                <input
                    type="text"
                    value={form.addressSender}
                    onChange={e => updateForm('addressSender', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Recipient's name: <br/>
                <input
                    type="text"
                    value={form.nameRecipient}
                    onChange={e => updateForm('nameRecipient', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Recipient's address: <br/>
                <input
                    type="text"
                    value={form.addressRecipient}
                    onChange={e => updateForm('addressRecipient', e.target.value)}
                />
            </label>
        </p>
        <button type="submit">Add</button>
    </form>;
};
