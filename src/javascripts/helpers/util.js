const printToDomAdd = (txt, id) => {
  const selectedDiv = document.getElementById(id);
  selectedDiv.innerHTML += txt;
};

const printToDomRep = (txt, id) => {
  const selectedDiv = document.getElementById(id);
  selectedDiv.innerHTML = txt;
};

export default { printToDomAdd, printToDomRep };
