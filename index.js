document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('cliente-form');

    const errorMessages = {
        'cedula': "La cédula debe tener 10 dígitos.",
        'apellidos': "Los apellidos son obligatorios.",
        'nombres': "Los nombres son obligatorios.",
        'direccion': "La dirección es obligatoria.",
        'telefono': "El teléfono debe ser numérico y tener 10 dígitos.",
        'correo': "El correo electrónico no es válido.",
        'ciudad': "La ciudad es obligatoria."
    };

    const fields = {
        'cedula': /^\d{10}$/,
        'apellidos': /\S+/,
        'nombres': /\S+/,
        'direccion': /\S+/,
        'telefono': /^\d{10}$/,
        'correo': /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'ciudad': /\S+/
    };

    form.addEventListener('submit', function(event) {
        let valid = true;

        Object.keys(fields).forEach(field => {
            const input = document.getElementById(field);
            const value = input.value;
            const regex = fields[field];

            if (!regex.test(value)) {
                valid = false;
                input.setCustomValidity(errorMessages[field]);
                input.reportValidity();
            } else {
                input.setCustomValidity('');
            }
        });

        if (!valid) {
            event.preventDefault();
        }
    });

    const updateBorderColor = (input, valid) => {
        input.style.borderColor = valid ? 'green' : 'red';
    };

    const telefonoInput = document.getElementById('telefono');
    const cedulaInput = document.getElementById('cedula');

    telefonoInput.addEventListener('input', function() {
        updateBorderColor(this, this.value.length === 10);
    });

    cedulaInput.addEventListener('input', function() {
        updateBorderColor(this, this.value.length === 10);
    });
});