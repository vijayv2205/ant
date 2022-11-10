var express = require('express');
var router = express.Router();

/*
* Define controllers Path
*/
var UserController=require('../controllers/UserController');

/*
* Define Route
*/

router.get('/',(req,res)=>{
	var title = 'Ant';
	var description = 'A Micro MVC Node+Express Js Framework';
	var auther = 'Vijay Verma'
	res.render('welcome',{
		title: title,
		description: description,
		auther: auther
	});
})
router.get('/all_users', UserController.allUsers);
router.get('/user_detail/:id', UserController.userDetail);
router.post('/create_user', UserController.createUser);
router.put('/edit_user/:id', UserController.updateUser);
router.delete('/delete_user/:id', UserController.deleteUser);

module.exports = router;