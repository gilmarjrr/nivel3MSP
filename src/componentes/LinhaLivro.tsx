import React from 'react';
import { ControleEditora } from '../classes/controle/ControleEditora'; 

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: {
    id: number;
    titulo: string;
    autor: string;
    codEditora: number;
  };
  excluir: () => void; 
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.autor}</td>
      <td>{nomeEditora}</td>
      <td>
        <button className="btn btn-danger" onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};

export default LinhaLivro;
