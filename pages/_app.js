// 去除掉預設的樣式
//import '@/styles/globals.css'
// 全域樣式只能在這裡套用
// import '@/styles/product-table.css'
//3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它:
import { ThemeContext } from '@/context/theme'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme }}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeContext.Provider>
  )
}
