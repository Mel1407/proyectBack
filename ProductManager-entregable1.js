// Definir la clase ProductManager que gestione un conjunto de productos (inicia vacío)

class ProductManager {
  products;

  constructor() {
    this.products = [];
  }
  getProducts() {
    return this.products;
  }
  addProducts(title, description, price, thumbnail, code, stock) {
    const product1 = {
      id: this.getNextId(),
      title: "producto prueba",
      description: "este es un producto prueba",
      price: "200",
      thumbnail: "sin imagen",
      code: 25414,
      stock: 25,
    };
    this.products.push(product1);
  }
  getNextId() {
    if (this.products.length === 0) {
      return 1;
    }
    return this.products.at(-1).id + 1;
  }
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new error("not found");
    }
    const productAgain = product.id.some((usser) => usser.id === id);
    if (productAgain) {
      throw new error("id ya registrado");
    }
    product.id.push(id);
  }
}

const productManager = new ProductManager();
productManager;
productManager.getProducts();
productManager.addProducts("libro", "libro de misterio", "30", "", "0562", "5");
productManager.getProducts();
