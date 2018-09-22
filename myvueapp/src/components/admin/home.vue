// 登陆成功主页面
<template>
    <div>
        <div class="daonav">
          <el-menu
             :router="true"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="index">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">学生管理</template>
                <el-menu-item index="studentlist">学生列表</el-menu-item>
                <el-menu-item index="addstudent">添加学生</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
                <el-submenu index="3-4">
                <template slot="title">管理员中心</template>
                <el-menu-item index="addadmin">添加管理员</el-menu-item>
                <el-menu-item index="adminlist">管理员列表</el-menu-item>
                </el-submenu>
         </el-menu>
        </div>
        <div class="main">
            <router-view>
            </router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style scoped>
</style>
