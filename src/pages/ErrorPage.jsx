import { useRouteError } from 'react-router-dom'
import { APP_ENVIRONMENT } from '../env'

export default function ErrorPage() {
  const error = useRouteError()
  if (APP_ENVIRONMENT !== 'prod') console.error(error)

  return (
    <div className="error-page">
      <h1>Упс!</h1>
      <p>Извините, произошла неожиданная ошибка.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
