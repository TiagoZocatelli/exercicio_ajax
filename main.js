document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarImgElement = document.querySelector('#avatar');
    const reposCountElement = document.querySelector('#repos');
    const followersCountElement = document.querySelector('#followers');
    const followingCountElement = document.querySelector('#following');
    const githubLinkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/TiagoZocatelli')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function(data) {
            nameElement.innerText = data.name;
            usernameElement.innerText = data.login;
            avatarImgElement.src = data.avatar_url; 
            followingCountElement.innerText = data.following;
            followersCountElement.innerText = data.followers;
            reposCountElement.innerText = data.public_repos;
            githubLinkElement.href = data.html_url;
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);

            nameElement.innerText = 'Erro ao carregar os dados';
        });
})
