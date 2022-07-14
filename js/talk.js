new TypeIt("#fzxyq", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("今天是壬寅年六月十七，")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("祝我们的袁旗旗公主生日快乐噢！")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();