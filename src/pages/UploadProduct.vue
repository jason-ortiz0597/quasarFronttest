<template>
<h1>Subir Productos con Excel</h1>
<q-input v-model="excel" type="file" @submit="uploadExcel()"  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'UploadProduct',
  setup() {
    const excel = ref('')
    const intems = ref([])
    const uploadExcel = () => {
        
    }
    return {
      excel
    }
  }

})
</script>
