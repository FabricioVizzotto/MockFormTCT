<script>
  import HelloWorld from './HelloWorld.vue'
  import { propsData } from '../mixins/propsData';

  export default {
    mixins:[propsData],
    extends: HelloWorld,
  }
</script>
