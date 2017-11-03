module.exports = {
  login: (req, res, next) => {
    const {session} = req
    const {username, password} = req.body
    const dbInstance = req.app.get('db');

    dbInstance.check_login([username,password]).then((response) => {
      if(response.length >= 1){
        res.status(200).json(response)
      } else {
        res.status(403).send("Not a user bro")
      }
    });

  }
}
