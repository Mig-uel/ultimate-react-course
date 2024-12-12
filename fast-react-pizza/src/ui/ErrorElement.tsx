import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom'

function ErrorElement() {
  const navigate = useNavigate()
  const error = useRouteError()

  if (isRouteErrorResponse(error))
    return (
      <div>
        <h1>
          {error.status} {error.statusText} 👻
        </h1>
        <p>{error.data}</p>
        <button onClick={() => navigate(-1)}>&larr; Go back</button>
      </div>
    )

  if (error instanceof Error)
    return (
      <div>
        <h1>Something went wrong... 😢</h1>
        <p>{error.message}</p>
        <button onClick={() => navigate(-1)}>&larr; Go back</button>
      </div>
    )

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>Try again later...</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  )
}

export default ErrorElement
