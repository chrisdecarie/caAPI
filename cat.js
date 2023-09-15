const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "live_qelMffmh6pLF32jVBMx9Uu3dXeqNZwA7aKDqMm3nU9M83snKLRd8zqh1nssE98KC";

let another = document.querySelector("#another");
another.addEventListener("click", showImageToVoteOn);

function showImageToVoteOn()
{
  
  const url = `${API_URL}images/search`;

  fetch(url,{headers: {
    'live_qelMffmh6pLF32jVBMx9Uu3dXeqNZwA7aKDqMm3nU9M83snKLRd8zqh1nssE98KC': API_KEY
  }})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    currentImageToVoteOn = data[0];
    document.getElementById("image-to-vote-on").src= currentImageToVoteOn.url;
  });

}
showImageToVoteOn();






