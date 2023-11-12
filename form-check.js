function formatPhone(input) {
    let cleaned = ('' + input).replace(/\D/g, '');

    let formatted = '';
    if (cleaned.length < 11) {
        formatted = cleaned.replace(/^(\d{2})(\d{0,5})(\d{0,4}).*/, '($1) $2-$3');
    } else {
        formatted = cleaned.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
    }
    return formatted;
}

function updatePhoneInput(e) {
    let input = e.target.value;
    let formatted = formatPhone(input);
    e.target.value = formatted;
}

document.getElementById('phoneInput').addEventListener('input', updatePhoneInput);

function validatePhoneNumber() {
    let input = document.getElementById('phoneInput').value;
    let digitCount = ('' + input).replace(/\D/g, '').length;
    
    if (digitCount !== 11) {
        return false; // Retorna falso se o número não tiver 11 dígitos
    }
    return true; // Retorna verdadeiro se o número tiver 11 dígitos
}

function showErrorMessage(inputField, errorMessage) {
    const errorSpan = document.getElementById(inputField + "Error");
    errorSpan.textContent = errorMessage;
    errorSpan.style.display = "block";
}

function clearErrorMessages() {
    const errorSpans = document.getElementsByClassName("error");
    for (let i = 0; i < errorSpans.length; i++) {
        errorSpans[i].textContent = "";
        errorSpans[i].style.display = "none";
    }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    clearErrorMessages();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    if (!validatePhoneNumber()) {
        showErrorMessage("phone", "O número de telefone deve ter 11 dígitos, incluindo o DDD.");
        event.preventDefault();
    } 
    if (name === '') {
        showErrorMessage("name", "Por favor, preencha o nome.");
        event.preventDefault();
    }
    if (email === '') {
        showErrorMessage("email", "Por favor, preencha o email.");
        event.preventDefault();
    }
});
