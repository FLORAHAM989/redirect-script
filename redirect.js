(function() {
    const referrer = document.referrer || "Direct Visit";

    // 🔹 블로그 URL 감지
    if (referrer.includes("blog.naver.com")) {
        console.log("블로그 URL 감지됨:", referrer);
    } else {
        console.log("블로그 URL 감지 실패, referrer:", referrer);
    }

    // 🔹 redirect.html로 이동하면서 블로그 URL을 넘김
    const redirectUrl = "https://www.orozi.kr/redirect.html?blog_url=" + encodeURIComponent(referrer);

    // 🔹 확실한 리디렉션을 위해 setTimeout 사용
    setTimeout(() => {
        window.location.replace(redirectUrl);
    }, 500);  // 0.5초 후 이동
})();

