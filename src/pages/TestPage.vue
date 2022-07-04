

<template>

  <q-page>
    <div class="header">
        <h5> {{ message }} </h5>
         <q-btn  v-if="edditing" color="primary" @click="doEdit(false)" >Hide me the form</q-btn>
          <q-btn v-else color="secondary" @click="doEdit(true)" >Show me the form</q-btn>
    </div>
    

    <q-form  @submit="addItem()" v-if="edditing" >
     
      <div class="q-gutter-md" style="max-width: 350px">

        <q-input outlined v-model.trim="newItem" type="text" placeholder="add your item " />

      </div>

      <div class="q-pa-md">
        <div class="q-gutter-sm">
          <q-checkbox v-model="newItemHighPriority" label="Priority" />
          <q-btn type="submit" color="primary" :disable="newItem.length < 3" >save item</q-btn>
        </div>
      </div>

      <div class="q-px-sm">
        Your value is: <strong>{{ newItemHighPriority }}</strong>
      </div>
    </q-form>

    <br />

  


    <div class="q-ma-da" style="max-width: 350px">
      <q-list bordered separator>
        <q-item clickable v-ripple v-for="({ id, name, price, purchased }, index) in items" :key="id" :class="{strikeout: purchased}">
          <q-item-section> {{ index + 1 }} {{ name }} {{ price }} </q-item-section>
         
        </q-item>
         <p v-if="!items.length " >  nothing here  </p>


      </q-list>
    </div>

  </q-page>


</template>




<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'


export default defineComponent({
  name: 'TestPage',
  setup() {
    const message = ref('Shopping List App Siipi')
    const newItem = ref('')
    const edditing = ref(false)
    const newItemHighPriority = ref(false)
    const items = ref([
      { id: 1, name: 'Milk', price: '$1.99', purchased: true },
      { id: 2, name: 'Eggs', price: '$2.99', purchased: true},
      { id: 3, name: 'Bread', price: '$3.99' , purchased: false},
      { id: 4, name: 'Soda', price: '$4.99' , purchased: false},
 
    ])

    
    return {
      message,
      items,
      newItem,
      newItemHighPriority,
      edditing,
      addItem() {
        items.value.push({
          id: items.value.length + 1,
          name: newItem.value,
          price: newItemHighPriority.value ? '$' : '',
        })
        newItem.value = ''
        newItemHighPriority.value = false
      },
      doEdit(e){
          edditing.value = e
          newItem.value = ''
      }
      
      
    }
  }
  
})




</script>


<style >
.strikeout {
  text-decoration: line-through;
}
</style>