export default function handler(_req, res) {
  res.setHeader(
    'Set-Cookie',
    'frontend-masters-auth=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
  );
  res.json({ status: 'ok' });
}
