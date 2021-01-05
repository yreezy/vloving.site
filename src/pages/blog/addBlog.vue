<template>
  <div class="container">
    <h1>this is addBlog</h1>
    <el-input placeholder="随便输入" v-model="input" />
    <el-input placeholder="试试水" v-model="input2" />
    <el-button @click="firstButtonClick">clickme</el-button>
  </div>
</template>

<script>
import { demo } from '@/api/blog';
export default {
  components: {},
  props: {},
  data() {
    return {
      input: "",
      input2: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    async firstButtonClick() {
      // this.$alert('提示:点击成功', {
      //   dangerouslyUseHTMLString: true
      // });
      let res = await demo();
      console.log(res);
      console.log(1111)
    }
  },
  created() { },
  mounted() { }
};
</script>
<style lang="scss" scoped>
</style>