document.addEventListener("DOMContentLoaded", () => {
    // 1. Saudação Automática Dinâmica
    const elementoSaudacao = document.getElementById("saudacao");
    const hora = new Date().getHours();
    let mensagem = "Olá!";

    if (hora >= 5 && hora < 12) {
        mensagem = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "Boa tarde!";
    } else {
        mensagem = "Boa noite!";
    }

    if (elementoSaudacao) {
        elementoSaudacao.textContent = `${mensagem} Seja bem-vindo(a)!`;
    }

    // 2. Modo Escuro com Memória (localStorage)
    const btnTema = document.getElementById("btn-tema");
    const temaSalvo = localStorage.getItem("tema");

    // Aplica o tema salvo anteriormente
    if (temaSalvo === "dark") {
        document.body.classList.add("dark-mode");
        if (btnTema) btnTema.textContent = "☀️";
    }

    if (btnTema) {
        btnTema.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                btnTema.textContent = "☀️";
                localStorage.setItem("tema", "dark");
            } else {
                btnTema.textContent = "🌙";
                localStorage.setItem("tema", "light");
            }
        });
    }
});