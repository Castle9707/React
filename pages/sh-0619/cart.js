import React, { useEffect, useState } from 'react'
import Layout1 from '@/components/layout/default-layout/layout1'

export default function Cart() {
  const cartKey = 'shin-cart'
  const [cart, setCart] = useState([])

  const getCartFromStorage = () => {
    const oriData = localStorage.getItem(cartKey)
    let cartData = [] // 預設值
    try {
      cartData = JSON.parse(oriData)
      if (!Array.isArray(cartData)) {
        cartData = []
      }
    } catch (ex) {}
    return cartData
  }

  // 移除項目
  const cartRemoveItem = (pid) => {
    let cartData = getCartFromStorage()
    const resultCart = cartData.filter((p) => p.id !== pid)
    localStorage.setItem(cartKey, JSON.stringify(resultCart))
    setCart(resultCart)
  }

  // 變更數量
  const cartModifyQty = (pid, qty) => {
    let cartData = getCartFromStorage()
    const resultCart = cartData.map((p) => {
      if (p.id === pid) {
        return { ...p, quantity: qty }
      } else {
        return { ...p }
      }
    })
    localStorage.setItem(cartKey, JSON.stringify(resultCart))
    setCart(resultCart)
  }

  useEffect(() => {
    setCart(getCartFromStorage())
  }, [])

  return (
    <Layout1 title="購物車">
      <h2>購物車</h2>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>移除項目</th>
            <th>商品編號</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th>數量</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((p) => {
            return (
              <tr key={p.id}>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => cartRemoveItem(p.id)}
                  >
                    移除
                  </button>
                </td>
                <td>{p.id}</td>
                <td>{p.bookname}</td>
                <td>{p.price}</td>
                <td>
                  <select
                    className="form-select"
                    value={p.quantity}
                    onChange={(e) => cartModifyQty(p.id, e.currentTarget.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
                <td>{p.quantity * p.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Layout1>
  )
}
