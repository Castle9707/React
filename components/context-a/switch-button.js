import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'

export default function SwitchButton() {
  //2. 在任何⼦元件層級深度，使⽤ useContext 勾⼦讀取它:
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <FaRegMoon /> : <FaRegSun />}
      </button>
    </>
  )
}
