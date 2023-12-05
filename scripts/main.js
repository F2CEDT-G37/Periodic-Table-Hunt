import { getMaxScore, startGame } from "./in-game.js";
import { fetchAndDrawTable } from "./table.js";
export let username;

document.addEventListener("DOMContentLoaded", () => { //web load complete
    
    fetchAndDrawTable();
    username = window.prompt("Enter your name:");
    getMaxScore(username);
    const startbutton = document.getElementById("startbutton");
    startbutton.addEventListener("click", () => { //start button
        startGame();
    });
    
    const open = document.getElementById("open-credit");
    const modal_container = document.getElementById("modal-container");
    const close = document.getElementById("close");

    open.addEventListener("click", () =>{
        modal_container.classList.add("show");
    });

    close.addEventListener("click",() =>{
        modal_container.classList.remove("show");
    });

});
