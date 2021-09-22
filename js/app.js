// Declaración de variables
let formRecargar = document.getElementById("form-recargar");
let operator = formRecargar.elements["operator"];
let amount = formRecargar.elements["amount"];
let serviceNumber = formRecargar.elements["service-number"];

// Listener para detectar envío del formulario
formRecargar.addEventListener("submit", function (event) {
	// Cancela el POST o GET del formulario.
	event.preventDefault();

	// Pregunta el nombre al usuario.
	let name = prompt("¡Hola! Por favor ingresa tu nombre para poder brindarte atención personalizada. Puedes dejar el campo en blanco si lo deseas.");

	// Si presionó CONTINUAR al preguntar el nombre, e ingresó uno, se redirige a whatsapp con este mensaje
	if (name && name != "") {
		window.open(`https://wa.me/584120663036?text=*¡Hola!* Mi nombre es _*${name.toUpperCase()}*_. Me interesa realizar una recarga *${operator.value.toUpperCase()}* por *${amount.value} Bs* al número *${serviceNumber.value}*.`, "_blank");

		// Si no ingresó un nombre, envía a whatsapp con un mensaje diferente.
	} else if (name == "") {
		window.open(`https://wa.me/584120663036?text=*¡Hola!* Me interesa realizar una recarga *${operator.value.toUpperCase()}* por *${amount.value} Bs* al número *${serviceNumber.value}*.`, "_blank");

		// Si presionó CANCELAR al preguntarle el nombre, se le muestra este mensaje.
	} else {
		alert("Intenta enviar tu solicitud nuevamente.");
	}
});
