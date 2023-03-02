import React from 'react'

import { useFiles } from '../../hooks/use-files'

const Home = () => {

  const { data, error, loading, fileList } = useFiles()

  return (
    <div>Home</div>
  )
}

export default Home