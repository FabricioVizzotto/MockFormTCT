<template>
  <div>
        <v-toolbar fixed style="top:16px" class="white elevation-3 py-1 mt-5">
            <v-layout justify-space-around fill-height align-space-around row>
              <v-flex xs2> 
              <v-layout fill-height row class="teal mr-4">
                <v-flex xs12>
                  <span class="group">
                    <v-icon class="ma-3" large>assignment_ind</v-icon>
                  </span>
                  </v-flex>
                  <v-flex xs12 align-self-center>
                    <span class="font-weight-light title black--text"> 0800 </span>
                  </v-flex>
                </v-layout>
              </v-flex>
            <v-flex xs3>
              <v-layout column>
                <v-flex xs12>
                <span class="font-weight-light caption black--text"> Solicitante </span>
                  </v-flex>
                  <v-flex xs12>
                    <span class="font-weight-light title black--text text-truncate"> {{ this.solicitante}} </span>
                  </v-flex>
                  <v-flex xs12>
                    <span class="font-weight-light caption black--text"> Médico da Família </span>
                  </v-flex>
                </v-layout>
              </v-flex>
            <v-flex xs3>
                <v-layout column>
                  <v-flex xs12>
                    <span class="font-weight-light caption black--text"> Unidade </span>
                  </v-flex>
                  <v-flex xs12>
                    <span class="font-weight-light title black--text text-truncate"> {{this.unidade}} </span>
                  </v-flex>
                  <v-flex xs12>
                    <span class="font-weight-light caption black--text"> Porto Alegre - RS </span>
                  </v-flex>
                </v-layout>
              </v-flex>
            <v-spacer/>
            <v-flex xs3>
                <v-layout column>
                  <v-flex xs12>
                    <span class="font-weight-light caption black--text"> Teleconsultor responsavel </span>
                  </v-flex>
                  <v-flex xs12>
                    <span class="font-weight-light title black--text text-truncate"> {{teleconsultorResponsavel}} </span>
                  </v-flex>
                  <v-flex xs12>
                    <span class="font-weight-light caption black--text"> Médico da Família </span>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>

      </v-toolbar>
      <div class="v-card v-sheet elevation-2 theme--light ml-5 mr-5 mt-4" id="form-tct">
        <v-toolbar class="white elevation-1 py-2 mt-3 fixed-tabs-bar">
        <v-toolbar-side-icon>
          <v-icon class="pa" large color="yellow darken-2">assignment</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title>
          <v-layout justify-start column>
            <v-flex xs12>
              <span class="font-weight-light title black--text"> 040849 </span>
            </v-flex>
            <v-flex xs12>
              <span class="font-weight-light body-1 black--text"> {{ this.processo }} </span>
            </v-flex>
          </v-layout>
        </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <v-btn flat><v-icon medium class="pa-0" color="red">cancel</v-icon></v-btn>
          <v-btn flat><v-icon medium class="pa-0" color="deep-purple darken-1">print</v-icon></v-btn>
          <v-btn flat><v-icon medium class="pa-0" color="yellow darken-2">insert_invitation</v-icon></v-btn>
          <v-btn flat><v-icon medium class="pa-0" color="light-blue lighten-2">arrow_forward</v-icon></v-btn>
          <v-btn flat><v-icon medium class="pa-0" color="deep-purple darken-1">add_circle_outline</v-icon></v-btn>
          <v-btn flat><v-icon medium class="pa-0" color="yellow darken-2">save</v-icon></v-btn>
          <v-btn flat><v-icon medium class="pa-0" color="teal lighten-2">check_circle</v-icon></v-btn>
        </v-toolbar-items>

      </v-toolbar >
		<v-container justify-start align-content-center fluid>
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
				<!-- Paciente ? -->  
				<v-btn class="teal right white--text">
					Procurar
				</v-btn>
				<v-textarea 
					label="Descrição do Caso"
				>
				</v-textarea>
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
				<v-text-field 
					label="Conduta"
				>
				</v-text-field>
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
  </div>
</template>

<script>
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
    }),
    computed:{
      processo:function(){
        let hoje = new Date()
        return `51997676863 - ${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear()} as ${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`
      }
    },
  }
</script>

<style>
.fixed-tabs-bar{
    position: -webkit-sticky;
    position: sticky;
    top: 9.8rem;
    z-index: 2;
}
</style>
