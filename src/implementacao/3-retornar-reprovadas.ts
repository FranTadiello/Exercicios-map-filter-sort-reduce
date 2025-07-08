import { Alunas, turma} from "../../listaPreConstruida";
import { alunasComMedia } from "./1-retornar-medias";

function retornarReprovadas( alunas : Alunas) {
    
    return alunasComMedia(alunas)
        .filter((aluna) => aluna.media < 7)
        .map((reprovada) => reprovada.nome );
}

console.log(retornarReprovadas(turma));