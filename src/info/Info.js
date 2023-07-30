import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"


export let colors = ["rgb(8,81,145)", "rgb(166,104,255)"];


export const info = {
    firstName: "Szabika",
    lastName: "Veres",
    // initials: "vsz", 
    position: "a Blockchain Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fuelled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the UK'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer at The Coaching Masters"
        },
        {
            emoji: "📧",
            text: "	szabikadigitalentrepreneur@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/szabika.veres",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/joshszabika",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/szabikaveres",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/szabolcsveres",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
    ],
    bio: "Hello! I'm Szabika. I am a Full-Stack Developer at The Coaching Masters. I've studied Blockchain Development at Social Hackers Academy. I love playing football and going on long rides on my motorbike. and I believe The biggest opportunity set we can think of over the next decade or so.. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react','solidity','hardhat','nodejs','web3.js', 'git', 'github', 'html', 'css',],
            exposedTo: ['mongo.db', 'python', 'bootstrap','jquery', 'redux',]
        }
    ,
    hobbies: [
        {
            label: 'football',
            emoji: '⚽'
        },
        {
            label: 'motorcycles',
            emoji: '🏍'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'reading',
            emoji: '📚'
        }

    ],
    portfolio: [ 
        {
            title: "dEX-Decentralised Crypto App",
            live: "https://bit.ly/dEXproject",
            source: "https://github.com/szabikaveres/dEX--Decentralised-Cryptocurrency-App", 
            image: mock1
        },
        {
            title: "Portfolio Project",
            live: "#",
            source: "https://github.com/szabikaveres/Portfolio-Project",
            image: mock2
        },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}