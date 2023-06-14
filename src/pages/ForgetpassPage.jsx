import React, {Fragment, Suspense, lazy} from 'react'
import MasterLayout from '../components/masterLayout/Master-Layout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const  Forgetpass = lazy(()=> import ('../components/AccountRecovery/Send-OTP'))

function ForgetpassPage() {
  return (
    <Fragment>
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
          <Forgetpass />
      </Suspense>
    </MasterLayout>
  </Fragment>
  )
}

export default ForgetpassPage
