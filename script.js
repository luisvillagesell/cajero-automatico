function solicitarNombreUsuario() {
    return document.getElementById('username').value;
}

function solicitarMonto() {
    return parseFloat(document.getElementById('amount').value);
}

function realizarOperacion() {
    var nombreUsuario = solicitarNombreUsuario();
    var monto = solicitarMonto();
    var saldoDisponible = 1000; // Saldo inicial, puede cambiarlo según lo desee

    if (isNaN(monto)) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    var action = document.getElementById('action').value;

    if (action === 'retirar') {
        if (monto > saldoDisponible) {
            alert("Lo siento, saldo insuficiente.");
        } else {
            var saldoRestante = saldoDisponible - monto;
            alert("Retiro exitoso de $" + monto + ". Su saldo restante es: $" + saldoRestante.toFixed(2));
        }
    } else if (action === 'depositar') {
        var saldoNuevo = saldoDisponible + monto;
        alert("Depósito exitoso de $" + monto + ". Su saldo actual es: $" + saldoNuevo.toFixed(2));
    } else {
        alert("Seleccione una acción válida.");
    }
}
