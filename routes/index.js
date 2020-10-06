var express = require('express');
var router = express.Router();

const messages = [
	{
		text: 'First!',
		user: 'Bob',
		added: new Date(),
	},
	{
		text: 'First! edit: awww...',
		user: 'George',
		added: new Date(),
	},
	{
		text: 'in b4 first',
		user: 'Olivia',
		added: new Date(),
	},
];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', function (req, res, next) {
	const { message, name } = req.body;
	messages.push({ text: message, user: name, added: new Date() });
	res.redirect('/');
});

module.exports = router;
