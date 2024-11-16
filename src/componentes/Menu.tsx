import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" passHref>
          <a className="navbar-brand">Loja Next</a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista" passHref>
                <a className="nav-link">Lista de Livros</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" passHref>
                <a className="nav-link">Dados do Livro</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
