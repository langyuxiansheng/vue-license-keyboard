<template>
    <div id="app">
        {{ value }}
        <LicenseKeyboard  v-model="value"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value: null
        }
    }
}
</script>