const navigation = document.getElementById('workspaceNav');
const wSpaces = document.getElementById('content');

function createWrkspc() {
    const buttoneCount = document.querySelectorAll('[data-sohbtn="workspace"]');
    const newButton = document.createElement('a');
    newButton.href = '#w' + buttoneCount.length;
    newButton.dataset.sohbtn = 'workspace';
    newButton.dataset.sohgroup = 'workspace';
    newButton.dataset.sohno = '3';
    newButton.innerHTML = buttoneCount.length + " ";
    navigation.insertBefore(newButton, document.querySelector('[href="#wa"]'));

    const newWorkspace = document.createElement('section');
    newWorkspace.dataset.sohcanv = 'workspace';
    newWorkspace.dataset.sohgroup = 'workspace';
    newWorkspace.dataset.sohno = buttoneCount.length;
    newWorkspace.innerHTML = "Body #" + buttoneCount.length;
    wSpaces.appendChild(newWorkspace);
}