import React from 'react'

const iconBookmark = ({fill}) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" fill={(fill)?"rgb(56 189 248)":"none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke={fill ? "rgb(56 189 248)":"white"} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
  </svg>
 )
}

export default iconBookmark
