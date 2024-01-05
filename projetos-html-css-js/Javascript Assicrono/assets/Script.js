const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
  const dadta = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return DataTransfer.webpurl;
};

const loadImg = async () => {
  const catImg = document.getElementById('cat');
  catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();