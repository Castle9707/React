import React, { useState, useRef } from 'react'
import LifeA from '@/components/common/life-a'

export default function LifeCycle1() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow((old) => !old)}>顯示或隱藏</button>
      <div>{show && <LifeA />}</div>
    </>
  )
}
