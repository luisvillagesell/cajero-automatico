 // Variable para almacenar el saldo
 var saldo = 0;

 // Función para manejar la operación
 function realizarOperacion() {
     var username = document.getElementById("username").value;
     var action = document.getElementById("action").value;
     var amount = parseFloat(document.getElementById("amount").value);

     // Verificar si el monto es válido
     if (isNaN(amount) || amount <= 0) {
         alert("Por favor ingrese un monto válido.");
         return;
     }

     // Realizar la operación
     if (action === "retirar") {
         saldo -= amount;
     } else if (action === "depositar") {
         saldo += amount;
     }

     // Actualizar el saldo en la interfaz
     document.getElementById("saldo").textContent = "Saldo actual: " + saldo.toFixed(2);

     // Reiniciar los campos de entrada
     document.getElementById("username").value = "";
     document.getElementById("amount").value = "";
 }

 // Asignar la función al botón
 document.getElementById("realizar-operacion").addEventListener("click", realizarOperacion);
   

        /**
         * <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control de Cuenta</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Control de Cuenta</h2>
        <label for="username">Nombre de Usuario:</label>
        <input type="text" id="username" placeholder="Ingrese su nombre">
        <label for="action">¿Qué desea hacer?</label>
        <select id="action">
            <option value="retirar">Retirar</option>
            <option value="depositar">Depositar</option>
        </select>
        <label for="amount">Monto:</label>
        <input type="number" id="amount" placeholder="Ingrese el monto">
        <button id="realizar-operacion">Realizar Operación</button>
        <p id="saldo">Saldo actual: 0</p>
    </div>

    <script>
        // Variable para almacenar el saldo
        var saldo = 0;

        // Función para manejar la operación
        function realizarOperacion() {
            var username = document.getElementById("username").value;
            var action = document.getElementById("action").value;
            var amount = parseFloat(document.getElementById("amount").value);

            // Verificar si el monto es válido
            if (isNaN(amount) || amount <= 0) {
                alert("Por favor ingrese un monto válido.");
                return;
            }

            // Realizar la operación
            if (action === "retirar") {
                saldo -= amount;
            } else if (action === "depositar") {
                saldo += amount;
            }

            // Actualizar el saldo en la interfaz
            document.getElementById("saldo").textContent = "Saldo actual: " + saldo.toFixed(2);

            // Reiniciar los campos de entrada
            document.getElementById("username").value = "";
            document.getElementById("amount").value = "";
        }

        // Asignar la función al botón
        document.getElementById("realizar-operacion").addEventListener("click", realizarOperacion);
    </script>
</body>
</html>

         */