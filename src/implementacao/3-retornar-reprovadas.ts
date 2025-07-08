import { Alunas, turma} from "../../listaPreConstruida";
import { retornarMedias } from "./1-retornar-medias";

function retornarReprovadas( alunas : Alunas) {
    const medias = retornarMedias(alunas);
    return alunas
        .map ((aluna, index) => ({ nome: aluna.nome, media:medias[index] }))
        .filter((aluna) => aluna.media < 7)
        .map((reprovada) => reprovada.nome );
}

console.log(retornarReprovadas(turma));