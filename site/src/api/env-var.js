// Never-Use this PUBLICLY

export default function handler(_req, res) {
    res.json({
        GATSBY_PUBLIC_VALUE: process.env.GATSBY_PUBLIC_VALUE,
        SECRET_VALUE: process.env.SECRET_VALUE
    });
}