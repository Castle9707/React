import React from 'react'

export default function Child({
  title = '沒給我',
  price = 0,
  isConnected = false,
  aa = [],
  oa = [],
  sum = () => {},
}) {
  return (
    <>
      <h3>Child</h3>
      <p>title = {title}</p>
      <p>price = {price}</p>
      <p>isConnected = {isConnected ? 'true' : 'false'}</p>
      <p>aa = {JSON.stringify(aa)}</p>
      <p>oa = {JSON.stringify(oa)}</p>
      <p>sum(1,2) = {sum(1, 2)}</p>
    </>
  )
}
