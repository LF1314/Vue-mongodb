<template>
    <div class="imgswraper">
        <div>
            <h2>
                女神屋
            </h2>
        </div>
        <div class="imglist">
                <ul>
                    <li class="imgitem" v-for="(item,index) in imgdata" :key="index">
                        <div class="imgitemdiv1">
                            <img :src="item.imgs.image" alt="图片">
                        </div>
                        <div class="imgdesc">
                             <p><span class="itemspan">标题：</span>{{item.imgs.title}}</p>
                             <p>
                                <span class="itemspan">详情：</span> <span v-for="(it,index) in item.imgs.category_list" :key="index">
                                     {{it.name}}
                                 </span>
                            </p>
                             <p><span class="itemspan">描述：</span>{{item.imgs.text}}</p>
                        </div>
                        <div class="usermessage">
                            <p>
                               <span class="itemspan">用户名：</span> <span>{{item.imgs.user_data.name}}</span>
                            </p>
                            <p>
                               <span class="itemspan">昵称：</span> <span>{{item.imgs.user_data.nick}}</span>
                            </p>
                            <p></p>
                        </div>
                    </li>
                </ul>
        </div>
        <div class="changepage">
          <el-pagination
            background
            @current-change = 'curent'
            layout="prev, pager, next"
            :page-size = '5'
            :total="count">
          </el-pagination>

        </div>
    </div>
</template>
<script>
export default {
  name: "beautiful",
  data() {
    return {
      imgdata: [],
      pn: 1,
      count: 0
    };
  },
  methods: {
    getimgs(pn) {
      this.$axios.get("/img/imgs", { pn }).then(res => {
        console.log(res);
        this.imgdata = res.data.data;
        this.count = res.data.count;
        console.log(this.imgdata);
      });
    },
    curent(e) {
      this.getimgs(e);
    }
  },
  created() {
    this.getimgs(this.pn);
  }
};
</script>
<style scoped>
.imgswraper {
  padding: 10px;
}
.imglist {
  margin-top: 10px;
}
ul {
  list-style: none;
}
.imgitem {
  height: 200px;
  widows: 100%;
  padding: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f7f7f7;
  display: flex;
  justify-content: space-around;
}
.itemspan {
  font-size: 14px;
  font-weight: 500;
}
.imgitemdiv1 {
  width: 20%;
  height: 80%;
  padding: 2%;
  border-radius: 5px;
  background-color: #f3f3f3;
  border: 1px solid #fff;
}
.imgitemdiv1 img {
  height: 90%;
  border-radius: 5px;
}
.imgdesc {
  width: 20%;
  height: 100%;
  padding: 5%;
  text-align: left;
  font-size: 12px;
  color: #666;
}
.usermessage {
  width: 30%;
  height: 90%;
  padding: 5%;
  font-size: 12px;
}
</style>
