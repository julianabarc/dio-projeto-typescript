// DESAFIO 2//
/*Como podemos melhorar esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

// RESPOSTA // 
enum Trabalho {
    Atriz,
    Padeiro
}

interface dadosPessoais {
    nome: string;
    idade: number;
    profissao: Trabalho;
}

let Pessoa1: dadosPessoais = {
    nome: 'Maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let Pessoa2: dadosPessoais = {
    nome: 'Roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let Pessoa3: dadosPessoais = {
    nome: 'Laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let Pessoa4: dadosPessoais = {
    nome: 'Carlos',
    idade: 19,
    profissao: Trabalho.Padeiro
};