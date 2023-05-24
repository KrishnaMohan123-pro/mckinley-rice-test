import React from 'react';

export const CardHeading = (props) => {
    const { title, skills } = props;
    return (
        <>
            <h3 className='card-heading font-bold text-xl'>
                {title.length > 12 ? title.slice(0, 13) + '...' : title}
            </h3>
            <div className='pb-1'>
                {skills.map((s, i) => {
                    if (i < 4)
                        return (
                            <span key={i} className='text-xs'>
                                {s} {i < 3 ? ', ' : ''}
                            </span>
                        );
                    return '  ...';
                })}
            </div>
        </>
    );
};
