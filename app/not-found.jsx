import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link href='/'>Vover</Link>
    </div>
  )
}

export default NotFound
