import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const  Canceled = lazy(()=> import ('../components/Canceled/Canceled'))

function CanceledPage() {
  return (
    <Fragment>
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
      <Canceled />
      </Suspense>
    </MasterLayout>
  </Fragment>
  )
}

export default CanceledPage
