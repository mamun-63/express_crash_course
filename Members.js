// -- Create simple Restful API 
// we genearlly fetch data from database and serve as a JSON formate, but here we have doing it hard coded making arrays 

const members = [
  {
    id: 1,
    name: 'Mamun',
    email: 'mamun.cse63@gmail.com',
    status: 'active',
  },
  {
    id: 2,
    name: 'Ayelen',
    email: 'ayelen@gmail.com',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'abc',
    email: 'abc@gmail.com',
    status: 'active',
  }
]

module.exports = members