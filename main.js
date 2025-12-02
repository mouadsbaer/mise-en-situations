const amount = document.getElementById('amount');
const duration = document.getElementById('duration');
const salary = document.getElementById('salary');
const resultElement = document.getElementById('result');
const calcul = document.getElementById('calcul');
const vider = document.getElementById('vider');
vider.addEventListener('click', ()=>{
    amount.value = '';
    duration.value = '';
    salary.value = '';
})
calcul.addEventListener('click', () => {

    const loan_amount = parseFloat(amount.value);
    const loanDuration = parseInt(duration.value);
    const monthlySalary = parseFloat(salary.value);
    
    let interest_rate;
    let total_to_repay;
    let mensualite;
    if (loanDuration <= 12) {
        interest_rate = 0.03;
        total_to_repay = loan_amount * (1 + interest_rate);
        mensualite = total_to_repay / loanDuration;
        resultElement.textContent = total_to_repay.toString();
        if(mensualite > monthlySalary * 0.4){
            alert(`Refusé : mensualité trop élevée (${mensualite} MAD) pour un salaire de Y`)
        }
    } else if (loanDuration >= 13 && loanDuration <= 36) {
        interest_rate = 0.05; 
        total_to_repay = loan_amount * (1 + interest_rate);
        mensualite = total_to_repay / loanDuration;
        resultElement.textContent = total_to_repay.toString();
        

    } else if (loanDuration > 36) {
        interest_rate = 0.07; 
        total_to_repay = loan_amount * (1 + interest_rate);
        mensualite = total_to_repay / loanDuration;
        resultElement.textContent = total_to_repay.toString();
        

    } else {
        alert('Veuillez saisir une durée acceptable !!');
        return;
    }
});

function show_summary(amount, duration, interest_rates, mensualite, total_to_repay){
    
}