/** 
1. Render songs
2. Scroll top
3. Play / Pause / Seek
4. CD Rotate
5. Next / Previous
6. Random
7. Next / Repeat when ended
8. Active song 
9. Scroll active song into view
10. Play song when click
**/


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    songs: [
        {
            name: "Chỉ Bằng Cái Gật Đầu (Remix)",
            singer: " Yan Nguyễn",
            path: "./music/Chỉ Bằng Cái Gật Đầu Remix - (Yan Nguyễn x Đại Mèo).mp3",
            image: "./img/Chỉ Bằng Cái Gật Đầu (Remix).jpg"
        },
        {
            name: "Đế Vương Remix",
            singer: "Dunghoangpham x Đình Dũng x Ciray",
            path: "./music/Đế Vương Remix.mp3",
            image: "./img/Đế Vương Remix.jpg"
        },
        {
            name: "Đế Vương Remix",
            singer: "Dunghoangpham x Đình Dũng x Ciray",
            path: "./music/Đế Vương Remix.mp3",
            image: "./img/Đế Vương Remix.jpg"
        },
        {
            name: "Đế Vương Remix",
            singer: "Dunghoangpham x Đình Dũng x Ciray",
            path: "./music/Đế Vương Remix.mp3",
            image: "./img/Đế Vương Remix.jpg"
        },
        {
            name: "Đế Vương Remix",
            singer: "Dunghoangpham x Đình Dũng x Ciray",
            path: "./music/Đế Vương Remix.mp3",
            image: "./img/Đế Vương Remix.jpg"
        },
        {
            name: "Đế Vương Remix",
            singer: "Dunghoangpham x Đình Dũng x Ciray",
            path: "./music/Đế Vương Remix.mp3",
            image: "./img/Đế Vương Remix.jpg"
        },
        {
            name: "Đế Vương Remix",
            singer: "Dunghoangpham x Đình Dũng x Ciray",
            path: "./music/Đế Vương Remix.mp3",
            image: "./img/Đế Vương Remix.jpg"
        },
        {
            name: "Đế Vương Remix",
            singer: "Dunghoangpham x Đình Dũng x Ciray",
            path: "./music/Đế Vương Remix.mp3",
            image: "./img/Đế Vương Remix.jpg"
        }
    ],

    render: function () {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
            <div class="thumb"
                style="background-image: url('${song.image}')">
            </div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('');
    },
    handleEvents: function () {
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;

        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
            
            console.log(newCdWidth)
        }
    },
    start: function () {
        this.handleEvents();

        this.render();
    }
}

app.start();



