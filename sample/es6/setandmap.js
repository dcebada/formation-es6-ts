const cedric = {
    id: 1,
    name: 'Cedric'
};
const users = new Map();
users.set(cedric.id, cedric);
console.log(users.has(cedric.id));
console.log(users.size);
users.delete(cedric.id);


const cedric = {
    id: 1,
    name: 'Cedric'
};
const users = new Set();
users.add(cedric);
console.log(users.has(cedric));
console.log(users.size);
users.delete(cedric);


for (let user of users) {
    console.log(user.name);
}