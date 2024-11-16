import { NextApiRequest, NextApiResponse } from 'next';
import CodEditora from './[codEditora]';

class ControleEditora {
  getEditoras() {
    return [
      { codEditora: 1, nome: 'Alta Books' },
      { codEditora: 2, nome: 'Bookman' },
      { codEditora: 3, nome: 'Addison Wesley' },
      { codEditora: 4, nome: 'Pearson'},

      {nome: 'Addison Wesley'}
    ];
  }
}

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras); 
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' }); 
  }
};
