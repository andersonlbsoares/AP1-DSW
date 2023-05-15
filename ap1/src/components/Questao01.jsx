import React, { useEffect, useState } from 'react';

function Questao01X() {
    const [alunosAprovados, setAlunosAprovados] = useState([]);


    // essa função vai ser passada para o componente filho (Questao01Y) como propriedade para que o filho possa chamar ela
    // e passar o array de alunos com a média, garantindo a comunicação entre filho e pai
    const receberMedias = (medias) => {

        // aqui em baixo, o filter está sendo usado para criar um novo array com os alunos aprovados
        const alunosAprovados = medias.filter((aluno) => aluno.media >= 7);

        // aqui em baixo, o setAlunosAprovados está sendo usado para definir o novo array de alunos aprovados
        setAlunosAprovados(alunosAprovados);
    };

    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
    ];

    return (
        <div>
            {/* Chamada do filho passando os alunos e a função que vai permitir a comunicação filho->pai  */}
            <Questao01Y alunos={alunos} receberMedias={receberMedias} />

            <h2>Alunos Aprovados</h2>
            <ul>
                {/* aqui em baixo, o map está sendo usado para criar uma lista de elementos <li> com os alunos aprovados  */}

                {alunosAprovados.map((aluno) => (
                    <li key={aluno.nome}>
                        {aluno.nome} - {aluno.media}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const Questao01Y = ({ alunos, receberMedias }) => {
    // O useEffect está sendo usado para calcular a média de cada aluno e retornar para o pai (Questao01X)
    useEffect(() => {
        const medias = alunos.map((aluno) => {
            const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
            return media;
        });

        // aqui em baixo, o map está sendo usado para criar um novo array de objetos 
        // com as mesmas propriedades dos objetos do array alunos, mas com a propriedade media adicionada
        // dai retorna esse novo array para o pai (Questao01X) através da função receberMedias 
        receberMedias(alunos.map((aluno, index) => ({ ...aluno, media: medias[index] })));
    }, []);


}
export default Questao01X;