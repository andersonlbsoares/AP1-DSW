import React, { useState } from 'react';
const Pokemon = () => {
    // Aqui em baixo, o useState está sendo usado para definir o estado inicial do componente
    const [flip, setFlip] = useState(true)

    // Aqui a função invert está sendo usada para inverter o valor de flip (true -> false e false -> true) e atualizando o valor usando o setFlip
    function invert() {
        setFlip(!flip)
        console.log(flip)
    }

    return (
        <div>
            {/* Aqui em baixo, o botão está sendo usado para chamar a função invert */}
            <button onClick={invert}>Inverter</button>

            {/* Aqui em baixo, o operador ternário está sendo usado para definir qual imagem vai ser exibida, se for true, exibe a imagem normal, se for false, exibe a imagem das costas */}
            {flip ? <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" height={300} alt="Eevee" /> :
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png" height={300} alt="Eevee" />}
        </div>
    );
}

export default Pokemon;