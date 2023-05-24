import { StarLogo } from '../../../assests/StarLogo';
import { Rating } from '../Rating/Rating';

export const CompanyDetails = (props) => {
    const { company, review, reward } = props.details;
    return (
        <div className='companyDetails py-2'>
            <div>
                <span className='company-image'>
                    <img
                        src={company.logo}
                        alt={company.name}
                        className=' inline d-6 w-6 mr-2'
                    />
                </span>
                <h4 className='company-name inline font-bold text-base'>
                    {company.name}
                </h4>
                <span className='ml-2'>
                    <Rating
                        rating={company.grade}
                        count={company.grade_count}
                    />
                </span>
            </div>
            <div className='text-xs text-grey-secondary pb-1'>
                {review.length > 20 ? review.slice(0, 20) + ' ...' : review}
            </div>
            <hr />
            <div className='company-ratings grid grid-cols-3 gap-x-4 text-center mt-2'>
                {company?.ratings?.map((r, i) => {
                    return (
                        <div
                            key={i}
                            className='text-sm bg-grey-other rounded-md py-2'
                        >
                            {r.type}
                            <br />
                            <span className='inline-flex items-center justify-items-center mx-auto '>
                                <StarLogo />
                                <span className='font-semibold'>
                                    {r.rating}
                                </span>
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
