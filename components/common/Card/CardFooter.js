import { WonSymbol } from '../../../assests/WonSymbol';

export const CardFooter = (props) => {
    const { reward } = props;
    return (
        <>
            <div className='pt-2 flex items-center font-bold text-sm'>
                <WonSymbol /> 취업 축하금: {reward}원
            </div>
        </>
    );
};
