<template>
  <div class="col-md-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <ol class="breadcrumb top-nav-menu">
          <li>
            <router-link to="/list">
              <i class="glyphicon glyphicon-credit-card"></i> 坐席状态
            </router-link>
          </li>
        </ol>
      </div>
      <div class="panel-body">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr class="items-head">
              <th>工号</th>
              <th>分机号</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>主叫号码</th>
              <th>被叫号码</th>
              <th>录音播放按钮</th>
              <th>打分</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody class="statItem">
            <tr v-for="item in items">
              <td>{{item.id}}</td>
              <td>{{item.extensionNum}}</td>
              <td>{{item.startTime}}</td>
              <td>{{item.endTime}}</td>
              <td>{{item.startCall}}</td>
              <td>{{item.endCall}}</td>
              <td class="statItemRadio">
                <audio controls>
                    <source :src="item.audio" type="audio/mp3">
                </audio>
              </td>
              <th>{{item.score}}</th>
              <th>{{item.say}}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="panel-footer content-footer">
        <nav aria-label="Page navigation">
          <!-- 分页组件 -->
          <pagination></pagination>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import pagination from '../../public/pagination'
  export default {
    name: "list",
    data() {
      return {
        items: [{
          id: Number,
          extensionNum: String,
          startTime: String,
          endTime: String,
          startCall: String,
          endCall: String,
          audio: String,
          score: Number,
          say: String
        }]
      }
    },
    components: {
      pagination,
    },
    methods: {
      showItems: function(e) {
        if (this.items != null) {
          this.items.push({
            id: this.response.data.id,
            extensionNum: this.response.data.extensionNum,
            startTime: this.response.data.startTime,
            endTime: this.response.data.endTime,
            startCall: this.response.data.startCall,
            endCall: this.response.data.endCall,
            audio: this.response.data.audio,
            score: this.response.data.score,
            say: this.response.data.say
          });
        } else {
          alert("查询为空");
        }
        e.preventDefault(); //此处禁止点击button后触发刷新页面事件
      }
    },
    created: function() {
      this.$ajax("http://localhost:3000/posts/").then(function(response) {
        // console.log(response.data);
        this.items = response.data
      })
    }
  }
</script>

<style scoped>
  .breadcrumb {
    margin-bottom: 0px;
    padding: 0px 10px;
  }

  .pagination {
    margin: 0 auto;
  }

  .content-footer {
    font-size: 15px;
    text-align: center;
  }

  .items-head>th {
    text-align: center;
    height: 50px;
    vertical-align: middle;
  }

  .top-nav-menu {
    text-align: left;
  }

  .statItemRadio {
    position: relative;
    width: 150px;
  }

  .statItemRadio>audio {
    vertical-align: middle;
  }

  .statItem>tr>td {
    vertical-align: middle;
    padding: 5px;
  }
</style>
