import { CompanyDetails } from '../CompanyDetails/CompanyDetails';
import { CardFooter } from './CardFooter';
import { CardHeading } from './CardHeader';
import { CardImage } from './CardImage';

const Card = (props) => {
    const { product } = props;
    const { image, title, company, reward, skills, review } = product;
    return (
        <div className='card my-4 w-72 rounded-lg border border-grey-other hover:scale-105 transition-transform'>
            <CardImage image={image} title={title} />
            <div className='card-content my-1 px-4'>
                <CardHeading title={title} skills={skills} />
                <hr />
                <CompanyDetails details={{ company, review }} />
                <hr />
                <CardFooter reward={reward} />
            </div>
            <div className='card-action'></div>
        </div>
    );
};

export default Card;
