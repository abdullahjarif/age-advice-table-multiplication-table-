function generateTable(){

    const numberInput = document.getElementById("number");
    const multiplicationTableResult = document.querySelector("#multiplicationTable");

    multiplicationTableResult.innerHTML = " ";

    for (let i = 1; i <= 10; i++) {
        let row = multiplicationTableResult.insertRow();
        let cell1 = row.insertCell(0);  
        let cell2 = row.insertCell(1);
        cell1.innerText = `${numberInput.value} x ${i}`;
        cell2.innerText = numberInput.value * (i);
    }
}

function showAdvice() {

    const age = parseInt(document.getElementById("age").value);

    const ageAdviceTable = document.getElementById("ageAdviceTable");

    ageAdviceTable.innerHTML = " ";

    if (isNaN(age) || age < 0) {
        ageAdviceTable.innerHTML = "<tr><td colspan='2'>No specific advice available for this age.</td></tr>";
    } else if (age <= 6) {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>You are very young. Enjoy your childhood!</td></tr>";
    } else if (age <= 17) {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>You are a child. Focus on education and play.</td></tr>";
    } else if (age <= 20) {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>You're growing into adulthood. Learn new skills.</td></tr>";
    } else if (age <= 25) {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>You can vote and start your career journey.</td></tr>";
    } else if (age <= 30) {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>Consider financial planning and future goals.</td></tr>";
    } else if (age <= 40) {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>It's a good time to think about long-term savings.</td></tr>";
    } else if (age <= 50) {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>Start considering your retirement plans.</td></tr>";
    } else if (age <= 60) {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>You are halfway to retirement! Reassess your goals.</td></tr>";
    } else if (age <= 65) {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>You may qualify for senior discounts and benefits.</td></tr>";
    } else {
        ageAdviceTable.innerHTML += "<tr><td colspan='2'>You are likely eligible for pension and retirement benefits.</td></tr>";
    }
}
