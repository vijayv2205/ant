/*
* Import DB Dependencies
*/
const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
sequelize.sync({ force: false }).then(()=>{ 
    console.log('Resynced database');
});

/*
* Import models
*/
const User = require('../models/User')(sequelize,DataTypes);


/*
* Controller Functions
*/
const UserController = {
	createUser: async (req,res) => {
		const name = req.body.name ;
		const email = req.body.email ;
		const user = await User.create({
			name: name,
			email: email
		})
		res.status(200).send(user);
	},
	allUsers: async (req,res) => {
        const users = await User.findAll();
        const usersJson = JSON.stringify(users, null, 2) ;
		console.log("All users:", usersJson);
        res.status(200).send(usersJson);
	},
	userDetail: async (req,res) => {
		const user_id = req.params.id ;
		const user = await User.findOne({
			where: {
				id : user_id
			}
		});
		const userJson = JSON.stringify(user, null, 2) ;
		res.status(200).send(userJson);
	},
	updateUser: async (req,res) => {
		const user_id = req.params.id ;
		const name = req.body.name ;
		const email = req.body.email ;
		const user = await User.update({
			name: name,
			email: email
		},{
			where: {
				id: user_id
			}
		})
		res.status(200).send(user);
	},
	deleteUser: async (req,res) => {
		const user_id = req.params.id ;
		const user = await User.destroy({
			where: {
				id: user_id
			}
		})
		res.status(200).send('user deleted succesfully');
	},
}

module.exports = UserController ;