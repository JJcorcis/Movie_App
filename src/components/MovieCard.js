import React from 'react'

export const MovieCard = ({props}) => {

    const {title, name, overview, poster_path, media_type, vote_average} = props;

  return (
    <>
        <h1>{title}</h1>
        <p>{overview}</p>
    </>
  )
}
