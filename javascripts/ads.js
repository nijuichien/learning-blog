// 等待頁面加載完成
document.addEventListener('DOMContentLoaded', function() {
    // 創建廣告容器
    const adContainer = document.createElement('div');
    adContainer.className = 'ad-container';
    adContainer.style.textAlign = 'center';
    adContainer.style.margin = '20px 0';
    
    // 創建廣告單元
    const adUnit = document.createElement('ins');
    adUnit.className = 'adsbygoogle';
    adUnit.style.display = 'block';
    adUnit.setAttribute('data-ad-client', 'ca-pub-5206602620644694');
    adUnit.setAttribute('data-ad-slot', 'YOUR_AD_SLOT_ID'); // 請替換為您的廣告單元 ID
    adUnit.setAttribute('data-ad-format', 'auto');
    adUnit.setAttribute('data-full-width-responsive', 'true');
    
    // 將廣告單元添加到容器中
    adContainer.appendChild(adUnit);
    
    // 在文章內容後插入廣告
    const content = document.querySelector('.md-content__inner');
    if (content) {
        content.appendChild(adContainer);
        
        // 初始化廣告
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense 初始化失敗:', e);
        }
    }
}); 