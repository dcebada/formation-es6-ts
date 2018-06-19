// Asignaciones desestructuradas
var httpOptions = { timeout: 2000, isCache: true };
var httpTimeout = httpOptions.timeout;
var httpCache = httpOptions.isCache;


const httpOptions = { timeout: 2000, isCache: true };
const { timeout: httpTimeout, isCache: httpCache } = httpOptions;


const httpOptions = { timeout: 2000, isCache: true }; 
const { timeout, isCache } = httpOptions;

const httpOptions = { timeout: 2000, cache: { age: 2 } };
const { cache: { age } } = httpOptions;

const timeouts = [1000, 2000, 3000];
const [shortTimeout, mediumTimeout] = timeouts;