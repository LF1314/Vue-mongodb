//学生管理系统之学生列表
<template>
    
   <div>
       <div>
           <h3>学生列表</h3>
       </div>
       <div class="studentstable">
            <el-table
        :data="studentsdatas"
        style="width: 100%"
        border
       >
        <el-table-column
           
            prop="学号"
            label="学号"
            width="200">
        </el-table-column>
         <el-table-column
            prop="name"
            label="姓名"
            width="120">
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别"
            width="120">
        </el-table-column>
        <el-table-column
            prop="age"
            label="年龄"
            width="120">
        </el-table-column>
        <el-table-column
            prop="学院"
            label="院系"
            width="400">
        </el-table-column>
        <el-table-column
            label="操作"
            width="200">
            <template slot-scope="scope">
                    <el-button
                    type="text"
                    size="small"
                    @click="removestudent(scope.row._id)"
                    >
                    移除
                    </el-button>
                    <el-button
                    type="text"
                    size="small"
                    @click="editstudent(scope.row._id)"
                    >
                    编辑
                    </el-button>
                    <el-button
                    type="text"
                    size="small">
                    查看
                    </el-button>
            </template>
        </el-table-column>
    </el-table>
       </div>
   </div>

      
  </template>

<script>
export default {
  name: "studentlist",
  data() {
    return {
      studentsdatas: []
    };
  },
  methods: {
    getstudents() {
      this.$axios.get("/students").then(res => {
        console.log(res);
        this.studentsdatas = res.data.stus;
      });
    },
    editstudent(id) {
      this.$router.push({ path: "editstudent", query: { id: id } });
    },
    removestudent(id) {
      this.$confirm("此操作将永久删除该学生, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$axios.delete(`/students/delstudent/${id}`).then(res => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: res.data.msg
              });
              this.getstudents();
            } else {
              this.$message.error(res.data.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.getstudents();
  }
};
</script>

<style scoped>
.studentstable {
  margin-top: 10px;
  padding: 10px;
}
</style>
