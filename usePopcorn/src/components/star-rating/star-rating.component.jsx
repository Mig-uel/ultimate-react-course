// Array.from accepts a .map like callback function and would return a new array based on what that map function returned

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
}

const starContainerStyle = {
  display: 'flex',
  gap: '4px',
}

const textStyle = {
  lineHeight: '1',
  margin: '0',
}

const StarRating = ({ maxRating = 5 }) => {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <span key={index + 1}>S{index + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  )
}
export default StarRating
