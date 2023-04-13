/* eslint-disable comma-dangle */
/* eslint-disable quotes */
async function getJSONData() {
  const response = await fetch(
    "https://main--franklinlearning--anushaballal.hlx.page/project-data.json?sheet=products"
  );
  const jsonData = await response.json();
  return jsonData;
}

export default async function decorate(block) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.append(thead, tbody);
  const productData = await getJSONData();
  const products = productData.data;
  for (let i = 0; i < products.length; i += 1) {
    const row = document.createElement("tr");
    tbody.append(row);
    const cell1 = document.createElement("td");
    cell1.innerHTML = products[i].products;
    row.append(cell1);
    const cell2 = document.createElement("td");
    cell2.innerHTML = products[i].releaseYear;
    row.append(cell2);
  }
  block.innerHTML = "";
  block.append(table);
  console.log("done");
}
