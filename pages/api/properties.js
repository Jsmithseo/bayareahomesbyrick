import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.IDX_API_KEY;
  const endpoint = 'https://api.idxbroker.com/leads/property/{propertyID}'; // Adjust based on the specific IDX endpoint you're using

  try {
    const response = await axios.get(`${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'IDX-Api-Key': apiKey,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status || 500).json({ message: error.message });
  }
}
