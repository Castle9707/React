import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'

export default function List() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <ul className={theme}>
        <li>123456</li>
        <li>123456</li>
        <li>123456</li>
        <li>123456</li>
      </ul>
      <style jsx>
        {`
          .light {
            background-color: white;
            color: blue;
          }
          .dark {
            background-color: black;
            color: pink;
          }
        `}
      </style>
    </>
  )
}
