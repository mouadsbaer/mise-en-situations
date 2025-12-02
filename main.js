const amount = document.getElementById('amount');
const duration = document.getElementById('duration');
const salary = document.getElementById('salary');
const resultElement = document.getElementById('result');
const calcul = document.getElementById('calcul');
const vider = document.getElementById('vider');


vider.addEventListener('click', () => {
    amount.value = '';
    duration.value = '';
    salary.value = '';
    resultElement.textContent = ''; 


    function show_summary(amount, duration, interest_rate, mensualite, total_to_repay, monthlySalary) {
    const formattedAmount = parseFloat(amount).toFixed(2);
    const formattedMensualite = parseFloat(mensualite).toFixed(2);
    const formattedTotal = parseFloat(total_to_repay).toFixed(2);
    const formattedSalary = parseFloat(monthlySalary).toFixed(2);
    
    resultElement.textContent = 
        `Montant demandé: ${formattedAmount} MAD\n` +
        `Durée: ${duration} mois\n` +
        `Taux appliqué: ${(interest_rate * 100)}%\n` +
        `Mensualité: ${formattedMensualite} MAD\n` +
        `Total à rembourser: ${formattedTotal} MAD\n` +
        `Salaire: ${formattedSalary} MAD`;
}

function show_refusal(mensualite, monthlySalary) {
    const formattedMensualite = parseFloat(mensualite).toFixed(2);
    const formattedSalary = parseFloat(monthlySalary).toFixed(2);
    
    resultElement.textContent = 
        `Refusé: mensualité trop élevée (${formattedMensualite} MAD) pour un salaire de ${formattedSalary} MAD`;
}

calcul.addEventListener('click', () => {
    if (!amount.value || !duration.value || !salary.value) {
        alert('Veuillez remplir tous les champs !');
        return;
    }
    
    const loan_amount = parseFloat(amount.value);
    const loanDuration = parseInt(duration.value);
    const monthlySalary = parseFloat(salary.value);
    
    if (isNaN(loan_amount) || loan_amount <= 0) {
        alert('Veuillez saisir un montant valide (nombre positif) !');
        return;
    }
    
    if (isNaN(loanDuration) || loanDuration <= 0) {
        alert('Veuillez saisir une durée valide (nombre de mois positif) !');
        return;
    }
    
    if (isNaN(monthlySalary) || monthlySalary <= 0) {
        alert('Veuillez saisir un salaire valide (nombre positif) !');
        return;
    }
    
    let interest_rate;
    let total_to_repay;
    let mensualite;
    
    if (loanDuration <= 12) {
        interest_rate = 0.03; 
    } else if (loanDuration <= 36) { 
        interest_rate = 0.05; 
    } else { 
        interest_rate = 0.07; 
    }
    
    
    total_to_repay = loan_amount * (1 + interest_rate);
    mensualite = total_to_repay / loanDuration;
    
   
    if (mensualite > monthlySalary * 0.4) {
        show_refusal(mensualite, monthlySalary);
    } else {
        show_summary(loan_amount, loanDuration, interest_rate, mensualite, total_to_repay, monthlySalary);
    }
});
});