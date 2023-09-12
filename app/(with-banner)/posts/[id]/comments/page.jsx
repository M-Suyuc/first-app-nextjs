const fetchComments = async ({ id }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000)) // Esto es para retrasar el fetch por 3 segundos
  // throw new Error('Error al cargar los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    // cache: 'no-store', server side rendering
    next: { revalidate: 60 }, //Incremental Static Regeneration
  }).then((res) => res.json())
}

export default async function Post({ params }) {
  const { id } = params
  const comments = await fetchComments({ id })
  return (
    <ol>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h2 style={{ color: '#333' }}>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ol>
  )
}
