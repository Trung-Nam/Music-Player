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

const player = $('.player');
const heading = $('header h2');
const cdThumd = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const progress = $('#progress');

console.log(playBtn);
const app = {
    currentIndex: 0,
    isPlaying: false,
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
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            }
        })
    },
    handleEvents: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        // Xử lý CD quay / dừng
        const cdThumdAnimate = cdThumd.animate([
            {transform: 'rotate(360deg)'}
        ],{
            duration: 10000,
            iterations: Infinity
        });
        cdThumdAnimate.pause();

        

        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;

        }

        // Xử lý khi click play 
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        // Khi song được play 
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumdAnimate.play();
        }

        // Khi song bị pause 
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumdAnimate.pause();
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }

        // Xử lý khi tua song
        progress.onchange = function (e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumd.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    start: function () {

        // Đinh nghĩa các thuộc tính cho object
        this.defineProperties();

        // Lắng nghe / xử lý các sự kiện (DOM events) 
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render playlist
        this.render();
    }
}

app.start();



