// import { unstable_noStore as noStore } from 'next/cache'
import { CabinCard } from '.'
import { getCabins } from '@/lib/data-service'

const CabinList = async ({}) => {
  // noStore()
  const cabins = await getCabins()

  if (!cabins.length) return null

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  )
}
export default CabinList