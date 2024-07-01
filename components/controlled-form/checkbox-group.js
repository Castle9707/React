import React from 'react'
import { useState } from 'react'

export default function CheckboxGroup() {
    // 選項按鈕群組 radio button group
    const petOptions = ['狗', '貓', '倉鼠']
  // 核取方塊群組 checkbox group - 字串陣列
  const [pets, setPets] = useState (['狗', '貓'])

  // 核取方塊群組 checkbox group - 物件陣列
  const initState = petOptions.map((v, i) => {
    return { id: i + 1, label: v, checked: false }
  })

  // 宣告物件陣列的狀態
  const [myPets, setMyPets] = useState(initState)

  // 處理核取方塊事件函式
  const handleCheckboxGroup = (e) => {
     // 宣告方便使用的變數名稱，注意需要設定value屬性在checkbox上
    const tv = e.target.value

     // 判斷目前是否有有pets字串陣列中
    if(pets.includes(tv)){
      // 如果有 ===> 移出陣列
      const nextPets = pets.filter((v) => v !== tv)
      setPets(nextPets)
    } else {
       // 否則 ===> 加入陣列
       const nextPets = [...pets, tv]
       setPets(nextPets)
    }
  }
  return (
    <>
      <div title="checkbox-group">
        <h2>核取方塊群組-物件陣列</h2>
        {myPets.map((v, i) => {
          return (
            <label key={v.id}>
              <input
                type="checkbox"
                checked={v.checked}
                onChange={() => {
                  handleToggleChecked(v.id)
                }}
              />
              {v.label}
            </label>
          )
        })}
        <h2>核取方塊群組-字串陣列</h2>
        {petOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                // 需要設定value屬性，事件觸發會使用
                value={v}
                checked={pets.includes(v)}
                onChange={handleCheckboxGroup}
              />
              {v}
            </label>
          )
        })}
      </div>
    </>
  )
}
