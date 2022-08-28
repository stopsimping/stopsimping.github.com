// special thanks to : https://github.com/szolowicz/obnoxious.club/blob/master/assets/javascript/app.js
const titles = ['stopsimping', 'free andrew tate', 'become a top g', 'keep grinding guys!']

class _misc {
    titleChanger = (text, delay) => {
        if (!text) return;
        console.log("lol");
        delay = delay || 2500;
        let counter = 0;

        setInterval(() => {
            if (counter < titles.length) {
                document.title = titles[counter++];
            }

            else {
                document.title = titles[(counter = 0)];
            }
        }, delay);
    }
}

const app = new _misc();
app.titleChanger(titles);