
import React from 'react'
import { useQuery } from 'react-query'
import { meQuery } from '../src/api-calls'

const HomeFeed = () => {
  const { data, isLoading } = useQuery('me', meQuery)

  if(data) {
    console.log(data)
  }

  return (
    <>
        {isLoading ? <>Loading...</> : <>
            {JSON.stringify(data, null, 2)}
        </>}
    </>
  )
}

export default HomeFeed