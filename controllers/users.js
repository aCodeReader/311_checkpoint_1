
const users = require('../data/users')
const newUsers =  require('../data/sampleUser')

const list =(req, res) => {
    res.json(users)
}
const show = (req, res) => {
    const found = users.some(user => user.id == req.params.id)
    if (found){
        res.send(users.filter(user => user.id == req.params.id))
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
}

const create = (req, res) => {
    if(!newUsers.id) res.status(400).json({ msg: "New users require an id" })
    users.push(newUsers)
    res.json(users)

}

const update = (req, res) => {
    const found = users.some(user => user.id == req.params.id)
    if (found) {
        const updateThis = users.filter(user => user.id == req.params.id)
        updateThis[0].id = req.body.id
        updateThis[0].body = req.body.body;
        updateThis[0].postId = req.body.postId;
        updateThis[0].name = req.body.name
        const updateUser = {
            id: req.params.id,
            name: req.body.name,
            body: req.body.body,
            postId: req.body.postId
        }
        updateThis.push(updateUser)
        // users.push(updateUser)
        res.send(users)
    } else { res.status(404).json({msg : `User id ${req.params.id} not found`})}
}
const remove = (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found){
        res.json({
            msg: 'user deleted',
            users: users.filter(user => user.id !== parseInt(req.params.id))
        }) 
    } else {
        res.status(404).json({msg : `User id ${req.params.id} not found`})
        }
}



module.exports = { 
    list, 
    show,
    create,
    update,
    remove,

}



//make these functions 
// listUsers
// * Should retrieve the entire array from _data/index_

// * showUser
// * Should retrieve just the user that matches the passed-in id

// * createUser
// * Should add a user to the array

// * updateUser
// * Should update one user in the array based on its id

// * deleteUser
// * Should delete one user from the array based on its id