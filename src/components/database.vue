<template>
  <div class="component">
    <div class="search">
      <button 
      class="refreshButton"
      type="button"
      @click="refreshList()">
        Refresh Project List
      </button>
      <input 
        type="text"
        class="search-title" 
        placeholder="Search by title"
        v-model="title"/>
      <button
        class="search-button"
        type="button"
        @click="searchTitle">
          Search
      </button>
    </div>
    <p>
      All projects or project ideas that I feel are ready to share are below, listed using Vue's v-for directive, fed by an array pulled from the 'data-manager' database with Express.
    </p>
    <ul>
      <li class="project-card"
        :class="{ active: index == currentIndex }"
        v-for="(project, index) in projects" 
        :key="index">
        <p class="proj-title" @click="setActiveProject(project, index)">
          Title: {{ project.title }}
        </p>
        <p class="proj-desc">
          Description: {{ project.description }}
        </p>
        <p class="proj-link" v-show="project.link">
          Link: {{ project.link }}
        </p>
        <div class="editBox" v-show="showEdit">
          <input v-model="pass" v-on:keyup="checkPass" placeholder="Enter the secret password...">
          <p>Your Guess: {{ pass }}</p>
          <p v-show="showButtons" v-if="pass == 'duh'"> {{ showMessage }}
            <button @click="saveToDB(project, index)">
              Save Changes
            </button>
            <button @click="deleteFromDB(project, index)">
              Delete this Project
            </button>
          </p>
          <p v-show="!showButtons && pass === 'the secrect password'">Response: {{ showMessage }} </p>
          <p v-show="!showButtons && pass === 'secrect password'">Response: {{ showMessage }} </p>
          <p v-show="!showButtons">Response: {{ showMessage }} </p>
        </div>
        <button @click="toggleShowEdit()">{{ editMessage }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: 'database',
  data () {
    return {
      projects: [{ title: "project 1", description: "desc 1", link: ""}, { title: "project 2", description: "desc 2", link: ""}],
      currentProject: null,
      currentIndex: -1,
      title: null,
      editMessage: 'Edit',
      publicPath: process.env.BASE_URL,
      showEdit: false,
      pass: "",
      showMessage: "",
      showButtons: false,
      authorized: false
    }
  },
  methods: {
    retrieveProjects() {
      DataService.getAll()
        .then(response => {
          this.projects = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveProjects();
      this.currentProject = null;
      this.currentIndex = -1;
    },
    setActiveProject(project, index){
      this.currentProject = project;
      this.currentIndex = index;
    },
    searchTitle(title) {
      this.title = title;
    },
    toggleShowEdit() {
      if (this.showEdit == true) {
        this.showEdit = false;
        this.editMessage = 'Edit'
      } else {
        this.showEdit = true;
        this.editMessage = 'Close edit options';
      }
    },
    checkPass() {
      if (this.pass == 'duh') {
        this.showButtons = true;
        this.showMessage = "You got it, Boss!"
      } else if (this.pass == 'secret password' || this.pass == 'the secret password') {
        this.showButtons = false;
        this.showMessage = "Very clever. Try again.";
      } else {
        this.showButtons = false;
        this.showMessage = "That's not it..."
      }
    }
  }
}
</script>

<style>
  .project-card{
    padding:10px;
    margin: 10px 0px;
    background-color:rgba(255,255,255,.7);
    list-style-type:none;
    border: 1px solid black;
  }

  .proj-title{
    font-size:18pt;
  }

  .proj-desc{
    font-size:12pt;
  }

  .search{
    display:block;
    text-align:right;
    margin: 10px 0px;
  }

  .refreshButton{
    float:left;
  }

  .editBox{
    width:50%;
    margin-left:50%;
    border:1px dotted black;
  }
</style>