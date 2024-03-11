import React, { useContext } from 'react'
import { Suspense, lazy } from "react";
const CardComp = lazy(() => import("../components/cardComp"))
import { useEffect } from 'react'
import axios from 'axios';
import { ItemContext } from '../../src/_context/ItemProvider';

export default function MainPages() {
    const { items, setItems } = useContext(ItemContext);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios(({ method: 'get', url: 'https://fakestoreapi.com/products' }))
                console.log("response", response?.data)
                setItems(response?.data)

            } catch (error) {
                console.log("error", error)
            }

        }

        fetchDetail()


    }, [])

    useEffect(() => {
        console.log("items=========>", items)

    },[items])


    return (
        <div className='mainContainer'>
                {items?.map((item, index) => {
                    return (

                        <div key={index}>
                             <Suspense fallback={<Loading />}>
                               <CardComp img={item?.image} title={item?.title} price={item?.price} description={item?.description} id={item?.id} />
                            </Suspense>
                        </div>

                    )
                })}
        </div>

    )

}

const Loading = () => {
    return (
        <h1>Loading.......</h1>
    )
}

