// let y const
function getPonyFullName(pony) {
    if (pony.isChampion) {
        var name = 'Champion ' + pony.name;
        return name;
    }
    return pony.name;
}

// Es equivalente a

function getPonyFullName(pony) {
    var name;
    if (pony.isChampion) {
        name = 'Champion ' + pony.name;
        return name;
    }
    // name is still accessible here
    return pony.name;
}