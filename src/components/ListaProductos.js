import React, { useState, useEffect } from 'react';
import { obtenerProductos, eliminarProducto } from '../api';  // Importar funciones de la API


function ListaProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        const data = await obtenerProductos();
        setProductos(data);
    };

    const eliminar = async (id) => {
        const exito = await eliminarProducto(id);
        if (exito) {
            cargarProductos();
            alert('Producto eliminado correctamente');
        } else {
            alert('Error al eliminar el producto');
        }
    };

    const verDetalle = (id) => {
        alert(`Ver detalle del producto con ID: ${id}`);
        // Aquí podrías redireccionar a la página de detalle del producto
    };

    const editarProducto = (id) => {
        alert(`Editar producto con ID: ${id}`);
        // Aquí podrías redireccionar a la página de edición del producto
    };

    return (
        <div className="productos-list">
            <h2>Lista de Productos</h2>
            <ul>
                {productos.map(producto => (
                    <li key={producto.id}>
                        <span>{producto.nombre}</span>
                        <button onClick={() => verDetalle(producto.id)}>Ver Detalle</button>
                        <button onClick={() => editarProducto(producto.id)}>Editar</button>
                        <button onClick={() => eliminar(producto.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaProductos;
