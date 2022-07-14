<template>

    <q-page  padding >

        <div class="header">
            <h5>{{ titulo }}</h5>
        </div>

        <div class="q-pa-md row items-start q-gutter-md justify-around">

            <q-card class="my-card">
                <q-card-section class="bg-orange-7 text-white">
                    <div class="text-h6">PRODUCTOS</div>
                    <div class="text-subtitle2">PRODUCTOS SIIPI</div>
                    <q-icon size="32px" name="leaderboard" />

                </q-card-section>


                <q-card-actions align="around">
                    <q-btn flat  icon="visibility" to="'/siipiProduct">Ingresar</q-btn>
                </q-card-actions>
            </q-card>

            <q-card class="my-card">
                <q-card-section class="bg-green-14 text-white">
                    <div class="text-h6">PROVEEDORES</div>
                    <div class="text-subtitle2">PROVEEDORES SIIPI</div>
                    <q-icon size="32px" name="groups" />

                </q-card-section>


                <q-card-actions align="around">
                    <q-btn flat icon="visibility" to="/provaiderSiipi">Ingresar</q-btn>
                </q-card-actions>
            </q-card>


           

        </div>


        <div class="q-pa-md row items-start q-gutter-md justify-around">
            <q-card class="my-card">
                <q-card-section class="bg-blue-grey-4 text-white">
                    <div class="text-h6">ENTRADAS DE PRODUCTOS</div>
                    <div class="text-subtitle2">ENTRADAS SIIPI</div>
                    <q-icon size="32px" name="login" />

                </q-card-section>


                <q-card-actions align="around">
                    <q-btn flat icon="visibility" to="/entryProduct">Ingresar</q-btn>
                </q-card-actions>
            </q-card>

             <q-card class="my-card">
                <q-card-section class="bg-red-6 text-white">
                    <div class="text-h6">SALIDAS DE PRODUCTOS</div>
                    <div class="text-subtitle2">SALIDAS SIIPI</div>
                    <q-icon size="32px" name="logout" />

                </q-card-section>


                <q-card-actions align="around">
                    <q-btn flat icon="visibility" to="/outputProduct">Ingresar</q-btn>
                </q-card-actions>
            </q-card>

            

        </div>

         <div class="q-pa-md row items-start q-gutter-md justify-around">

            <q-card class="my-card">
                <q-card-section class="bg-amber-14 text-white">
                    <div class="text-h6">INVENtARIO</div>
                    <div class="text-subtitle2">INVENTARIO SIIPI</div>
                    <q-icon size="32px" name="inventory" />

                </q-card-section>


                <q-card-actions align="around">
                    <q-btn flat icon="visibility" to="'/siipiProduct">Ingresar</q-btn>
                </q-card-actions>
            </q-card>

        
        </div>



    </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'IndexWarehouse',
    setup() {
        const titulo = ref('WAREHOUSE SIIPI V01')
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
