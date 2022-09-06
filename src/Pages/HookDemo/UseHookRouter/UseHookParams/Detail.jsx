import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Detail() {
    const [productDetail,setProductDetail] = useState({})
    const params = useParams()

    console.log('product',productDetail);
    const renderProductApi = async () => {
        let {id} = params
        try{
            let result = await axios({
                url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
                method:'GET'
            })
            setProductDetail(result.data.content)
        }
        catch (err){
            console.log(err);
        }
    }

    useEffect(() => {
        renderProductApi()
    },[])
  return (
    <div className='container'>
        <h3>Param : product - {params.id}</h3>
        <div className='row'>
            <div className='col-4'>
                <img src={productDetail.image} alt="..." />
            </div>
            <div className='col-8'>
                <p>{productDetail.name}</p>
            </div>
        </div>
        <h3>san pham lien quan</h3>
        <div className='row m-2'>
            {productDetail.relatedProducts?.map((item,index) => {
                return <div className='col-3 m-2' key={index}>
                <div className='card'>
                    <img src={item.image} alt="..." className='w-100' />
                    <div className='card-body bg-secondary'>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <NavLink className='btn btn-success m-2' to={`/detail/${item.id}`}>Move here</NavLink>
                        
                    </div>
                </div>
            </div>
            })}
        </div>
    </div>
  )
}
