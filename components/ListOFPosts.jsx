// const fetchPost = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return await res.json()
// }
import Link from 'next/link'
import LikeButton from './LikeButton'

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    // cache: 'no-store', server side rendering
    next: { revalidate: 60 }, //Incremental Static Regeneration
  }).then((res) => res.json())
}

export const ListOfPosts = async () => {
  const post = await fetchPost()

  return post.slice(0, 10).map((post) => (
    <article key={post.id}>
      {/* <Link href='/posts/[id]' as={`/post/${post.id}`}> */}
      <Link href={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>
          {post.id}. {post.title}
        </h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ))
}
