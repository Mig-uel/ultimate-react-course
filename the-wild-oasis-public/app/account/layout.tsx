import { SideNavigation } from '@/components'

export default function Layout({
  children,
}: {
  children: Readonly<React.ReactNode>
}) {
  return (
    <div className='grid grid-cols-[16rem_1fr] h-full gap-12'>
      <SideNavigation />

      <div className='py-1'>{children}</div>
    </div>
  )
}
