
<template>
    <div>
        {{dataimg}}
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "testvue",
  data() {
    return {
      dataimg: []
    };
  },
  created() {
    axios
      .post("https://api.paixin.com/copyright/in_album_list?limit=200&line=", {
        album_id: "22"
      })
      .then(res => {
        this.dataimg = res;
        let arr = this.dataimg.data.data;
        console.log(arr);
        let _this = this;
        let i = 0;
        function f(i) {
          console.log(i);
          if (i < arr.length) {
            _this.$axios.post("/img/imgs", arr[i].media_data).then(res => {
              i++;
              f(i);
            });
          }
        }
        f(i);
      });
    // this.$axios.get("/imgs").then(res => {
    //   console.log(res);
    //   this.dataimg = res.data.data;
    // });
  }
};
</script>


<style>
</style>
