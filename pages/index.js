import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/products';
import { Loader } from '../components/Loader/Loader';
import Card from '../components/Card/Card';

const index = () => {
    const { isLoading, products } = useSelector((state) => state).products;
    const [page, setPage] = useState(1);
    const observer = useRef();
    const dispatch = useDispatch();
    const lastPageRef = useCallback(
        (node) => {
            if (page < 4) {
                if (isLoading) return;
                if (observer.current) observer.current.disconnect();
                observer.current = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        setPage((prev) => prev + 1);
                    }
                });
                if (node) observer.current.observe(node);
            }
        },
        [isLoading]
    );

    useEffect(() => {
        dispatch(getProducts({ pageNumber: page }));
    }, [dispatch, page]);

    if (isLoading && products.length === 0)
        return (
            <div className='container mx-auto pt-7 text-center'>
                <Loader />
            </div>
        );

    return (
        <>
            <div className='container mx-auto pt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {products.map((p, i) => {
                    if (products.length === i + 1)
                        return (
                            <div
                                key={p.id}
                                ref={lastPageRef}
                                className='mx-auto'
                            >
                                <Card product={p} />
                            </div>
                        );
                    return (
                        <div key={p.id} className='mx-auto'>
                            <Card product={p} />
                        </div>
                    );
                })}
            </div>
            {isLoading ? (
                <div className='container mx-auto pt-7 text-center'>
                    <Loader />
                </div>
            ) : null}
        </>
    );
};

export default index;
