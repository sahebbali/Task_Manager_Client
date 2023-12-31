import React, {lazy, Suspense} from 'react';
import LazyLoader from "../../components/masterLayout/LazyLoader";
const VerifyOTP =lazy(() => import('../../components/AccountRecovery/Verify-OTP'));
const VerifyOTPPage = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <VerifyOTP/>
        </Suspense>
    );
};

export default VerifyOTPPage;