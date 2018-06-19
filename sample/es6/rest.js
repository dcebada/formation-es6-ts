// Operador rest
function addRunners(runners) {
    for (var i = 0; i < arguments.length; i++) {
        runnersInRace.push(arguments[i]);
    }
}
addRunners('Sergio', 'Dani');

function addRunners(...runners) {
    for (let runner of runners) {
        runnersInRace.push(runner);
    }
}

const [winner, ...losers] = runnersInRace;

const fruitPrices = [12, 3, 4];
const minPrice = Math.min(...fruitPrices);