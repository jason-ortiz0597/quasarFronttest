<template>


    <div class="row">
        <div>First column</div>
        <div>Second column</div>
        <div>Third column</div>
    </div>


    <div class="row">
        <div class="col-8">two thirds</div>
        <div class="col-2">one sixth</div>
        <div class="col-auto">auto size based on content and available space</div>
        <div class="col">fills remaining available space</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SiipiProduct'

})
</script>
