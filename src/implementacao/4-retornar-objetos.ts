import { Alunas, turma} from "../../listaPreConstruida";
import { alunasComMedia } from "./1-retornar-medias";

type ListaComMedia = { 
          nome: String , 
          media: Number, 
          aprovada: Boolean 
      }
      
function retornarObjetos( alunas: Alunas) : ListaComMedia[] {
    
    return alunasComMedia(alunas).map ((aluna) => ({ 
        nome: aluna.nome, 
        media:aluna.media,
        aprovada: aluna.media >= 7 
    }));
}

console.log(retornarObjetos(turma));