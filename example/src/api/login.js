export default function handler(req, res) {
  res.setHeader('Set-Cookie', 'frontend-masters-auth=true; path=/;');
  res.json({ status: 'ok' });
}
