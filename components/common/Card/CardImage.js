import React from 'react';

export const CardImage = (props) => {
    const { image, title } = props;
    return (
        <div className='card-image'>
            <img
                src={`${image || ''}`}
                alt={`${title || ''} `}
                className='rounded-t-lg h-44 w-72'
            />
        </div>
    );
};
