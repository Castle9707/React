import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout1({ children, title = '', pageName = '' }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' | 小心小站' : '小心小站'}</title>
      </Head>
      <Navbar {...{ pageName }} />
      <div className="container">{children}</div>
      <Footer />
    </>
  )
}
