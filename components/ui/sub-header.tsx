// Code: SubHeader component
import React from 'react'

interface Props {
 title?: string
}

const SubHeader = ({ title = "" }: Props) => {
 return (
  <div className="self-start col-span-9 col-start-4 sm:row-span-1 row-span-2 md:mb-6 mb-3 font-body">
   <h1 className="sm:text-3xl text-2xl font-semibold">
    {title}
   </h1>
  </div>
 )
}
export default SubHeader;