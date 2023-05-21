import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import { useEffect } from "react";

const Card = (props) => {
    const initialState = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(initialState.products);
    useEffect(() => {
        dispatch(fetchProducts(1));
    }, [dispatch]);
    return (
        <div>
            <div className="card-image">
                <Image
                    src={`${props.img || ""}`}
                    alt={`${props.title || ""} `}
                />
            </div>
            <div className="card-content">
                <h3 className="card-heading">heading</h3>
            </div>
            <div className="card-action"></div>
        </div>
    );
};

export default Card;
