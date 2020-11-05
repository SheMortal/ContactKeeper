<template>
  <div class="contacts">
      <Header></Header>
      <div class="contacts-menu">
    <div class="ui grid">
  <div class="four wide column">
    <div class="ui vertical fluid tabular menu">
      <a class="item">
        <router-link to="/contacts">List of contacts</router-link>
      </a>
      <a class="active item">
        <router-link to="/contacts/groups">Groups</router-link>
      </a>
      <a class="item">
        Share contact
      </a>
      <a class="item">
        Notes
      </a>
    </div>
  </div>
  <div class="twelve wide stretched column">
    <div class="ui segment contact-card">
      <div class="ui cards">
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/Rowena.jpg">
      <div class="header">
        Rowena Ligman
      </div>
      <div class="meta">
        Group family
      </div>
      <div class="description">
        Number:
      </div>
      <div class="description">
        Email: 
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Update</div>
        <div class="ui basic red button"><i class="trash icon"></i></div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/Rowena.jpg">
      <div class="header">
        Rowena Ligman
      </div>
      <div class="meta">
        Group family
      </div>
      <div class="description">
        Number:
      </div>
      <div class="description">
        Email: 
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Update</div>
        <div class="ui basic red button"><i class="trash icon"></i></div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/Rowena.jpg">
      <div class="header">
        Rowena Ligman
      </div>
     <div class="meta">
        LifeChoices
      </div>
      <div class="description">
        Number:
      </div>
      <div class="description">
        Email: 
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Update</div>
        <div class="ui basic red button"><i class="trash icon"></i></div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/Rowena.jpg">
      <div class="header">
        Rowena Ligman
      </div>
      <div class="meta">
        LCStudio
      </div>
      <div class="description">
        Number:
      </div>
      <div class="description">
        Email: 
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Update</div>
        <div class="ui basic red button"><i class="trash icon"></i></div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
<router-link to="/contacts/add"><sui-button color="teal" icon="add user icon" id="fixedbutton" /></router-link>
  </div>
  </div>
</template>

<script>
import Header from './header';
export default {
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fixedbutton {
    position: fixed;
    bottom: 25px;
    right: 20px;
    border-radius: 100px;
}
.contacts-menu{
  background: linear-gradient(to bottom right, #a3a89b, #8bd4d4);
}
.contacts-menu a, .item{
  color:rgb(0, 0, 0);
}
</style>
