const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      // Incremental static regenerator
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
}

export default async function PageComments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <article>
      <ul className='flex flex-col gap-3'>
        {
            comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <h4>{comment.name}</h4>
                  <h4>{comment.email}</h4>
                  <h4>{comment.body}</h4>
                </li>
              )
            })
        }
      </ul>
    </article>
  )
}
