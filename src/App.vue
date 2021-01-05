<template>
  <div id="app">
    <el-row>
      <el-container>
        <el-aside>
          <div>
            <NavgateMenu />
          </div>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-row>
  </div>
</template>
<script>
import NavgateMenu from './components/navgateMenu.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    NavgateMenu
  }
}
</script>

