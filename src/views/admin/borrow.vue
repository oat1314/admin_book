<template>
  <div>
    <h4 class="lighter">
      <i class="ace-icon fa fa-hand-o-right icon-animated-hand-pointer blue"></i>
      <router-link to="/book/manage" class="pink"> asdas </router-link>
    </h4>
    <hr>
    <p>
      <button v-on:click="add()" class="btn btn-white btn-default btn-round">
        <i class="ace-icon fa fa-edit"></i>
        新增
      </button>
      &nbsp;
      <button  class="btn btn-white btn-default btn-round">
        <i class="ace-icon fa fa-refresh"></i>
        刷新
      </button>
    </p>

    <pagination ref="pagination" ></pagination>

    <table id="simple-table" class="table  table-bordered table-hover">
    <thead>
    <tr>
      <th>ID</th>
      <th>名称</th>
      <th>操作</th>
    </tr>
    </thead>

    <tbody>
    <tr >
      <td>as</td>
      <td>adas</td>
      <td>
        <div class="hidden-sm hidden-xs btn-group">
          <button class="btn btn-white btn-xs btn-info btn-round">
            编辑
          </button>&nbsp;
          <button  class="btn btn-white btn-xs btn-warning btn-round">
            删除
          </button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>

    <div id="form-modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">表单</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-2 control-label">名称</label>
                <div class="col-sm-10">
                  <input  class="form-control" placeholder="名称">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">课程</label>
                <div class="col-sm-10">
                  <input  class="form-control" placeholder="名称">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button  type="button" class="btn btn-primary">保存</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>

<script>
  import Pagination from "../../components/pagination";
  export default {
    components: {Pagination},
    name: "borrow",
    data: function() {
      return {
        chapter: {},
        chapters: [],
        course: {},
      }
    },
    mounted: function() {
      
      // sidebar激活样式方法一
      this.$parent.activeSidebar("book-borrow-sidebar");

    },
    methods: {
      /**
       * 点击【新增】
       */
      add() {
        
        $("#form-modal").modal("show");
      },

  
    }
  }
</script>