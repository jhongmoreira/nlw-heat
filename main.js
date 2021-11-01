const LinksSocialMedia = {
  github: 'jhongmoreira',
  youtube: 'UC4L2tGlK7rX997nCSP4uorQ',
  facebook: 'jhongmoreira',
  instagram: 'jhongmoreira',
  twitter: 'lowdenzBR'
}

// function changeSocialMediaLinks() {
//   // document.getElementById('userName').textContent
//   userName.textContent = 'Marcos'
// }

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    // um then joga a resposta para dentro do seguinte
    .then(response => response.json())
    // abaixo data armazena response porém em JSon
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGit.href = data.html_url
      UserPhoto.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
