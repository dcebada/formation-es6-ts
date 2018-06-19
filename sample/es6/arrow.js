getUser(login).then(function (user) {
        return getRights(user);
    })
    .then(function (rights) {
        return updateMenu(rights);
    });


getUser(login)
    .then(user => getRights(user))
    .then(rights => updateMenu(rights))


getUser(login)
    .then(user => {
        console.log(user);
        return getRights(user);
    })
    .then(rights => updateMenu(rights))