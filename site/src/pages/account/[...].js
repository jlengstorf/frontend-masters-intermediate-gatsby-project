import * as React from 'react';
import { navigate } from 'gatsby';

export default function RedirectToAccountDashboard() {
  React.useEffect(() => {
    navigate('/account/dashboard', { replace: true });
  }, []);

  return null;
}
