function changeTextColor() {
    let color_r = document.getElementsByTagName("input")[0].value;
    let color_g = document.getElementsByTagName("input")[1].value;
    let color_b = document.getElementsByTagName("input")[2].value;
    const paragraph = document.getElementById("paragraph");
    let rgb_string = "rgb(" + color_r + "," + color_g + "," + color_b + ")";
    paragraph.style.color = rgb_string;
    paragraph.style.borderColor = rgb_string;
}

function changeBorderWidthUp() {
    const paragraph = document.getElementById("paragraph")
    let i = getComputedStyle(paragraph).getPropertyValue("border-width").slice(0, -2);
    console.log(i);
    paragraph.style.borderWidth = String(Number(i) + 1) + "px";  
}

function changeBorderWidthDown() {
    const paragraph = document.getElementById("paragraph")
    let i = getComputedStyle(paragraph).getPropertyValue("border-width").slice(0, -2);
    console.log(i);
    paragraph.style.borderWidth = String(Number(i) - 1) + "px";  
}

function verifyPassword() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if (password1.length > 7 && password1 == password2) {
        alert("You have been verified!")
    } else if (password1.length <= 7) {
        alert("Password needs to be atleast 8 characters.");
    } else {
        alert("Passwords are not the same, please try again.")
    }
}