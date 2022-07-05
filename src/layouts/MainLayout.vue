<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [

  {
    title: 'Vue Fundamentals Course',
    caption: 'This is a Fundamentals page',
    icon: "fa-brands fa-vuejs",
    to: "/fundamentals"
  },

  {
    title: 'Vue Components Fundamentals Course',
    caption: 'This is a Components page',
    icon: "fa-solid fa-cube",
    to: "/components"
  },
  {
    title: 'List Shopping Siipi',
    caption: 'This is a Lists Shopping',
    icon: "fact_check",
    to: "/listShopping"
  },
  {
    title: 'ProductList',
    caption: 'Product Page',
    icon: "rocket_launch",
    to: "/listProduct"
  }

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})

</script>
