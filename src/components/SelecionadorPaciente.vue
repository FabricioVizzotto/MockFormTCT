<template>
  <div>
    <v-layout fill-height align-space-around column  
    >
      <v-flex xs12>
        <h4 class="grey--text text--darken-1 font-weight-regular subheading" >Identificação do Paciente</h4>
      </v-flex> 
      <v-flex xs12>
        <v-tabs
          v-model="active"
          slider-color="deep-purple darken-1"
          color="white"
          grow
        >
          <v-tab
            class="grey--text text--darken-1"
            v-for="n in 4"
            :key="n"
            ripple
            centered
          >
            {{campos[n]}}
          </v-tab>
          <v-tab-item
            v-for="n in 4"
            :key="n"
          >
          <v-layout justify-space-around  align-space-around row>
              <v-layout column 
                class="grey lighten-4 px-4"
              >
                <v-flex xs6>
                  <v-text-field
                    v-model="inputs[campos[n]]"
                    :placeholder='campos[n]'
                  >
                  </v-text-field>
                </v-flex> 
                <v-flex v-show="campos[n] === 'Nome'" xs6>
                  <v-text-field
                    v-model="inputs['NomeMae']"
                    placeholder='Nome da mãe'
                  >
                  </v-text-field>
                </v-flex> 
                <v-flex v-show="campos[n] === 'Nome'" xs6>
                  <v-text-field
                    v-model="inputs['DataNascimento']"
                    placeholder='Data de nascimento'
                  >
                  </v-text-field>
                </v-flex> 
                <v-flex v-if="campos[n]!=='Justificativa'" xs12>
                  <v-btn class="teal right white--text elevation-1">
                    Buscar paciente
                  </v-btn>
                </v-flex> 
                </v-layout>
              </v-layout>
            </v-tab-item>
          </v-tabs>
        </v-flex> 
      </v-layout>
    </div>
  </template>
  <script>
  /*
                    <v-text-field
                      v-show="campos[n]==='Nome'"
                      v-model="inputs['NomeMae']"
                      placeholder='Nome da Mãe'
                    >
                    </v-text-field>
                    <v-text-field
                    v-show="campos[n]==='Nome'"
                    v-model="inputs['DataNascimento']"
                    placeholder='Data de Nascimento'
                  >
                  </v-text-field>
*/
  export default {
    data: () => ({
      active:null,
      campos:[null,'CPF','CNS','Nome','Justificativa'],
      inputs:{
        'CPF':'',
        'CNS':'',
        'Nome':'',
        'Justificativa':'',
        'NomeMae':'',
        'DataNascimento':'',
      },
    }),
    methods: {
    }
  }
</script>
<style>
</style>
