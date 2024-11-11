import Button from './button'

const AddFriendForm = () => {
  return (
    <form className='form-add-friend'>
      <label>Friends Name</label>
      <input type='text' />

      <label>User Image URL</label>
      <input type='text' />

      <Button>Add</Button>
    </form>
  )
}
export default AddFriendForm
