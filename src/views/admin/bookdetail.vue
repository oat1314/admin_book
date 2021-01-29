<template>
  <div>
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

    <pagination
      ref="pagination"
      v-bind:list="list"
      v-bind:itemCount="8"
    ></pagination>

    <div class="row">
      <div class="col-md-2">
        <div>
          <span class="profile-picture">
            <img
              class="editable img-responsive editable-click editable-empty"
              src="/ace/assets/images/avatars/profile-pic.jpg"
            />
            <img
              class="editable img-responsive editable-click editable-empty"
            />
          </span>

          <div class="space-4"></div>

          <div
            class="width-85 label label-info label-xlg arrowed-in arrowed-in-right"
          >
            <div class="inline position-relative">
              <a
                href="javascript:;"
                class="user-title-label dropdown-toggle"
                data-toggle="dropdown"
              >
                <i class="ace-icon fa fa-circle light-green"></i>
                &nbsp;
                <span class="white">rwerew</span>
              </a>
            </div>
          </div>
        </div>

        <div class="space-6"></div>

        <div class="text-center">
          <a href="javascript:;" class="text-info bigger-110">
            <i class="ace-icon fa fa-user"></i>
            【dasdas】
          </a>
        </div>

        <div class="space-6"></div>

        <div class="profile-social-links align-center">
          <button class="btn btn-xs btn-info">
            <i class="ace-icon fa fa-pencil bigger-120"></i>
          </button>
          &nbsp;
          <button class="btn btn-xs btn-danger">
            <i class="ace-icon fa fa-trash-o bigger-120"></i>
          </button>
        </div>

        <div class="hr hr16 dotted"></div>
      </div>
    </div>

    <div id="form-modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">表单</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10">
                  <input class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">昵称</label>
                <div class="col-sm-10">
                  <input class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">头像</label>
                <div class="col-sm-10">
                  <button
                    type="button"
                    class="btn btn-white btn-default btn-round"
                  >
                    <i class="ace-icon fa fa-upload"></i>
                    asdasd
                  </button>
                  <input
                    class="hidden"
                    type="file"
                    ref="file"
            
                  />
                  <div  class="row">
                    <div class="col-md-4">
                      <img src="/ace/assets/images/avatars/profile-pic.jpg" class="img-responsive" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">职位</label>
                <div class="col-sm-10">
                  <input  class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">座右铭</label>
                <div class="col-sm-10">
                  <input  class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">简介</label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              取消
            </button>
            <button  type="button" class="btn btn-primary">
              保存
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>

<script>
import Pagination from "../../components/pagination";

export default {
  components: { Pagination},
  name: "business-teacher",
  data: function () {
    return {
     
    }
  },
  mounted: function () {
    
    // sidebar激活样式方法一
    // this.$parent.activeSidebar("business-teacher-sidebar");

  },
  methods: {
    /**
     * 点击【新增】
     */
    add () {
      $("#form-modal").modal("show");
    },

    


   

    
  }
}
</script>