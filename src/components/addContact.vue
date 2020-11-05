<template>
  <div class="addContact">
    <Header></Header>
    <sui-form>
        <sui-form-field class="required">
        <label>Fullname</label>
        <input placeholder="Fullname" />
        </sui-form-field>
        <sui-form-field>
        <label>Number</label>
        <input placeholder="Number" />
        </sui-form-field>
        <sui-form-field>
        <label>Email</label>
        <input placeholder="Email" />
        </sui-form-field>
        <sui-form-field>
        <label>Group</label>
        <input placeholder="Group" />
        </sui-form-field>
        <sui-button type="submit">Add contact</sui-button>
  </sui-form>
  </div>
</template>

<script>
import Header from './header'
export default {
  data() {
    return { open: false };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
