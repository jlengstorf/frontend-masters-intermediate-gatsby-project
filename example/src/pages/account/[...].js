import { navigate } from 'gatsby';

export default function RedirectToAccountDashboard() {
  navigate('/account/dashboard', { replace: true });

  return null;
}
