/* ==========================================================================
   1. MENU MOBILE RESPONSIVO
   ========================================================================== */
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const menuLinks = document.querySelectorAll('#menu a');

function toggleMenu() {
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

/* ==========================================================================
   2. ALTERNÂNCIA DE TEMA (CLARO / ESCURO)
   ========================================================================== */
const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnTheme.textContent = '☀️';
    } else {
        btnTheme.textContent = '🌙';
    }
});

/* ==========================================================================
   3. VALIDAÇÃO DO FORMULÁRIO DE CONTATO E SIMULAÇÃO DE ENVIO
   ========================================================================== */
const form = document.getElementById('form-contato');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputMensagem = document.getElementById('mensagem');

const modal = document.getElementById('modal-sucesso');
const btnFecharModal = document.getElementById('fechar-modal');

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function mostrarErro(campo, idErro, mensagem) {
    const elementoErro = document.getElementById(idErro);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = 'block';
    campo.style.borderColor = 'var(--error-color)';
}

function limparErro(campo, idErro) {
    const elementoErro = document.getElementById(idErro);
    elementoErro.textContent = '';
    elementoErro.style.display = 'none';
    campo.style.borderColor = 'var(--border-color)';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formValido = true;

    if (inputNome.value.trim() === '') {
        mostrarErro(inputNome, 'erro-nome', 'Por favor, informe seu nome.');
        formValido = false;
    } else {
        limparErro(inputNome, 'erro-nome');
    }

    if (inputEmail.value.trim() === '') {
        mostrarErro(inputEmail, 'erro-email', 'Por favor, informe seu e-mail.');
        formValido = false;
    } else if (!validarEmail(inputEmail.value.trim())) {
        mostrarErro(inputEmail, 'erro-email', 'Por favor, digite um e-mail válido (ex: usuario@dominio.com).');
        formValido = false;
    } else {
        limparErro(inputEmail, 'erro-email');
    }

    if (inputMensagem.value.trim() === '') {
        mostrarErro(inputMensagem, 'erro-mensagem', 'Por favor, digite sua mensagem.');
        formValido = false;
    } else {
        limparErro(inputMensagem, 'erro-mensagem');
    }

    if (formValido) {
        form.reset();
        modal.style.display = 'flex';
    }
});

/* ==========================================================================
   4. CONTROLE DO MODAL DE CONFIRMAÇÃO
   ========================================================================== */
btnFecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});