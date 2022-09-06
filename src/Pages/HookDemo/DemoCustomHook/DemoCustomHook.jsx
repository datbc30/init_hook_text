import React from 'react'
import useRoute from '../../../hook/useRoute'

export default function DemoCustomHook() {
    const {navigate,searchParams,params} = useRoute(123)
    const [search,setSearch] = searchParams
    console.log(navigate,searchParams,params);
  return (
    <div>DemoCustomHook</div>
  )
}
