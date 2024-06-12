import SwitchButton from '@/components/context-a/switch-button'
import List from '@/components/context-a/list'
// 用於取代a元件的特別元件，可以在不同頁面保持住狀態
import Link from 'next/link'

export default function Page1() {
  return (
    <>
      <h1>Page1 (Context範例-a)</h1>
      <SwitchButton />
      <hr />
      <List />
      <hr />
      <a href="/cs-0612/context-a/page2">Page2(a標記)</a>
      <br />
      {/*  用於取代a元件的特別元件，可以在不同頁面保持住狀態 */}
      <Link href="/cs-0612/context-a/page2">Page2(Link元件)</Link>
    </>
  )
}
