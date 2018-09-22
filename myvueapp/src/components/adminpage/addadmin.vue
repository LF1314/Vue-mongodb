//添加管理员页面
<template>
    <div class="addadminwraper">
        <div>
            <h4>添加管理员</h4>

        </div>
        <div class="addusers">
            <el-form ref="form" :model="userdata" label-width="120px">
                <el-form-item label="用户名：">
                    <el-input v-model="userdata.username"></el-input>
                </el-form-item>
                <el-form-item label="个人描述:">
                    <el-input type="textarea" v-model="userdata.desc"></el-input>
                </el-form-item>
                  <el-form-item label="密码：">
                    <el-input v-model="userdata.password" type="password" ></el-input>
                </el-form-item>
                <el-form-item label="确认密码：">
                    <el-input type="password" ></el-input>
                </el-form-item>
                 <el-switch
                v-model="imgursss"
                active-text="输入图片链接"
                inactive-text="上传图片">
                </el-switch>
                <el-form-item label="imgurl：" v-if="imgursss">
                    <el-input v-model="userdata.img"></el-input>
                </el-form-item>
                <el-form-item label="ID：" class="userid">
                     <el-input-number v-model="userdata.id" ></el-input-number>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addadmin" >立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="imgss" v-if="!imgursss">
            <el-upload
                class="avatar-uploader"
                action="https://upload-z1.qiniup.com"
                :show-file-list="false"
                :data='obj'
                :on-success="handleAvatarSuccess"
                >
                <img v-if="userdata.img" :src="userdata.img" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>添加用户头像</p>
        </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addadmin",
  data() {
    return {
      obj: {
        token: ""
      },
      imgursss: true,
      userdata: {
        id: 1,
        img: "",
        desc: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleAvatarSuccess(res) {
      // console.log(res);
      this.userdata.img = res.url;
    },
    addadmin() {
      this.$axios.post("/addadmin", this.userdata).then(res => {
        if (res.data.code == 200) {
          this.$message.success({ message: res.data.msg });
          this.$router.push("adminlist");
        } else {
          this.$message.error("res.data.msg");
        }
      });
    }
  },
  created() {
    axios.get("http://upload.yaojunrong.com/getToken").then(res => {
      console.log(res);
      this.obj.token = res.data.data;
    });
  }
};
</script>

<style scoped>
.userid {
  margin-top: 10px;
}
.addadminwraper {
  padding: 30px;
  margin: 0 auto;
}
.addusers {
  padding: 10px;
  width: 500px;
  float: left;
  border: 2px dashed #f4f4f4;
  border-radius: 5px;
  margin-top: 20px;
}
.imgss {
  float: left;
  margin-top: 30px;
  margin-left: 40px;
  overflow: hidden;
  text-align: center;
  font-size: 14px;
  color: #455;
}
</style>



















