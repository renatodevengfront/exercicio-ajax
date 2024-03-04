document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const reposElement = document.querySelector("#repos");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");

  async function fetchData() {
    try {
      const resposta = await fetch(
        "https://api.github.com/users/renatodevengfront"
      );
      const json = await resposta.json();
      nameElement.innerText = json.name;
      usernameElement.innerText = json.login;
      avatarElement.src = json.avatar_url;
      followersElement.innerText = json.followers;
      followingElement.innerText = json.following;
      reposElement.innerText = json.public_repos;
      linkElement.href = json.html_url;
    } catch (error) {
      console.error("Erro ao obter dados:", error);
    }
  }
  fetchData();
});
