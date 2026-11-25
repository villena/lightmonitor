function simulateRefresh() {
    if (isScanning || isBatchUpdating || activeRowTasks > 0) return;
    renderAllSections();
    pushToast('Dashboard view refreshed from sandbox state.');
}

function resetDemoSandbox() {
    if (isScanning || isBatchUpdating || activeRowTasks > 0) return;
    demoState = JSON.parse(JSON.stringify(INITIAL_DEMO_DATA));
    renderAllSections();
    pushToast('Sandbox reset to initial demo dataset.');
}

function handleDemoDockerHub(event) {
    event.preventDefault();
    const user = document.getElementById('dh-username').value.trim();
    const token = document.getElementById('dh-token').value.trim();
    const modal = document.getElementById('dh-modal');
    if (!user || !token) {
        modal.close();
        pushToast('Docker Hub auth failed: Username and token are required.', true);
        return;
    }
    demoState.dhUser = user;
    renderDockerHubButton();
    modal.close();
    pushToast(`Docker Hub connected as ${user}! (Sandbox simulated)`);
}

function clearDemoDockerHub() {
    demoState.dhUser = '';
    document.getElementById('dh-username').value = '';
    document.getElementById('dh-token').value = '';
    renderDockerHubButton();
    document.getElementById('dh-modal').close();
    pushToast('Docker Hub credentials removed.');
}