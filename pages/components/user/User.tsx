import { UserDatable } from '@/shared/data/table/UserDatable';
import Datatable from '@/shared/data/table/datatable';
import React from 'react'

const User = () => {
  return (
 <>
    
    
   
   {/* <Datatable heading={'All Users'} user={`118,192 people`}/> */}
   <UserDatable/>


 </>
  )
}
User.layout = "Contentlayout";
export default User