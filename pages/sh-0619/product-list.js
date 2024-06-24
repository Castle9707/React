import React from 'react'
import Layout1 from '@/components/layout/default-layout/layout1'
import Head from 'next/head'
import { product } from '@/data/product-book'

export default function ProductList() {
  const addToCart = (pid) => {
    const cartKey = 'shin-cart'

    const item = product.find((p) => p.id === pid)
    if (!item) return // 沒找到項目就結束
    console.log({ pid, item })

    const oriData = localStorage.getItem(cartKey)
    let cartData = [] // 預設值
    try {
      cartData = JSON.parse(oriData)
      if (!Array.isArray(cartData)) {
        cartData = []
      }
    } catch (ex) {}

    const cartItem = cartData.find((p) => p.id === pid) // 購物車裡有沒有這個商品
    if (cartItem) return // 購物車裡已經有這個商品
    const { id, bookname, pages, price } = item
    cartData.push({ id, bookname, pages, price, quantity: 1 })

    localStorage.setItem(cartKey, JSON.stringify(cartData))
  }

  return (
    <Layout1 title="商品列表" pageName="product-list">
      <Head>
        <meta keyword="小新" />
      </Head>
      <h2>商品列表</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>商品名稱</th>
            <th>頁數</th>
            <th>價格</th>
            <th>加到購物車</th>
          </tr>
        </thead>
        <tbody>
          {product.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.bookname}</td>
                <td>{p.pages}</td>
                <td>{p.price}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(p.id)}
                  >
                    敗
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Layout1>
  )
}
