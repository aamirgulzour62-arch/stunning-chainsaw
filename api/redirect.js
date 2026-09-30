export default function handler(req, res) {
  const destination =
    "https://escalatorquitdisguises.com/w9c4ikxt?key=7e2c97d899018ae0e47998b3dc46c846";

  res.setHeader("Cache-Control", "no-store" );
  res.setHeader("Location", destination);

  return res.status(302).end();
}
