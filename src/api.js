const API_URL = 'http://localhost:5000';  // URL del backend

export const obtenerProductos = async () => {
    try {
        const response = await fetch(`${API_URL}/productos`);
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los productos:', error.message);
        return [];
    }
};

export const crearProducto = async (producto) => {
    try {
        const response = await fetch(`${API_URL}/productos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto),
        });
        if (!response.ok) {
            throw new Error('Error al crear el producto');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al crear el producto:', error.message);
        return null;
    }
};

export const actualizarProducto = async (id, producto) => {
    try {
        const response = await fetch(`${API_URL}/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto),
        });
        if (!response.ok) {
            throw new Error('Error al actualizar el producto');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al actualizar el producto:', error.message);
        return null;
    }
};

export const eliminarProducto = async (id) => {
    try {
        const response = await fetch(`${API_URL}/productos/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error al eliminar el producto');
        }
        return true;
    } catch (error) {
        console.error('Error al eliminar el producto:', error.message);
        return false;
    }
};
