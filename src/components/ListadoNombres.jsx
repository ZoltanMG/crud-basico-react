import React, { useState } from 'react';
import uniqid from 'uniqid';

const ListadoNombres = () => {

    const [nombre, setNombre] = useState('')
    const [listaNombres, setListaNombres] = useState([])

    const addNombre = (e) => {
        e.preventDefault()
        const nuevoNombre = {
            id: uniqid(),
            nombre: nombre
        }
        setListaNombres([...listaNombres, nuevoNombre])
    }

    return (
        <div>
            <h2>Aplicación de CRUD básica.</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                </div>
                <div className="col">
                    <h2>Formularios para añadir nombres</h2>
                    <form onSubmit={(e) => addNombre(e)} className="form-group">
                        <input onChange={(e) => { setNombre(e.target.value) }} className="form-control mb-3" type="text" placeholder="Nombre" />
                        <input className="btn btn-info btn-block" type="submit" value="Registrar nombre" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ListadoNombres;