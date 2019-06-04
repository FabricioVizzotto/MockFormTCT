<template>
  <v-app >
    <v-toolbar align-center :flat="true" app class="teal"> 
      <v-layout justify-space-between fill-height align-center row>
        <v-flex offset-xs5 justify-space-around align-center xs2> 
            <img src="https://i.ibb.co/1r9WDRk/logo-condensed-white.png">
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container class="pt-4 px-0" fluid>
        <router-view/> 
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
