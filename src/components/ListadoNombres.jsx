import React, { useState } from 'react';
import uniqid from 'uniqid';

const ListadoNombres = () => {
    const [nombre, setNombre] = useState('');
    const [listaNombres, setListaNombres] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState('');
    const [error, setError] = useState(null);

    // - addNombre realiza lo siguiente:
    // evita que la pagina se actualice cuando se envia el formulario,
    // crea un objeto con un id unico y asigna el nombre regiatrado por el usuario en el formulario,
    // añade el objeto a la array listaNombre,
    // vacia el imputo del fomulario diligenciado previamente.
    const addNombre = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            setError('El campo nombre esta vacio.');
            return;
        }
        const nuevoNombre = {
            id: uniqid(),
            nombre: nombre
        }
        setListaNombres([...listaNombres, nuevoNombre]);
        setNombre('');
        setError(null);
    }

    // - deleteNombre realiza:
    // crea una nueva array omitiendo el objeto con la id pasada,
    // cambia la nueva array por listaNombres.
    const deleteNombre = (id) => {
        const nuevaArray = listaNombres.filter(item => item.id !== id);
        setListaNombres(nuevaArray);
    }

    const editar = (item) => {
        setModoEdicion(true);
        setNombre(item.nombre);
        setId(item.id);
    }

    const editarNombre = (e) => {
        e.preventDefault();
        const nuevoArray = listaNombres.map(item =>
            item.id === id ? { id: id, nombre: nombre } : item
        );
        setListaNombres(nuevoArray);
        setModoEdicion(false);
        setNombre('');
    }

    return (
        <div>
            <h2>Aplicación de CRUD básica.</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listaNombres.map(item =>
                                <li key={item.id} className="list-group-item">
                                    {item.nombre}
                                    <button
                                        className="btn btn-danger float-right"
                                        onClick={() => { deleteNombre(item.id) }}
                                    >
                                        Eliminar
                                    </button>
                                    <button
                                        className="btn btn-info float-right"
                                        onClick={() => { editar(item) }}
                                    >
                                        Editar
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>
                        {modoEdicion ? 'Actualizar nombre' : 'Formularios para añadir nombres'}
                    </h2>
                    <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
                        <input
                            onChange={(e) => { setNombre(e.target.value) }}
                            className="form-control mb-3"
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                        />
                        <input
                            className="btn btn-info btn-block"
                            type="submit"
                            value={modoEdicion ? 'Editar nombre' : 'Registrar nombre'}
                        />
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ) :
                            (
                                <div></div>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default ListadoNombres;