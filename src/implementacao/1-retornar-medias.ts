import { Alunas, turma } from "../../listaPreConstruida";

export function retornarMedias( alunas: Alunas) : number[] {
    return alunas.map(aluna => {
        const { p1, p2, p3} = aluna.prova;
        const media = (p1+ p2+ p3)/3;
        return parseFloat(media.toFixed(1));
    })
    
}

//console.log(retornarMedias(turma));