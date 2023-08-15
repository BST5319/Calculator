let string = "";
let input = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");
let backspace = document.getElementById("backspace");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                if (string.length == 0) {
                    input.innerHTML = "Error";
                }
                else {
                    string = eval(string);
                    string = String(string);
                    input.innerText = string;
                    // setTimeout(() => {
                    //     if (string.length > 0) {
                    //         string = "";
                    //         input.innerHTML = string;
                    //     }
                    // }, 500);
                }
            }
            catch {
                input.innerHTML = "Error";
            }
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.innerHTML = "";
        }
        else if (e.target.innerHTML == "X") {
            string += "*";
            input.innerHTML += "X";
        }
        else if (e.target.innerHTML == "%") {
            string += "/100";
            input.innerHTML += "%";
        }
        else if (e.target.innerHTML == "+/-") {
            if (string[0] == "-" && e.target.innerHTML == "+/-") {
                string = string.slice(1, string.length);
                input.innerHTML = input.innerHTML.slice(1, input.innerHTML.length);
            }
            else {
                string = "-" + string.slice(0, string.length);
                input.innerHTML = "-" + input.innerHTML.slice(0, input.innerHTML.length);
            }
        }
        else if (e.target.innerHTML == "÷") {
            string += "/";
            input.innerHTML += "÷";
            console.log("÷");
        }
        else if (e.target.id == "backspace") {
            string = String(string);
            console.log(string);
            string = string.slice(0, string.length - 1);
            input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1);
        }
        else {
            string += e.target.innerText;
            input.innerHTML += e.target.innerHTML;
        }
    });
});