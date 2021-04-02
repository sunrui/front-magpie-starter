<template>
  <div class="sun-body">
    <el-card shadow="never">
      <div class="table-box">
        <div style="width: 100%;margin: 15px 0;">
          <div class="table-bar">
            <el-button type="primary" size="small" icon="el-icon-plus" @click="ui.showCreate = true">添加</el-button>
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
              <template slot-scope="scope">
                <el-link type="danger" icon="el-icon-delete" :underline="false" @click="btnDelete(scope.row.id)">删除
                </el-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>

    <el-dialog title="添加用户" :visible.sync="ui.showCreate" width="400px">
      <el-form :model="model.user" ref="ruleUser" size="small" label-width="90px">
        <el-form-item label="用户名">
          <el-input v-model="model.user.userName" :rule="rules.user.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="model.user.phone" :rule="rules.user.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.user.password" :rule="rules.user.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="model.user.comment" placeholder="请输入备注"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="ui.showCreate = false">取消</el-button>
        <el-button type="primary" @click="btnCreate">确定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

import {httpUserAdminApi} from "~/api/httpUserAdminApi";
import {timeApi} from "~/api/timeApi";
import {httpUserApi} from "~/api/httpUserApi";

export default {
  name: 'SystemUser',
  data() {
    return {
      model: {
        users: [],
        user: {
          userName: 'sunrui',
          phone: '15068860507',
          password: '123456',
          comment: '备注'
        }
      },
      rules: {
        user: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      },
      ui: {
        showCreate: false
      }
    }
  },
  created() {
    this.httpGetAllUser()
  },
  methods: {
    httpGetAllUser() {
      httpUserAdminApi.getAllUser().then(res => {
        this.model.users = res.elements

        for (let user of res.elements) {
          user.createdAt = timeApi.dateFormat(new Date(parseInt(user.createdAt)))
        }
      })
    },
    changeEnable(userId, enable) {
      console.log(userId)
      console.log(enable)
    },
    btnCreate() {
      if (!this.model.user.userName || this.model.user.userName.length < 4 || this.model.user.userName.length > 16) {
        return this.$message.error('用户名称 4-16 位数。')
      }

      if (!this.model.user.phone || this.model.user.phone.length !== 11 || !/^1[0-9]{10}$/.test(this.model.user.phone)) {
        return this.$message.error('手机号不合法。')
      }

      if (!this.model.user.password || this.model.user.password.length < 6 || this.model.user.password.length > 20) {
        return this.$message.error('密码不合法。')
      }

      httpUserApi.postRegister(this.model.user.userName,
          this.model.user.phone,
          this.model.user.password,
          this.model.user.comment
      ).then(res => {
        if (res.userNameExists) {
          return this.$message.error('用户名称已存在。')
        } else if (res.phoneExists) {
          return this.$message.error('手机号已存在。')
        } else if (res.directInvitorUserIdNotExists) {
          return this.$message.error('直推用户 ID 不存在。')
        } else if (res.magicError) {
          return this.$message.error('魔法值不正确。')
        } else if (res.user) {
          this.$message.info('添加成功。')
          this.httpGetAllUser()
          this.ui.showCreate = false
        }
      })
    },
    btnDelete(userId) {
      httpUserAdminApi.deleteDestroy(userId).then(res => {
        if (res.userIdNotExists) {
          return this.$message.error('用户 ID 不存在。')
        } else if (res.success) {
          this.$message.info('注销成功。')
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
