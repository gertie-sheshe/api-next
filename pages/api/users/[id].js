export default (req, res) => {
    const { query: { id } } = req;

    res.statusCode = 200;
  
    res.json({ user: { id, name: 'Test User' } })
  }
