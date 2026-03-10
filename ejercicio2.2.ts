type Price = number;

interface Product{
    id: number | string,
    name: string,
    price: Price,
    available: boolean
}

class ProductManager<T extends Product>{
    productos: T[] = [];

    addProduct(product: T){
        this.productos.push(product)
    }
    getProductById(id: number | string): T | undefined{
       return this.productos.find((product)=>product.id === id)
    }
    removeProduct()
}