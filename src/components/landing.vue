<template>
  <div>
    <div class='landing'>
      <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
      <h1 is="sui-header" icon text-align="center">
      <sui-icon name="users" class="icon" circular />
      <sui-header-content>Welcome to Contacts Keeper</sui-header-content>
    </h1>
    <router-link to='/login'><button>Get started</button></router-link>
    </div>
     
  </div>
</template>

<script>
export default {
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  height: 100%;
}
.landing{
  display: grid;
  align-items: center;
  justify-content: center;
  height:100vw;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #8bd4d4, #4a335e);
}
.landing h1{
  color: #1f3535;
  text-transform: uppercase;
}
.icon{
  color: #4a335e;
}
button{
   border-radius: 20px;
    border: 1px solid #01947b;
    background-color: #01947b;
    color: #fff;
    font-size: 1.5vw;
    font-weight: bold;
    margin-left: 6.5em;
    padding: 11px 80px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .1s ease-in;
    
}
.loader {
  height: 1px;
  transform-origin: 150px 290px;
  animation: rotate 6s linear infinite;
}

.circle {
  display: inline-block;
  background-color: #8bd4d4;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  transform: scale(0);
  animation: grow 1.5s linear infinite;
  margin: -10px;
}

.circle:nth-child(2) {
  background-color: #4d225e;
  animation-delay: 0.75s;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes grow {
  50% {
    transform: scale(1);
  }
}


</style>
