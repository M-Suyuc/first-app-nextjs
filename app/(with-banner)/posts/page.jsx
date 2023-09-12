import { Suspense } from 'react'
import { ListOfPosts } from '../../../components/ListOFPosts'

const PostsPage = async () => {
  return (
    <section>
      <Suspense
        fallback={
          <p
            style={{
              color: 'green',
              textAlign: 'center',
              fontSize: '3rem',
              fontWeight: '800',
            }}
          >
            Cargando Post...
          </p>
        }
      >
        <ListOfPosts />
      </Suspense>
    </section>
  )
}

export default PostsPage
