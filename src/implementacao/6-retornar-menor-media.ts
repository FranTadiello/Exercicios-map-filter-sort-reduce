import { Alunas, turma} from "../../listaPreConstruida";
import { alunasComMedia } from "./1-retornar-medias";

function retornarMenorMedia( alunas: Alunas) : string {
    return alunasComMedia(alunas) 
        .reduce ((menor, atual) => (atual.media < menor.media ? atual : menor))
        .nome
}

console.log(retornarMenorMedia(turma));
