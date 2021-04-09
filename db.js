const account1 = {
  owner: 'Svetlin Markov',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'John Doe',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas ',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Williams',
  movements: [430, 1000, 700, 50, 90, 100, -500],
  interestRate: 1,
  pin: 4444,
};

const accountsdb = [account1, account2, account3, account4];

export default accountsdb;
