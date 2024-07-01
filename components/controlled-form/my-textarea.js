import React from 'react'
import { useState } from 'react'


export default function MyTextarea() {
  const [textareaText, setTextareaText] = useState('')

  return (
    <>
      <div title='textarea'>
      <h2>文字輸入區域(textarea)</h2>
        {/* 在html中原本使用開頭與結尾標記，文字包含在其中
            在react的jsx中被改為以value屬性代表其中文字，加上onChange事件，也只有單個標記
        */}
        <textarea
        value={textareaText}
        onChange={(e) => {
          setTextareaText(e.target.value)
          }} />
      </div>
    </>
  )
}
