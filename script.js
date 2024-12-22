// JavaScript

// h2 text
const textShow = (entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const textAnimation = entry.target;
            const textKeyFrames = [
                { opacity: 0, transform: 'translateY(30px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ];
            const textOptions = {
                duration: 1000,
                easing: 'ease-out',
                fill: 'forwards', // アニメーション終了後に状態を保持
            };
            textAnimation.animate(textKeyFrames, textOptions);
            obs.unobserve(entry.target); // 一度だけアニメーションを実行
        }
    });
};

const textObserver = new IntersectionObserver(textShow);
textObserver.observe(document.querySelector('.textAnimation'));

//top-gallery
const show = (entries, obs) => {
    entries.forEach((entry) => {
        //交差している時だけ
        if(entry.isIntersecting){
            const keyframes = {
                opacity: [0, 1],
                translate: ['0 150px', 0]
            }
            entries[0].target.animate(keyframes, 2000);

            //一度表示されたら止める
            obs.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(show);

//監視対象
const topGalleries = document.querySelectorAll('.top-gallery');
topGalleries.forEach(topGallery =>{
    observer.observe(topGallery);
});