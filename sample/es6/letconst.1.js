function getPonyFullName(pony) {
    if (pony.isChampion) {
        let name = 'Champion ' + pony.name;
        return name;
    }
    // name is not accessible here
    return pony.name;
}

const poniesInRace = 6;
poniesInRace = 7;  // Error!
// No podemos modificar el valor de poniesInRace

const PONY = {};
PONY.color = 'green'; // es válido