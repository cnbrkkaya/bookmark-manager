import React from 'react'

export default function Bookmark({ data }) {
  return (
    <div key={data.id}>
      <h3> {data.linkName} </h3>
      <h3> {data.linkUrl} </h3>
      <h3> {data.vote} </h3>
    </div>
  )
}
