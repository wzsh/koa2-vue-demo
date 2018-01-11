<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <span class="title">
       Welcome to Login 
      </span>
      <el-row>
        <el-input 
          v-model="username" 
          placeholder="username"
          type="text">
        </el-input>
        <el-input 
          v-model="password" 
          placeholder="password"
          type="password">
        </el-input>
        <el-button type="primary" @click="login">Login</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
// import jwt from 'jsonwebtoken'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      let obj = {
        username: this.username,
        password: this.password
      }
      const result = this.$http.post(this.API_URL + '/auth/user', obj)
      result.then((res) => {
        if (res.data.success) {
          sessionStorage.setItem('wzs-token', res.data.token)
          // let d = jwt.decode(res.data.token)
          // console.log(d)
          this.$message({
            type: 'success',
            message: 'Login Successfully'
          })
          this.$router.push('/todolist')
        } else {
          this.$message.error(res.data.info)
          sessionStorage.setItem('wzs-token', null)
        }
      }, (err) => {
        console.log(err)
        this.$message.error('Request Error！')
        sessionStorage.setItem('wzs-token', null)
      })
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row.content{
    padding:16px;
}
.title{
    font-size:28px;
}
.el-input{
    margin:12px 0;
}
.el-button{
    width:100%;
    margin-top: 12px ;
}
</style>
