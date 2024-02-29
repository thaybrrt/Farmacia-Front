import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/categoria/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';


function FormularioCategorias() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert("Erro ao buscar pela Categoria")
            console.log(error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/home")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('A Categoria foi atualizada com sucesso!')
            } catch (error: any) {
                alert("Erro ao atualizarpela Categoria")
                console.log(error);
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('A Categoria foi cadastrada com sucesso!')
            } catch (error: any) {
                alert("Erro ao cadastrar pela Categoria")
                console.log(error);
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
          <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
          </h1>
    
          <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
            <div className="flex flex-col gap-2">
              <label htmlFor="nome">Nome da categoria</label>
              <input
                type="text"
                placeholder="Nome"
                name='nome'
                className="border-2 border-slate-700 rounded p-2"
                value={categoria.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="descricao">Descrição da categoria</label>
              <textarea
                placeholder="Descrição"
                name='descricao'
                className="border-2 border-slate-700 rounded p-2"
                value={categoria.descricao}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
              />
            </div>
            <button
              className="rounded text-slate-100 bg-emerald-800 hover:bg-emerald-600 w-1/2 py-2 mx-auto block"
              type="submit"
            >
              {id === undefined ? 'Cadastrar' : 'Editar'}
            </button>
          </form>
        </div>
      );
    }
    
    export default FormularioCategorias;