document.addEventListener('DOMContentLoaded', (event) => {
    // Toggle between client and admin registration forms
    const toggleFormBtn = document.getElementById('toggleForm');
    if (toggleFormBtn) {
        toggleFormBtn.addEventListener('click', () => {
            const clientFields = document.getElementById('clientFields');
            const adminFields = document.getElementById('adminFields');
            if (clientFields.style.display === 'none') {
                clientFields.style.display = 'block';
                adminFields.style.display = 'none';
                toggleFormBtn.textContent = 'Cambiar a registro de administrador';
            } else {
                clientFields.style.display = 'none';
                adminFields.style.display = 'block';
                toggleFormBtn.textContent = 'Cambiar a registro de cliente';
            }
        });
    }

    // Toggle between client and admin login forms
    const toggleLoginBtn = document.getElementById('toggleLogin');
    if (toggleLoginBtn) {
        toggleLoginBtn.addEventListener('click', () => {
            const clientLogin = document.getElementById('clientLogin');
            const adminLogin = document.getElementById('adminLogin');
            if (clientLogin.style.display === 'none') {
                clientLogin.style.display = 'block';
                adminLogin.style.display = 'none';
                toggleLoginBtn.textContent = 'Cambiar a inicio de sesión de administrador';
            } else {
                clientLogin.style.display = 'none';
                adminLogin.style.display = 'block';
                toggleLoginBtn.textContent = 'Cambiar a inicio de sesión de cliente';
            }
        });
    }

    // Handle form submissions
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            console.log('Registration form submitted');
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the login data to a server for authentication
            console.log('Login form submitted');
        });
    }

    // Admin panel functionality
    const addProveedorBtn = document.getElementById('addProveedorBtn');
    const viewProveedoresBtn = document.getElementById('viewProveedoresBtn');
    const viewPedidosBtn = document.getElementById('viewPedidosBtn');
    const viewProveedoresInfoBtn = document.getElementById('viewProveedoresInfoBtn');
    const contentArea = document.getElementById('contentArea');

    if (addProveedorBtn) {
        addProveedorBtn.addEventListener('click', () => {
            contentArea.innerHTML = `
                <h2>Agregar Proveedor</h2>
                <form id="proveedorForm">
                    <input type="text" name="nombre" placeholder="Nombre del proveedor" required>
                    <input type="text" name="apellido" placeholder="Apellido" required>
                    <input type="tel" name="contacto" placeholder="Contacto" required>
                    <input type="text" name="empresa" placeholder="Nombre de la empresa" required>
                    <input type="text" name="materiales" placeholder="Materiales o productos" required>
                    <input type="text" name="ubicacion" placeholder="Ubicación" required>
                    <input type="email" name="correoEmpresarial" placeholder="Correo empresarial" required>
                    <button type="submit">Agregar Proveedor</button>
                </form>
            `;
        });
    }

    if (viewProveedoresBtn) {
        viewProveedoresBtn.addEventListener('click', () => {
            // Here you would typically fetch the providers from a server
            contentArea.innerHTML = '<h2>Lista de Proveedores</h2><p>Aquí se mostraría la lista de proveedores.</p>';
        });
    }

    if (viewPedidosBtn) {
        viewPedidosBtn.addEventListener('click', () => {
            // Here you would typically fetch the orders from a server
            contentArea.innerHTML = '<h2>Pedidos</h2><p>Aquí se mostrarían los pedidos de los clientes.</p>';
        });
    }

    if (viewProveedoresInfoBtn) {
        viewProveedoresInfoBtn.addEventListener('click', () => {
            // Here you would typically fetch the provider information from a server
            contentArea.innerHTML = '<h2>Información de Proveedores</h2><p>Aquí se mostraría la información detallada de los proveedores.</p>';
        });
    }
});

