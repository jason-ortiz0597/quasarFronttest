<template>

    <q-page padding >

        <div class="header">
            <h5>{{ titulo }}</h5>
        </div>

        <div class="q-pa-md row items-start q-gutter-md justify-around">
            <q-card class="my-card">
                <q-card-section class="bg-blue-grey-4 text-white">
                    <div class="text-h6">Lista de Productos</div>
                    <div class="text-subtitle2">productos Siipi</div>
                    <q-icon size="32px" name="upload" />

                </q-card-section>


                <q-card-actions align="around">
                    <q-btn flat icon="visibility" to="/createProduct">Ingresar</q-btn>
                </q-card-actions>
            </q-card>



            

        </div>

        



    </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'indexProduct',
    setup() {
        const titulo = ref('PRODUCTOS SIIPI V.01')
        return {
            titulo

        }
    }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
