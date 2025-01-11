import { getBookedDatesByCabinId, getCabin } from '@/lib/data-service'
import { type NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params

    const [cabin, bookedDates] = await Promise.all([
      getCabin(id),
      getBookedDatesByCabinId(id),
    ])

    return NextResponse.json({ cabin, bookedDates })
  } catch (error) {
    return NextResponse.json({ error: 'Cabin not found...' })
  }
}
