<template>
    <div class="form-group" style="width:350px; height:40px">
      <multiselect select-label="回车或点击选择"
                   selected-label="已选择"
                   :limit-text="limitText"
                   :limit="1"
                   deselect-label="回车或点击删除"
                   placeholder="请选择"
                   v-model="value"
                   :options="options"
                   :multiple="true"
                   :close-on-select="false"
                   track-by="userName"
                   label="userName"
                   group-values="list"
                   group-label="groupName"
                   >

        <span slot="noResult">结果未找到.</span>
      </multiselect>
    </div>
</template>
<script>
export default {
    methods:{
    limitText(limit) {
      return "共" + (limit + 1) + "个";
    }
  },
  data () {
    return {
      value:null,
      options: [
      ]

    }
  },
  created() {
    var me = this;

    $.ajax({url: "http://192.168.1.2:8080/user/login",
            type: "post",
            data: JSON.stringify({"userName":"test"}),
            contentType: "application/json; charset=utf-8",
            success: function(data) {
              if(data.code == 0 && data.data.success) {

                $.ajax({url: "http://192.168.1.2:8080/user/userGroup",
                        type: "post",
                        data: JSON.stringify(data.data.result[0]),
                        contentType: "application/json; charset=utf-8",
                        success: function(data) {
                          if(data.code == 0 && data.data.success) {
                            me.options = data.data.result;
                          }
                        }
                });
              }
            }
    });
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
