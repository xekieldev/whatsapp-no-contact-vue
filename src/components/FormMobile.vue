<script setup>
import { onMounted, ref } from 'vue'
import FormRow from './FormRow.vue'
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'

defineProps({
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

const phoneInput = ref(null)

onMounted(() => {
    iti = intlTelInput(phoneInput.value, {
        utilsScript: "../../node_modules/esutils/lib/utils.js",
        initialCountry: "ar",
        separateDialCode: "True",
        preferredCountries: ["ar"]
    })

})


</script>

<template>
  <div class="form-container">
    <h1>{{ title }}</h1>

    <form-kit
      type="form"
      submit-label=" "
      :actions="false"
      @submit="SendAWhatsapp"
    >
      <form-row>
        <div class="phone-wrapper">
          <input
            id="phone"
            ref="phoneInput"
            type="text"
          >
        </div>
        <form-kit
          type="tel" 
          name="mobile" 
          placeholder="Ingrese el número" 
          :validation="[['required'], ['matches', /^\d{8,13}$/]]"
          validation-visibility="blur"
          :validation-messages="{
            matches: 'Ingrese un número válido',
          }"
        />
        <form-kit
          type="submit"
          label=" "
        />
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

#input_0-incomplete {
    text-align: center;
}
</style>

<style scoped>
.form-container {
    height:95vh;
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
    padding: 90px 15px 50px 15px;
    /* color: black; */
}
</style>
