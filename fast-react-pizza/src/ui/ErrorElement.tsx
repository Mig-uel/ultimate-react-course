import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import LinkButton from './LinkButton'

function ErrorElement() {
  const error = useRouteError()

  if (isRouteErrorResponse(error))
    return (
      <div>
        <h1>
          {error.status} {error.statusText} 👻
        </h1>
        <p>{error.data}</p>
        <LinkButton to='-1'>&larr; Go back</LinkButton>
      </div>
    )

  if (error instanceof Error)
    return (
      <div>
        <h1>Something went wrong... 😢</h1>
        <p>{error.message}</p>
        <LinkButton to='-1'>&larr; Go back</LinkButton>
      </div>
    )

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>Try again later...</p>
      <LinkButton to='-1'>&larr; Go back</LinkButton>
    </div>
  )
}

export default ErrorElement
