import { getItems } from "./api.js";
import { handleUpdateItem } from "./table.js";
import { username } from "./main.js";

const Questionset = 
[
    {
        Quiz : "H",
        Choice1 : "Hydrogen",
        Choice2 : "Helium",
        Correct : "1"
    },
    {
        Quiz : "He",
        Choice1 : "Hydrogen",
        Choice2 : "Helium",
        Correct : "2"
    },
    {
        Quiz : "Li",
        Choice1 : "Lightnium",
        Choice2 : "Lithium",
        Correct : "2"
    },
    {
        Quiz : "Be",
        Choice1 : "Beryllium",
        Choice2 : "Berrylium",
        Correct : "1"
    },
    {
        Quiz : "B",
        Choice1 : "Boron",
        Choice2 : "Bromine",
        Correct : "1"
    },
    {
        Quiz : "C",
        Choice1 : "Calcium",
        Choice2 : "Carbon",
        Correct : "2"
    },
    {
        Quiz : "N",
        Choice1 : "Nitrogen",
        Choice2 : "Nickel",
        Correct : "1"
    },
    {
        Quiz : "O",
        Choice1 : "Osmium",
        Choice2 : "Oxygen",
        Correct : "2"
    },
    {
        Quiz : "F",
        Choice1 : "Fluorine",
        Choice2 : "Francium",
        Correct : "1"
    },
    {
        Quiz : "Ne",
        Choice1 : "Neodymium",
        Choice2 : "Neon",
        Correct : "2"
    },
    {
        Quiz : "Na",
        Choice1 : "Sodium",
        Choice2 : "Naobium",
        Correct : "1"
    },
    {
        Quiz : "Mg",
        Choice1 : "Manganese",
        Choice2 : "Magnesium",
        Correct : "2"
    },
    {
        Quiz : "Al",
        Choice1 : "Aluminium",
        Choice2 : "Alumium",
        Correct : "1"
    },
    {
        Quiz : "Si",
        Choice1 : "Silica",
        Choice2 : "Silicon",
        Correct : "2"
    },
    {
        Quiz : "P",
        Choice1 : "Phosphorus",
        Choice2 : "Potassium",
        Correct : "1"
    },
    {
        Quiz : "S",
        Choice1 : "Scandium",
        Choice2 : "Sulfur",
        Correct : "2"
    },
    {
        Quiz : "Cl",
        Choice1 : "Chroline",
        Choice2 : "Calcium",
        Correct : "1"
    },
    {
        Quiz : "Ar",
        Choice1 : "Argon",
        Choice2 : "Americium",
        Correct : "1"
    },
    {
        Quiz : "K",
        Choice1 : "Krypton",
        Choice2 : "Potassium",
        Correct : "2"
    },
    {
        Quiz : "Ca",
        Choice1 : "Calcium",
        Choice2 : "Carbon",
        Correct : "1"
    },
    {
        Quiz : "Sc",
        Choice1 : "Silicon",
        Choice2 : "Scandium",
        Correct : "2"
    },
    {
        Quiz : "Ti",
        Choice1 : "Titanium",
        Choice2 : "Thallium",
        Correct : "1"
    },
    {
        Quiz : "V",
        Choice1 : "Veriodium",
        Choice2 : "Vanadium",
        Correct : "2"
    },
    {
        Quiz : "Cr",
        Choice1 : "Chromium",
        Choice2 : "Chlorine",
        Correct : "1"
    },
    {
        Quiz : "Mn",
        Choice1 : "Magnesium",
        Choice2 : "Manganese",
        Correct : "2"
    },
    {
        Quiz : "Fe",
        Choice1 : "Iron",
        Choice2 : "Fluorine",
        Correct : "1"
    },
    {
        Quiz : "Co",
        Choice1 : "Copper",
        Choice2 : "Cobalt",
        Correct : "2"
    },
    {
        Quiz : "Ni",
        Choice1 : "Nickel",
        Choice2 : "Niobium",
        Correct : "1"
    },
    {
        Quiz : "Cu",
        Choice1 : "Curium",
        Choice2 : "Copper",
        Correct : "2"
    },
    {
        Quiz : "Zn",
        Choice1 : "Zinc",
        Choice2 : "Zirconium",
        Correct : "1"
    },
    {
        Quiz : "Ga",
        Choice1 : "Gabolium",
        Choice2 : "Gallium",
        Correct : "2"
    },
    {
        Quiz : "Ge",
        Choice1 : "Germanium",
        Choice2 : "Genolium",
        Correct : "1"
    },
    {
        Quiz : "As",
        Choice1 : "Arsenalic",
        Choice2 : "Arsenic",
        Correct : "2"
    },
    {
        Quiz : "Se",
        Choice1 : "Selenium",
        Choice2 : "Serenic",
        Correct : "1"
    },
    {
        Quiz : "Br",
        Choice1 : "Barium",
        Choice2 : "Bromine",
        Correct : "2"
    },
    {
        Quiz : "Kr",
        Choice1 : "Kryton",
        Choice2 : "Keratin",
        Correct : "1"
    },
    {
        Quiz : "Rb",
        Choice1 : "Rubidium",
        Choice2 : "Alumium",
        Correct : "1"
    },
    {
        Quiz : "Sr",
        Choice1 : "Sroloinum",
        Choice2 : "Strontium",
        Correct : "2"
    },
    {
        Quiz : "Y",
        Choice1 : "Yttrium",
        Choice2 : "Yagonium",
        Correct : "1"
    },
    {
        Quiz : "Zr",
        Choice1 : "Zyncronium",
        Choice2 : "Zicronium",
        Correct : "2"
    },
    {
        Quiz : "Nb",
        Choice1 : "Niobium",
        Choice2 : "Niberium",
        Correct : "1"
    },
    {
        Quiz : "Mo",
        Choice1 : "Moscovium",
        Choice2 : "Molybdenum",
        Correct : "2"
    },
    {
        Quiz : "Tc",
        Choice1 : "Technetium",
        Choice2 : "Technomium",
        Correct : "1"
    },
    {
        Quiz : "Ru",
        Choice1 : "Ruby",
        Choice2 : "Ruthenium",
        Correct : "2"
    },
    {
        Quiz : "Rh",
        Choice1 : "Rhodium",
        Choice2 : "Rhonidium",
        Correct : "1"
    },
    {
        Quiz : "Pd",
        Choice1 : "Paladinium",
        Choice2 : "Palladium",
        Correct : "2"
    },
    {
        Quiz : "Ag",
        Choice1 : "Silver",
        Choice2 : "Argon",
        Correct : "1"
    },
    {
        Quiz : "Cd",
        Choice1 : "Canadium",
        Choice2 : "Cadmium",
        Correct : "2"
    },
    {
        Quiz : "In",
        Choice1 : "Indium",
        Choice2 : "Iodine",
        Correct : "1"
    },
    {
        Quiz : "Sn",
        Choice1 : "Selenium",
        Choice2 : "Tin",
        Correct : "2"
    },
    {
        Quiz : "Sb",
        Choice1 : "Antimony",
        Choice2 : "Saberium",
        Correct : "1"
    },
    {
        Quiz : "Te",
        Choice1 : "Tangsten",
        Choice2 : "Tellurium",
        Correct : "2"
    },
    {
        Quiz : "I",
        Choice1 : "Iodine",
        Choice2 : "Indium",
        Correct : "1"
    },
    {
        Quiz : "Xe",
        Choice1 : "Xenium",
        Choice2 : "Xenon",
        Correct : "2"
    },
    {
        Quiz : "Cs",
        Choice1 : "Caesium",
        Choice2 : "Caeresium",
        Correct : "1"
    },
    {
        Quiz : "Ba",
        Choice1 : "Baron",
        Choice2 : "Barium",
        Correct : "2"
    },
    {
        Quiz : "Hf",
        Choice1 : "Hafnium",
        Choice2 : "Hafulium",
        Correct : "1"
    },
    {
        Quiz : "Ta",
        Choice1 : "Taluntulium",
        Choice2 : "Tantalum",
        Correct : "2"
    },
    {
        Quiz : "W",
        Choice1 : "Tungsten",
        Choice2 : "Webinium",
        Correct : "1"
    },
    {
        Quiz : "Rh",
        Choice1 : "Rhinodium",
        Choice2 : "Rhenium",
        Correct : "2"
    },
    {
        Quiz : "Os",
        Choice1 : "Osmium",
        Choice2 : "Oscarium",
        Correct : "1"
    },
    {
        Quiz : "Ir",
        Choice1 : "Indium",
        Choice2 : "Iridium",
        Correct : "2"
    },
    {
        Quiz : "Pt",
        Choice1 : "Platinum",
        Choice2 : "Plutonium",
        Correct : "1"
    },
    {
        Quiz : "Au",
        Choice1 : "Silver",
        Choice2 : "Gold",
        Correct : "2"
    },
    {
        Quiz : "Hg",
        Choice1 : "Mercury",
        Choice2 : "Hegerium",
        Correct : "1"
    },
    {
        Quiz : "Tl",
        Choice1 : "Thailanium",
        Choice2 : "Thallium",
        Correct : "2"
    },
    {
        Quiz : "Pb",
        Choice1 : "Lead",
        Choice2 : "Paborium",
        Correct : "1"
    },
    {
        Quiz : "Bi",
        Choice1 : "Binarium",
        Choice2 : "Bismuth",
        Correct : "2"
    },
    {
        Quiz : "Po",
        Choice1 : "Polonium",
        Choice2 : "Polandium",
        Correct : "1"
    },
    {
        Quiz : "At",
        Choice1 : "Arsenic",
        Choice2 : "Astatine",
        Correct : "2"
    },
    {
        Quiz : "Rn",
        Choice1 : "Radon",
        Choice2 : "Rhinodium",
        Correct : "1"
    },
    {
        Quiz : "Fr",
        Choice1 : "Fermium",
        Choice2 : "Francium",
        Correct : "2"
    },
    {
        Quiz : "Ra",
        Choice1 : "Radium",
        Choice2 : "Radon",
        Correct : "1"
    },
    {
        Quiz : "Rf",
        Choice1 : "Referium",
        Choice2 : "Rutherfordium",
        Correct : "2"
    },
    {
        Quiz : "Db",
        Choice1 : "Dubnium",
        Choice2 : "Dibodium",
        Correct : "1"
    },
    {
        Quiz : "Sg",
        Choice1 : "Sigarium",
        Choice2 : "Seaborgium",
        Correct : "2"
    },
    {
        Quiz : "Bh",
        Choice1 : "Bohrium",
        Choice2 : "Bhodium",
        Correct : "1"
    },
    {
        Quiz : "Hs",
        Choice1 : "Hismuth",
        Choice2 : "Hassium",
        Correct : "2"
    },
    {
        Quiz : "La",
        Choice1 : "Lanthanum",
        Choice2 : "Lathium",
        Correct : "1"
    },
    {
        Quiz : "Ce",
        Choice1 : "Ceasium",
        Choice2 : "Cerium",
        Correct : "2"
    },
    {
        Quiz : "Pr",
        Choice1 : "Praseodymium",
        Choice2 : "Pyrodium",
        Correct : "1"
    },
    {
        Quiz : "Nd",
        Choice1 : "Nodorium",
        Choice2 : "Neodymium",
        Correct : "2"
    },
    {
        Quiz : "Pm",
        Choice1 : "Promethium",
        Choice2 : "Pamelonium",
        Correct : "1"
    },
    {
        Quiz : "Sm",
        Choice1 : "Submarinium",
        Choice2 : "Samarium",
        Correct : "2"
    },
    {
        Quiz : "Eu",
        Choice1 : "Europium",
        Choice2 : "Europeanium",
        Correct : "1"
    },
    {
        Quiz : "Gd",
        Choice1 : "Gadmium",
        Choice2 : "Gadolinium",
        Correct : "2"
    },
    {
        Quiz : "Tb",
        Choice1 : "Terbium",
        Choice2 : "Tabarium",
        Correct : "1"
    },
    {
        Quiz : "Dy",
        Choice1 : "Dynamium",
        Choice2 : "Dysprosium",
        Correct : "2"
    },
    {
        Quiz : "Ho",
        Choice1 : "Holmium",
        Choice2 : "Holosium",
        Correct : "1"
    },
    {
        Quiz : "Er",
        Choice1 : "Europium",
        Choice2 : "Erbium",
        Correct : "2"
    },
    {
        Quiz : "Tm",
        Choice1 : "Timalium",
        Choice2 : "Thulium",
        Correct : "2"
    },
    {
        Quiz : "Yb",
        Choice1 : "Ytterbium",
        Choice2 : "Ytterbomium",
        Correct : "1"
    },
    {
        Quiz : "Lu",
        Choice1 : "Luciferium",
        Choice2 : "Lutetium",
        Correct : "2"
    },
    {
        Quiz : "Ac",
        Choice1 : "Actinium",
        Choice2 : "Arsenic",
        Correct : "1"
    },
    {
        Quiz : "Th",
        Choice1 : "Thorusium",
        Choice2 : "Thorium",
        Correct : "2"
    },
    {
        Quiz : "Pa",
        Choice1 : "Protactinium",
        Choice2 : "Palladium",
        Correct : "1"
    },
    {
        Quiz : "U",
        Choice1 : "Uranusium",
        Choice2 : "Uranium",
        Correct : "2"
    },
    {
        Quiz : "Np",
        Choice1 : "Neptunium",
        Choice2 : "Neptinium",
        Correct : "1"
    },
    {
        Quiz : "Pu",
        Choice1 : "Puriferium",
        Choice2 : "Plutonium",
        Correct : "2"
    },
    {
        Quiz : "Am",
        Choice1 : "Americium",
        Choice2 : "Amaterium",
        Correct : "1"
    },
    {
        Quiz : "Cm",
        Choice1 : "Cumanium",
        Choice2 : "Curium",
        Correct : "2"
    },
    {
        Quiz : "Bk",
        Choice1 : "Berkelium",
        Choice2 : "Beckonium",
        Correct : "1"
    },
    {
        Quiz : "Cf",
        Choice1 : "Califorium",
        Choice2 : "Californium",
        Correct : "2"
    },
    {
        Quiz : "Es",
        Choice1 : "Einsteinium",
        Choice2 : "Essenitium",
        Correct : "1"
    },
    {
        Quiz : "Fm",
        Choice1 : "Ferminium",
        Choice2 : "Fermium",
        Correct : "2"
    },
    {
        Quiz : "Md",
        Choice1 : "Mendelevium",
        Choice2 : "Mandarium",
        Correct : "1"
    },
    {
        Quiz : "No",
        Choice1 : "Nobarium",
        Choice2 : "Nobelium",
        Correct : "2"
    },
    {
        Quiz : "Lr",
        Choice1 : "Lawrencium",
        Choice2 : "Larthanium",
        Correct : "1"
    },
];


const startbutton = document.getElementById("startbutton");
const logo = document.getElementById("logo");
const credit = document.getElementById("open-credit");
const quiz = document.getElementById("quiz");
const button1 = document.getElementById("choice1");
const button2 = document.getElementById("choice2");
const lastPlayTxt = document.getElementById("last-play");
const cat = document.getElementById("cat");
const total = document.getElementById("total");
const returnButton = document.getElementById("return-to-menu");
const gameOver = document.getElementById("gameover");
const leaderboard = document.getElementById("main-table");
let interval;
let quizNow;
let answer = 0;
let gameOverFlag = false;

export async function startGame() {
    setup_beforeGame();
    startInterval();
    gameOverFlag = false;
}

function setup_beforeGame(){
    startbutton.classList.add("hidden");
    logo.classList.add("hidden");
    credit.classList.add("hidden");
    lastPlayTxt.classList.add("hidden");
    leaderboard.classList.add("hidden");

    quiz.classList.remove("hidden");
    button1.classList.remove("hidden");
    button2.classList.remove("hidden");
    total.innerText = 0;
    cat.classList.remove("hidden");
}



returnButton.addEventListener("click", ()=> {
    startbutton.classList.remove("hidden");
    logo.classList.remove("hidden");
    credit.classList.remove("hidden");
    lastPlayTxt.classList.remove("hidden");
    leaderboard.classList.remove("hidden");
    
    returnButton.classList.add("hidden");
    gameOver.classList.add("hidden");
});

function return_to_menu(){

    if(gameOverFlag) {
        return ;
    }

    gameOverFlag = true;

    quiz.classList.add("hidden");
    button1.classList.add("hidden");
    button2.classList.add("hidden");
    cat.classList.add("hidden");

    gameOver.classList.remove("hidden");
    returnButton.classList.remove("hidden");
    console.log("end");

    
}

export async function getMaxScore(username){
    const items = await getItems();
    for(const item of items){
        if(item.name == username) {
            total.innerText = item.highscore;
        }
    }
}

button1.addEventListener("click", () => {
    answer = 1;
    checkAnswer(answer);
});

button2.addEventListener("click", () => {
    answer = 2;
    checkAnswer(answer);
});

function startInterval() {
    const quizno = Math.floor(Math.random() * 108);
    quizNow = Questionset[quizno]; // Assign to the higher-scoped quizNow

    quiz.innerText = quizNow.Quiz;
    button1.innerText = quizNow.Choice1;
    button2.innerText = quizNow.Choice2;

    cat.src = cat.src;

    // Clear the previous interval if it exists
    if (interval) {
        clearInterval(interval);
    }

    // Start a new interval after displaying the question
    interval = setInterval(() => {
        clearInterval(interval);
        console.log("Time's up!");
        handleUpdateItem(parseInt(total.innerText));
        getMaxScore(username);
        return_to_menu();
        // Handle the case where time's up, e.g., show a message or proceed to the next question
        //startInterval(); // Start the next question immediately
    }, 5000); // 5 seconds for each question 5000
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer == quizNow.Correct) {
        console.log("right!");
        total.innerText = parseInt(total.innerText) + 1;
        
    } else {
        console.log("Wrong");
        clearInterval(interval); // Stop the game on a wrong answer
        handleUpdateItem(parseInt(total.innerText));
        getMaxScore(username);
        return_to_menu();
    }
    startInterval(); // Start the next question immediately
}