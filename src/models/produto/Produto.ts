import Categoria from "../categoria/Categoria";
interface Produtos {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  laboratorio: string;
  preco: number;
  foto: string;
  categoria?: Categoria | null;
}

export default Produtos;