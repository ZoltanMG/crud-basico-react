import React, { useState } from 'react';
import uniqid from 'uniqid';

const ListadoNombres = () => {

    const [nombre, setNombre] = useState('')
    const [listaNombres, setListaNombres] = useState([])


    // - addNombre realiza lo siguiente:
    // evita que la pagina se actualice cuando se envia el formulario,
    // crea un objeto con un id unico y asigna el nombre regiatrado por el usuario en el formulario,
    // añade el objeto a la array listaNombre,
    // vacia el imputo del fomulario diligenciado previamente.
    const addNombre = (e) => {
        e.preventDefault()
        const nuevoNombre = {
            id: uniqid(),
            nombre: nombre
        }
        setListaNombres([...listaNombres, nuevoNombre])
        setNombre('')
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
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formularios para añadir nombres</h2>
                    <form onSubmit={(e) => addNombre(e)} className="form-group">
                        <input
                            onChange={(e) => { setNombre(e.target.value) }}
                            className="form-control mb-3"
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            required
                        />
                        <input
                            className="btn btn-info btn-block"
                            type="submit"
                            value="Registrar nombre"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ListadoNombres;