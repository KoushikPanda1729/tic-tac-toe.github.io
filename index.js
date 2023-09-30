let turnX = "X";

let audio = new Audio("a1.mp3");
let winAudio = new Audio("a2.wav");
let resetAudio = new Audio("a3.mp3");



const zeroAndX = document.querySelectorAll(".zeroAndX");
const turnX0Content = document.querySelector(".turnX");
const button = document.querySelector(".button");
let isOver = false;
let winer = false;

const changeTurn = () => {
    return turnX === "X" ? "0" : "X"
}

const checkWin = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    win.forEach(e => {
        if ((zeroAndX[e[0]].textContent === zeroAndX[e[1]].textContent) && (zeroAndX[e[2]].textContent === zeroAndX[e[1]].textContent) && (zeroAndX[e[0]].textContent !== "")) {

            zeroAndX[e[0]].style.backgroundColor = "#91EE91";
            zeroAndX[e[1]].style.backgroundColor = "#91EE91";
            zeroAndX[e[2]].style.backgroundColor = "#91EE91";


            turnX0Content.textContent = `Win ${zeroAndX[e[0]].textContent}`;
            turnX0Content.style.backgroundColor = "#91EE91";
            turnX0Content.style.padding = "1rem";
            turnX0Content.style.borderRadious = "0.5px";
            winAudio.play();
            isOver = true;
            winer = true;
        }
    })
    return;
}



zeroAndX.forEach((box) => {
    box.addEventListener("click", (e) => {
        if (e.target.innerText === "") {
            e.target.textContent = turnX;
            turnX = changeTurn();
            audio.play();
            if (!winer) {
                checkWin();
            }

            if (!isOver) {
                turnX0Content.textContent = `Turn ${turnX}`;
            }

        }
    });
});



button.addEventListener("click", () => {
    zeroAndX.forEach(box => {
        box.textContent = "";
        turnX0Content.textContent = ` Turn X`;
        turnX = "X";
        isOver = false;
        winer = false;
        turnX0Content.style.backgroundColor = "antiquewhite";
        turnX0Content.style.color = "black";
        zeroAndX.forEach(item => {
            item.style.backgroundColor = "white"
        });
        resetAudio.play();
        return;

    })
})