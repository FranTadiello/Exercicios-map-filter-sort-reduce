import { Alunas, turma} from "../../listaPreConstruida";
import { retornarMedias } from "./1-retornar-medias";

function retornarMediaTurma( alunas : Alunas) : number {
    const somaMedia = retornarMedias(alunas)
        .reduce ((total, nota) => total + nota, 0);
    const mediaTurma = somaMedia / alunas.length;
    return parseFloat(mediaTurma.toFixed(1));
}

console.log(retornarMediaTurma(turma));