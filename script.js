fetch('https://my-json-server.typicode.com/Joaremio/veiculos-api/veiculos')
      .then(response => response.json())
      .then(json => {
        const veiculos = json;
        veiculos.forEach(veiculo => {
          criaCard(veiculo)
        });
      })

function criaCard(veiculo){
    const card = document.createElement("div");
    const conteudo = document.getElementById("conteudo");
    card.classList.add("card-style");
    card.innerHTML = `
    <div class="card-image">
      <img src=${veiculo.imagem} alt="Imagem do ${veiculo.marca} ${veiculo.modelo}">
    </div>
    <div class="card-details">
      <h3 id="veiculo-title">${veiculo.marca} ${veiculo.modelo}</h3>
      <p>Ano de Fabricação: ${veiculo.anoFabricacao}</p>
      <p>Cor: ${veiculo.cor}</p>
      <p>Tipo: ${veiculo.tipo}</p>
      
      <p>Quilometragem: ${veiculo.quilometragem} km</p>
      <p>Número de Portas: ${veiculo.numeroPortas}</p>
    </div>
  `;
    conteudo.appendChild(card);
}