<template>
  <div class='header'>
    <div class="ui secondary pointing menu">
  <a class="item">
    <router-link to="/" exact><sui-icon name="users" flipped="horizontally" /></router-link>
  </a>
  <a class="item active">
    <router-link to="/contacts" exact>All Contacts</router-link>
  </a>
  <a class="item">
    <router-link to="/contacts/add" exact><i class="add user icon"></i>Add new contact</router-link>
  </a>
  <div class="right menu">
    <a class="ui item">
      <sui-search>
      <template v-slot:input="{ props, handlers }">
        <sui-input
          v-bind="props"
          v-on="handlers"
          placeholder="Search contacts..."
          icon="search"
        />
      </template>
  </sui-search>
    </a>
    <a class="ui item">
      <router-link to="/login" exact>Logout</router-link>
    </a>
  </div>
  </div>
  </div>
</template>

<script>
export default {
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background: #3a8175;
}
.header a{
  color: #eff;
}
</style>
