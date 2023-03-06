import React, {useState} from 'react';
import styled from 'styled-components';

const Carrito = () => {
    const[carrito, cambiarCarrito] = useState([
        { id: 1, cantidad: 2, nombre: 'Producto1'},
        { id: 2, cantidad: 3, nombre: 'Producto2'},
        { id: 3, cantidad: 1, nombre: 'Producto3'}
    ]);
    return ( 
        <div>
            <h3>Carrito de compras</h3>
            {carrito.length > 0 ?
                carrito.map( (producto, index) => {
                    return(
                        <Producto>
                            <NombreProducto> 
                                {producto.nombre} 
                            </NombreProducto>
                            <NombreProducto> Cantidad: {producto.cantidad} </NombreProducto>
                        </Producto>
                    );
                })
            :
                <p>Aun no tenemos productos en el carrito</p>    
            }
        </div>
     );
}
 const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
 `;

 const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
 `;
export default Carrito;