const generateLights = (light) =>
`
    <tr>
      <td>${light.name}</td>
      <td>${light.state.on}</td>
    </tr>
`;

export const render = (lights) => {

  let lightsTable = [];
  const tableHeader =`
  <tr>
    <th>Light Name</th>
    <th>ON</th>
  </tr>`;

  lightsTable.push(tableHeader);
  lightsTable = lightsTable.concat(lights.map(generateLights)).join("");
  document.getElementById('lights-table').innerHTML = lightsTable;


}

export const renderError = (err = 'Error processing request') => {
    document.getElementById('results').innerHTML = `
        <div>${err}</div>
    `;
}
