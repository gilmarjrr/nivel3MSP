import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { codEditora } = req.query;

      const codigo = parseInt(codEditora as string, 10);

      if (isNaN(codigo)) {
        res.status(400).json({ message: 'Código de editora inválido' });
        return;
      }

      const editora = controleEditora.getEditoras().find(e => e.codEditora === codigo);

      if (editora) {
        res.status(200).json(editora); 
      } else {
        res.status(404).json({ message: 'Editora não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};
