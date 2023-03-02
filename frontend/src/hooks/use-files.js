import { useState, useEffect } from 'react';

import API from '../api';

export const useFiles = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState([])
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    if (!fileList.length) {
      handleFetchList()
    }
    if (!data.length) {
      handleFetchData()
    }
  }, [])

  const handleFetchData = async (file = null) => {
    const url = file ? `/files/data?fileName=${file}` : '/files/data';
    setError(false);
    setLoading(true)
    try {
      const { data } = await API.get(url);
      setData(data)
      setLoading(false)
    } catch (error) {
      setError(true);
      setLoading(false)
    }
  }

  const handleFetchList = async () => {
    try {
      const { data } = await API.get('/files/list');
      setFileList(data)
    } catch (error) {
      setError(true);
    }
  }

  return {
    data,
    error,
    loading,
    fileList,
  }
}