import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import LinhaLivro from '../componentes/LinhaLivro';
import styles from '../styles/Home.module.css';

const LivroLista: React.FC = () => {
  const baseURL = "http://localhost:3000/api/livros";
  const [livros, setLivros] = useState<Array<any>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  const obterLivros = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    setLivros(data);
    setCarregado(true);
  };

  const excluirLivro = async (codigo: number) => {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data.ok;
  };

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
      obterLivros();
    }
  };

  useEffect(() => {
    if (!carregado) {
      obterLivros();
    }
  }, [carregado]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Livros</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Autores</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
