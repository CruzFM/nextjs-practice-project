export default function Post ({ params }) {
  const { id } = params
  return <h1>Esto es un post con id: {id}</h1>
}
