<template>
  <div class="app flex-row align-items-center">
    <div class="row justify-content-center align-content-center">
      <div class="card">
        <img class="card-img-top"
             src="../assets/logo-empodere-se.png">
        <div class="card-block p-4">
          <form>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email"
                     class="form-control"
                     id="email"
                     aria-describedby="emailHelp"
                     placeholder="Insert your email"
                     v-model="email"
                     required>
            </div>
            <div class="alert alert-success"
                 role="alert"
                 v-if="success.message">
              {{success.message}}
            </div>
            <div class="alert alert-danger"
                 role="alert"
                 v-if="error.message">{{error.message}}</div>
            <div class="flex"
                 style="margin-top: 25px;">
              <router-link to="/login"
                           class="link">Back</router-link>
              <button type="submit"
                      class="btn btn-success btn-lg"
                      @click="onSubmit">
                <i class="fa fa-lock"></i> Reset password</button>
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
      error: {
        message: ''
      },
      success: {
        message: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      this.success.message = ''
      this.error.message = ''
      evt.preventDefault()
      this.$store.dispatch('auth/resetPassword', {
        email: this.email,
        success: result => {
          this.success.message = 'Reset email sent.'
        },
        error: error => {
          this.error = error
        }
      })
    }
  }
}
</script>

<style scoped>
.app,
.row.justify-content-center.align-content-center {
  height: 100vh;
}
.app,
.card-img-top {
  background-color: #444444;
  padding: 15px;
}
.card-img-top {
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
  margin-bottom: 0;
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
  flex: 1;
}
.link {
  color: #495057;
  font-size: 14px;
  flex: 1;
  align-self: center;
}
</style>
