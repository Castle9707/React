import React from 'react'
import Layout1 from '@/components/layout/default-layout/layout1'
import Head from 'next/head'
import { product } from '@/data/product-book'
import { useAuth } from '@/context/auth-context'

export default function Quick() {
  const { login, logout, auth } = useAuth()

  return (
    <Layout1 title="首頁" pageName="quick">
      <div>登入者：{auth.nickname}</div>
      <hr />
      <button
        className="btn btn-success"
        onClick={() => {
          login('ming@gg.com', '13579')
        }}
      >
        登入ming@gg.com
      </button>
      <hr />
      <button
        className="btn btn-success"
        onClick={() => {
          login('shin@gg.com', '13579')
        }}
      >
        登入shin@gg.com
      </button>
      <hr />
      <button
        className="btn btn-danger"
        onClick={() => {
          logout()
        }}
      >
        登出
      </button>
    </Layout1>
  )
}
