function dialogPass() {
    let password = prompt("Будь ласка, введіть пароль:");
    let [alertSent, bool] = ['', false];
  while(bool !== true) {
    [alertSent, bool] = checkPassword(password);
    alert(alertSent)
    password= bool===true? password : prompt("Будь ласка, введіть новий пароль:");
  }
}

function showDeveloperInfo(lastName='Жайворонок', firstName='Катериною', position = "Web Developer") {
    alert(`Розроблено розробником ${lastName} ${firstName} на посаді ${ position }`);
}

function checkPassword(password) {
    let minLength = 8; 
    let minUppercase = 1;
    let minLowercase = 1; 
    let minNumbers = 1; 
    if (password.length < minLength) {
        return ["Пароль повинен містити принаймні " + minLength + " символів", false];
    }

    let uppercaseRegex = /[A-Z]/g;
    if (!password.match(uppercaseRegex) || password.match(uppercaseRegex).length < minUppercase) {
        return ["Пароль повинен містити принаймні " + minUppercase + " велику літеру", false];
    }

    
    let lowercaseRegex = /[a-z]/g;
    if (!password.match(lowercaseRegex) || password.match(lowercaseRegex).length < minLowercase) {
        return ["Пароль повинен містити принаймні " + minLowercase + " малу літеру", false];
    }

    
    let numbersRegex = /[0-9]/g;
    if (!password.match(numbersRegex) || password.match(numbersRegex).length < minNumbers) {
        return ["Пароль повинен містити принаймні " + minNumbers + " цифру", false];
    }

    return ["Пароль задовільняє всі критерії", true];
}

function twoStr() {
    let str1=prompt("Введіть рядок 1:");
    let str2=prompt("Введіть рядок 2:");
    str1.length === str2.length ? alert("Рядки однакові") : (str1.length > str2 ? alert(str1) : alert(str2));
    
}


const menu = document.getElementById('menu');

    menu.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('menu-button')) {
        const action = target.dataset.action;

        switch (action) {
            case 'index':
                location.href='index.html';
                break;
            case 'bio':
                location.href='biography.html';
                break;
            case 'news':
                location.href='news_updates.html';
                break;
            case 'gallery':
                location.href='gallery.html';
                break;
            case 'dev':
                showDeveloperInfo();
                break;
            default:
                console.error('Невідома дія:', action);
                break;
        }
    }
});
