import React from 'react'
import { useRouter } from 'next/router'

export default function Slug3() {
  const router = useRouter()

  console.log('router.query.slug3:', router.query.slug3)
  console.log('router.isReady:', router.isReady)

  return <pre>{JSON.stringify(router.query, null, 4)}</pre>
  // return <div>{router.query.slug3}</div>
}
