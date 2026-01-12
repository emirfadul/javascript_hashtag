// Lista de funcionários de um zoológico
let funcionarios = [
  {
    nome: "João",
    categoria: "veterinário",
    salario: 3500,
    disponivel: true,
  },
  {
    nome: "Maria",
    categoria: "administrativo",
    salario: 1800,
    disponivel: true,
  },
  {
    nome: "Ricardo",
    categoria: "tratador",
    salario: 2500,
    disponivel: false,
  },
  {
    nome: "Renata",
    categoria: "tratador",
    salario: 2500,
    disponivel: false,
  },
  {
    nome: "Paulo",
    categoria: "veterinário",
    salario: 2500,
    disponivel: false,
  },
];

//Lista de funcionários por categoria

function listarFuncionariosCategoria(categoria) {
  console.log("Funcionários na categoria " + categoria);
  for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].categoria === categoria) {
      console.log(funcionarios[i].nome);
    }
  }
}

listarFuncionariosCategoria("veterinário");

// Função calcular o total gasto em salário
function calcularSalario(){
  let totalSalarios = 0;
  for (let i = 0; i < funcionarios.length; i++) {
    totalSalarios += funcionarios[i].salario;
  }
  return totalSalarios;
}

console.log("Total de salarios R$ "+calcularSalario());


// Função contar funcionários que estão disponíveis = true;
function contarFuncionariosDisponiveis() {
  let contador = 0;
  for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].disponivel === true) {
      contador++;
    }

  }
  return contador;
}

console.log("Total de funcionários disponíveis: "+contarFuncionariosDisponiveis());
console.log(contarFuncionariosDisponiveis().nome);