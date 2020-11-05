<template>
  <div class="contacts">
    <Header></Header>
    <div class="contacts-menu">
      <div class="ui grid">
        <!-- side menu -->
        <div class="four wide column">
          <div class="ui vertical fluid tabular menu">
            <a class="active item">
              <router-link to="/contacts">List of contacts</router-link>
            </a>
            <a class="item">
              <router-link to="/contacts/types">types</router-link>
            </a>
            <a class="item">
              <router-link to="#">Share contact</router-link>
            </a>
            <a class="item">
              <router-link to="#">Notes</router-link>
            </a>
          </div>
        </div>
        <!-- cards -->
        <div class="twelve wide stretched column">
          <div class="ui segment contact-card">
            <div class="ui cards">
              <div class="card" v-for="(person, id) in contacts" :key="id">
                <div class="content">
                  <img
                    class="right floated mini ui image"
                    src="/images/imageONE.jpg"
                  />
                  <div class="header">
                    {{ person.name }}
                  </div>
                  <div class="meta">
                    {{ person.type }}
                  </div>
                  <div class="description">Number: {{ person.phone }}</div>
                  <div class="description">Email: {{ person.email }}</div>
                </div>
                <div class="extra content">
                  <div class="ui two buttons">
                    <div
                      class="ui basic red button"
                      @click="deleteContact(contact._id)"
                    >
                      <i class="trash icon"></i>Delete
                    </div>
                    <sui-button
                      class="ui basic blue button"
                      v-on:click="update_Contact = contact._id"
                      @click.native="toggleOpen(person)"
                    >
                      <sui-icon name="edit" /> Update
                    </sui-button>
                    <!-- UPDATE USER MODAL -->
                    <sui-modal
                      v-model="isOpen"
                      v-if="update_Contact == contact._id"
                    >
                      <sui-modal-header
                        ><i class="add user icon"></i>Update
                        contact</sui-modal-header
                      >
                      <sui-modal-content image>
                        <sui-image
                          wrapped
                          size="medium"
                          src="static/images/avatar/large/rachel.png"
                        />
                        <sui-modal-description>
                          <sui-form
                            v-on:submit.prevent="
                              updateContact(person._id)
                            "
                          >
                            <sui-form-field class="required">
                              <label>Fullname: {{ contact.name }}</label>
                              <input type="text" v-model="contact.name" />
                            </sui-form-field>
                            <sui-form-field class="required">
                              <label>Number: {{ contact.phone }}</label>
                              <input v-model="contact.phone" />
                            </sui-form-field>
                            <sui-form-field class="required">
                              <label>Email: {{ contact.email }}</label>
                              <input type="email" v-model="contact.email" />
                            </sui-form-field>
                            <sui-form-field>
                              <label>Type: {{ contact.type }}</label>
                              <input v-model="contact.type" />
                            </sui-form-field>
                            <sui-button positive type="submit"
                              >Update contact</sui-button
                            >
                          </sui-form>
                        </sui-modal-description>
                      </sui-modal-content>
                      <sui-modal-actions>
                        <sui-button color="red" @click.native="toggleClose">
                          Cancel
                        </sui-button>
                      </sui-modal-actions>
                    </sui-modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- add user button -->
      <sui-button
        color="teal"
        icon="add user icon"
        id="fixedbutton"
        @click.native="toggle"
      />
      <!-- ADD USER MODAL -->
      <sui-modal v-model="open">
        <sui-modal-header
          ><i class="add user icon"></i>Add new contact</sui-modal-header
        >
        <sui-modal-content image>
          <sui-image
            wrapped
            size="medium"
            src="static/images/avatar/large/rachel.png"
          />
          <sui-modal-description>
            <sui-form v-on:submit.prevent="addContact">
              <sui-form-field class="required">
                <label>Fullname</label>
                <input
                  placeholder="Fullname"
                  type="text"
                  v-model="newContact.name"
                />
              </sui-form-field>
              <sui-form-field class="required">
                <label>Number</label>
                <input placeholder="Number" v-model="newContact.phone" />
              </sui-form-field>
              <sui-form-field class="required">
                <label>Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  v-model="newContact.email"
                />
              </sui-form-field>
              <sui-form-field>
                <label>Type(proffesional/personal)</label>
                <input placeholder="Personal" v-model="newContact.type" />
              </sui-form-field>
              <sui-button positive type="submit" @click.native="toggle"
                >Add contact</sui-button
              >
            </sui-form>
          </sui-modal-description>
        </sui-modal-content>
        <sui-modal-actions>
          <sui-button color="red" @click.native="toggle">
            Cancel
          </sui-button>
        </sui-modal-actions>
      </sui-modal>
    </div>
  </div>
</template>

<script>
import Header from "./header";
export default {
  data() {
    return {
      open: false,
      isOpen: false,
      update_Contact: "",
      newContact: {
        name: "",
        phone: "",
        email: "",
        type: "",
      },
      contacts: [],
      contact: {},
    };
  },
  created() {
    this.getContacts();
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    toggleOpen(person) {
      this.contact = person;
      this.isOpen = true;
    },
    toggleClose() {
      this.isOpen = false;
    },
    addContact() {
      let URL = "https://contacts--keeper.herokuapp.com/api/contacts";
      let _data = this.newContact;
      let token = window.localStorage.getItem("token");
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(_data),
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          "x-auth-token": token,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert("Contact created!");
          this.getContacts();
          this.newContact = "";
        })
        .catch((err) => console.log("err->", err));
    },
    deleteContact(_id, id) {
      let URL = "https://contacts--keeper.herokuapp.com/api/contacts/" + _id;
      let token = window.localStorage.getItem("token");
      fetch(URL, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "x-auth-token": token,
        },
      })
        .then(() => {
          this.contacts.splice(id, 1);
          alert("Contact deleted!!");
          this.getContacts();
        })
        .catch((err) => console.log("err->", err));
    },
    getContacts() {
      let URL = "https://contacts--keeper.herokuapp.com/api/contacts";
      let token = window.localStorage.getItem("token");
      fetch(URL, {
        method: "GET",
        mode: "cors",
        headers: {
          "x-auth-token": token,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.contacts = json;
        })
        .catch((err) => console.log("err->", err));
    },
    mounted() {
      this.getContacts();
    },
    updateContact(_id) {
      let URL = `https://contacts--keeper.herokuapp.com/api/contacts/${_id}`;
      console.log("url ", URL);
      let token = window.localStorage.getItem("token");
      let _data = this.contact;
      console.log("data->", _data);
      fetch(URL, {
        method: "PUT",
        body: JSON.stringify(_data),
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          "x-auth-token": token,
        },
      })
        .then(() => {
          this.update_Contact = "";
        })
        .catch((err) => console.log("err->", err));
    },
  },
  components: {
    Header,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fixedbutton {
  position: fixed;
  bottom: 25px;
  right: 20px;
  border-radius: 100px;
}
/* 
.contacts-menu{
  background: linear-gradient(to bottom right, #a3a89b, #8bd4d4);
}
.contacts-menu a, .item{
  color:rgb(0, 0, 0);
} */
</style>
