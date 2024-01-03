let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

const calculateAge = () => {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }


    if (d3 < 0 && m3 < 0 && y3 < 0) {
        document.getElementById("age").innerText = "Invalid"
    }
    else {
        document.getElementById("age").innerText = `Your age is ${y3 > 1 ? `${y3}` + " Years," : y3 == 1 ? `${y3}` + " Year," : ""} ${m3 > 1 ? `${m3}` + " Months," : m3 == 1 ? `${m3}` + " Month," : ""} ${d3 > 1 ? `${d3}` + " Days." : d3 == 1 ? `${d3}` + " Day." : ""}`;
        console.log(d3, m3, y3);
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

document.getElementById("btn").addEventListener("click", calculateAge);

