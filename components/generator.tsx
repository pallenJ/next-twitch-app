import { type NextPage } from 'next'
import React, { useState } from 'react'
import SideBar from '@/components/common/SideMenu'

function generator (Page: NextPage): NextPage | null {
  const Generated: NextPage = (props): JSX.Element => {
    const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false)
    return (
    <>
     <SideBar open={sideBarIsOpen} onClose={() => { setSideBarIsOpen(!sideBarIsOpen) }} />
     <Page {...props}/>
    </>
    )
  }
  return Generated
}

export default generator
