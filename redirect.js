(function() {
    const urlParams = new URLSearchParams(window.location.search);
    let referrer = urlParams.get("blog_url") || document.referrer || "Direct Visit";

    if (referrer.includes("blog.naver.com")) {
        console.log("블로그 글 URL 감지됨:", referrer);
    } else {
        console.log("블로그 글 URL 감지 실패, referrer:", referrer);
    }

    const redirectUrl = "https://www.orozi.kr/redirect?blog_url=" + encodeURIComponent(referrer);

    setTimeout(() => {
        window.location.replace(redirectUrl);
    }, 500);
})();

