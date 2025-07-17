// Close menu mobile
document.addEventListener('DOMContentLoaded', function () {
    const navbarNav = document.getElementById('navbarNav');
    const offcanvas = document.getElementById('offcanvasNavbar');
    const offcanvasToggle = new bootstrap.Offcanvas(offcanvas);

    navbarNav.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            offcanvasToggle.hide();
        }
    });
});

// scroll indicator
const indicator = document.querySelector('#indicator');
const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const porcentage = (window.scrollY / maxHeight) * 100;

    indicator.style.width = `${porcentage}%`;
});

// dark mode
window.onload = () => {
    const checkbox = document.querySelector('input[type="checkbox"]');
    const logo = document.getElementById('logo');
    const logoMenuMobile = document.getElementById('logoMenuMobile');

    const updateLogo = (isDark) => {
        const logoDark = './assets/imagens/logo.png';
        const logoLight = './assets/imagens/logo2.png';

        if (isDark) {
            logo.src = logoDark;
            logoMenuMobile.src = logoDark;
        } else {
            logo.src = logoLight;
            logoMenuMobile.src = logoLight;
        }
    };

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        checkbox.checked = true;
        updateLogo(true);
    } else {
        document.documentElement.classList.remove('dark');
        checkbox.checked = false;
        updateLogo(false);
    }

    checkbox.addEventListener("change", function (event) {
        if (event.target.checked) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            localStorage.theme = 'dark';
            updateLogo(true);
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.theme = 'light';
            updateLogo(false);
        }
    });
}

// animation text
const textoAnimado = document.querySelector('.text-animation');
typeWhiter(textoAnimado);

function typeWhiter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });

    setTimeout(() => {
        elemento.classList.add('hide-cursor');
    }, 250 * textArray.length);
}

// autocomplete cel phone
document.getElementById('phone').addEventListener('input', function (event) {
    var input = event.target;
    var value = input.value.replace(/\D/g, '');
    if (value.length > 0) {
        value = value.slice(0, 0) + '(' + value.slice(0);
    }

    if (value.length > 3) {
        value = value.slice(0, 3) + ')' + value.slice(3);
    }

    if (value.length > 9) {
        value = value.slice(0, 9) + '-' + value.slice(9);
    }

    input.value = value;
});