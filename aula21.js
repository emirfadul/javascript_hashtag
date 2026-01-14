let car = {
    brand : "Suzuki",
    ano : 2000,
    modelo: "Hayabusa 1300R",
    cor: "Preto",
    km: 86000,
    valor: 30000,
}

for (info in car){
    console.log(info+" : "+car[info]);
}
