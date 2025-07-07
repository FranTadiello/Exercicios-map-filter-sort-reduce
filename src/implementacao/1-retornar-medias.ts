import { Alunas, turma } from "../../listaPreConstruida";

function retornarMedias( alunas: Alunas) : number[] {
    return alunas.map(aluna => {
        const { p1, p2, p3} = aluna.prova;
        const media = (p1+ p2+ p3)/3;
        return (media);
    })
    
}

console.log(retornarMedias(turma));