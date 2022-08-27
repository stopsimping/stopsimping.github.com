// https://codepen.io/jcubic/pen/jOaoGKJ?editors=0010

var path = '~';
let user ="anon";

let dirs = {
    'root': ['secret.txt'],
    'repos': ['chad-qui-prend', 'solidity-sc', 'DeluxeSweeper'],
}

var term = $('body').terminal({

    help: function() {
        this.echo(`Usage : command [arg, arg1...]    
        help     print every commands
        ls       print every files in the directory
        cd       change directory
        github   get my github link
        stop     stop the music
        clear    what do you need to know?
        cat      print the content of a file
        su       get root access`);
    },

    ls: function() {
        if (path === '~') {
            for (const dir of Object.keys(dirs)) {
                if(dir === "root" && user != "root") {
                    this.echo(`${color('red', dir)}`, {newline: false});
                }
                
                else {
                    this.echo(`${color('blue', dir)}`, {newline: false});
                }
    
                this.echo('\r');
            }
        }

        else {
            if (path in dirs) {
                for (const dir of dirs[path]) {
                    if(dir === "root" && user != "root") {
                        this.echo(`${color('red', dir)}`, {newline: false});
                    }
                    
                    else {
                        this.echo(`${color('blue', dir)}`, {newline: false});
                    }
        
                    this.echo('\r');
                }
            }

            else {
                this.echo(`${color('red', "wtf? hacker")}`, {newline: false});
            }
        }
        
        
    },

    cd: function(new_path) {
        if (new_path === "root" && user != "root") {
            this.echo(`${color('red', 'access denied')}`);
        }
        
        if (dirs[new_path] !== undefined) {
            path = new_path;
            Promise.resolve().then(() => console.log($('.terminal-output').html().replace(/<[^>]+>/g, '')));
        }

        else {
            this.echo(`${color('red', 'folder not found')}`);
        }
    },

    github: function() {
        this.echo($('<h>Github link : </h> <a href="https://github.com/stopsimping">click here</a>'));
    },

    cat: function(filename) {
        if (path === "repos") {
            this.echo($(`<h>follow this link : </h><a href='https://github.com/stopsimping/${filename}'>github.com/stopsimping/${filename}</a>`));
        }

        if (filename === "secret.txt" && path === "root" && user === "root") {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    },

    su: async function(password) {
        // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
        // encode as UTF-8
        const msgBuffer = new TextEncoder().encode(password);                    
        // hash the message
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        // convert bytes to hex string                  
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        if (hashHex != "4032d48e427eb4d633bb1f2e97567315e6cf601373c6d47d632fe20b6140c547") {
            this.echo(`${color('red', "wrong password, try again...")}`);
        }

        else {
            user = "root";
            this.echo(`${color('green', "access granted..")}`);
        }
    },

    stop: function() {
        var audio = document.getElementById("audio");
        audio.pause();
        this.echo("audio paused successfully");
    }

}, {
    greetings: "      _                       _                    _               \r\n     | |                     (_)                  (_)              \r\n ___ | |_   ___   _ __   ___  _  _ __ ___   _ __   _  _ __    __ _ \r\n\/ __|| __| \/ _ \\ | \'_ \\ \/ __|| || \'_ ` _ \\ | \'_ \\ | || \'_ \\  \/ _` |\r\n\\__ \\| |_ | (_) || |_) |\\__ \\| || | | | | || |_) || || | | || (_| |\r\n|___\/ \\__| \\___\/ | .__\/ |___\/|_||_| |_| |_|| .__\/ |_||_| |_| \\__, |\r\n                 | |                       | |                __\/ |\r\n                 |_|                       |_|               |___\/ \r",
    prompt() {
        return `┌──(${color('green', `${user}@github-io`)})-[${color('blue', path)}]
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

$(document).ready(function(){
    $("#entertxt").on('click', function(){
        var audio = document.getElementById("audio");
        audio.play();
        audio.volume = 0.50;
        audio.loop = true;
        document.getElementById("entertxt").className = 'animate__animated animate__flash';
        setTimeout(function () {
            $( "#entertxt" ).fadeOut( "slow", function() {});
            $( "#enter" ).fadeOut( "slow", function() {});
        }, 3500); 
    });
});

String.prototype.padding = function(n, c)
{
        var val = this.valueOf();
        if ( Math.abs(n) <= val.length ) {
                return val;
        }
        var m = Math.max((Math.abs(n) - this.length) || 0, 0);
        var pad = Array(m + 1).join(String(c || ' ').charAt(0));
//      var pad = String(c || ' ').charAt(0).repeat(Math.abs(n) - this.length);
        return (n < 0) ? pad + val : val + pad;
//      return (n < 0) ? val + pad : pad + val;
};

