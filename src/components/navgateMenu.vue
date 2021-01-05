<template>
  <div>
    <el-row class="tac">
      <el-col>
        <h5>导航栏</h5>
        <el-menu
          default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>个人博客</span>
            </template>
            <el-menu-item-group>
              <template slot="title">博客</template>
              <el-menu-item index="/addBlog">博客</el-menu-item>
              <el-menu-item index="/searchBlog">查看</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组2">
              <el-menu-item index="/addBlog">新增博客</el-menu-item>
              <el-menu-item index="/searchBlog">搜索博客</el-menu-item>
            </el-menu-item-group> -->
            <!-- <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item> -->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
    </script>