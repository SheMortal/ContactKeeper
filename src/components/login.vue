<template>
  <div class="login">
    <article>
      <div class="container" :class="{ 'sign-up-active': signUp }">
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-left">
              <h2>Welcome to Contact Keeper!</h2>
              <p>Register to get started</p>
              <sui-divider horizontal>Already have an account?</sui-divider>
              <button class="invert" id="signIn" @click="signUp = !signUp">
                Log In
              </button>
              <div class="social-icons">
                <i class="github  icon"></i>
                <i class="dropbox icon"></i>
                <i class="instagram icon"></i>
              </div>
            </div>
            <div class="overlay-right">
              <h2>Welcome Back!</h2>

              <p>Login to see all your contacts</p>
              <sui-divider horizontal>Don't have an account?</sui-divider>
              <button class="invert" id="signUp" @click="signUp = !signUp">
                Register
              </button>
              <div class="social-icons">
                <i class="github  icon"></i>
                <i class="dropbox icon"></i>
                <i class="instagram icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="register-container">
          <form class="sign-up" action="#">
            <h2>Register account</h2>
            <div><sui-icon name="users" /></div>
            <div class="ui left icon input">
              <input
                type="text"
                placeholder="Fullname"
                v-model="register.name"
              />
              <i class="add user icon"></i>
            </div>
            <div class="ui left icon input">
              <input
                type="email"
                placeholder="Email"
                v-model="register.email"
              />
              <i class="mail icon"></i>
            </div>
            <div class="ui left icon input">
              <input
                type="password"
                placeholder="Password"
                v-model="register.password"
              /><i class="lock icon"></i>
            </div>
            <div></div>
            <router-link to="/login"
              ><button @click="handleRegister">Register</button></router-link
            >
          </form>
        </div>
        <form class="sign-in" action="#">
          <h2>Log In</h2>
          <div><sui-icon name="users" /></div>
          <div class="ui left icon input">
            <input type="email" placeholder="Email" v-model="login.email" />
            <i class="mail icon"></i>
          </div>
          <div class="ui left icon input">
            <input
              type="password"
              placeholder="Password"
              v-model="login.password"
            /><i class="lock icon"></i>
          </div>

          <a href="#">Forgot your password?</a>
          <router-link to="/contacts" exact
            ><button @click="handleLogin">Log in</button></router-link
          >
        </form>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      signUp: false,
      register: {
        name: "",
        email: "",
        password: "",
      },
      login: {
        email: "",
        passsword: "",
      },
    };
  },
  methods: {
    handleRegister() {
      let URL = "https://contacts--keeper.herokuapp.com/api/users";
      let _data = this.register;
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(_data),
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("json->", JSON.stringify(json));
          window.localStorage.setItem("token", json.token);
        })
        .catch((err) => console.log("err->", err));
    },
    handleLogin() {
      let URL = "https://contacts--keeper.herokuapp.com/api/auth";
      let _data = this.login;
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(_data),
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("json->", JSON.stringify(json));
          window.localStorage.removeItem("token");
          window.localStorage.setItem("token", json.token);
        })
        .catch((err) => console.log("err->", err));
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  font-size: 1.6rem;
  color: #222;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #092525;
}
.container {
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);
  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }
  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, #22415e, #01947b);
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 80px 60px;
    width: calc(50% - 20px);
    height: calc(100% - 100px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }
  .overlay-left {
    @include overlays(-40%);
  }
  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}
.register-container {
  margin-left: 60px;
}
.social-icons {
  position: absolute;
  bottom: 0px;
}
h2 {
  margin: 0;
}
p {
  margin: 20px 0 30px;
}
a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}
button {
  border-radius: 20px;
  border: 1px solid #01947b;
  background-color: #01947b;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;
  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
}
button.invert {
  background-color: transparent;
  border-color: #fff;
}
form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 50px 30px;
  width: calc(50% - 60px);
  height: calc(100% - 10px);
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;
  div {
    font-size: 1rem;
  }
  input {
    background-color: rgb(172, 172, 172);
    border: none;
    padding: 4px 10px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid rgb(146, 146, 146);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;
    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}
.sign-in {
  left: 0;
  z-index: 2;
}
.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}
.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }
  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }
  .overlay-container {
    transform: translateX(-100%);
  }
  .overlay {
    transform: translateX(50%);
  }
  .overlay-left {
    transform: translateX(0);
  }
  .overlay-right {
    transform: translateX(20%);
  }
}
@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
</style>
