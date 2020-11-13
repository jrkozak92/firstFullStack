<template>
  <div class="component">
    <div class="search">
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
        :key="index"
        @click="setActiveProject(project, index)">
        <p class="proj-title">
          {{ project.title }}
        </p>
        <p class="proj-desc">
          {{ project.description }}
        </p>
        <p class="proj-link">
          {{ project.link }}
        </p>
        <input v-model="pass" v-on:keyup="checkPass" placeholder="Enter the secret password...">
        <div>{{ pass }}</div>
        <p v-show="showButtons" v-if="pass == 'duh'"> {{ showMessage }}
          <button @click="saveToDB(project, index)">
            Save Changes
          </button>
          <button @click="deleteFromDB(project, index)">
            Delete this Project
          </button>
        </p>
        <p v-show="!showbuttons && pass === 'secrect password'"> {{ showMessage }} </p>
        <p v-show="!showButtons"> {{ showMessage }} </p>
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
      publicPath: process.env.BASE_URL,
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
    checkPass() {
      if (this.pass == 'duh') {
        this.showButtons = true;
        this.showMessage = "You got it, Boss!"
      } else if (this.pass == 'secret password') {
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

  }

  .proj-title{

  }

  .proj-desc{

  }
</style>