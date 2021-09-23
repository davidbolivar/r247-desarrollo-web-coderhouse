// Declaración de variables para envío de formulario por whatsapp
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

let operadoras = document.getElementById("operadoras");
// Si existe el section de operadoras
if (operadoras) {
	// Array con lista de operadoras
	const operators = ["movistar", "digitel", "movilnet", "movistar-tv", "simple-tv", "inter-prepago", "inter-postpago"];

	// Por cada operadora se crea un eventListener para llenar el formulario de recaga.
	operators.forEach(function (ele, i) {
		var element = document.querySelector("#" + ele + " button");

		element.addEventListener("click", function (event) {
			// Al detectar el evento click, se limpia el formulario y se completa con la operadora seleccionada.
			formRecargar.reset();
			location.href = "#form-recargar";
			setTimeout(function () {
				operator.value = ele;
				sendButton.click();
			}, 1000);
		});
	});
}
