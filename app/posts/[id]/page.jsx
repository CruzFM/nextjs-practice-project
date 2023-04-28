const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      // Incremental static regenerator
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  )
}
