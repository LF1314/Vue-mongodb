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
                             <p>{{item.imgs.title}}</p>
                             <p>
                                 <span v-for="(it,index) in item.imgs.category_list" :key="index">
                                     {{it.name}}
                                 </span>
                            </p>
                             <p>{{item.imgs.text}}</p>
                        </div>
                        <div class="usermessage">
                            <p>
                               <span>用户名：</span> <span>{{item.imgs.user_data.name}}</span>
                            </p>
                            <p>
                               <span>昵称：</span> <span>{{item.imgs.user_data.nick}}</span>
                            </p>
                            <p></p>
                        </div>
                    </li>
                </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "beautiful",
  data() {
    return {
      imgdata: []
    };
  },
  methods: {
    getimgs() {
      this.$axios.get("/img/imgs").then(res => {
        this.imgdata = res.data.data;
        console.log(this.imgdata);
      });
    }
  },
  created() {
    this.getimgs();
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
.imgitemdiv1 {
  width: 40%;
  height: 100%;
  background-color: #f3f3f3;
  border: 1px solid #fff;
}
.imgitemdiv1 img {
  height: 100%;
  border-radius: 5px;
}
.imgdesc {
  width: 20%;
  height: 100%;
  padding: 5%;
  text-align: left;
}
.usermessage {
  width: 30%;
  height: 100;
}
</style>
