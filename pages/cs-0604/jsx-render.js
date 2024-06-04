import React from 'react'

export default function JsxRender() {
  return (
    <>
      <h1>Jsx各種值Render（渲染）範例</h1>
      <hr />
      <h2>Number</h2>
      {123}
      {100 - 1}
      {NaN}
      <hr />
      <h2>String</h2>
      hello
      {'    '}
      {'abc'}
      {`price=${100 - 1}`}
      <hr />
      <h2>Boolean</h2>
      {/* 不會渲染呈現 */}
      {true}
      {false}
      <hr />
      <h2>Null/Undefined</h2>
      {/* 不會渲染呈現 */}
      {null}
      {undefined}
      <hr />
      <h2>Array</h2>
      {/* 類似array.join('') */}
      {[1, 2, 3]}
      {['hello', 'a', 'b', 'c']}
      {[<li key="111">1</li>, <li key="222">2</li>]}
      <hr />
      <h2>Object</h2>
      {/* 不能直接渲染，會造成中斷錯誤，不是React Child */}
      {/* 參考: https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {{ a: 1, b: 2 }} */}
      <hr />
      <h2>Function</h2>
      {/* 不會渲染，會有主控台警告，不是React Child */}
      {/* 參考: https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {() => {}} */}
      <hr />
    </>
  )
}
