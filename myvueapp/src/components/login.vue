<template>
    <div class="loginvue">
        <h3>学生管理系统登录</h3>
        <div class="userss">
          <el-form :model="usermessgae" status-icon  label-width="55px" >
                <el-form-item label="用户名" prop="pass">
                    <el-input type="text" v-model="usermessgae.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="usermessgae.password" autocomplete="off"></el-input>
                </el-form-item>  
                <el-form-item>
                    <el-button type="primary" @click="loginin">登陆</el-button>
                    <el-button >重置</el-button>
                </el-form-item>
         </el-form>
        </div>
       
        <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      msg: "",
      usermessgae: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    loginin() {
      this.$axios.get("/login", this.usermessgae).then(res => {
        if (res.data.code == 200) {
          this.$message({
            message: "登陆成功！",
            type: "success"
          });
          setTimeout(() => {
            this.$router.push("/home");
          }, 1000);
        } else {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: "error"
          });
        }
      });
    }
  }
};
</script>


<style scoped>
.loginvue {
  width: 100%;
  height: 610px;
  background-image: url("../../static/images/loginbackimg.jpg");
  text-align: center;
  font-size: 15px;
  padding-top: 40px;
  background-size: auto 100%;
}
.userss {
  width: 500px;
  background-color: #f3f3f3;
  padding: 40px;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 10px;
}
</style>
