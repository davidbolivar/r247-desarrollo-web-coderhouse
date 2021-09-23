// Declaración de variables
let formRecargar = document.getElementById("form-recargar");
let operator = formRecargar.elements["operator"];
let amount = formRecargar.elements["amount"];
let serviceNumber = formRecargar.elements["service-number"];
let sendButton = formRecargar.elements["send-button"];

// Listener para detectar envío del formulario
formRecargar.addEventListener("submit", function (event) {
	// Cancela el POST o GET del formulario.
	event.preventDefault();

	window.open(`https://wa.me/584120663036?text=*¡Hola!* Me interesa realizar una recarga *${operator.value.toUpperCase()}* por *${amount.value} Bs* al número *${serviceNumber.value}*.`, "_blank");
});

const operators = ["movistar", "digitel", "movilnet", "movistar-tv", "simple-tv", "inter-prepago", "inter-postpago"];

operators.forEach(function (ele, i) {
	var element = document.querySelector("#" + ele + " button");

	if (element) {
		element.addEventListener("click", function (event) {
			operator.value = ele;
			location.href = "#form-recargar";
			setTimeout(function () {
				sendButton.click();
			}, 700);
		});
	}
});
