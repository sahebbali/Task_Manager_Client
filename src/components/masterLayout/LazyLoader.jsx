import React from 'react'
import '../../assets/CSS/progress.css'
const LazyLoader = () => {
  return (
    <Fragment >
        <div className='LoadingOverlay'>
            <div className='Line-Progress'>
                <div className='indeterminate'> </div>
            </div>
             
        </div>
    </Fragment>
  )
}

export default LazyLoader
