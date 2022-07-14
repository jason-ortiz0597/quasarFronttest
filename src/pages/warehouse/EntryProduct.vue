<template>
  <div class="col-xs-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
    <div class="q-ma-md row ">
      <div class="q-gutter-md col-4">
        <div class="row justify-between">

          <h6 class="q-my-none col-6">ENTRADAS DE PRODUCTOS</h6>
          <q-btn color="primary" icon="redeem" label="Add Entry" no-caps @click="(editing = true),
          (modify = false),
          (receivedBy = ''),
          (product = '')
                           " v-if="!editing" />
          <q-btn color="negative" icon="cancel" label="Finish" @click="(editing = false)" v-else />


        </div>

        <q-form @submit="addItem" class="q-gutter-md q-mx-none" v-if="editing">

          <q-input v-model="receivedBy" type="text" label="Recibido por" filled />

          <q-input v-model="product" type="text" label="Product" filled />

          <q-input v-model="provaider" type="text" label="Proveedor" filled="" />

          <q-input outlined v-model="quantity" type="number" label="Cantidad" :hint="characterCount + '/40 caracteres'"
            filled />

          <q-input outlined v-model="priceBuy" type="number" label="Precio de Compra" filled />

          <q-input outlined v-model="priceSell" type="number" label="Precio de Venta" filled />

          <q-select v-model="status" :options="options3" label="Estado de llegada del producto" filled />

          <q-input v-model="dateExpi" type="date" hint="Fecha de Vencimiento" filled />

          <q-input v-model="dateEntry" type="date" hint="Fecha de Ingreos" filled />



          <div>
            <q-btn label="registrar" type="submit" color="primary" />
            <q-btn label="Volver" to="/indexWarehouse" color="secondary" class="q-ml-sm" />
          </div>
        </q-form>

        <q-form @submit="editItem(selectedItem)" class="q-gutter-md q-mx-none" v-if="modify">
          <q-input v-model="receivedBy" type="text" label="Recibido por" filled />

          <q-input v-model="product" type="text" label="Label" filled />

          <q-input v-model="provaider" type="text" label="Label" filled />

          <q-input outlined v-model="quantity" type="number" label="Cantidad" :hint="characterCount + '/40 caracteres'"
            filled />

          <q-input outlined v-model="priceBuy" type="number" label="Precio de Compra" filled />

          <q-input outlined v-model="priceSell" type="number" label="Precio de Venta" filled />

          <q-select v-model="status" :options="options3" label="Estado de llegada del producto" filled />

          <q-input v-model="dateExpi" type="date" hint="Fecha de Vencimiento" filled />

           <q-input v-model="dateEntry" type="date" hint="Fecha de Ingreso" filled /> 
          <div>
            <q-btn label="Editar Proveedor" type="submit" color="primary" />
            <q-btn label="Volver" to="/indexWarehouse" color="secondary" class="q-ml-sm" />
          </div>
        </q-form>

        <q-list bordered separator class="col-auto" >
          <q-item clickable v-ripple v-for="({ id,receivedBy, product, provaider, quantity, priceBuy, priceSell, dateExpi, dateEntry }, index) in reversedItems" :key="id">
            <q-item-section >
              {{ index + 1 }}. {{ receivedBy }} - {{ product }} - {{ provaider }} - {{ quantity }} - {{ priceBuy }} - {{ priceSell }} - {{ dateExpi }} - {{ dateEntry }}
            </q-item-section>
            <q-item-section side>
              <q-btn flat round color="primary" icon="edit" @click="showEdit(reversedItems[index])" />
            </q-item-section>
            <q-item-section side>
              <q-btn flat round color="negative" icon="delete" @click="deleteItem(reversedItems[index])" />
            </q-item-section>

          </q-item>
        </q-list>
      </div>

    </div>

  </div>



</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useQuasar, QSpinnerHourglass } from 'quasar'

export default defineComponent({
  name: 'EntryProduct',
  setup() {

    const $q = useQuasar();
    const receivedBy = ref('');
    const product = ref('');
    const provaider = ref('');
    const quantity = ref('');
    const priceBuy = ref('');
    const priceSell = ref('');
    const status = ref('');
    const dateExpi = ref('');
    const dateEntry = ref('');
    const editing = ref(false);
    const selectedItem = ref(null);
    const modify = ref(false);
    const characterCount = computed(() => quantity.value.length);
    const reversedItems = computed(() => {
      return [...items.value].reverse();
    });

    const options3=["Buen Estado","Mal Estado", "Termino Medio "];


    const items = ref([{
      id: 1,
      receivedBy: 'Marcelo Villanueva',
      product: 'Aceite de Oliva',
      provaider: 'Aceite Fino',
      quantity: '100 unidades',
      priceBuy: '10Bs',
      priceSell: '15Bs',
      status: 'En buen estado',
      dateExpi: '2024-01-01',
      dateEntry: '2022-07-08'

    }, {
      id: 2,
      receivedBy: 'Tatiana',
      product: 'Leche Deslactosada',
      provaider: 'Pil',
      quantity: '200 unidades',
      priceBuy: '6Bs',
      priceSell: '10Bs',
      status: 'En buen estado',
      dateExpi: '2022-12-12',
      dateEntry: '2022-07-08'

      
    }, {
      id: 3,
      receivedBy: 'Jorge Rivera',
      product: 'Harina Integral',
      provaider: 'Don Luis',
      quantity: '40 quintales',
      priceBuy: '170Bs',
      priceSell: '0',
      status: 'En buen estado',
      dateExpi: '2022-12-12',
      dateEntry: '2022-07-08'

    }]);


    const addItem = () => {
      items.value.push({
        id: items.value.length + 1,
        receivedBy: receivedBy.value,
        product: product.value,
        provaider: provaider.value,
        quantity: quantity.value,
        priceBuy: priceBuy.value,
        priceSell: priceSell.value,
        status: status.value,
        dateExpi: dateExpi.value,
        dateEntry: dateEntry.value

      });
      receivedBy.value = '';
      product.value = '';
      provaider.value = '';
      quantity.value = '';
      priceBuy.value = '';
      priceSell.value = '';
      status.value = '';
      dateExpi.value = '';
      dateEntry.value = '';
    };

    const showEdit = (item) => {
      selectedItem.value = item;
      modify.value = true;
      editing.value = true;
      receivedBy.value = item.receivedBy;
      product.value = item.product;
      provaider.value = item.provaider;
      quantity.value = item.quantity;
      priceBuy.value = item.priceBuy;
      priceSell.value = item.priceSell;
      status.value = item.status;
      dateExpi.value = item.dateExpi;
      dateEntry.value = item.dateEntry;
    };

    const editItem = () => {
      selectedItem.value.name = newItem.value;
      selectedItem.value.phone = phone.value;
      modify.value = true;
      editing.value = false;
      receivedBy.value = '';
      product.value = '';
      provaider.value = '';
      quantity.value = '';
      priceBuy.value = '';
      priceSell.value = '';
      status.value = '';
      dateExpi.value = '';
      dateEntry.value = '';
      
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
            spinner: QSpinnerHourglass,
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
      receivedBy,
      product,
      provaider,
      quantity,
      priceBuy,
      priceSell,
      status,
      dateExpi,
      dateEntry,
      editing,
      addItem,
      characterCount,
      reversedItems,
      showEdit,
      selectedItem,
      modify,
      editItem,
      deleteItem,
      options3  



    }
  }


})
</script>
