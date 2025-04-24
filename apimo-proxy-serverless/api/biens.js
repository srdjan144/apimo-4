
export default async function handler(req, res) {
  const url = "https://apimo.net/fr/api/webservice/estate/list?provider=4279&token=21217b006c066cd3800e5d44da62ad22f5c5a74a&agency=2188&language=fr";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Erreur de réponse de l'API Apimo" });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'appel à l'API Apimo" });
  }
}
