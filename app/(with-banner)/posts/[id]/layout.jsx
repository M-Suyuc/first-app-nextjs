// 'use client'
// import { useParams } from 'next/navigation' <---Otra forma de acceder a los params usandolo desde un compomente cliente-->
// const paramss = useParams()
// console.log(paramss)

import Link from 'next/link'

const fetchSinglePost = ({ id }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // Incremental Static Regeneration, Por defecto
    // cache: 'no-store', server side rendering
    next: { revalidate: 60 }, //Incremental Static Regeneration
  }).then((res) => res.json())
}

export default async function Post({ children, params }) {
  const { id } = params

  const singlePost = await fetchSinglePost({ id })
  return (
    <article>
      <h1>{singlePost.title}</h1>
      <p>{singlePost.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}
