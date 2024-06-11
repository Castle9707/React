import { useState } from 'react'

import Star from '@/components/star'
import { FaStar, FaCandyCane } from 'react-icons/fa'

export default function StarPage() {
  const [productRating1, setProductRating1] = useState(2)
  const [productRating2, setProductRating2] = useState(5)

  return (
    <>
      <h1>星星評分元件測試頁</h1>
      <hr />
      {/* 對照組: 全部使用屬性預設值渲染 */}
      <Star />
      <hr />
      {/* 測試組 */}
      <Star
        maxCount={6}
        currentRating={productRating1}
        onRatingChange={setProductRating1}
        fillColor="#ff6320"
        emptyColor="#ccc"
        icon={<FaStar />}
      />
      <button onClick={() => setProductRating1(1)}>差評啦</button>
      <button onClick={() => setProductRating1(3)}>還可以</button>
      <button onClick={() => setProductRating1(6)}>讚喔</button>
      <Star
        maxCount={10}
        currentRating={productRating2}
        onRatingChange={setProductRating2}
        fillColor="red"
        emptyColor="blue"
        icon={<FaCandyCane />}
      />
    </>
  )
}
