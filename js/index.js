class App {
  async getData() {
    return await fetch(
      "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }

  createCard(data) {
    let h4 = document.createElement("h4");
    h4.innerHTML = data.name;
    let pType = document.createElement("p");
    pType.innerHTML = data.property_type;
    pType.classList.add("room__type");
    let small = document.createElement("small");
    small.innerHTML = "/NOITE";
    let pPrice = document.createElement("p");
    pPrice.innerHTML = `R$ ${data.price.toFixed(2).replace(".", ",")}`;
    pPrice.classList.add("room__price");
    // let pTotal = document.createElement("p");
    // pTotal.classList.add("room__total");
    // pTotal.innerHTML = "Total de R$ 866,00";
    let cardImg = document.createElement("div");
    cardImg.classList.add("room__image");
    cardImg.style.backgroundImage = `url(${data.photo})`;
    let cardText = document.createElement("div");
    cardText.classList.add("room__text");
    let card = document.createElement("article");
    card.classList.add("card__room");

    pPrice.appendChild(small);
    cardText.appendChild(h4);
    cardText.appendChild(pType);
    cardText.appendChild(pPrice);
    // cardText.appendChild(pTotal);
    card.appendChild(cardImg);
    card.appendChild(cardText);

    return card;
  }

  createGrid(data) {
    // console.log("CRIAR GRID", data);
    const quartos = document.querySelector(".grid__rooms");
    data.forEach((item) => {
      let card = this.createCard(item);
      quartos.appendChild(card);
    });
  }
}

const app = new App();

window.onload = async function () {
  const teste = await app.getData();
  await app.createGrid(teste);
};
