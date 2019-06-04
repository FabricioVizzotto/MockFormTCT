<script>
  import HelloWorld from './HelloWorld.vue'
  import { defaultData } from '../mixins/defaultData';

  export default {
    mixins:[defaultData],
    extends: HelloWorld,
  }
</script>
