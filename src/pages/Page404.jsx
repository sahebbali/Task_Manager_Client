import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const  NotFound = lazy(()=> import ('../components/NOtFound/NotFound'))

function Page404() {
  return (
    <Fragment>
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
           <NotFound/>
      </Suspense>
    </MasterLayout>
  </Fragment>
  )
}

export default Page404
