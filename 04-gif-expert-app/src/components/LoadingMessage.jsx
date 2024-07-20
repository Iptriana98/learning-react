import React from 'react'

export const LoadingMessage = ( {isLoading} ) => {
  return (
    isLoading && (<h2>Loading...</h2>)
  )
}
