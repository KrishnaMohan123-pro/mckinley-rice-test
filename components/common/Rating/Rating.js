import React from 'react';
import { StarLogo } from '../../../assests/StarLogo';

export const Rating = (props) => {
    const { rating, variant, count } = props;
    return (
        <div className='inline-flex items-center'>
            <StarLogo variant={variant} />
            <span>
                {rating} ({count})
            </span>
        </div>
    );
};
