// script.js

document.getElementById('findButton').onclick = async () => {
    const domain = document.getElementById('domainInput').value.trim();
    if (!domain) {
        alert("Please enter a valid domain!");
        return;
    }

    const subdomains = await findSubdomains(domain); // Call API or fetch subdomains
    displayResults(subdomains);
};

// Simulate finding subdomains (replace with real API)
async function findSubdomains(domain) {
    // Use a real subdomain finding service or API here
    return [
        `${domain}`,
        `www.${domain}`,
        `mail.${domain}`,
        `blog.${domain}`,
        `shop.${domain}`,
        `support.${domain}`
    ];
}

// Display results in a 3D colorful format
function displayResults(subdomains) {
    const displayArea = document.getElementById('resultDisplay');
    displayArea.innerHTML = ''; // Clear previous results
    subdomains.forEach(subdomain => {
        const subdomainDiv = document.createElement('div');
        subdomainDiv.className = 'subdomain';
        subdomainDiv.textContent = subdomain;
        displayArea.appendChild(subdomainDiv);
    });

    // Show the download button
    document.getElementById('downloadButton').classList.remove('hidden');
}

// Download results as a .txt file
document.getElementById('downloadButton').onclick = () => {
    const subdomains = Array.from(document.querySelectorAll('.subdomain')).map(
        div => div.textContent
    );
    const blob = new Blob([subdomains.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subdomains.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};