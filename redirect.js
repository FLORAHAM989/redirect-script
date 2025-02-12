(function() {
    // 🔹 URL에서 블로그 글 주소 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    let referrer = urlParams.get("blog_url") || document.referrer || sessionStorage.getItem("lastBlogUrl") || "Direct Visit";

    // 🔹 블로그 URL 감지
    if (referrer.includes("blog.naver.com")) {
        console.log("블로그 글 URL 감지됨:", referrer);
        sessionStorage.setItem("lastBlogUrl", referrer); // 🔹 블로그 글 URL 저장
    } else {
        console.log("블로그 글 URL 감지 실패, referrer:", referrer);
    }

    // 🔹 사용자의 실제 redirect 페이지로 이동하면서 블로그 글 URL 전달
    const redirectUrl = "https://www.orozi.kr/redirect?blog_url=" + encodeURIComponent(referrer);

    // 🔹 확실한 리디렉션을 위해 setTimeout 사용
    setTimeout(() => {
        window.location.replace(redirectUrl);
    }, 500);  // 0.5초 후 이동
})();
