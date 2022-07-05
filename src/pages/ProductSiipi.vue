<template>
  <q-page>


    <div class="flex flex-center">

      <h5>{{ titulo }}</h5>
    </div>
    <div class="card-body">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

        <q-input filled v-model="name" label="Product Name*" hint="please insert your product name" lazy-rules
          :rules="[val => val && val.length > 3 || 'Please type something']" />

        <q-input filled v-model="price" label="Price of the Product*" hint="please complete the price " lazy-rules
          :rules="[val => val && val.length > 0 || 'the price cannot be zero']" />

        <q-input filled v-model="description" label="short description*" hint="please complete the description "
          lazy-rules :rules="[val => val && val.length > 10 || 'Please type something']" />

        <q-input filled v-model="unitBase" label="Unit Basic Product*" hint="please insert the basic unit of measure "
          lazy-rules :rules="[val => val && val.length > 3 || 'Please type something']" />

         <q-input v-model="date" filled type="date"  hint="Expiration Date" />

        <q-select filled v-model="category" :options="categories" label="Category" hint="select a category" />

        <q-select filled v-model="subcategory" :options="subcategories" label="SubCategory" hint="select a subcategory" />



        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ProductSiipi',
  setup() {
    const titulo = ref('PRODUCT SIIPI')
    const name = ref(null)
    const price = ref(null)
    const description = ref(null)
    const unitBase = ref(null)
   
    return {
      titulo,
      name,
      price,
      description,
      unitBase,
      categories: [
        'Food', 'Drink', 'Medicine', 'Cosmetics', 'Clothes', 'Electronics', 'Other'
      ],
      subcategories: [
        'Sweet', 'Salt', 'Antibiotic', 'Pants', 'gloves', 'devices', 'Other'
      ],

    }
  }
})
</script>
