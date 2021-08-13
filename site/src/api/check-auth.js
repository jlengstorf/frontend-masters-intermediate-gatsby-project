export default function handler(req, res) {
  const loggedIn = Boolean(req.cookies && req.cookies['frontend-masters-auth']);

  res.json({ loggedIn });
}
