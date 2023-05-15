import React, { useState } from 'react';



const Cidades = () => {
    // Devido a API estar impossibilitada de usar devido ao CORS, foi criado um array de objetos com as cidades e suas respectivas populações
    const cidades = [{ "capital": ["Dublin"], "population": 4994724 }, { "capital": ["Nicosia"], "population": 1207361 }, { "capital": ["Madrid"], "population": 47351567 }, { "capital": ["Vaduz"], "population": 38137 }, { "capital": ["Sofia"], "population": 6927288 }, { "capital": ["Berlin"], "population": 83240525 }, { "capital": ["Tórshavn"], "population": 48865 }, { "capital": ["London"], "population": 67215293 }, { "capital": ["Chișinău"], "population": 2617820 }, { "capital": ["Vilnius"], "population": 2794700 }, { "capital": ["Warsaw"], "population": 37950802 }, { "capital": ["Bern"], "population": 8654622 }, { "capital": ["Mariehamn"], "population": 29458 }, { "capital": ["Reykjavik"], "population": 366425 }, { "capital": ["Vatican City"], "population": 451 }, { "capital": ["Prague"], "population": 10698896 }, { "capital": ["Minsk"], "population": 9398861 }, { "capital": ["Monaco"], "population": 39244 }, { "capital": ["Amsterdam"], "population": 16655799 }, { "capital": ["City of San Marino"], "population": 33938 }, { "capital": ["Sarajevo"], "population": 3280815 }, { "capital": ["Douglas"], "population": 85032 }, { "capital": ["Kyiv"], "population": 44134693 }, { "capital": ["Lisbon"], "population": 10305564 }, { "capital": ["Tallinn"], "population": 1331057 }, { "capital": ["Athens"], "population": 10715549 }, { "capital": ["Tirana"], "population": 2837743 }, { "capital": ["Helsinki"], "population": 5530719 }, { "capital": ["Skopje"], "population": 2077132 }, { "capital": ["Valletta"], "population": 525285 }, { "capital": ["Belgrade"], "population": 6908224 }, { "capital": ["Pristina"], "population": 1775378 }, { "capital": ["Riga"], "population": 1901548 }, { "capital": ["Moscow"], "population": 144104080 }, { "capital": ["Paris"], "population": 67391582 }, { "capital": ["St. Peter Port"], "population": 62999 }, { "capital": ["Bucharest"], "population": 19286123 }, { "capital": ["Ljubljana"], "population": 2100126 }, { "capital": ["Saint Helier"], "population": 100800 }, { "capital": ["Copenhagen"], "population": 5831404 }, { "capital": ["Brussels"], "population": 11555997 }, { "capital": ["Podgorica"], "population": 621718 }, { "capital": ["Andorra la Vella"], "population": 77265 }, { "capital": ["Vienna"], "population": 8917205 }, { "capital": ["Budapest"], "population": 9749763 }, { "capital": ["Zagreb"], "population": 4047200 }, { "capital": ["Longyearbyen"], "population": 2562 }, { "capital": ["Bratislava"], "population": 5458827 }, { "capital": ["Stockholm"], "population": 10353442 }, { "capital": ["Rome"], "population": 59554023 }, { "capital": ["Oslo"], "population": 5379475 }, { "capital": ["Gibraltar"], "population": 33691 }, { "capital": ["Luxembourg"], "population": 632275 }]

    // Cria uma promise para poder usar o then e o catch para tratar os dados em baixo
    const minhaPromise = new Promise(
        (resolve, reject) => {
            resolve(cidades);
        }
    );

    // Cria as variaveis de estado para poder setar os valores de menor e maior população
    const [menorPopulacao, setMenorPopulacao] = useState([]);
    const [maiorPopulacao, setMaiorPopulacao] = useState([]);

    minhaPromise.then((response) => {
        //Definindo o menor e o maior como o primeiro elemento do array para poder comparar com os outros elementos
        let menor = response[0];
        let maior = response[0];

        // Percorre o array e compara a população de cada elemento com a população do menor e do maior
        response.forEach(element => {
            if (element.population < menor.population) {  //se a população do elemento for menor que a do menor, o menor passa a ser o elemento
                menor = element;
            }
            if (element.population > maior.population) { // se a população do elemento for maior que a do maior, o maior passa a ser o elemento
                maior = element;
            }
        });
        //seta os valores de menor e maior nas variaveis de estado
        setMenorPopulacao(menor);
        setMaiorPopulacao(maior);
    }).catch((error) => {
        console.log(error);
    });


    return (
        //Mostra os valores de menor e maior população
        <div>
            <h1>Menor População</h1>
            <p>Capital: {menorPopulacao.capital}</p>
            <p>População: {menorPopulacao.population}</p>
            <h1>Maior População</h1>
            <p>Capital: {maiorPopulacao.capital}</p>
            <p>População: {maiorPopulacao.population}</p>

        </div>
    );
}

export default Cidades;
