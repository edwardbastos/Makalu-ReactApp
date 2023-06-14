const productos = [
    { nombre: "HP Laserjet Pro M521dn",  precio: 500, id: "Hp-Laserjet-M521", img: "../assets/img/printer1.jpg", idCat: "fotocopiadoras" },
    { nombre: "Kyocera FS M3655idn", precio: 180, id: "Kyocera-M3655idn", img: "../assets/img/printer2.jpg", idCat: "fotocopiadoras" },
    { nombre: "Lexmark XM3150", precio: 180, id: "Lexmark-XM3150", img: "../assets/img/printer3.jpg", idCat: "fotocopiadoras" },
    { nombre: "Ricoh MP 305", precio: 180, id: "Ricoh-MP-305", img: "../assets/img/printer4.jpg", idCat: "fotocopiadoras" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}