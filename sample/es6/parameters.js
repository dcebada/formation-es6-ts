// Parámetros opcionales
function getList(size, page) {
    size = size || 10; // Si size es falso devolvemos lo que hay a la derecha
    page = page || 1;
    // ...
    return server.get(size, page);
}

function getList(size = 10, page = 1) {
    return server.get(size, page);
}

function getList(size = defaultSize(), page = size - 1) {
    return server.get(size, page);
}

function getList(size = page, page = 1) {
    return server.get(size, page);
}

const { timeout = 1000 } = httpOptions;