<template>
    <div class="col-xs-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
        <div class="q-ma-md row ">
            <div class="q-gutter-md col-4">
                <div class="row justify-between">

                    <h6 class="q-my-none col-6">LISTA DE PRODUCTOS SIIPI</h6>
                    <q-btn color="primary" icon="category" label="Add New Product" no-caps @click="(editing = true),
                    (modify = false),
                    (newItem = ''),
                    (category = '')" v-if="!editing" />
                    <q-btn color="negative" icon="cancel" label="Finish" @click="(editing = false)" v-else />


                </div>

                <q-form @submit="addItem" class="q-gutter-md q-mx-none" v-if="editing">
                    <q-input outlined v-model="newItem" type="text" label="Producto"
                        :hint="characterCount + '/40 caracteres'" />

                    <q-select v-model="category" :options="options" label="Categoria" filled />



                    <div>
                        <q-btn label="Añadir Producto" type="submit" color="primary"
                            :disable="newItem.length < 3 || category.length < 1" />
                        <q-btn label="Volver" to="/indexWarehouse" color="secondary" class="q-ml-sm" />
                    </div>
                </q-form>

                <q-form @submit="editItem(selectedItem)" class="q-gutter-md q-mx-none" v-if="modify">
                    <q-input outlined v-model="newItem" type="text" label="Producto"
                        :hint="characterCount + '/40 caracteres'" />
                    <q-select v-model="category" :options="options" label="Categoria" filled />
                    <div>
                        <q-btn label="Editar Producto" type="submit" color="primary"
                            :disable="newItem.length < 3 || category.length < 1" />
                        <q-btn label="Volver" to="/indexWarehouse" color="secondary" class="q-ml-sm" />
                    </div>
                </q-form>

                <q-list bordered separator>
                    <q-item clickable v-ripple v-for="({ id, name, category }, index) in reversedItems" :key="id">
                        <q-item-section>
                            {{ index + 1 }}. {{ name }} - {{ category }}
                        </q-item-section>
                        <q-item-section side>
                            <q-btn flat round color="primary" icon="edit" @click="showEdit(reversedItems[index])" />
                        </q-item-section>
                        <q-item-section side>
                            <q-btn flat round color="negative" icon="delete"
                                @click="deleteItem(reversedItems[index])" />
                        </q-item-section>

                    </q-item>
                </q-list>
            </div>

        </div>

    </div>



</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useQuasar, QSpinnerGears } from 'quasar'

export default defineComponent({
    name: 'SiipiProduct',
    setup() {

        const $q = useQuasar();
        const newItem = ref('');
        const category = ref('');
        const editing = ref(false);
        const selectedItem = ref(null);
        const modify = ref(false);
        const characterCount = computed(() => newItem.value.length);
        const reversedItems = computed(() => {
            return [...items.value].reverse();
        });


        const items = ref([{
            id: 1,
            name: 'Leche deslactosa',
            category: 'Lacteos'
        }, {
            id: 2,
            name: 'Azucar Blanca',
            category: 'Abarrotes'
        }, {
            id: 3,
            name: 'Azucar Morena',
            category: 'Abarrotes'

        }]);

        const options = ref(["Leches", "Dulces", "Abarrotes", "Carnes", "Frutas", "Verduras", "Cereal", "Lacteos", "Bebidas"]);

        const addItem = () => {
            items.value.push({
                id: items.value.length + 1,
                name: newItem.value,
                category: category.value,
            });
            newItem.value = '';
            category.value = '';
        };

        const showEdit = (item) => {
            selectedItem.value = item;
            modify.value = true;
            editing.value = true;
            newItem.value = item.name;
            category.value = item.category;
        };

        const editItem = () => {
            selectedItem.value.name = newItem.value;
            selectedItem.value.category = category.value;
            modify.value = true;
            editing.value = false;
            newItem.value = '';
            category.value = '';
        };




        const deleteItem = (item) => {
            $q.dialog({
                title: "Eliminar Item",
                message: "Esta seguro de eliminar el item?",
                cancel: true,
                persistent: true,
            })
                .onOk(() => {
                    items.value = items.value.filter((i) => i.id !== item.id);
                    $q.notify({
                        spinner: QSpinnerGears,
                        message: "Se elimino correctamente...",
                        timeout: 2000,
                        color: "positive",
                    });
                })
                .onCancel(() => {
                    $q.notify({
                        group: false,
                        message: "No fue eliminado nada.",
                        color: "purple",
                    });
                });
        };

        return {
            newItem,
            editing,
            items,
            options,
            category,
            addItem,
            characterCount,
            reversedItems,
            showEdit,
            selectedItem,
            modify,
            editItem,
            deleteItem,



        }
    }


})
</script>
