export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    const data = {name: 'Gertie'}
    return res.json({ data })
  }