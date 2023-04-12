import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import { EditPackage } from '../components/EditPackage/EditPackage';
import { GetSinglePackageRes } from 'types';

export const SinglePackageView = () => {
    const {packageId} = useParams();

    return <>
        <EditPackage packageId={packageId + ""} />
    </>;
};
