/*const arrayTrampos = [
    {
      titulo: "TI master",
      subtitulo: "Fazer contato com usuário pelo telefone e whatsapp",
      data: "29/08/2023",
      texto: "Fazer ligação para clientes pelo telefone para suporte técnico"
    },
    {
      titulo: "Elétrica Super Volts",
      subtitulo: "Serviço de reparos elétricos residenciais",
      data: "25/08/2023",
      texto: "Instalações elétricas, ventiladores, lâmpadas, chuveiros e reparos elétricos"
    },
    {
      titulo: "Venda +",
      subtitulo: "Venda de assinatura de livros educativos",
      data: "29/08/2023",
      texto: "Serviço Home Office - Fazer contato com escolas de qualquer local para vendas de livros educativos, envio de email de  marketing e vendas"
    },
  ]
  

  console.log(arrayTrampos)

//criando o elemento 

for (i = 0; i<arrayTrampos.length; i++ ){
const article = document.createElement('article');

//populando 
article.innerHTML = `<h3>${arrayTrampos[i].titulo}</h3>
<p class="subtitulo">${arrayTrampos[i].subtitulo}</p>
<p class="data">${arrayTrampos[1].data}</div>
<p>${arrayTrampos[i].texto}</p>`

  //add no dom
  const main = document.querySelector('main')
  main.appendChild(article)
}


  //add atrib
  //article.setAttribute('id','post-2')

/*
  //********************************************************************************************
  //29/08/2023
  // Função para buscar e exibir dados
  function Trampos() {
    const resultadoDiv = document.getElementById("resultado");

    // Aqui você pode implementar a lógica de busca, por exemplo, pegando um dado aleatório do vetor
    const dadoAleatorio = dados[Math.floor(Math.random() * dados.length)];

    // Exibe o resultado na página
    resultadoDiv.innerHTML = `O dado buscado é: ${dadoAleatorio}`;
}

// Associa a função ao evento de clique do botão
const botaoBuscarDados = document.getElementById("buscaTrampos");
botaoBuscarDados.addEventListener("click", buscarDados);

*/
