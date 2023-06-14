import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const  New = lazy(()=> import ('../components/New/New'))

function NewPage() {
  return (
    <Fragment>
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
          <New/>
      </Suspense>
    </MasterLayout>
  </Fragment>
  )
}

export default NewPage
