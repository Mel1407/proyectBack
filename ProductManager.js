import crypto from 'crypto'

console.log (crypto.randomBytes().toString('hex'))

//Se creará una instancia de la clase “ProductManager”

const productManager = new ProductManager();

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

const viewProducts = productManager.getProducts();
console.log(viewProducts);

//Se llamará al método "addProduct" con los campos

const producto1 = {
  title: "producto 1"
  description: "descripción del producto 1"
  price: 200,
  thumbnail: "Sin imagen",
  code:"778",
  stock: 1,
}

//El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
const addProducto1 = productManager.addProducto(producto1);
console.log(addProducto1);

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log("Productos:", productManager.getProducts());

class ProductManager {
  constructor(){
    this.products = [];
  }


  addProduct(producto){
    const existe = this.products.includes (prod => prod.code === producto.code)
    if(existe){
      return "Producto existe"
    } else {
      producto.id = crypto.randomBytes().toString('hex')
      this.products.push(producto)
    }
  }
}


