<template>
  <v-app >
    <v-toolbar align-center :flat="true" app class="teal"> 
          <v-layout justify-space-around fill-height align-center row>
            <v-flex justify-space-around align-center xs2> 
              <v-toolbar-title justify-center offset-lg2 align-center>
                <span class="font-weight-light white--text"> TELESSAUDE </span>
              </v-toolbar-title>
            </v-flex>
          </v-layout>
    </v-toolbar>

    <v-content>
      <v-container class="pt-4 px-0" fluid>
        <HelloWorld/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
    }
  }
}
</script>
