const productos = [
    { nombre: "HP Laserjet Pro M521dn",  precio: 500, id: "Hp-Laserjet-M521", img: "../assets/img/printer1.jpg", idCat: "fotocopiadoras", descripcion: "El HP Laserjet Pro M521dn es una impresora multifuncional de alto rendimiento diseñada para entornos de trabajo exigentes. Con una velocidad de impresión de hasta 42 páginas por minuto y una resolución de 1200 x 1200 ppp, produce documentos nítidos y profesionales. Además, cuenta con funciones de copiado, escaneo y fax, lo que lo convierte en un dispositivo completo para todas tus necesidades de impresión. Su conectividad Ethernet y USB aseguran una fácil integración en redes corporativas, mientras que su bandeja de papel de 500 hojas permite una mayor productividad sin necesidad de recargar con frecuencia."},
    { nombre: "Kyocera FS M3655idn", precio: 180, id: "Kyocera-M3655idn", img: "../assets/img/printer2.jpg", idCat: "fotocopiadoras", descripcion: "La Kyocera FS M3655idn es una impresora multifuncional de alto rendimiento diseñada para entornos de trabajo exigentes. Con una velocidad de impresión de hasta 55 páginas por minuto y una resolución de 1200 x 1200 ppp, ofrece una calidad de impresión excepcional. Equipada con funciones de copiado, escaneo y fax, es una solución completa para tus necesidades de impresión. Además, cuenta con conectividad Ethernet y USB para una fácil integración en redes corporativas. Con una bandeja de papel de alta capacidad y opciones de ampliación, te permite manejar grandes volúmenes de trabajo sin problemas."},
    { nombre: "Lexmark XM3150", precio: 180, id: "Lexmark-XM3150", img: "../assets/img/printer3.jpg", idCat: "fotocopiadoras", descripcion: "La Lexmark XM3150 es una impresora multifuncional eficiente diseñada para entornos de trabajo de alto rendimiento. Con una velocidad de impresión de hasta 50 páginas por minuto y una resolución de 1200 x 1200 ppp, ofrece resultados de alta calidad. Sus funciones de copiado, escaneo y fax brindan versatilidad en un solo dispositivo. La conectividad Ethernet y USB permite una fácil integración en redes corporativas. Con una bandeja de papel de gran capacidad y opciones de manejo flexible de papel, esta impresora te permite gestionar proyectos de impresión de manera eficiente. Además, su panel de control intuitivo facilita su uso." },
    { nombre: "Ricoh MP 305", precio: 180, id: "Ricoh-MP-305", img: "../assets/img/printer4.jpg", idCat: "fotocopiadoras", descripcion: "La Ricoh MP 305 es una impresora multifuncional compacta y versátil que se adapta perfectamente a entornos de trabajo pequeños y medianos. Con una velocidad de impresión de hasta 30 páginas por minuto y una resolución de impresión de 1200 x 1200 ppp, ofrece una calidad de impresión excepcional. Equipada con funciones de copiado, escaneo y fax, esta impresora te permite realizar una variedad de tareas de manera eficiente. Su conectividad Ethernet y USB garantiza una fácil integración en redes de trabajo. Además, cuenta con una interfaz de usuario intuitiva que simplifica la navegación y el acceso a las funciones." },
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