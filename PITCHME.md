---
@title[Introducción a ES6 y TypeScript]

# ECMAScript 6

- **ES6** o **ECMAScript 2015**
- @fa[exclamation](Navegadores no son compatibles con **ES6**)
- Necesario utilizar un **"transpilador"**
  - BabelJS | 
  - Traceur |

---
@title[Nuevas características]

## Nuevas características

- let y const |
- creación de objetos |
- asignaciones desestructuradas |
- parámetros opcionales |
- operador REST |

---
@title[Nuevas características]

## Nuevas características (cont.)

- plantillas |
- promesas |
- funciones flecha |
- set y map |
- modulos |

---? code=sample/es6/letconst.js&title=let y const 1
@title[let y const]
@[4,13](Es equivalente)

+++?code=sample/es6/letconst.1.js&title=let y const 2
@title[let y const]

+++
@title[Ámbito de las variables]

## Ámbito de las variables

- var (función y global), @fa[exclamation] Hoisting
- let (bloque)
- const (bloque)

---?code=sample/es6/objects.js&title=Creación de objetos
@title[Creacíon de objetos]
@[3-5,9-11](Las variables y las propiedades del objeto tienen el mismo nombre)

---?code=sample/es6/assigns.js&title=Asignaciones desestructuradas
@title[Asignaciones desestructuradas]
@[2-4](Obtenemos del objeto las propiedades que necesitamos y la asignamos a unas variables)
@[7-8](Podemos obtener del objeto sólo las propiedades que queramos)
@[11-12](Podemos obviar el valor si comparten el mismo nombre)
@[14-15](No tienen que estar al mismo nivel del objeto)
@[17-18](También es válido para arrays)

---?code=sample/es6/parameters.js&title=Parámetros opcionales
@title[Parámetros opcionales]
@[2-7](Podemos comprobar la existencia de los parámetros antes de usarlos)
@[9-11](Con ES6 podemos darle un valor por defecto)
@[13-15](Podemos llamar incluso a funciones y utilizar parámetros que se han definido antes)
@[17-19](No podemos usar variables antes de que la hayamos declarado)
@[21](También podemos definir valores por defecto en asignaciones desestructuradas)

---?code=sample/es6/rest.js&title=Operador REST
@title[Operador REST]
@[2-7](Número variable de parámetros de entrada, variable arguments)
@[9-13](Ahora podemos usar for..of, no confundir con for..in (propiedades))
@[15](También podemos usarlo en las asignaciones desestructuradas)
@[17-18](No confundir con el operador spread)

---?code=sample/es6/class.js&title=Clases
@title[Classes]
@[1-10](Definición básica de una clase con su método constructor)
@[6](Vemos el uso de plantillas)
@[13-18](También podemos definir métodos estáticos)
@[21-32](Definición de getters y setters de los atributos)
@[35-40](Podemos heredar de otras clases)
@[43-55](Podemos llamar a los métodos del padre a través de super)

---
@title[Promesas]

## Promesas
- Nueva clase **Promise**
- Simplificar la programación asícrona (Callback hell)

```javascript
getUser(login, function (user) { 
  getRights(user, function (rights) {
    updateMenu(rights);});
});
```

+++
@title[Promesas (cont. I)]
## Promesas

```javascript
getUser(login)
  .then(function (user) {
    return getRights(user);
  })
  .then(function (rights) { updateMenu(rights);
  })
```

+++
@title[Promesas (cont. II)]

## Promesas
- __Thenable__, define un método __then(function ok(data){}, function ko(error){})__
- Estados
  - __pending__, la promesa está en curso
  - __fulfilled__, la promesa ha finalizado con éxito, ok(data)
  - __rejected__, la promesa ha fallado, ko(error)

+++?code=sample/es6/promises.js&title=Promesas
@title[Promesas]
@[1-9](¿Cómo se crean las promesas?)
@[12-14](Llamamos a la función y establecemos el callback de éxito)
@[17-22](Añadimos más llamadas asíncronas)
@[25-30](Podemos "aplanar" las llamadas)
@[33-44](Gestión de error en cada caso)
@[47-55](Gestión de error de toda la cadena)

---
@title[Funciones flecha]

## Funciones flecha
- =>
- Útil para callback y funciones anónimas
- Valor de this correcto

```javascript
function (user) {
  return getRights(user);
}

user => getRights(user)
```

+++?code=sample/es6/arrow.js&title=Funciones flecha
@title[Funciones flecha]
@[1-6](Funciones anónimas)
@[9-11](Transformamos las funciones anónimas en funciones flecha)
@[14-19](Si tenemos un bloque debemos usar el return explícito)

+++?code=sample/es6/arrow.1.js&title=Funciones flecha
@title[Funciones flecha]
@[1-12](Valor de this)
@[15-27](Podemos solucionarlo guardando una referencia)
@[30-41](Es más elegante enlazar a la función el valor de this)
@[44-55](Pero aún sería más elegante si usamos forEach correctamente)
@[58-68](Nos pondríamos el smoking usando una función flecha)

+++?code=sample/es6/setandmap.js&title=Set y Map
@title[Set y Map]
@[1-9](Set)
@[12-20](Map)
@[23-25](Podemos usar for..of para recorrer las colecciones)

---
@title[Módulos]
- Nodejs --> CommonJS
- Browser --> Asynchronous Module Definition (AMD)
- ES6 --> Lo mejor de los dos mundos

+++?code=sample/es6/modules.js&title=Módulos
@title[Módulos]
@[1-6](Exportar funciones y luego utilizarlas en nuestro módulo)
@[9-10](Podemos importarlas con otro nombre si queremos)
@[13-15](Podemos importar todo de una vez, ¡atención, no usamos las llaves!)
@[18-19](Exportaciones por defecto, ¡atención, no usamos las llaves!)

---
@title[TypeScript]
# TypeScript

![Image](assets/image/ts_logo.png)

```
npm install -g typescript
```
o

```
yarn global add typescript
```
---
