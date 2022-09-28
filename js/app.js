const productos = [
    {
        id:1,
        nombre:'Alimento Criadores',
        precio: '1800',
        descipcion: 'Para perros adultos',
        image:'img/criadores.jpg'
    },
    {
        id:2,
        nombre:'Alimento RoyalCaning',
        precio: '2300',
        descipcion: 'para cachorros',
        image:'img/RoyalCaning.jpg',
    },
    {
        id:3,
        nombre:'Alimento Raza',
        precio: '1500',
        descipcion: 'Para perros adultos',
        image:'img/raza.jpg'
    },
    {
        id:4,
        nombre:'Alimento Tiernitos',
        precio: '2000',
        descipcion: 'Para perros adultos',
        image:'img/tiernitos.jpg'
    },
    {
        id:5,
        nombre:'Alimento Tiernitos',
        precio: '2000',
        descipcion: 'Para perros adultos',
        image:'img/tiernitos.jpg'
    },
    {
        id:6,
        nombre:'Alimento Tiernitos',
        precio: '2000',
        descipcion: 'Para perros adultos',
        image:'img/tiernitos.jpg',
        
    },
    {
        id:7,
        nombre:'Alimento Tiernitos',
        precio: '2000',
        descipcion: 'Para perros adultos',
        image:'img/tiernitos.jpg'
    },
    {
        id:8,
        nombre:'Alimento Tiernitos',
        precio: '2000',
        descipcion: 'Para perros adultos',
        image:'img/tiernitos.jpg'
    },
]
const carrito = [];

const actualizarCarro = (carrito) => {
    let carroContenedor = document.querySelector('#carro');

    let container = document.querySelector('#carroContenedor');
    if(container)
    {
        container.parentNode.removeChild(container)
    }

    let div = document.createElement('div');
    div.setAttribute('id','carroContenedor');
    div.innerHTML += `<h2>Carrito de compras</h2>`;
    for (const productos of carrito) {
        div.innerHTML += `
        <div class="items-carro">
            <h3>Producto: ${productos.nombre}</h3>
            <h4>Precio: $${productos.precio}</h4>
            <h4>Cantidad:${productos.cantidad}</h4>
        </div> 
        `;
        
    }
    carroContenedor.appendChild(div);

}

 const cargarEvento = () =>
 {  
    let botones=document.querySelectorAll('.button');
    for (const button of botones)
     {
     button.addEventListener('click', ()=>{
        let prod = carrito.find(productos => productos.id == button.id);        
       if(prod) {
        prod.cantidad++;
       }
       else
       {
        let prod = productos.find(productos => productos.id == button.id)
        if(prod)
         {
            let nuevoProducto = {
                id:prod.id,
                nombre: prod.nombre,
                precio: prod.precio,
                descipcion: prod.descipcion,
                image:prod.image,
                cantidad: 1

            }
         carrito.push(nuevoProducto);
        }
       
        actualizarCarro(carrito);
       }
    })
        
    }
 }

const cargarProductos = (productos) =>{
    let container= document.querySelector('#contenedor');
    for ( const producto of productos)
    {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML= `
        <h3>${producto.nombre}</h3>
        <img src="${producto.image}" alt="${producto.descipcion}">
        <h4>${producto.descipcion}</h4>
        <h3>$${producto.precio}</h3>
        <button class="button" id="${producto.id}">Agregar al carrito</button>
        `;
        container.appendChild(div);
    }
    cargarEvento();
}
cargarProductos(productos);
