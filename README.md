# Web Mercado Libre
Se realiza una descripción de la solución desarrollada para la prueba técnica del Front Mercado Libre!
# Web Mercado Libre

Pre-requisitos 📋
Para la ejecución del proyecto se debe contar con Visual Studio Code y tener ejecutado el proyecto Backend Mercado libre [https://github.com/MarianaLoaiza/backend-MeLi]
Se realiza una descripción de la solución desarrollada para la  prueba técnica del Front Mercado Libre!

Nota
Para la ejecion del proyecto se deben ejecutar los siguientes comandos:
npm i
### Pre-requisitos 📋

Para la ejecución del proyecto se debe contar con Visual Studio Code y tener ejecutado el proyecto Backend Mercado libre [https://github.com/MarianaLoaiza/backend-MeLi] 

### Nota
Para la ejecución del proyecto se deben ejecutar los siguientes comandos:
npm i 
npm start

Estructura 🚀
El Proyecto está compuesto por:
## Estructura 🚀

assets: almacena las imágenes
components:
Categories: lista la categoría del producto.
loader: animacion de carga.
product: lista el producto seleccionado con su descripción.
products:lista los productos por la búsqueda realizada.
context: provee datos a través del árbol de componentes compartiendo la información de manera global
Hooks: componentes que contienen funciones reutilizables.
El Proyecto esta compuesto por:
* assets: almacena las imágenes 
* components: 
    * Categories: lista la categoría del producto.
    * loader: animacion de carga.
    * product: lista el producto seleccionado con su descripción.
    * products:lista los productos por la búsqueda realizada.
* context: provee  datos a través del árbol de componentes compartiendo la información de manera global 
* Hooks: componentes que contienen funciones reutilizables.
*pages:
Details: Carga la información del detalle del producto y luego envía la información al componente product.
List: Carga la información de los productos y luego la envía la información al componente product.
Search: Captura parámetros de búsqueda
services: consumo de endpoints
    * Details: Carga la información del detalle del producto y luego envía la información al componente product.
    * List: Carga la información de los productos  y luego la envía la información al  componente product.
    * Search: Captura  parámetros de búsqueda
* services: consumo de endpoints
