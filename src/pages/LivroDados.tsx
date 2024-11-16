import React, { useState } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const LivroDados: React.FC = () => {
  const baseURL = "http://localhost:3000/api/livros";
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(0);
  const [opcoes, setOpcoes] = useState<Array<any>>([]);
  const router = useRouter();

  const incluirLivro = async (livro: any) => {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });
    const data = await response.json();
    return data.ok;
  };

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    const sucesso = await incluirLivro(livro);
    if (sucesso) {
      router.push('/LivroLista');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Incluir Livro</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Incluir Novo Livro</h1>
        <form onSubmit={incluir}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Título</label>
            <input
              type="text"
              id="titulo"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">Resumo</label>
            <textarea
              id="resumo"
              className="form-control"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="autores" className="form-label">Autores (separados por nova linha)</label>
            <textarea
              id="autores"
              className="form-control"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="codEditora" className="form-label">Editora</label>
            <select
              id="codEditora"
              className="form-control"
              value={codEditora}
              onChange={tratarCombo}
            >
              {opcoes.map((opcao) => (
                <option key={opcao.codEditora} value={opcao.codEditora}>
                  {opcao.nome}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Incluir</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
