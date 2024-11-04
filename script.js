function convertLink() {
    const originalLink = document.getElementById('originalLink').value;
    const linkType = document.getElementById('linkType').value;
    const regex = /g2\/([a-zA-Z0-9_-]+)/;
    const match = originalLink.match(regex);

    if (match && match[1]) {
        const ticket = match[1];
        const convertedLink = `line://square/${linkType}?ticket=${ticket}`;
        document.getElementById('convertedLink').textContent = convertedLink;
    } else {
        document.getElementById('convertedLink').textContent = "リンク形式が無効です。もう一度試してください。";
    }
}
