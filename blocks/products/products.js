/* eslint-disable comma-dangle */
/* eslint-disable quotes */
function getJSONData() {
  const response = fetch(
    "https://day-5--franklinlearning--anushaballal.hlx.page/project-data.json?sheet=products"
  );

  console.log(response);
  /* const jsonData = response.json(); */

  return response;
}

export default async function decorate(block) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.append(thead, tbody);
  const productData = getJSONData();
  const products = productData.data;
  console.log(products);
  /* for (let product in productData.data) {
    console.log(productData.data);
    const row = document.createElement("tr");
    tbody.append(row);
    const cell1 = document.createElement("td");
    cell1.innerHTML = product.products;
    row.append(cell1);
    const cell2 = document.createElement("td");
    cell2.innerHTML = product[release - year];
    row.append(cell2);
  } */
  block.innerHTML = "";
  block.append(table);
}
