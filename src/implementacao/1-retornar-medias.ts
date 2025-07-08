import { Alunas, turma } from "../../listaPreConstruida";

export function retornarMedias( alunas: Alunas) : number[] {
    return alunas.map(aluna => {
        const { p1, p2, p3} = aluna.prova;
        const media = (p1+ p2+ p3)/3;
        return parseFloat(media.toFixed(1));
    })   
}

export function alunasComMedia(alunas: Alunas) {
  const medias = retornarMedias(alunas)
  return alunas.map((aluna, i) => ({ nome: aluna.nome, media: medias[i] }))
}

//console.log(alunasComMedia(turma));