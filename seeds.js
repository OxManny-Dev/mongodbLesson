const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const {
	User,
	Todo
} = require('./model');

const seedDb = async () => {
	await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
	await User.deleteMany({});
	await Todo.deleteMany({});

	const usersToCreate = [
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
	];

	const users = await User.insertMany(usersToCreate);

	const todosToCreate = [
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
	];

	const todos = await Todo.insertMany(todosToCreate);

	console.log(todos);

	process.exit(0);
};

seedDb();
