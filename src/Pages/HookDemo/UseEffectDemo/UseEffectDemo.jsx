import React, { useEffect, useState } from 'react';
import  axios  from 'axios'

const timeout = {};

export default function UseEffectDemo() {

    const [arrProduct,setArrProduct] = useState([
        {name:'arrproduct1',price:'1000',img:'https://i.pravatar.cc?u=1'}
    ])

    const [count,setCount] = useState(60)

    const renderProduct = () => {
        return arrProduct.map((prod,index) => {
            return <div className='col-4' key={index}>
                <img src={prod.image} alt="..." width={200} />
                <div className='card-body'>
                    <p>{prod.price}</p>
                    <p>{prod.name}</p>
                    <button className='btn btn-danger'>add to caatr</button>
                </div>
            </div>
        })
    }

    const getApi = async () => {
        try{
            const result = await axios ({
                url:'https://shop.cyberlearn.vn/api/Product',
                method:'GET'
            })
            // console.log(result.data.content);
            setArrProduct(result.data.content)
        }
        catch (err){
            console.log(err);
        }
    }

    

    useEffect(() => {
        getApi();

        // setInterval (() => {
        //     setCount((count) => {
        //         return count -1
        //     })
        // },[1000])
        // console.log(count);

        // return () => {
        //     clearTimeout(timeout)
        // }
    },[])

  return (
    <div className='container'>
        <h3>count: {count}</h3>
        <hr />
        <h3>shoes app</h3>
        <div className='row'>
            {renderProduct()}
        </div>
    </div>
  )
}
