import { Link } from 'react-router-dom'
import Categoria from '../../../models/categoria/Categoria';



interface CardCategoriasProps {
    categoria : Categoria
}

function CardTemas({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-emerald-950 text-white font-bold text-2xl'>{categoria.nome}</header>

            <p className='p-8 text-3xl bg-emerald-50 h-full'>{ categoria.descricao }</p>
            <div className='flex'>

               <Link to={`/editarCategoria/${ categoria.id }`} className='w-full text-slate-100 bg-emerald-950 hover:font-bold flex items-center justify-center py-2'>
                <button>Editar</button>
                </Link> 


                <Link to={`/deletarCategoria/${ categoria.id }`} className='text-slate-100 bg-emerald-900 hover:font-bold w-full flex items-center justify-center py-2'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardTemas