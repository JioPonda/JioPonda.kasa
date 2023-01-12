const Properties = () => {
  let logement = [];
  fetch("./logements.json")
    .then((res) => res.json())
    .then((data) => data.push((logement = data.logement)));

  return { logement: [...logement] };
};

export default Properties;
