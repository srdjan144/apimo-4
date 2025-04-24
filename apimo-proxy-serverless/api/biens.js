export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.apimo.pro/agencies/2188/properties", {
      headers: {
        Authorization: "Bearer 21217b006c066cd3800e5d44da62ad22f5c5a74a",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch properties" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}
