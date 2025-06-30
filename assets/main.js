const secretKey = "mysharedkey"; // Must be same on both ends

function sendMessage() {
    const message = document.getElementById('message').value;
    const encrypted = CryptoJS.AES.encrypt(message, secretKey).toString();

    fetch('server/send.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'msg=' + encodeURIComponent(encrypted)
    }).then(() => {
        document.getElementById('message').value = '';
        loadMessages();
    });
}

function loadMessages() {
    fetch('server/fetch.php')
        .then(response => response.json())
        .then(data => {
            const box = document.getElementById('chat-box');
            box.innerHTML = '';
            data.forEach(row => {
                try {
                    const bytes = CryptoJS.AES.decrypt(row.message, secretKey);
                    const originalText = bytes.toString(CryptoJS.enc.Utf8);
                    box.innerHTML += '<div><b>' + row.time + ':</b> ' + originalText + '</div>';
                } catch (e) {
                    box.innerHTML += '<div><i>Failed to decrypt</i></div>';
                }
            });
        });
}

setInterval(loadMessages, 3000);
loadMessages();
