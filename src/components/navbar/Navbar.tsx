import { Link } from "react-router-dom"

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-emerald-800 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia Quero Remédios</Link>

            <div className='flex gap-3 cursor-pointer'>
                        <Link to='/home' className='hover:bg-[#489c79] py-1 px-4 rounded-3xl duration-300'>Iniciar</Link>
                        <Link to='/categorias' className='hover:bg-[#489c79] py-1 px-4 rounded-3xl duration-300'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:bg-[#489c79] py-1 px-4 rounded-3xl duration-300'>Cadastrar Categoria</Link>
                    </div>
          </div>
        </div>
    </>
  )
}

export default Navbar