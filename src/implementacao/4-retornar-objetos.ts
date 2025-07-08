import { Alunas, turma} from "../../listaPreConstruida";
import { retornarMedias } from "./1-retornar-medias";

type ListaComMedia = { 
          nome: String , 
          media: Number, 
          aprovada: Boolean 
      }
      
function retornarObjetos( alunas: Alunas) : ListaComMedia[] {
    const medias = retornarMedias(alunas);
    return alunas.map ((aluna, index) => ({ 
        nome: aluna.nome, 
        media:medias[index],
        aprovada: medias[index] >= 7 
    }));
}

console.log(retornarObjetos(turma));