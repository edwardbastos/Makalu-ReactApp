const productos = [
    { nombre: "HP Laserjet Pro M521dn",  precio: 4299, id: "M521", img: "../assets/img/photocopier1.jpg", idCat: "fotocopiadoras", descripcion: "El HP Laserjet Pro M521dn es una impresora multifuncional de alto rendimiento diseñada para entornos de trabajo exigentes. Con una velocidad de impresión de hasta 42 páginas por minuto y una resolución de 1200 x 1200 ppp, produce documentos nítidos y profesionales. Además, cuenta con funciones de copiado, escaneo y fax, lo que lo convierte en un dispositivo completo para todas tus necesidades de impresión. Su conectividad Ethernet y USB aseguran una fácil integración en redes corporativas, mientras que su bandeja de papel de 500 hojas permite una mayor productividad sin necesidad de recargar con frecuencia."},
    { nombre: "Kyocera FS M3655idn", precio: 1575, id: "M3655idn", img: "../assets/img/photocopier2.jpg", idCat: "fotocopiadoras", descripcion: "La Kyocera FS M3655idn es una impresora multifuncional de alto rendimiento diseñada para entornos de trabajo exigentes. Con una velocidad de impresión de hasta 55 páginas por minuto y una resolución de 1200 x 1200 ppp, ofrece una calidad de impresión excepcional. Equipada con funciones de copiado, escaneo y fax, es una solución completa para tus necesidades de impresión. Además, cuenta con conectividad Ethernet y USB para una fácil integración en redes corporativas. Con una bandeja de papel de alta capacidad y opciones de ampliación, te permite manejar grandes volúmenes de trabajo sin problemas."},
    { nombre: "Lexmark XM3150", precio: 1849, id: "XM3150", img: "../assets/img/photocopier3.jpg", idCat: "fotocopiadoras", descripcion: "La Lexmark XM3150 es una impresora multifuncional eficiente diseñada para entornos de trabajo de alto rendimiento. Con una velocidad de impresión de hasta 50 páginas por minuto y una resolución de 1200 x 1200 ppp, ofrece resultados de alta calidad. Sus funciones de copiado, escaneo y fax brindan versatilidad en un solo dispositivo. La conectividad Ethernet y USB permite una fácil integración en redes corporativas. Con una bandeja de papel de gran capacidad y opciones de manejo flexible de papel, esta impresora te permite gestionar proyectos de impresión de manera eficiente. Además, su panel de control intuitivo facilita su uso." },
    { nombre: "Ricoh MP 305", precio:  4415, id: "MP-305", img: "../assets/img/photocopier4.jpg", idCat: "fotocopiadoras", descripcion: "La Ricoh MP 305 es una impresora multifuncional compacta y versátil que se adapta perfectamente a entornos de trabajo pequeños y medianos. Con una velocidad de impresión de hasta 30 páginas por minuto y una resolución de impresión de 1200 x 1200 ppp, ofrece una calidad de impresión excepcional. Equipada con funciones de copiado, escaneo y fax, esta impresora te permite realizar una variedad de tareas de manera eficiente. Su conectividad Ethernet y USB garantiza una fácil integración en redes de trabajo. Además, cuenta con una interfaz de usuario intuitiva que simplifica la navegación y el acceso a las funciones." },
    { nombre: "EPSON L5590", precio: 411, id: "L5590", img: "../assets/img/printer1.jpg", idCat: "impresoras", descripcion: "La impresora multifuncional Epson L5590 es una opción versátil y eficiente para entornos de trabajo domésticos o de pequeñas empresas. Con un sistema de tanque de tinta integrado, esta impresora ofrece impresiones de alta calidad y un costo por página extremadamente bajo. Con una velocidad de impresión de hasta 33 páginas por minuto en blanco y negro y 20 páginas por minuto en color, puedes imprimir rápidamente tus documentos. Además, cuenta con funciones de copiado, escaneo y fax, brindando una solución completa. Su conectividad Wi-Fi y Ethernet te permite imprimir de forma inalámbrica y compartir la impresora con múltiples usuarios." },
    { nombre: "EPSON L6490", precio: 601, id: "L6490", img: "../assets/img/printer2.jpg", idCat: "impresoras", descripcion: "La impresora multifuncional Epson L6490 es una solución potente y confiable para entornos de trabajo de mediano a gran tamaño. Con su sistema de tanque de tinta de alta capacidad, ofrece impresiones de calidad excepcional y un costo por página extremadamente bajo. Con una velocidad de impresión de hasta 25 páginas por minuto en blanco y negro y color, puedes imprimir rápidamente documentos y materiales de marketing. Además, cuenta con funciones de copiado, escaneo y fax, proporcionando versatilidad en un solo dispositivo. Con conectividad Wi-Fi y Ethernet, puedes imprimir de forma inalámbrica y compartir la impresora con varios usuarios en la red. Su pantalla táctil a color facilita la navegación y el control de las funciones." },
    { nombre: "PANTUM M6559NW", precio: 209, id: "M6559NW", img: "../assets/img/printer3.png", idCat: "impresoras", descripcion: "La impresora multifuncional Pantum M6559NW es una solución compacta y eficiente para entornos de trabajo pequeños y medianos. Con una velocidad de impresión de hasta 22 páginas por minuto y una resolución de impresión de 1200 x 1200 ppp, ofrece resultados de alta calidad. Equipada con funciones de copiado, escaneo y fax, esta impresora te permite realizar diversas tareas con facilidad. Además, cuenta con conectividad Wi-Fi y Ethernet para una integración sencilla en redes de trabajo. Con su bandeja de papel de capacidad ampliable y su diseño intuitivo, la Pantum M6559NW es una opción confiable para tus necesidades de impresión diarias."},
    { nombre: "Cartucho Tóner HP 55X", precio: 302, id: "HP-55X", img: "../assets/img/spareparts1.jpg", idCat: "repuestos", descripcion: "El cartucho de tóner HP 55X Negro de Alto Rendimiento LaserJet Original es la elección perfecta para impresiones de alta calidad y duraderas. Diseñado específicamente para impresoras HP LaserJet, este cartucho ofrece un rendimiento excepcional y resultados nítidos y profesionales. Con su capacidad de alto rendimiento, puede imprimir hasta 12,500 páginas, lo que lo convierte en una opción rentable para entornos de impresión de alto volumen. Además, al ser un cartucho original de HP, garantiza una fácil instalación y compatibilidad total con tu impresora. Obtén impresiones impecables y consistentes con el cartucho de tóner HP 55X Negro de Alto Rendimiento LaserJet Original."},
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