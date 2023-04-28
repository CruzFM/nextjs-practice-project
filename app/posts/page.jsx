import Link from 'next/link'
import LikeButton from './LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts',
    {
      // Incremental static regenerator
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
}

export default async function PostPage () {
  const posts = await fetchPosts()

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-3'>
      {posts.slice(0, 5).map(post => (
        <article key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <LikeButton />
        </article>
      ))}
    </div>
  )
}
