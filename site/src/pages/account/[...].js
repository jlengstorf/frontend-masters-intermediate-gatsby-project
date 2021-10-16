import * as React from 'react';
import { navigate } from 'gatsby';


export default function RedirectToDashboard(){
    React.useEffect(() => {
        navigate('/account/dashboard', { replace: true });

    }, [])
    return null;
}