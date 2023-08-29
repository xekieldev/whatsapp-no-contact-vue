<script setup>
import { onMounted } from 'vue'
import FormRow from './FormRow.vue'
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'

const props = defineProps({
    title: String,
})

let iti;

function SendAWhatsapp(fields) {
    console.log(fields)
    const countryData = iti.getSelectedCountryData()
    let url = "https://api.whatsapp.com/send?phone=" + countryData.dialCode + fields.mobile
    window.location.href = url
    console.log("este", countryData)
}

onMounted(() => {
    const input = document.querySelector("#phone");
    iti = intlTelInput(input, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
        initialCountry: "ar",
        separateDialCode: "True"
    })

})


</script>

<template>
    <div class="form-container">
        <h1>{{ title }}</h1>

        <form-kit type="form" submit-label=" " @submit="SendAWhatsapp" :actions="false">
            <form-row>
                <div class="phone-wrapper">
                    <input type="text" id="phone">
                </div>
                <form-kit type="tel" name="mobile" placeholder="Ingrese el número" />
                <form-kit type="submit" label=" "></form-kit>

            </form-row>
        </form-kit>
    </div>
</template>

<style>
.iti__flag {
    background-image: url("../images/flags.png");
    border-radius: 10%;
}

@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {
    .iti__flag {
        background-image: url("../images/flags@2x.png");
        border-radius: 10%;
    }
}

#phone {
    display: none;
    margin-left: 20px;
}

[data-type="submit"] .formkit-input {
    display: flex;
    position: relative;
    background-image: url("../images/Whatsapp.png");
    width: 70px;
    height: 70px;
    margin-left: 5px;
    /* border-radius: 60%; */
}

[data-type="submit"] .formkit-input:hover {
    background-image: url("../images/Whatsapp.png");
    width: 70px;
    height: 70px;
    opacity: 70%;
}

.formkit-input {
    width: 200px;
    background: white;
}
</style>

<style scoped>
.form-container {
    background: linear-gradient(to top, #ffffff, #888888);
    height:100vh;
    margin-bottom: 40px;
}

.phone-wrapper {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    min-width: 75px;
    align-self: center;
    margin-bottom: 15px;
}

h1 {
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
    padding: 40px;
}
</style>


