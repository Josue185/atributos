function showGameScreen() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'flex';
}

function showLoginScreen() {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
}

function showRegisterScreen() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('registerScreen').style.display = 'flex';
}

function addPoint(ability) {
    let element = document.getElementById(ability);
    let currentPoints = parseInt(element.innerText);
    element.innerText = currentPoints + 1;
}

function addQuest() {
    const quest = document.getElementById('newQuest').value;
    if (quest) {
        const questList = document.getElementById('questList');
        const questElement = document.createElement('div');
        questElement.innerHTML = `${quest} <button onclick="this.parentNode.remove()">Remover</button>`;
        questList.appendChild(questElement);
        document.getElementById('newQuest').value = ''; // Limpa o campo após adicionar
    }
}
