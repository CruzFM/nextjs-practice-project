import LikeButton from './[id]/LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function PostPage () {
  const posts = await fetchPosts()

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-3'>
      {posts.slice(0, 5).map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton />
        </article>
      ))}
    </div>
  )
}
