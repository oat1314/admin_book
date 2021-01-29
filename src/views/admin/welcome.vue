<template>
  <div>
    <div class="space-12"></div>
    <div class="row">
      <div class="col-xs-12">
        <div class="text-center">
          <span class="btn btn-app btn-sm btn-light no-hover">
              <span class="line-height-1 bigger-170 blue"> 518 </span>
              <br>
              <span class="line-height-1 smaller-90"> 课程 </span>
          </span>
          <span class="btn btn-app btn-sm btn-yellow no-hover">
              <span class="line-height-1 bigger-170"> 6,321 </span>

              <br>
              <span class="line-height-1 smaller-90"> 大章 </span>
          </span>

          <span class="btn btn-app btn-sm btn-pink no-hover">
              <span class="line-height-1 bigger-170"> 4,182 </span>

              <br>
              <span class="line-height-1 smaller-90"> 小节 </span>
          </span>

          <span class="btn btn-app btn-sm btn-success no-hover">
              <span class="line-height-1 bigger-170"> 5.23 </span>

              <br>
              <span class="line-height-1 smaller-90"> 会员(万) </span>
          </span>

          <span class="btn btn-app btn-sm btn-primary no-hover">
              <span class="line-height-1 bigger-170"> 12.76 </span>

              <br>
              <span class="line-height-1 smaller-90"> 报名(万) </span>
          </span>

          <span class="btn btn-app btn-sm btn-grey no-hover">
              <span class="line-height-1 bigger-170"> 32.96 </span>

              <br>
              <span class="line-height-1 smaller-90"> 评论(万) </span>
          </span>

        </div>

        <div class="space-12"></div>

        <div class="hr hr2 hr-double"></div>

        <div class="space-12"></div>

      </div>

      <div class="col-sm-12 infobox-container">
        <div class="infobox infobox-green">
          <div class="infobox-icon">
            <i class="ace-icon fa fa-comments"></i>
          </div>

          <div class="infobox-data">
            <span class="infobox-data-number">332</span>
            <div class="infobox-content">新增评论</div>
          </div>

          <div class="stat stat-success">8%</div>
        </div>

        <div class="infobox infobox-blue">
          <div class="infobox-icon">
            <i class="ace-icon fa fa-twitter"></i>
          </div>

          <div class="infobox-data">
            <span class="infobox-data-number">58</span>
            <div class="infobox-content">新增注册会员</div>
          </div>

          <div class="badge badge-success">
            +10%
            <i class="ace-icon fa fa-arrow-up"></i>
          </div>
        </div>

        <div class="infobox infobox-pink">
          <div class="infobox-icon">
            <i class="ace-icon fa fa-shopping-cart"></i>
          </div>

          <div class="infobox-data">
            <span class="infobox-data-number">108</span>
            <div class="infobox-content">课程报名</div>
          </div>
          <div class="stat stat-important">4%</div>
        </div>

        <div class="space-12"></div>

        <div class="hr hr2 hr-double"></div>

        <div class="space-12"></div>

      </div>

      <div class="col-sm-12">
        <div class="widget-box transparent">
          <div class="widget-header widget-header-flat">
            <h4 class="widget-title lighter">
              <i class="ace-icon fa fa-signal"></i>
              销售量
            </h4>

          </div>

          <div class="widget-body">
            <div class="widget-main padding-4">
              <div id="sales-charts"></div>
            </div><!-- /.widget-main -->
          </div><!-- /.widget-body -->
        </div><!-- /.widget-box -->

        <div class="space-12"></div>

        <div class="hr hr2 hr-double"></div>

        <div class="space-12"></div>
      </div><!-- /.col -->

      <div class="col-sm-6">
        <div class="widget-box transparent">
          <div class="widget-header widget-header-flat">
            <h4 class="widget-title lighter">
              <i class="ace-icon fa fa-star orange"></i>
              课程销售排名
            </h4>

          </div>

          <div class="widget-body">
            <div class="widget-main no-padding">
              <table class="table table-bordered table-striped">
                <thead class="thin-border-bottom">
                <tr>
                  <th>
                    <i class="ace-icon fa fa-caret-right blue"></i>课程名称
                  </th>

                  <th>
                    <i class="ace-icon fa fa-caret-right blue"></i>价格
                  </th>

                  <th>
                    <i class="ace-icon fa fa-caret-right blue"></i>购买数
                  </th>
                </tr>
                </thead>

                <tbody>
                <tr>
                  <td>开发工具IDEA从入门到爱不释手</td>

                  <td>
                    <b class="green">￥299.00</b>
                  </td>

                  <td>
                    <span class="label label-warning arrowed arrowed-right">5,132</span>
                  </td>
                </tr>

                <tr>
                  <td>开发工具IDEA从入门到爱不释手</td>

                  <td>
                    <b class="red">￥388.00</b>
                  </td>

                  <td>
                    <span class="label label-warning arrowed arrowed-right">3,132</span>
                  </td>
                </tr>

                <tr>
                  <td>开发工具IDEA从入门到爱不释手</td>

                  <td>
                    <b class="green">￥199.00</b>
                  </td>

                  <td>
                    <span class="label label-warning arrowed arrowed-right">2,132</span>
                  </td>
                </tr>

                <tr>
                  <td>开发工具IDEA从入门到爱不释手</td>

                  <td>
                    <b class="green">￥299.00</b>
                  </td>

                  <td>
                    <span class="label label-success arrowed arrowed-right">1,654</span>
                  </td>
                </tr>

                <tr>
                  <td>开发工具IDEA从入门到爱不释手</td>

                  <td>
                    <b class="green">￥199.00</b>
                  </td>

                  <td>
                    <span class="label label-success arrowed arrowed-right">1,254</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div><!-- /.widget-main -->
          </div><!-- /.widget-body -->
        </div><!-- /.widget-box -->
      </div><!-- /.col -->
      <div class="col-sm-6">
        <div class="widget-box transparent">
          <div class="widget-header widget-header-flat">
            <h4 class="widget-title lighter">
              <i class="ace-icon fa fa-star orange"></i>
              分类销售排名
            </h4>

          </div>

          <div class="widget-body">
            <div class="widget-main">
              <div id="piechart-placeholder"></div>

            </div><!-- /.widget-main -->
          </div><!-- /.widget-body -->
        </div><!-- /.widget-box -->
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div>
</template>

<script>
  export default {
    name: "welcome",
   
  }
</script>
