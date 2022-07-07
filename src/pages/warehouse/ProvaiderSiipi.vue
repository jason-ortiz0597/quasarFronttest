<template>
    <div class="col-xs-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
        <div class="q-ma-md row ">
            <div class="q-gutter-md col-4">
                <div class="row justify-between">

                    <h6 class="q-my-none col-6">LISTA DE PROVEEDORES</h6>
                    <q-btn color="primary" icon="groups_3" label="Add New Provaider" no-caps @click="(editing = true),
                    (modify = false),
                    (newItem = ''),
                    (phone = '')" v-if="!editing" />
                    <q-btn color="negative" icon="cancel" label="Finish" @click="(editing = false)" v-else />


                </div>

                <q-form @submit="addItem" class="q-gutter-md q-mx-none" v-if="editing">
                    <q-input outlined v-model="newItem" type="text" label="Proveedor"
                        :hint="characterCount + '/40 caracteres'" />

                   
                    <q-input v-model="phone" type="number" label="Telefono" />



                    <div>
                        <q-btn label="Añadir Proveedor" type="submit" color="primary"
                            :disable="newItem.length < 3 || phone.length < 1" />
                        <q-btn label="Volver" to="/indexWarehouse" color="secondary" class="q-ml-sm" />
                    </div>
                </q-form>

                <q-form @submit="editItem(selectedItem)" class="q-gutter-md q-mx-none" v-if="modify">
                    <q-input outlined v-model="newItem" type="text" label="Proveedor"
                        :hint="characterCount + '/40 caracteres'" />
                    <q-input v-model="phone" type="number" label="Telefono" />
                    <div>
                        <q-btn label="Editar Proveedor" type="submit" color="primary"
                            :disable="newItem.length < 3 || phone.length < 1" />
                        <q-btn label="Volver" to="/indexWarehouse" color="secondary" class="q-ml-sm" />
                    </div>
                </q-form>

                <q-list bordered separator>
                    <q-item clickable v-ripple v-for="({ id, name, phone }, index) in reversedItems" :key="id">
                        <q-item-section>
                            {{ index + 1 }}. {{ name }} - {{ phone }}
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
    name: 'ProvaiderSiipi',
    setup() {

        const $q = useQuasar();
        const newItem = ref('');
        const phone = ref('');
        const editing = ref(false);
        const selectedItem = ref(null);
        const modify = ref(false);
        const characterCount = computed(() => newItem.value.length);
        const reversedItems = computed(() => {
            return [...items.value].reverse();
        });


        const items = ref([{
            id: 1,
            name: 'PIL',
            phone: '70290124'
        }, {
            id: 2,
            name: 'COIMSA',
            phone: '60964458'
        }, {
            id: 3,
            name: 'GRUPO VENADO',
            phone: '60904477'

        }]);


        const addItem = () => {
            items.value.push({
                id: items.value.length + 1,
                name: newItem.value,
                phone: phone.value,
            });
            newItem.value = '';
            phone.value = '';
        };

        const showEdit = (item) => {
            selectedItem.value = item;
            modify.value = true;
            editing.value = true;
            newItem.value = item.name;
            phone.value = item.phone;
        };

        const editItem = () => {
            selectedItem.value.name = newItem.value;
            selectedItem.value.phone = phone.value;
            modify.value = true;
            editing.value = false;
            newItem.value = '';
            phone.value = '';
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
            phone,
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
