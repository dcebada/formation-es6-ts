const getUser = function (login) {
    return new Promise(function (resolve, reject) {
        if (response.status === 200) {
            resolve(response.data);
        } else {
            reject('No user');
        }
    });
};


getUser(login).then(function (user) {
    console.log(user);
});


getUser(login).then(function (user) {
    return getRights(user)
        .then(function (rights) {
            return updateMenu(rights);
        })
});


getUser(login).then(function (user) {
        return getRights(user);
    })
    .then(function (rights) {
        return updateMenu(rights);
    })


getUser(login).then(function (user) {
        return getRights(user);
    }, function (error) {
        console.log(error);
        return Promise.reject(error);
    })
    .then(function (rights) {
        return updateMenu(rights);
    }, function (error) {
        console.log(error);
        return Promise.reject(error);
    })


getUser(login).then(function (user) {
        return getRights(user);
    })
    .then(function (rights) {
        return updateMenu(rights);
    })
    .catch(function (error) {
        console.log(error);
    })