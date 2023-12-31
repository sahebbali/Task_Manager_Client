import React, {lazy, Suspense} from 'react';
import LazyLoader from "../../components/masterLayout/LazyLoader";
const SendOTP =lazy(() => import('../../components/AccountRecovery/Send-OTP'));
const SendOTPPage = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <SendOTP/>
        </Suspense>
    );
};

export default SendOTPPage;