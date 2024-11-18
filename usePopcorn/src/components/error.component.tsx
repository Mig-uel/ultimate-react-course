const Error = ({ message }: { message: string }) => {
  return (
    <p className='error'>
      <span>🚫 {message}</span>
    </p>
  )
}
export default Error
