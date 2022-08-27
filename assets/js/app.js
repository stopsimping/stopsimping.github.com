// https://codepen.io/jcubic/pen/jOaoGKJ?editors=0010

var path = '~/projects';

var term = $('body').terminal({
    set(new_path) {
        path = new_path;
        Promise.resolve().then(() => console.log($('.terminal-output').html().replace(/<[^>]+>/g, '')));
    }
}, {
    greetings: "      _                       _                    _               \r\n     | |                     (_)                  (_)              \r\n ___ | |_   ___   _ __   ___  _  _ __ ___   _ __   _  _ __    __ _ \r\n\/ __|| __| \/ _ \\ | \'_ \\ \/ __|| || \'_ ` _ \\ | \'_ \\ | || \'_ \\  \/ _` |\r\n\\__ \\| |_ | (_) || |_) |\\__ \\| || | | | | || |_) || || | | || (_| |\r\n|___\/ \\__| \\___\/ | .__\/ |___\/|_||_| |_| |_|| .__\/ |_||_| |_| \\__, |\r\n                 | |                       | |                __\/ |\r\n                 |_|                       |_|               |___\/ \r",
    prompt() {
        return `┌──(${color('green', 'anon@github-io')})-[${color('blue', path)}]
└─\$ `;
    }
});

function color(name, string) {
    var colors = {
        blue:   '#55f',
        green:  '#4d4',
        grey:   '#999',
        red:    '#A00',
        yellow: '#FF5',
        violet: '#a320ce',
        white:  '#fff'
    }
    if (colors[name]) {
        return '[[;' + colors[name] + ';]' + string + ']';
    } else {
        return string;
    }
}