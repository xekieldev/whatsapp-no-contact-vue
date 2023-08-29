<script setup>

const props = defineProps({
    title: String,
})

</script>

<template>
    <div class="help-container">
        <h1>{{ title }}</h1>
        <p> En esta página web puedes enviar mensajes a través de <a id="link" href="https://www.whatsapp.com">WhatsApp</a>
            sin necesidad de agregar el número a tus contactos.</p>

        <br>

        <h3>Si lo usas desde tu móvil</h3>
        <p>- Escribe el número al celular que quieres enviar el <a id="link" href="https://www.whatsapp.com">WhatsApp</a>
        </p>
        <p>- Presiona sobre la imagen de <a id="link" href="https://www.whatsapp.com">WhatsApp</a> e inmediatamente se
            abrirá la aplicación en tu móvil</p>
        <p>- Listo! Ya puedes escribir el mensaje!</p>

        <br>

        <h3>Si lo usas desde tu PC de escritorio o notebook</h3>
        <p>- Escribe el número al celular que quieres enviar el <a id="link" href="https://www.whatsapp.com">WhatsApp</a>
        </p>
        <p>- Presiona sobre la imagen de <a id="link" href="https://www.whatsapp.com">WhatsApp</a> e inmediatamente serás
            redirigido a una nueva página web que te preguntará lo siguiente:</p>
        <br>
        <img id="opcion" src="../images/Whatsapp_opcion.png" alt="WhatsApp api"><br>
        <p>(Puedes seleccionar <i>"Siempre permitir que https://api.whatsapp.com abra enlaces whatsapp"</i> si lo deseas y
            ya no se mostrará esta pantalla)</p>
        <p>- Click en "Abrir enlace"</p>
        <p>- Listo! Ya puedes escribir el mensaje!</p>
        <br>
    </div>
</template>

<style scoped>
.help-container {
    background: linear-gradient(to top, #ffffff, #888888);
    display: flex;
    /* max-height: 80vh; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* overflow:visible; */
    padding: 0 10px;
}

h1 {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 40px;
}

p {
    font-size: 14px;
    text-align: center;
}

#opcion {
    height: 150px;
    border-style: solid;
    border-width: 2px;
    border-color: gray;
    border-radius: 5px;
    /* display: block; */
    /* margin: auto; */
}
</style>


