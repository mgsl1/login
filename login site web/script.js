const form = document.querySelector("form");

const eField = form.querySelector(".email"),
      eInput = eField.querySelector("input"),
      pField = form.querySelector(".password"),
      pInput = pField.querySelector("input"),
      cpField = form.querySelector(".confirm-password"),
      cpInput = cpField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    checkEmail();
    checkPass();
    checkConfirmPass();

    if (eField.classList.contains("error")) eField.classList.add("shake");
    if (pField.classList.contains("error")) pField.classList.add("shake");
    if (cpField.classList.contains("error")) cpField.classList.add("shake");

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
        cpField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => { checkEmail(); }
    pInput.onkeyup = () => { checkPass(); }
    cpInput.onkeyup = () => { checkConfirmPass(); }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let errorTxt = eField.querySelector(".error-txt");

        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            errorTxt.innerText = eInput.value ? "Please enter a valid email." : "Email cannot be empty.";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        let errorTxt = pField.querySelector(".error-txt");

        if (pInput.value === "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
            errorTxt.innerText = "Password cannot be empty.";
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    function checkConfirmPass() {
        let errorTxt = cpField.querySelector(".error-txt");

        if (cpInput.value !== pInput.value) {
            cpField.classList.add("error");
            cpField.classList.remove("valid");
            errorTxt.innerText = "Passwords do not match.";
        } else {
            cpField.classList.remove("error");
            cpField.classList.add("valid");
        }
    }

    if (!eField.classList.contains("error") && !pField.classList.contains("error") && !cpField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }
}