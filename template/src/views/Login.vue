<template>
  <div class="app flex-row align-items-center">
    <div class="flex flex-wrap justify-content-center align-content-center">
      <div class="card">
        <img class="card-img-top"
             src="../assets/logo.png">
        <div class="card-block p-4">
          <form>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email"
                     class="form-control"
                     id="email"
                     aria-describedby="emailHelp"
                     placeholder="Input your email"
                     v-model="email"
                     required>
            </div>
            <div class="form-group">
              <label for="senha">Password</label>
              <input type="password"
                     class="form-control"
                     id="senha"
                     placeholder="Insert your password"
                     v-model="password"
                     required>
            </div>
            <div class="alert alert-danger"
                 role="alert"
                 v-if="error.message">{{error.message}}</div>
            <div class="flex">
              <router-link to="/forgot-password"
                           class="link">Forget your password?</router-link>
              <button type="submit"
                      class="btn btn-success"
                      @click="onSubmit">
                <i class="fa fa-check"></i> Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$store.dispatch('signIn', {
        error: err => {
          this.error = err
        },
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
.app,
.justify-content-center.align-content-center {
  height: 100vh;
  background-color: #444444;
}
.card-img-top {
  padding: 15px;
  background-color: #020202;
}
.card {
  border: none;
  max-width: 400px;
}
.flex {
  display: flex;
}
.form-group label {
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 14px;
}
.form-control {
  border: none;
  border-bottom: 1px solid #ced4da;
  display: flex;
}
.form-control:focus {
  box-shadow: none;
}
.btn-success {
  color: #fff;
  background-color: #15a562;
  border-color: #15a562;
  border-radius: 25px;
  font-weight: bold;
  font-size: 14px;
  max-width: 140px;
  flex: 1;
}
.link {
  color: #495057;
  font-size: 14px;
  flex: 1;
  align-self: center;
}
</style>
