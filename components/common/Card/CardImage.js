import React, { useState } from 'react';
import { SavedLogo } from '../../../assests/SavedLogo';
import { SaveLogo } from '../../../assests/SaveLogo';

export const CardImage = (props) => {
    const { image, title } = props;
    const [save, setSave] = useState(false);
    return (
        <div className='card-image relative'>
            <img
                src={`${image || ''}`}
                alt={`${title || ''} `}
                className='rounded-t-lg h-44 w-72'
            />
            <span
                className='absolute top-1.5 right-1.5 p-1.5 bg-[rgba(0,0,0,0.5)] rounded-md cursor-pointer'
                onClick={() => setSave(!save)}
            >
                {save ? <SavedLogo /> : <SaveLogo />}
            </span>
        </div>
    );
};
