import { NextApiRequest, NextApiResponse } from 'next';
class ControleLivro {
  private livros: { id: number; titulo: string; autor: string }[] = [
    { id: 1, titulo: 'Use a Cabeça: Java', autor: "Bert Bates, Kathy Sierra" },
    { id: 2, titulo: 'Java, como Programar', autor: "Paul Deitel, Harvey Deitel" },
    { id: 3, titulo: 'Core Java for the Impatient', autor: "Cay Horstmann" }
  ];

  obterLivros() {
    return this.livros;
  }

  incluir(livro: { titulo: string; autor: string }) {
    const id = this.livros.length + 1;
    const novoLivro = { id, ...livro };
    this.livros.push(novoLivro);
    return novoLivro;
  }

  excluir(id: number) {
    this.livros = this.livros.filter(livro => livro.id !== id);
    return { id };
  }
}

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros); 
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' });
    }
  } else if (req.method === 'POST') {
    try {
      const { titulo, autor } = req.body;
      if (!titulo || !autor) {
        return res.status(400).json({ message: 'Título e autor são obrigatórios' });
      }
      const novoLivro = controleLivro.incluir({ titulo, autor });
      res.status(200).json({ message: 'Livro adicionado com sucesso', livro: novoLivro });
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' }); 
  }
};
