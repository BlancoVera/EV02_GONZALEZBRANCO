const flats = [
    {
        nombre: "Full body — Flat",
        src: "assets/imgs/full_body_flatcolor.jpg",
        descripcion: "Ilustración a cuerpo completo con colores planos.",
        personajes: "+1 +10.00",
        background: "+15.00",
        costo: 49.95,
        nsfw: true,
        gore: true
    },
    {
        nombre: "Half body — Flat",
        src: "assets/imgs/half_body_flatcolor.jpg",
        descripcion: "Ilustración a mitad de cuerpo con colores planos.",
        personajes: "+1 +5.99",
        background: "+10.00",
        costo: 33.30,
        nsfw: true,
        gore: false
    },
    {
        nombre: "Face — Flat",
        src: "assets/imgs/face_flatcolor.jpg",
        descripcion: "Ilustración de rostro con colores planos.",
        personajes: "+1 +2.00",
        background: "+5.00",
        costo: 10.45,
        nsfw: false,
        gore: false
    },
    {
        nombre: "Oferta — Flat",
        src: "assets/imgs/oferta_flatcolor.jpg",
        descripcion: "Dos ilustraciones a elección con colores planos.",
        personajes: "+1 +10.00",
        background: "+15.00",
        costo: 49.95,
        nsfw: false,
        gore: false
    },
];

const renders = [
    {
        nombre: "Full body — Render",
        src: "assets/imgs/full_body_fullcolor.jpg",
        descripcion: "Ilustración a cuerpo completo con colores y sombras detallados.",
        personajes: "+1 +20.00",
        background: "+25.00",
        costo: 65.00,
        nsfw: true,
        gore: true
    },
    {
        nombre: "Half body — Render",
        src: "assets/imgs/half_body_fullcolor.jpg",
        descripcion: "Ilustración a mitad de cuerpo con colores y sombras detallados.",
        personajes: "+1 +10.00",
        background: "+20.00",
        costo: 52.50,
        nsfw: true,
        gore: true
    },
    {
        nombre: "Face — Render",
        src: "assets/imgs/face_fullcolor.jpg",
        descripcion: "Ilustración de rostro con colores y sombras detallados.",
        personajes: "+1 +5.00",
        background: "+5.00",
        costo: 31.00,
        nsfw: true,
        gore: false,
    },
    {
        nombre: "Oferta — Render",
        src: "assets/imgs/oferta_fullcolor.jpg",
        descripcion: "Dos ilustraciones a elección con colores y sombras detallados.",
        personajes: "+1 +20.00",
        background: "+25.00",
        costo: 65.00,
        nsfw: true,
        gore: false,
    },
];

// Función para renderizar ilustraciones en una sección específica
function renderizarIlustraciones(lista, contenedorId, limite = 3) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = ""; // Limpiar contenido previo

    // Mostrar solo el número de ilustraciones especificado por 'limite'
    lista.slice(0, limite).forEach((ilustracion) => {
        const tarjeta = `
            <div class="card mb-3">
                <img src="${ilustracion.src}" class="card-img-top" alt="${ilustracion.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${ilustracion.nombre}</h5>
                    <p class="card-text">${ilustracion.descripcion}</p>
                    <p><i class="fas fa-users"></i><strong> Personajes adicionales:</strong>${ilustracion.personajes}</p>
                    <p><i class="fas fa-mountain"></i><strong> Background:</strong> ${ilustracion.background}</p>
                    <p><i class="fas fa-money-bill-wave"></i><strong> Precio:</strong> $${ilustracion.costo.toLocaleString()}</p>
                    <p>${ilustracion.nsfw 
                        ? `<i class="fas fa-check" style="color: green;"></i> Permite NSFW` 
                        : `<i class="fas fa-ban" style="color: red;"></i> No permite NSFW`
                    }
                    </p>
                    <p>${ilustracion.gore 
                        ? `<i class="fas fa-skull-crossbones" style="color: darkred;"></i> Permite gore` 
                        : `<i class="fas fa-smile" style="color: green;"></i> No permite gore`
                    }    
                </div>
            </div>
        `;
        contenedor.innerHTML += tarjeta;
    });
}

// Renderizar 3 ilustraciones en flat y 3 en render en la página de inicio
renderizarIlustraciones(flats, "lista-flat");
renderizarIlustraciones(renders, "lista-render");