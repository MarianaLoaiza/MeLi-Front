# Web Mercado Libre
Se realiza una descripci贸n de la soluci贸n desarrollada para la prueba t茅cnica del Front Mercado Libre!
# Web Mercado Libre

Pre-requisitos 馃搵
Para la ejecuci贸n del proyecto se debe contar con Visual Studio Code y tener ejecutado el proyecto Backend Mercado libre [https://github.com/MarianaLoaiza/backend-MeLi]
Se realiza una descripci贸n de la soluci贸n desarrollada para la  prueba t茅cnica del Front Mercado Libre!

Nota
Para la ejecion del proyecto se deben ejecutar los siguientes comandos:
npm i
### Pre-requisitos 馃搵

Para la ejecuci贸n del proyecto se debe contar con Visual Studio Code y tener ejecutado el proyecto Backend Mercado libre [https://github.com/MarianaLoaiza/backend-MeLi] 

### Nota
Para la ejecuci贸n del proyecto se deben ejecutar los siguientes comandos:
npm i 
npm start

Estructura 馃殌
El Proyecto est谩 compuesto por:
## Estructura 馃殌

assets: almacena las im谩genes
components:
Categories: lista la categor铆a del producto.
loader: animacion de carga.
product: lista el producto seleccionado con su descripci贸n.
products:lista los productos por la b煤squeda realizada.
context: provee datos a trav茅s del 谩rbol de componentes compartiendo la informaci贸n de manera global
Hooks: componentes que contienen funciones reutilizables.
El Proyecto esta compuesto por:
* assets: almacena las im谩genes 
* components: 
    * Categories: lista la categor铆a del producto.
    * loader: animacion de carga.
    * product: lista el producto seleccionado con su descripci贸n.
    * products:lista los productos por la b煤squeda realizada.
* context: provee  datos a trav茅s del 谩rbol de componentes compartiendo la informaci贸n de manera global 
* Hooks: componentes que contienen funciones reutilizables.
*pages:
Details: Carga la informaci贸n del detalle del producto y luego env铆a la informaci贸n al componente product.
List: Carga la informaci贸n de los productos y luego la env铆a la informaci贸n al componente product.
Search: Captura par谩metros de b煤squeda
services: consumo de endpoints
    * Details: Carga la informaci贸n del detalle del producto y luego env铆a la informaci贸n al componente product.
    * List: Carga la informaci贸n de los productos  y luego la env铆a la informaci贸n al  componente product.
    * Search: Captura  par谩metros de b煤squeda
* services: consumo de endpoints
