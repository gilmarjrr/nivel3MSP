import { Livro } from "../modelo/Livro";

export class ControleLivros {
    private livros: Array<Livro> = [
        new Livro(1, 1, "Use a Cabeça: Java", "Use a Cabeça! Java é uma experiência completa de aprendizado em\n programação orientada a objetos (OO) e Java.", ["Bert Bates", "Kathy Sierra"]),
        new Livro(2, 2, "Java, como Programar", "Milhões de alunos e profissionais aprenderam programação e\n desenvolvimento de software com os livros Deitel", ["Paul Deitel", "Harvey Deitel"]),
        new Livro(3, 3, "Core Java for the Impatient", "eaders familiar with Horstmann's original, two-volume ''Core Java'' boos who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.", ["Cary Horstmann"]),
    ];

    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(novoLivro: Livro): void {
        const novoCodigo = Math.max(...this.livros.map(livro => livro.codigo), 0) + 1;
        novoLivro.codigo = novoCodigo;
        this.livros.push(novoLivro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}
