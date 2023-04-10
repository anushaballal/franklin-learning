export default async function decorate(block) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.append(thead, tbody);
  const productData = getJSONData();
  /* [...block.children].forEach((child, i) => {
    const row = document.createElement("tr");
    if (i) tbody.append(row);
    else thead.append(row);
    [...child.children].forEach((col) => {
      const cell = buildCell(i);
      cell.innerHTML = col.innerHTML;
      row.append(cell);
    });
  });
  block.innerHTML = "";
  block.append(table); */
}

async function getJSONData() {
  const response = await fetch(
    "https://main--franklinlearning--anushaballal.hlx.live/project-data.json?sheet=products"
  );
  const jsonData = await response.json();
  console.log(jsonData);
}
