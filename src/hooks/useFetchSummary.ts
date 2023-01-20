import React, { useEffect, useState } from 'react'
import { api } from '../services/axios'

type Summary = {
  id: string
  date: string
  amoutn: number
  completed: number
}[]

interface FetchSummaryProps {
  data: Summary | null
  error: null
  loading: boolean
}

const useFetchSummary = (url: string) => {
  const [state, setState] = useState<FetchSummaryProps>({
    data: null,
    error: null,
    loading: true
  })

  const fetchData = async () => {
    await api
      .get(url)
      .then(res => {
        setState({ data: res.data, error: null, loading: false })
      })
      .catch(err => {
        setState({ data: null, error: err, loading: false })
      })
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return state
}

export default useFetchSummary
