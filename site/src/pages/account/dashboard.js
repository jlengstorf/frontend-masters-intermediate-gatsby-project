import * as React from 'react';
import { navigate } from 'gatsby';

async function checkLogin(setLoginStatus) {
  const { loggedIn = false } = await fetch('/api/check-auth').then((res) =>
    res.json(),
  );

  setLoginStatus(loggedIn);
}

async function logout() {
  const { status } = await fetch('/api/logout').then((res) => res.json());

  if (status !== 'ok') {
    throw new Error(status);
  }

  navigate('/account/login');
}

export default function DashboardPage() {
    const [loginStatus, setLoginStatus] = React.useState();
    
    React.useEffect(() => {
        checkLogin(setLoginStatus)
    }, [])

    if (loginStatus === false) {
        navigate('/account/login', { replace: true });
        return null;
    }

    return (
        <div>
            <h1> Your Logged In</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}