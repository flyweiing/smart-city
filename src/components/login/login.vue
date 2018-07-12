<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <img class="login-title1" src="../../images/bg_title.png" alt="">
    <img class="login-title2" src="../../images/bg_title1.png" alt="">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" :type="pwdType" v-model="loginForm.password" @keyup.enter.native="handleLogin" autoComplete="on" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">登  录</el-button>
      </el-form-item>
    </el-form>
    <img class="login-footer" src="../../images/bg_title2.png" alt="">
  </div>
</template>

<script>
import { isvalidUsername } from '@/common/js/validate'

export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: ''
      },
      loginRules: {
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePass}]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({path: '/'})
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
