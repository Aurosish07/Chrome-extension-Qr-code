chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    var url = tabs[0].url;
    document.getElementById('url').textContent = `${url}`;
    let img = document.createElement("img");
    let p = document.querySelector("#url");

    img.setAttribute("src", `https://qr-code-generator-api-seven.vercel.app/generate?generatee=${url}`);

    p.appendChild(img);
});
