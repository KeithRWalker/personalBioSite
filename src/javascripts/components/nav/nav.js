// const modifyPage = (e) => {
//   const clickedBtn = e.target.id;
//   const car = document.getElementById('carPage');
//   const bio = document.getElementById('bioPage');
//   const tech = document.getElementById('techPage');
//   const projects = document.getElementById('projectsPage');

//   e.preventDefault();
//   if (clickedBtn === 'carLink') {
//     bio.style.display = 'none';
//     car.style.display = 'block';
//     tech.style.display = 'none';
//     projects.style.display = 'none';
//   } else if (clickedBtn === 'bioLink') {
//     bio.style.display = 'block';
//     car.style.display = 'none';
//     tech.style.display = 'none';
//     projects.style.display = 'none';
//   } else if (clickedBtn === 'techLink') {
//     bio.style.display = 'none';
//     car.style.display = 'none';
//     tech.style.display = 'block';
//     projects.style.display = 'none';
//   } else if (clickedBtn === 'projectsLink') {
//     bio.style.display = 'none';
//     car.style.display = 'none';
//     tech.style.display = 'none';
//     projects.style.display = 'flex';
//   }
// };

// const eventListeners = () => {
//   const navBtn = document.getElementsByClassName('navBtn');
//   for (let i = 0; i < navBtn.length; i += 1) {
//     navBtn[i].addEventListener('click', modifyPage);
//   }
// };

// export default { eventListeners };
