import React, { useState } from "react";

const RegistroEstudiantes = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [carnet, setCarnet] = useState("");
    const [estudiantes, setEstudiantes] = useState([]);

    // Agregar estudiante
    const agregarEstudiante = () => {
        if (nombre.trim() === "" || edad.trim() === "" || carnet.trim() === "") return;

        const nuevoEstudiante = {
            id: Date.now(),
            nombre,
            edad,
            carnet,
        };

        setEstudiantes([...estudiantes, nuevoEstudiante]);
        setNombre("");
        setEdad("");
        setCarnet("");
    };

    return (
        <div className="registro-container">
            <h1>Registro de Estudiantes</h1>
            <div className="registro-input">
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                />
                <input
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    placeholder="Edad"
                />
                <input
                    type="text"
                    value={carnet}
                    onChange={(e) => setCarnet(e.target.value)}
                    placeholder="Carnet"
                />
                <button onClick={agregarEstudiante}>Agregar</button>
            </div>
            <h2>Listado:</h2>
            <ul className="lista-estudiantes">
                {estudiantes.map((estudiante) => (
                    <li key={estudiante.id}>
                        <span><strong>Nombre:</strong> {estudiante.nombre} |</span>
                        <span><strong> Edad:</strong> {estudiante.edad} |</span>
                        <span><strong> Carnet:</strong> {estudiante.carnet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegistroEstudiantes;
