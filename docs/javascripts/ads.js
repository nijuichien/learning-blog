document.addEventListener("DOMContentLoaded", function() {
    // 動態插入 Google AdSense 腳本
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5206602620644694";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // 為每個廣告容器插入廣告
    const adContainers = document.querySelectorAll(".ad-container");
    adContainers.forEach(container => {
        const ad = document.createElement("ins");
        ad.className = "adsbygoogle";
        ad.style.display = "block";
        ad.setAttribute("data-ad-client", "ca-pub-5206602620644694"); // 替換為你的 AdSense ID
        ad.setAttribute("data-ad-slot", "9727123268");        // 替換為具體廣告單元 ID
        ad.setAttribute("data-ad-format", "auto");
        ad.setAttribute("data-full-width-responsive", "true");
        container.appendChild(ad);

        // 觸發廣告加載
        (adsbygoogle = window.adsbygoogle || []).push({});
    });
});