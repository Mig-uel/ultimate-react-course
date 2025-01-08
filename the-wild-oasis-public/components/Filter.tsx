'use client'
import Form from 'next/form'
import { redirect } from 'next/navigation'

export default function Filter({ filter }: { filter: string }) {
  return (
    <Form
      className='border border-primary-800 flex gap-4'
      action='/cabins'
      onChange={(e) => e.currentTarget.submit()}
    >
      <select
        className='px-5 py-2  bg-primary-950'
        name='capacity'
        id='capacity'
        defaultValue={filter}
      >
        <option className='px-5 py-2 hover:bg-primary-700 ' value='all'>
          All
        </option>
        <option className='px-5 py-2 hover:bg-primary-700' value='small'>
          Small
        </option>
        <option className='px-5 py-2 hover:bg-primary-700 ' value='medium'>
          Medium
        </option>
        <option className='px-5 py-2 hover:bg-primary-700 ' value='large'>
          Large
        </option>
      </select>

      <button
        type='button'
        className='px-5 py-2 hover:bg-primary-700'
        onClick={(e) => redirect('/cabins')}
      >
        Reset
      </button>
    </Form>
  )
}
