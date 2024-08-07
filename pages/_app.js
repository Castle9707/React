// 去除掉預設的樣式
//import '@/styles/globals.css'
// 全域樣式只能在這裡套用
// import '@/styles/product-table.css'
// import { CartProvider } from '@/hooks/use-cart'
// import { ThemeProvider } from '@/hooks/use-theme'
import { useEffect } from 'react'
import AuthContext, { AuthContextProvider } from '@/context/auth-context'
import '@/styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    // <CartProvider>
    //   <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    // </CartProvider>
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
