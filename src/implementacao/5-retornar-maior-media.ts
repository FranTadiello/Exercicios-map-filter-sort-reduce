import { Alunas, turma} from "../../listaPreConstruida";
import { alunasComMedia } from "./1-retornar-medias";

function retornarMaiorMedia(alunas : Alunas) : string {
    const melhor = alunasComMedia(alunas) 
        .reduce ((maior, atual) => (atual.media > maior.media ? atual : maior))
    return melhor.nome;
}

console.log(retornarMaiorMedia(turma));