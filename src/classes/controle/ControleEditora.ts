import { Editora } from "../modelo/Editora";

export class ControleEditora {
    private editoras: Array<Editora> = [
        new Editora(1, "Alta Books"),
        new Editora(2, "Pearson"),
        new Editora(3, "Addison Wesley"),
    ];

    getEditoras(): Array<Editora> {
        return this.editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        return this.editoras.find(editora => editora.codEditora === codEditora)?.nome;
    }
}
