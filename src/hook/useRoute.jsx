import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function useRoute(number) {
    const navigate = useNavigate()
    const params = useParams()
    const [search,setSearch] = useSearchParams()

    console.log(number);
  return {
      navigate: navigate,
      searchParams: [search,setSearch],
      params: params
  }
}
