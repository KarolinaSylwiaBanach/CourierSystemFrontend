import React, {FormEvent, useEffect, useState} from 'react';
import {
    PackageEntity,
    CreatePackageReq,
    GetSinglePackageRes,
    ListCouriersRes,
    ListCouriers,
    CourierEntity
} from 'types';
import {Spinner} from "../common/Spinner/Spinner";
import {CouriersSelect} from '../CouriersSelect';

interface Props {
    packageId: string;
}

export const EditPackage = (props: Props) => {
    const [form, setForm] = useState<CreatePackageReq>({
        size: '',
        nameSender: '',
        nameRecipient: '',
        addressSender: '',
        addressRecipient: '',
        status: 'new',
        courierId: '',
    });
    const [data, setData] = useState<CourierEntity[]>([]);

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3001/package/${props.packageId}`);
            const data = await res.json();
            setForm(data.packageSingle);

        })();
        (async () => {

            setData([]);
            const res = await fetch('http://localhost:3001/courier');
            setData(await res.json());

        })();
    }, []);

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };
    if (data === []) {
        return <Spinner/>;
    }

//<form onSubmit={sendForm}>

    //
    return <form>
        <h2>Edit package</h2>
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
        <p>
            <label>
                Status:
                <br/>
                <select value={form.status}
                        onChange={e => (e.target.value)}>
                    <option value="new">new</option>
                    <option value="delivered">delivered</option>
                    <option value="collected">Collected by the courier</option>
                    <option value="transport">In transport</option>
                    <option value="delivery">In delivery</option>
                </select>
            </label>
        </p>
        <button type="submit">Save</button>
    </form>;
};