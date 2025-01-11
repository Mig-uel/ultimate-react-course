import { Cabin, Reservation, Spinner } from '@/components'
import { getCabin, getCabins } from '@/lib/data-service'
import type { Metadata } from 'next'
import { Suspense } from 'react'

type Props = {
  params: Promise<{ id: string }>
}

/** Dynamic Metadata */
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const cabin = await getCabin((await params).id)

  return {
    title: `Cabin ${cabin.name}`,
  }
}

/** Generate Dynamic Static Pages */
export const generateStaticParams = async () => {
  const cabins = await getCabins()

  const ids = cabins.map((cabin) => ({
    id: String(cabin.id),
  }))

  return ids
}

export default async function Page({ params }: Props) {
  const cabin = await getCabin((await params).id)

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <Cabin cabin={cabin} />

      <div>
        <h2 className='text-5xl font-semibold text-center text-accent-400'>
          Reserve {name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  )
}
