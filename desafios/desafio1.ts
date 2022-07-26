// DESAFIO 1//
/*Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";*/

// RESPOSTA//
interface Employee {
    code: number;
    name: string;
}

let employee = { code: 10 , name: "John" };

// RESPOSTA 2 // Exemplo abaixo feito no modelo que consta na documentação TS - Código roda direto no TS //

/*interface Employee {
    employeeCode: number;
    employeeName: string;
}

function greeter(person: Employee) {
    return (`Funcionário: ${person.employeeCode}`) + " - " + person.employeeName;
}

let employee = { employeeCode: 10 , employeeName: "John" };

document.body.textContent = greeter(employee);*/