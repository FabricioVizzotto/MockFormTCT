<template>
  <div>
    <v-toolbar fixed class="white elevation-1 secondary-bar" height='80'>
        <v-layout justify-space-around fill-height align-space-around row>
          <v-flex xs2 class='titulo-servico teal lighten-2'> 
          <v-layout fill-height justify-space-around row>
            <v-flex xs12 align-self-center>
              <span class="group">
                <v-icon class="pl-3 ma-3" color="white" large>assignment_ind</v-icon>
              </span>
              </v-flex>
              <v-flex xs12 align-self-center>
                <span class="font-weight-light title white--text"> 0800 </span>
              </v-flex>
            </v-layout>
          </v-flex>
        <v-flex xs3>
          <v-layout class="pt-2 pl-3" justify-space-around column>
            <v-flex xs12>
            <span class="font-weight-light caption black--text"> Solicitante </span>
              </v-flex>
              <v-flex xs12>
                <span class="font-weight-light title black--text text-truncate"><b> {{ this.solicitante}}</b> </span>
              </v-flex>
              <v-flex xs12>
                <span class="font-weight-light caption black--text">{{cbo}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
        <span class="separador"/>
        <v-flex xs4>
            <v-layout class="pt-2" justify-space-around  column>
              <v-flex xs12>
                <span class="font-weight-light caption black--text"> Unidade </span>
              </v-flex>
              <v-flex xs12>
                <span class="font-weight-light title black--text text-truncate"><b> {{this.unidade}}</b> </span>
              </v-flex>
              <v-flex xs12>
                <span class="font-weight-light caption black--text"> Porto Alegre - RS </span>
              </v-flex>
            </v-layout>
          </v-flex>
        <span class="separador"/>
        <v-flex xs3>
            <v-layout class="pt-2" justify-space-around column>
              <v-flex xs12>
                <span class="font-weight-light caption black--text"> Teleconsultor responsavel </span>
              </v-flex>
              <v-flex xs12>
                <span class="font-weight-light title black--text text-truncate"><b> {{teleconsultorResponsavel}}</b> </span>
              </v-flex>
              <v-flex xs12>
                <span class="font-weight-light caption black--text"> Médico da Família </span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

      </v-toolbar>

     <v-layout fill-height row class="mt-4">
      <v-flex xs12>
        <div class="v-card v-sheet elevation-2 theme--light mx-5 formulario-central" id="form-tct">
          <v-toolbar class="elevation-1 py-2 mt-0 fixed-tabs-bar">
          <v-toolbar-side-icon>
            <v-icon class="pa" large color="yellow darken-2">assignment</v-icon>
          </v-toolbar-side-icon>
          <v-toolbar-title>
            <v-layout justify-start column>
              <v-flex xs12>
                <span class="font-weight-light title black--text"><b> 040849 </b></span>
              </v-flex>
              <v-flex xs12>
                <span class="font-weight-light body-1 black--text"> {{ this.processo }} </span>
              </v-flex>
            </v-layout>
          </v-toolbar-title>
          <v-spacer/>
          <v-toolbar-items>
            <v-hover>
              <v-btn slot-scope="{hover}" fab flat>
                <v-icon  medium class="pa-0" :color="`${hover? 'red': 'grey'}`">cancel</v-icon>
              </v-btn>
            </v-hover>
            <v-hover>
              <v-btn slot-scope="{hover}" fab flat>
                <v-icon medium class="pa-0" :color="(hover)?'deep-purple darken-1':'grey'">print</v-icon>
              </v-btn>
            </v-hover>
            <v-hover>
              <v-btn slot-scope="{hover}" fab flat>
                  <v-icon medium class="pa-0" :color="(hover)?'yellow darken-2':'grey'">insert_invitation</v-icon>
              </v-btn>
            </v-hover>
            <v-hover>
              <v-btn slot-scope="{hover}" fab flat>
                <v-icon medium class="pa-0" :color="(hover)?'light-blue lighten-2':'grey'">arrow_forward</v-icon>
              </v-btn>
            </v-hover>
            <v-hover>
              <v-btn slot-scope="{hover}" fab flat>
                <v-icon medium class="pa-0" :color="(hover)?'deep-purple darken-1':'grey'">add_circle_outline</v-icon>
              </v-btn>
            </v-hover>
            <v-hover>
              <v-btn slot-scope="{hover}" fab flat>
                <v-icon medium class="pa-0" :color="(hover)?'yellow darken-2':'grey'">save</v-icon>
              </v-btn>
            </v-hover>
            <v-hover>
              <v-btn slot-scope="{hover}" fab flat>
                <v-icon medium class="pa-0" :color="(hover)?'teal lighten-2':'grey'">check_circle</v-icon>
              </v-btn>
            </v-hover>
          </v-toolbar-items>

        </v-toolbar>
      <v-container justify-start align-content-center class="pt-0 mb-5" fluid>
        <v-form>
          <v-radio-group :mandatory="false"
            label="Caso em sistema de regulação ?" 
          >
            <v-radio class="black--text" 
            value="Sim"
            label="Sim"
            >
            </v-radio>
            <v-radio class="black--text"
            value="Não"
            label="Não"
            >
            </v-radio>
          </v-radio-group>
          <SelecionadorPaciente/>
          <v-layout justify-space-around  align-space-around row>
            <v-flex xs12>
              <v-textarea 
                label="Descrição do Caso"
              >
              </v-textarea>
            </v-flex>
            <v-flex xs2 class="mt-4 pt-4">
              <v-btn round class="teal right white--text elevation-1">
                Procurar
              </v-btn>
            </v-flex>
          </v-layout>
          <v-autocomplete
            class="col"
            label="Hipótese"
            :items="hipoteses"
            ref="hipotese">
          </v-autocomplete>
          <v-select
            id="macroEspecialidade"
            name="macroEspecialidade"
            label="Especialidade"
            :items="especialidades"
            >
          </v-select>
          <v-textarea 
            label="Conduta"
          >
          </v-textarea>
          <v-textarea 
            label="Bibliografia"
          >
          </v-textarea>
          <v-autocomplete
            label="Discutido com"
            placeholder="Teleconsultor(a) colaborador(a)"
            :chips="true"
            :multiple="true"
            :items="teleconsultores"
          >
          </v-autocomplete>
          <v-radio-group :mandatory="false"
            label="Decisão da Teleconsultoria"
          >
            <v-radio class="black--text" 
            value="Manter na atenção primária"
            label="Manter na atenção primária"
            >
            </v-radio>
            <v-radio class="black--text"
            value="Encaminhar para atenção especializada"
            label="Encaminhar para atenção especializada"
            >
            </v-radio>
            <v-radio class="black--text" 
            value="Encaminhar para atendimento de urgência/emergência"
            label="Encaminhar para atendimento de urgência/emergência"
            >
            </v-radio>
            <v-radio class="black--text" 
            value="A definir conforme evolução/reavaliação"
            label="A definir conforme evolução/reavaliação"
            >
            </v-radio>
          </v-radio-group>
          <v-autocomplete
            label="CIAP Primario"
            :items="CIAP"
          >
          </v-autocomplete>
          <v-autocomplete
            label="CID Primario"
            :items="CID"
          >
          </v-autocomplete>
          <v-textarea
            label="Observações"
          >
  </v-textarea>
  </v-form>
        </v-container>
      </div>
      </v-flex>
      <v-flex class="pt-4 elevation-2 white" v-if="sidebarOpen==='TCT'" xs2>
        <v-card class="pl-1 fixed-tabs-bar">
          <v-card-title primary-title>
            <v-layout row> 
              <v-flex xs3>
                <v-icon color="deep-purple lighten-1">person</v-icon>
              </v-flex>
              <v-flex xs12>
              <span class="deep-purple--text text--lighten-1">Solicitante</span>
              <div class="title">{{teleconsultorResponsavel}}</div>
              <span>{{cbo}}</span>
              </v-flex>
            </v-layout> 
          </v-card-title>
        </v-card>
        <div class="fixed-list">
          <v-card
            v-for="processo in processos"
            :key="processo.id"
            class="elevation-0 pt-0 mx-auto">
            <v-card-title class="pr-4 elevation-0">
              <v-layout row>
                <v-flex xs3>
                  <v-icon v-if="processo.status==='Em Consultoria'" class="pr-2" color="yellow darken-2">assignment</v-icon>
                  <v-icon v-if="processo.status==='Finalizado'" class="pr-2" color="teal lighten-2">check_circle</v-icon>
                  <v-icon v-if="processo.status==='Cancelado'" class="pr-2" color="red">cancel</v-icon>
                </v-flex>
                <v-flex xs12 class="text-truncate">
                  <span>{{`${processo.status } • ${hoje} `}}</span>
                  <div>{{`TCT: ${processo.teleconsultorResponsavel}`}}</div>
                  <div>{{`PCT: ${processo.paciente} `}}</div>
                  <span >{{ `${processo.hipotese}`}}</span><br/>
                  <span >{{ `${processo.descricao}`}}</span>
                </v-flex>
              </v-layout> 
            </v-card-title>
          </v-card>
        </div>
      </v-flex>
     <v-flex class="pt-4 ml-1 elevation-1 white" xs0>
      <v-list class="fixed-tabs-bar my-2">
        <v-layout column> 
         <v-flex v-for="n in 3" :key="n" xs3>
            <v-btn class="ma-0" @click="openBar(n)" fab flat>
              <v-icon medium color="grey">{{acoes[n]}}</v-icon>
            </v-btn> 
          </v-flex>
        </v-layout> 
      </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import SelecionadorPaciente from './SelecionadorPaciente'

  export default {
    data: () => ({
      especialidades:['CARDIOLOGIA','CIRURGIA GERAL','GERIATRIA'],
      hipoteses:['hipertensão arterial sistemica','cirurgia plastica de mama','tremor essencial'],
      teleconsultores:['Adriana Mergel', 'Juliana Brenner', 'Juliana Pfeil'],
      CIAP:['(A01) Dor generalizada/múltipla', '(N89) Enxaqueca', '(S19) Outra lesão cutânea'],
      CID:['(A00) Cólera','(G00) Meningite bacteriana não classificada em outra parte','(Z00) Exame geral e investigação de pessoas sem queixas ou diagnóstico relatado'],
      teleconsultorResponsavel:'CONEXUM',
      unidade:'UNIDADE DE SAUDE CAMAQUA',
      solicitante:'Romero Britto',
      sidebarOpen:"TCT",
      acoes:['close','person','history','chat'],
      cbo:"Médico da Familia",
      processos:[
        {
        id:1,
        status:'Em Consultoria',
        teleconsultorResponsavel:'Test',
        paciente:'Test Test',
        hipotese:'Amenorreia',
        descricao:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
      },
        {
        id:2,
        status:'Finalizado',
        teleconsultorResponsavel:'Test',
        paciente:'Test Test',
        hipotese:'Hipertensão',
        descricao:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
      },
        {
        id:3,
        status:'Cancelado',
        teleconsultorResponsavel:'Test',
        paciente:'Test Test',
        hipotese:'Ataque Cardiaco',
        descricao:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
      },

      ]
    }),
    components: {
      SelecionadorPaciente,
    },
    computed:{
      processo:function(){
        let hoje = new Date()
        return `51997676863 - ${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear()} as ${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`
      },
      hoje:function(){
        let hoje = new Date()
        return `${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear()} as ${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`
      },
    },
    methods:{
      openBar:function(){
        if(this.sidebarOpen === ''){
          this.sidebarOpen="TCT"
        }else{
          this.sidebarOpen=""
        }
      }
    },
  }
</script>

<style>
.fixed-tabs-bar{
   position: -webkit-sticky;
   position: sticky;
   top: 10.3rem;
   z-index: 2;
}
.fixed-list{
   position: -webkit-sticky;
   position: sticky;
    top: 247px;
   z-index: 2;
}
.separador{
  background: #E0E0E0;
  position:relative;
  border-style:solid;
  border-bottom-width:3px;
  border-top-width:3px;
  border-right-width:19.7px;
  border-color:white;
  content: "";
   width: 24px;
  top:-.5px
}
.formulario-central{
  position:relative;
  top:64px;
}
.secondary-bar{
  top:64px;
}
</style>
