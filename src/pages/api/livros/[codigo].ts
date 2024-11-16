import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      const { codigo } = req.query;

      const id = parseInt(codigo as string, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Código do livro inválido' });
      }

      // Excluir o livro
      const livroExcluido = controleLivro.excluir(id);
      res.status(200).json({ message: 'Livro excluído com sucesso', livro: livroExcluido });
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' }); 
  }
};
