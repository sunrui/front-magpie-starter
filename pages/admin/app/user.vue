<template>
  <div class="sun-body">
    <el-card shadow="never">
      <div class="table-box">
        <div style="width: 100%;margin: 15px 0;">
          <div class="table-bar">
            <el-button type="primary" size="small" icon="el-icon-plus">添加</el-button>
          </div>
          <el-table :data="model.users" style="width: 100%;" border>
            <el-table-column prop="name" label="用户名" width="200"/>
            <el-table-column prop="phone" label="手机号" width="200"/>
            <el-table-column prop="role" label="角色" width="180"/>
            <el-table-column prop="createdAt" label="注册时间" width="220"/>
            <el-table-column prop="comment" label="备注"/>
            <el-table-column label="启用" align="center" width="100">
              <template slot-scope="scope">
                <el-switch disabled v-model="scope.row.enable" @change="changeEnable(scope.row.id, $event)"></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="200">
              <template>
                <!--                <el-link type="primary" icon="el-icon-edit" :underline="false">修改</el-link>-->
                <el-link type="danger" icon="el-icon-delete" :underline="false">删除</el-link>
              </template>
            </el-table-column>
          </el-table>
        </div>

      </div>
    </el-card>

    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

import {httpUserAdminApi} from "~/api/httpUserAdminApi";
import {timeApi} from "~/api/timeApi";

export default {
  name: 'SystemUser',
  data() {
    return {
      model: {
        users: []
      },
      ui: {
        showCreate: false
      },
      // 表格列配置
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: true
      }],
      where: {},
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  created() {
    httpUserAdminApi.getAllUser().then(res => {
      this.model.users = res.elements

      for (let user of res.elements) {
        user.createdAt = timeApi.dateFormat(new Date(parseInt(user.createdAt)))
      }
    })
  },
  methods: {
    changeEnable(userId, enable) {
      console.log(userId)
      console.log(enable)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },
    /* 重置搜索 */
    reset() {
      this.where = {};
      this.$nextTick(() => {
        this.reload();
      });
    },
  }
}
</script>

<style scoped>
</style>
