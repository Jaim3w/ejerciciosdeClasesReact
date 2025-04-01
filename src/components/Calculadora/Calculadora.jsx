import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => setResultado(parseFloat(num1) + parseFloat(num2));
    const Restar = () => setResultado(parseFloat(num1) - parseFloat(num2));
    const Multiplicar = () => setResultado(parseFloat(num1) * parseFloat(num2));
    const Dividir = () => setResultado(parseFloat(num1) / parseFloat(num2));
    const Limpiar = () => {
        setNum1('');
        setNum2('');
        setResultado(null);
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input type="number" placeholder="Número 1" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" placeholder="Número 2" value={num2} onChange={(e) => setNum2(e.target.value)} />
            
            <div className="botones">
                <button onClick={handleSumar}>Sumar</button>
                <button onClick={Restar}>Restar</button>
                <button onClick={Multiplicar}>Multiplicar</button>
                <button onClick={Dividir}>Dividir</button>
                <button onClick={Limpiar}>Limpiar</button>
            </div>

            {resultado !== null && <p>Resultado: {resultado} </p>}
        </div>
    );
};

export default Calculadora;