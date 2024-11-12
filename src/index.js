import { buttonsEng } from "./data/buttonsEng";
import { keyCodes } from "./data/keyCodes";
import "./style.scss";

const keyboardBody = document.body;
keyboardBody.classList.add("keyboard_body");
const keyboardWrapper = document.createElement("div");
keyboardWrapper.classList.add("keyboard_wrapper");
keyboardBody.append(keyboardWrapper);

const cherryTextareaWrapper = document.createElement("div");
cherryTextareaWrapper.classList.add("keyboard_cherry_textarea_wrapper");
keyboardWrapper.append(cherryTextareaWrapper);

const keyboardCableOne = document.createElement("span");
keyboardCableOne.classList.add("keyboard_cable_one");
keyboardWrapper.append(keyboardCableOne);

const keyboardCherryNeon = document.createElement("a");
keyboardCherryNeon.classList.add("keyboard_cherry_neon");
cherryTextareaWrapper.append(keyboardCherryNeon);
keyboardCherryNeon.href = "https://github.com/lyutails/";

const cherryBranchLeaf = document.createElement("span");
cherryBranchLeaf.classList.add("keyboard_cherry_branch_leaf");
keyboardCherryNeon.append(cherryBranchLeaf);

const cherryBerries = document.createElement("span");
cherryBerries.classList.add("keyboard_cherry_berries");
keyboardCherryNeon.append(cherryBerries);

const keyboardCableThree = document.createElement("span");
keyboardCableThree.classList.add("keyboard_cable_three");
cherryTextareaWrapper.append(keyboardCableThree);

const keyboardTextarea = document.createElement("textarea");
keyboardTextarea.classList.add("keyboard_textarea");
cherryTextareaWrapper.append(keyboardTextarea);
keyboardTextarea.style.columns = "1";
keyboardTextarea.placeholder = "Start typing...";

const keyboardPlate = document.createElement("div");
keyboardPlate.classList.add("keyboard_plate");
keyboardWrapper.append(keyboardPlate);

const keyboardCableTwo = document.createElement("div");
keyboardCableTwo.classList.add("keyboard_cable_two");
keyboardPlate.insertAdjacentElement("afterend", keyboardCableTwo);

const keyboardRows = function () {
  const rowsNumber = 5;
  for (let i = 0; i < rowsNumber; i++) {
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard_row");
    keyboardPlate.append(keyboardRow);
  }
};

keyboardRows();

const totalRows = document.querySelectorAll(".keyboard_row");

class createButtons {
  constructor(button) {
    this.button = button;
  }

  createButton() {
    buttonsEng.forEach((elem, i) => {
      const newButtons = [];
      for (let i = 0; i < elem.length; i++) {
        this.button = document.createElement("div");
        this.button.textContent = elem[i];
        this.button.classList.add("keyboard_button");
        newButtons.push(this.button);
      }
      totalRows[i].append(...newButtons);
    });
  }
}

const keyboardButtons = new createButtons();
keyboardButtons.createButton();

window.addEventListener("keydown", typeText);

function typeText(e) {
  const allButtons = document.querySelectorAll(".keyboard_button");
  for (let i = 0; i < allButtons.length; i++) {
    if (
      e?.keyCode === +keyCodes[i] &&
      e?.keyCode !== 8 &&
      e?.keyCode !== 46 &&
      e?.keyCode !== 9 &&
      e?.keyCode !== 32 &&
      e?.getModifierState("CapsLock") === false &&
      e?.getModifierState("Shift") === false &&
      e?.getModifierState("OS") === false &&
      e?.keyCode !== 13 &&
      e?.keyCode !== 91 &&
      e?.getModifierState("Control") === false &&
      e?.getModifierState("Alt") === false &&
      e?.keyCode !== 17 &&
      e?.keyCode !== 18 &&
      e?.keyCode !== 37
    ) {
      e?.keyCode === 20
        ? (keyboardTextarea.value += "")
        : (keyboardTextarea.value += `${allButtons[
            i
          ].textContent.toLowerCase()}`);
    }
    if (e?.keyCode === +keyCodes[i] && e?.keyCode === 8) {
      keyboardTextarea.value = keyboardTextarea.value.slice(0, -1);
    }
    if (e?.keyCode === +keyCodes[i] && e?.keyCode === 46) {
      keyboardTextarea.value = keyboardTextarea.value.slice(0, -1);
    }
    if (
      e?.keyCode === +keyCodes[i] &&
      e?.getModifierState("CapsLock") === true
    ) {
      e?.keyCode === 20
        ? (keyboardTextarea.value += "")
        : (keyboardTextarea.value += `${allButtons[
            i
          ].textContent.toUpperCase()}`);
    }
    if (e?.keyCode === +keyCodes[i] && e?.keyCode === 9) {
      e.preventDefault();
      keyboardTextarea.value += "  ";
    }
    if (e?.keyCode === +keyCodes[i] && e?.keyCode === 32) {
      keyboardTextarea.value += " ";
    }
    if (e?.keyCode === +keyCodes[i] && e?.getModifierState("Shift") === true) {
      e?.keyCode === 16
        ? (keyboardTextarea.value += "")
        : (keyboardTextarea.value += `${allButtons[
            i
          ].textContent.toUpperCase()}`);
    }
    if (e?.keyCode === +keyCodes[i] && e?.keyCode === 13) {
      keyboardTextarea.value += "\n";
    }
    if (e?.keyCode === +keyCodes[i] && e?.getModifierState("OS") === true) {
      keyboardTextarea.value += "";
    }
    if (
      e?.keyCode === +keyCodes[i] &&
      e?.getModifierState("Control") === true
    ) {
      keyboardTextarea.value += "";
    }
    if (e?.keyCode === +keyCodes[i] && e?.getModifierState("Alt") === true) {
      keyboardTextarea.value += "";
    }
    if (
      e?.keyCode === +keyCodes[i] &&
      e?.getModifierState("Alt") === true &&
      e?.getModifierState("Control") === true
    ) {
      keyboardTextarea.value += "🍒";
    }
    /* if (e?.keyCode === +keyCodes[i] && e?.keyCode === 37) {
      let numberOfLetters = keyboardTextarea.selectionStart;
      keyboardTextarea.focus();
      console.log(keyboardTextarea.textLength);
      keyboardTextarea.setSelectionRange(
        keyboardTextarea.textLength - 1,
        keyboardTextarea.textLength - 1
      );
    } */
  }
}

typeText();

function typeHighlight() {
  const kindaButtons = document.querySelectorAll(".keyboard_button");
  document.onkeydown = function (e) {
    for (let i = 0; i < kindaButtons.length; i++) {
      if (e.key === kindaButtons[i].textContent) {
        if (
          document
            .querySelector(".keyboard_button")
            .classList.contains("active")
        ) {
          document
            .querySelector(".keyboard_button.active")
            .classList.remove("active");
        }
        if (kindaButtons[i].textContent === e.key) {
          kindaButtons[i].classList.add("active");
          setTimeout(() => {
            kindaButtons[i].classList.remove("active");
          }, 500);
        }
      }
    }
  };
}

typeHighlight();

let capslockIsOn = false;

function clickText() {
  const allButtons = document.querySelectorAll(".keyboard_button");
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", (e) => {
      if (
        allButtons[i].textContent.toLowerCase() !== "backspace" &&
        allButtons[i].textContent.toLowerCase() !== "tab" &&
        allButtons[i].textContent.toLowerCase() !== "enter" &&
        allButtons[i].textContent.toLowerCase() !== "control" &&
        allButtons[i].textContent.toLowerCase() !== "alt" &&
        allButtons[i].textContent.toLowerCase() !== "capslock" &&
        allButtons[i].textContent.toLowerCase() !== "give some space" &&
        allButtons[i].textContent.toLowerCase() !== "delete" &&
        allButtons[i].textContent.toLowerCase() !== "shift" &&
        allButtons[i].textContent.toLowerCase() !== "win"
      ) {
        capslockIsOn === true
          ? (keyboardTextarea.value += `${allButtons[
              i
            ].textContent.toUpperCase()}`)
          : (keyboardTextarea.value += `${allButtons[
              i
            ].textContent.toLowerCase()}`);
      }
      if (allButtons[i].textContent.toLowerCase() === "backspace") {
        keyboardTextarea.value = keyboardTextarea.value.slice(0, -1);
      }
      if (allButtons[i].textContent.toLowerCase() === "delete") {
        keyboardTextarea.value = keyboardTextarea.value.slice(0, -1);
      }
      if (allButtons[i].textContent.toLowerCase() === "tab") {
        keyboardTextarea.value += "  ";
      }
      if (allButtons[i].textContent.toLowerCase() === "enter") {
        keyboardTextarea.value += "\n";
      }
      if (
        allButtons[i].textContent.toLowerCase() === "control" ||
        allButtons[i].textContent.toLowerCase() === "alt"
      ) {
        keyboardTextarea.value += "🍒";
      }
      if (allButtons[i].textContent.toLowerCase() === "capslock") {
        capslockIsOn = !capslockIsOn;
      }
      if (allButtons[i].textContent.toLowerCase() === "give some space") {
        keyboardTextarea.value += " ";
      }
      if (allButtons[i].textContent.toLowerCase() === "shift") {
        capslockIsOn = !capslockIsOn;
      }
      if (allButtons[i].textContent.toLowerCase() === "win") {
        keyboardTextarea.value += "🏆";
      }
    });
  }
}

clickText();
