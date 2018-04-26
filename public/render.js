const generateLights = (lights) =>
`
    <tr>
      <td>${lights.name}</td>
      <td>${lights.name.state}</td>
    </tr>
`;

export const render = (lights) => {
    document.getElementById('lights-table').innerHTML = lights.map(generateLights);
}

export const renderError = (err = 'Error processing request') => {
    document.getElementById('lights-table').innerHTML = `
        <div>${err}</div>
    `;
}
