const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    butInstall.classList.toggle('hidden', true);
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
});


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
