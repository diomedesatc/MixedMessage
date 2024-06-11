const startButton = document.getElementById("startButton");
const message = document.getElementById("message");
const backgroundContainer = document.getElementById("message-container");

const nbaFacts = [
    {
        id: 1,
        fact: 'Providence, Rhode Island Once Had a Team'
    },
    {
        id: 2,
        fact: "The Raptors Weren't Toronto's First Basketball Team"
    },
    {
        id: 3,
        fact: 'Muggsy Bogues Was a First-Round Pick'
    },
    {
        id: 4,
        fact: 'Robert Parish Averaged Under 20 Points Per Game for His Career'
    },
    {
        id: 5,
        fact: 'Chris Webber Never Played One Game for the Team That Drafted Him'
    },
    {
        id: 6,
        fact: "Shaquille O'Neal Had a Rap Hit"
    },
    {
        id: 7,
        fact: 'Dave DeBusschere Played Professional Baseball'
    },
    {
        id: 8,
        fact: "Ray Allen's Real First Name Is Walter"
    },
    {
        id: 9,
        fact: 'Pau Gasol Went to Medical School'
    },
    {
        id: 10,
        fact: "Kobe Bryant's Middle Name Is Bean"
    }
];

const generateTheMessage = (factObj) =>{
    let randomIndex = Math.floor(Math.random() * 10);
    return factObj[randomIndex].fact;
}

const changeTheBackground = (element) =>{
    let first = Math.floor(Math.random() * 254);
    let second = Math.floor(Math.random() * 254);
    let third = Math.floor(Math.random() * 254);
    element.style.backgroundColor =  `rgb(${first},${second},${third})`;


}

startButton.addEventListener('click', ()=>{
    message.textContent = `${generateTheMessage(nbaFacts)}`;
    changeTheBackground(backgroundContainer);

});
