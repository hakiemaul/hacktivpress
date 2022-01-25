<template lang="html">
  <b-tabs class="middle">
    <b-tab title="Register" active>
      <div style="padding: 20px">
        <br>
        <p style="text-align: left">Name</p>
        <b-form-input v-model="regName" type="text" placeholder="Enter your name"></b-form-input>

        <br>
        <p style="text-align: left">Email</p>
        <b-form-input v-model="regEmail" type="email" placeholder="Enter your email"></b-form-input>

        <br>
        <p style="text-align: left">Password</p>
        <b-form-input v-model="regPassword" type="password" placeholder="Enter your password"></b-form-input>
        <br>
        <b-button variant="primary" href="" @click="doRegister">Register</b-button>
      </div>
    </b-tab>
    <b-tab title="Login" >
      <div style="padding: 20px">
        <br>
        <p style="text-align: left">Username</p>
        <b-form-input v-model="logName" type="text" placeholder="Enter your username"></b-form-input>

        <br>
        <p style="text-align: left">Password</p>
        <b-form-input v-model="logPassword" type="password" placeholder="Enter your password"></b-form-input>
        <br>
        <b-button variant="primary" href="" @click="doLogin">Login</b-button>
      </div>
    </b-tab>
    <div v-if="regStat">
      <p>Akun berhasil dibuat! Silakan login untuk mulai bergabung dalam diskusi!</p>
    </div>
    <div v-if="failedLog">
      <p>Email atau password anda salah!</p>
    </div>
    <div v-if="failedReg">
      <p>Gagal, cek kembali input anda.</p>
    </div>
  </b-tabs>
</template>

<script>
export default {
  data () {
    return {
      regName: null,
      regEmail: null,
      regPassword: null,
      regStat: false,
      failedReg: false,
      logName: null,
      logPassword: null,
      logStat: false,
      failedLog: false
    }
  },
  methods: {
    doRegister () {
      var self = this
      self.failedLog = false
      this.axios.post('http://localhost:3000/signup', {
        username: self.regName,
        email: self.regEmail,
        password: self.regPassword
      })
      .then(function (response, a, b, c, d, e, f, g) {
        if (response.data._id) {
          self.regStat = true
        } else {
          self.failedReg = true
        }
      })
      .catch(function (err) {
        console.log(err)
        self.failedReg = true
      })
    },
    doLogin () {
      var self = this
      self.failedReg = false
      this.axios.post('http://localhost:3000/login', {
        username: self.logName,
        password: self.logPassword
      })
      .then(function (response) {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          self.$store.dispatch('getUser')
          self.logName = null
          self.logPassword = null
          self.$router.push('./')
        } else {
          self.failedLog = true
        }
      })
      .catch(function (err) {
        console.log(err)
        self.failedLog = true
      })
    }
  }
}
</script>

<style lang="css">
.middle {
  width: 400px;
  margin: auto;
}
</style>
