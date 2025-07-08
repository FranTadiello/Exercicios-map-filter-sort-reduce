import { Alunas, turma} from "../../listaPreConstruida";
import { alunasComMedia } from "./1-retornar-medias";

function retornarAprovadas( alunas : Alunas) {
    
    return alunasComMedia(alunas)
    .filter((aluna) => aluna.media >= 7)
    .map((aprovada) => aprovada.nome );
}

console.log(retornarAprovadas(turma));

