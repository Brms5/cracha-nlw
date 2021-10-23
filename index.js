// Função para trocar os links das redes sociais.

const linksSocialMidia = {
  github: "Brms5",
  youtube: "",
  facebook: "",
  instagram: "",
  twitter: "",
};

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`;
  }
}

// Função para trocar os dados da página.

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userGitHub.textContent = data.name;
      // userLink.href = data.html_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
