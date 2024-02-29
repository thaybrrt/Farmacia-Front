import { useEffect, useState } from "react"

import { Dna } from "react-loader-spinner"
import CardCategorias from "../cardCategorias/CardCategorias"
import { buscar } from "../../../services/Service"
import Categoria from "../../../models/categoria/Categoria"



function ListaCategorias() {

    const [categories, setCategories] = useState<Categoria[]>([])

    
    async function buscarCategorias() {
        try {

            await buscar('/categorias', setCategories)

        } catch (error: any) {
            alert("Erro ao buscar Categorias")
            console.log(error);
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categories.length])

    return (
        <>
            {/** Animação de busca */}
            {categories.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                            {categories.map((category) => (
                                <>
                                    <CardCategorias key={category.id} categoria={category} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ListaCategorias;