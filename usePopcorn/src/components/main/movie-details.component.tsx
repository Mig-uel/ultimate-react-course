import { useEffect } from 'react'

const MovieDetails = ({
  selectedId,
  handleCloseSelectedMovie,
}: {
  selectedId: string
  handleCloseSelectedMovie: () => void
}) => {
  useEffect(() => {}, [selectedId])

  return (
    <div className='details'>
      <button className='btn-back' onClick={handleCloseSelectedMovie}>
        &times;
      </button>
      {selectedId}
    </div>
  )
}
export default MovieDetails
