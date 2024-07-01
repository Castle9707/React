import React from 'react'
import { useState } from 'react'
import InputIME from '@/components/controlled-form/input-ime'

export default function MyInputText() {
  const [inputText, setInputText] = useState('')
  // input-number
  const [inputNumber, setInputNumber] = useState(0)
// 日期輸入框(字串值)
  // 輸入格式是 yyyy-mm-dd
  const [inputDateText, setInputDateText] = useState('')
  // 日期輸入框(時間日期物件)
  const dateToString = ( date = null) => 
    date instanceof Date ? dateToString().split('T')[0] : ''

  const stringToDate = ( str = '' ) => new Date(str)

  const [inputDateObject, setInputDateObject] = useState(
    stringToDate('2024-07-01')
  )
  
   // input password
  const [ inputPassword , setInputPassword] = useState('')
  const [ showPassword , setShowPassword] = useState(false)
  return (
    <>
      <div title="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <h2>文字輸入框(input-text)-修正輸入法組字</h2>
        <InputIME
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
         <h2>數字輸入框(input-number)</h2>
        <input
          type="number"
          value={inputNumber}
          max={10}
          min={0}
          step={1}
          onChange={(e) => {
            // 維持狀態的資料類型一致性(number)
            // setInputNumber(+e.target.value)
            setInputNumber(Number(e.target.value))
          }}
        />
        <h2>日期輸入框(input-date)-(字串值)</h2>
        <input
          type="date"
          value={inputDateText}
          onChange={(e) => {
            setInputDateText(e.target.value)
          }}
        />
        <h2>日期輸入框(input-date)-(物件值)</h2>
        <input
          type="date"
          value={dateToString(inputDateObject)}
          onChange={(e) => {
            setInputDateObject(stringToDate(e.target.value))
          }}
        />
        <h2>密碼輸入框</h2>
        <input
          // 用type切換
          type={showPassword ? 'text' : 'password'}
          value={inputPassword}
          onChange={(e) => {
            setInputPassword(e.target.value)
          }}
        />{' '}
        <input
          type="checkbox"
          // checkbox與radio button是以checked(布林值)來決定呈現情況
          checked={showPassword}
          onChange={(e) => {
            // 第一種寫法，使用事件的checked值
            setShowPassword(e.target.checked)
            // 第二種寫法，布林值邏輯反相(toggle)
            // setShowPassword(!showPassword)
          }}
        />
          顯示密碼
      </div>
    </>
  )
}
