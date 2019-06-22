const addHtml = (txt, id) => {
  document.getElementById(id).innerHTML += txt;
};

const replaceHtml = (txt, id) => {
  document.getElementById(id).innerHTML = txt;
};

export default { addHtml, replaceHtml };
