//添加学生信息

<template>
    <div class="wraper">
        <div>
            <h3>添加学生信息</h3>
        </div>
        <div class="studentmessage">
            <div class="Essentialinformation">
                <h4 class="itemh4">基本信息</h4>
             <el-form label-width="100px" :model='studentdata'>
                <el-form-item label="学号：">
                   <el-input v-model="studentdata.学号"></el-input>
                </el-form-item>
                <el-form-item label="姓名：">
                   <el-input v-model="studentdata.name"></el-input>
                </el-form-item>
                 <el-form-item label="年龄：" >
                   <el-input v-model="studentdata.age"></el-input>
                </el-form-item>
                <el-form-item label="性别：">
                    <el-radio-group v-model="studentdata.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="院系：" >
                   <el-input v-model="studentdata.学院"></el-input>
                </el-form-item>
             </el-form>
            </div>
            <div class="Achievementinformation">
              <h4 class="itemh4">成绩信息</h4>
              <el-form :model = 'studentdata.cursor' label-width="100px">
                   <el-form-item label="Chineses" >
                       <el-input v-model="studentdata.cursor.Chinses"></el-input>
                    </el-form-item> 
                    <el-form-item label="math" >
                       <el-input v-model="studentdata.cursor.math"></el-input>
                    </el-form-item> 
                    <el-form-item label="English" >
                       <el-input v-model="studentdata.cursor.English"></el-input>
                    </el-form-item> 
              </el-form>
              <el-button @click="addstudent" class="btn" type="primary" v-if="isshow">
                  添加
              </el-button>
              <el-button @click="editstudent" class="btn" type="primary" v-else>
                  修改
              </el-button>
              
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "addstudent",
  data() {
    return {
      isshow: true,
      studentid: "",
      studentdata: {
        学号: 0,
        name: "",
        sex: "",
        age: 0,
        学院: "",
        cursor: {
          math: 0,
          English: 0,
          Chinses: 0
        }
      }
    };
  },
  methods: {
    //添加学生
    addstudent() {
      console.log(this.studentdata);
      this.$axios.post("/students/addstudent", this.studentdata).then(res => {
        if (res.data.code == 200) {
          this.$message.success({ message: res.data.msg });
          this.$router.push("studentlist");
        }
      });
    },
    //修改学生信息
    editstudent() {
      this.$axios
        .put(`/students/changestudent/${this.studentid}`, this.studentdata)
        .then(res => {
          console.log(res.data.code);
          if (res.data.code == 200) {
            this.$message.success({ message: res.data.msg });
            this.$router.push("studentlist");
          } else {
            this.$message.error("修改失败");
          }
        });
    }
  },
  created() {
    this.studentid = this.$route.query.id;
    if (this.studentid) {
      this.isshow = false;
      this.$axios.get(`/students/student/${this.studentid}`).then(res => {
        console.log(res.data);
        this.studentdata = res.data.data;
      });
    }
  },
  watch: {
    $route(val, oldval) {
      // console.log(val);
      if (val.name == "addstudent") {
        this.studentdata = {
          学号: 0,
          name: "",
          sex: "",
          age: 0,
          学院: "",
          cursor: {
            math: 0,
            English: 0,
            Chinses: 0
          }
        };
        this.isshow = true;
      }
    }
  }
};
</script>

<style scoped>
.wraper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.itemh4 {
  margin-bottom: 10px;
}
.studentmessage {
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
.Achievementinformation,
.Essentialinformation {
  text-align: center;
  margin-top: 20px;
  width: 500px;
}
.btn {
  box-sizing: border-box;
  text-align: center;
  width: 400px;
  margin-left: 100px;
}
</style>




















