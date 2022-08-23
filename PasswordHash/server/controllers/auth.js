const bcrypt = require('bcrypt')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      const { username, password } = req.body
      let foundUser
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          foundUser = {...users[i]}
        }
      }
      if (!foundUser) {
        res.status(200).send({success: false, message: 'username or password incorrect'})
      } else {
        bcrypt.compare(password, foundUser.passwordHash, (err, result) => {
          if (result) {
            // let sendObj = {}
            // sendObj.email = foundUser.email
            // sendObj.username = foundUser.username
            // sendObj.firstName = foundUser.firstName
            // sendObj.lastName = foundUser.lastName
            // foundUser.passwordHash = ''
            delete foundUser.passwordHash
            res.status(200).send(foundUser)
          } else {
            res.status(200).send({success: false})
          }
        })
      }
    },
    register: (req, res) => {
        console.log('Registering User')
        // console.log(req.body)
        const { username,email,firstName,lastName,password } = req.body
        let saltRounds = 10
        // users.push(req.body)
        // res.status(200).send(req.body)
        bcrypt.hash(password, saltRounds, (err, passwordHash) => {
          let newDatabaseEntry = {}
          newDatabaseEntry.username = username
          newDatabaseEntry.email = email
          newDatabaseEntry.firstName = firstName
          newDatabaseEntry.lastName = lastName
          newDatabaseEntry.passwordHash = passwordHash
          // console.log('\nNew database entry')
          // console.log(newDatabaseEntry)
          users.push(newDatabaseEntry)
          console.log(users)
          return res.status(200).send(req.body)
        })
        // res.status(200).send(req.body)
    }
}