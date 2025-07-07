import { Alunas, turma} from "../../listaPreConstruida";
import { retornarMedias } from "./1-retornar-medias";

function retornarAprovadas( alunas : Alunas) {
    const medias = retornarMedias(alunas);
    return alunas
    .map ((aluna, index) => ({ nome: aluna.nome, media:medias[index] }))
    .filter((aluna) => aluna.media >= 7)
    .map((aprovada) => aprovada.nome );
}

console.log(retornarAprovadas(turma));

