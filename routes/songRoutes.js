module.exports = app => {
  app.get('/api/tracks', (req, res) => {
    const fusion = req.query.fusion;
    if (!fusion) {
      res.status(400);
      res.send({
        message: 'Must specify fusion parameter.'
      });
    } else {
      console.log(fusion);
      res.send(fusion);
    }
  });
};
