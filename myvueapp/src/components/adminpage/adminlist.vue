//管理员列表页面
<template>
    <div class="adminlistwraper">
        <div class="header">
            <h3>管理员列表</h3>
        </div>
         <el-table
            :data="admindata"
            height="500"
            border
            style="width: 100%">
                <el-table-column
                prop="id"
                label="ID"
                width="100">
                </el-table-column>
                <el-table-column
                 label='头像'
                 width='120'
                >
                    <template slot-scope="scope">
                        <img :src="scope.row.img" alt="用户头像" class="usserimg">
                    </template>
                </el-table-column>
                <el-table-column
                prop="username"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="desc"
                label="描述">
                </el-table-column>
                <el-table-column
                label="操作">
                 <template slot-scope="scope">
                    <div>
                        <el-button type='primary'>
                            编辑
                        </el-button>
                        <el-button type='danger' @click="deladmin(scope.row._id)">
                            删除
                        </el-button>
                    </div>
                 </template>
                </el-table-column>

        </el-table>
    </div>
</template>
<script>
export default {
  name: "admnlist",
  data() {
    return {
      admindata: []
    };
  },
  methods: {
    getadmin() {
      this.$axios.get("/admins").then(res => {
        console.log(res);
        this.admindata = res.data.adminarr;
      });
    },
    deladmin(id) {
      this.$axios.delete(`/deladmin/${id}`).then(res => {
        if (res.data.code == 200) {
          this.$message.success({ message: res.data.msg });
          this.getadmin();
        } else {
          this$message.error(res.data.msg);
        }
      });
    }
  },
  created() {
    this.getadmin();
  }
};
</script>
<style scoped>
.adminlistwraper {
  padding: 20px;
}
.header {
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 2px dashed #f1f1f1;
}
.usserimg {
  width: 100%;
  border-radius: 10px;
}
</style>
