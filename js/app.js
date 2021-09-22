let formRecargar = document.getElementById("form-recargar");
let operator = formRecargar.elements["operator"];
let amount = formRecargar.elements["amount"];
let serviceNumber = formRecargar.elements["service-number"];
let sendButton = formRecargar.elements["send-button"];

formRecargar.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();
	let name = prompt("¡Hola! ¿Cuál es tu nombre?");

	if (name && name != "") {
		window.open(`https://wa.me/584120663036?text=¡Hola! Mi nombre es ${name.toUpperCase()}. Me interesa realizar una recarga *${operator.value.toUpperCase()}* por *${amount.value} Bs* al número *${serviceNumber.value}*.`, "_blank");
	} else if (name == "") {
		window.open(`https://wa.me/584120663036?text=¡Hola! Me interesa realizar una recarga *${operator.value.toUpperCase()}* por *${amount.value} Bs* al número *${serviceNumber.value}*.`, "_blank");
	} else {
		alert("Intenta enviar tu solicitud nuevamente.");
	}
});
