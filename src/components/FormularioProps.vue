<script>
  import HelloWorld from './HelloWorld.vue'
  import { propsData } from '../mixins/propsData';

  export default {
    mixins:[propsData],
    extends: HelloWorld,
    mounted:function(){
      this.id=localStorage.getItem('id')
      this.hipoteses=localStorage.getItem('hipoteses')
      this.teleconsultorResponsavel=localStorage.getItem('teleconsultorResponsavel')
      this.descricao=localStorage.getItem('descricao')
      this.processos=localStorage.getItem('processos')
      this.solicitante=localStorage.getItem('solicitante')
    }
  }
</script>
