<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://">
        <img class="logo-height" :src="globeLogo" >
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Pricing
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-danger">
              <strong>User: Jared</strong>
            </a>
            <a class="button is-dark">
              Role: Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <section class="hero">
    <div class="hero-body">
      <div class="columns">
        <div class="column ">
          <div class="padding-left">
            <img class="medium-size-logo" :src="globeLogo"/>
          </div>
          <h2 class="subtitle has-text-justified">
            A Globe Cloud File Management System
          </h2>
        </div>
        <div class="column">

        </div>
      </div>
    </div>
  </section>
<div class="columns box vertical_spacing">
  <div class="column horizontal_spacer panel">
    <p class="panel-heading text-align-left">
      <span>Favorite folders</span>
    </p>
    <router-link to="/documents" class="panel-block" v-for="folder in folders" :key="folder.name">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
        <font-awesome-icon icon="fa-solid fa-folder-open" />
      </span>
      {{folder.name}}
    </router-link>
  </div>
  <div class="column horizontal_spacer panel">
    <p class="panel-heading text-align-left has-background-warning">
      <span>Recent folders</span>
    </p>
    <div class="box">
      <div class="panel-block" v-for="folder in recentFolders" :key="folder.name">
        <div class="show_items_as_icons label">

        </div>
        <span class="text-align-bottom"><router-link to="/" class="panel-block">{{folder.name}}</router-link></span>
      </div>
    </div>
  </div>
  <div class="column horizontal_spacer panel">
    <p class="panel-heading text-align-left has-background-success">
      <span>Storage Usage</span></p>
    <div class="panel-block label">
      Capacity: 2 TB <progress class="progress is-medium is-primary" value="15" max="100">15%</progress>15%
    </div>
    <div class="panel-block">
      <p class="label">  Plan: 2TB Pro ($10.00/year)</p>
    </div>
    <div class="panel-block">
      <p class="label">Expires: 14 February 2024 </p>
    </div>
    <div class="panel-block">
      <button class="button is-success">Upgrade to Pro Max</button>
    </div>
  </div>
</div>

</template>

<script>
import getOffsetParent from "@popperjs/core/lib/dom-utils/getOffsetParent";

export default {
  name: "RootContainer",
  methods: {getOffsetParent},
  data() {
    return {
      clicked: false,
      globeLogo: require("../../assets/Globetel.jpg"),
      backgroundImage : require("../../assets/folder-1485.png"),
      folders: [
        {
          name: "Documents",
          dateCreated: new Date().toLocaleDateString(),
          dateModified: new Date().toLocaleDateString(),
          size: "1.5 MB",
        },
        {
          name: "Sales Reports",
          dateCreated: new Date().toLocaleDateString(),
          dateModified: new Date().toLocaleDateString(),
          size: "1 MB",
        },
        {
          name: "Financial Statements",
          dateCreated: new Date().toLocaleDateString(),
          dateModified: new Date().toLocaleDateString(),
          size: "2 MB",
        }
      ],
      recentFolders: [
        {
          name: "Pictures",
          dateCreated: new Date().toLocaleDateString(),
          dateModified: new Date().toLocaleDateString(),
          size: "1.5 MB",
        },
        {
          name: "Videos",
          dateModified: new Date().toLocaleDateString(),
          dateCreated: new Date().toLocaleDateString(),
          size: "1 MB",
        },
        {
          name: "Music",
          dateCreated: new Date().toLocaleDateString(),
          dateModified: new Date().toLocaleDateString(),
          size: "2 MB",
        }
      ]
    };
  },
}
</script>

<style scoped>
.horizontal_spacer {
  margin-left: 10px;
  margin-right: 10px;
}
.vertical_spacing {
  margin-top: 10px;
  margin-bottom: 10px;
}
.logo-height {
  height: 200px;
}
.medium-size-logo {
  height: 100px;

}
.padding-left {
  padding-right: 370px;
}
.text-align-left {
  text-align: left;
}
.show_items_as_icons {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-size: 100%;
  background: url('../../assets/folder-1485.png') no-repeat;
  padding: 10px;
  margin: 10px;
}
.text-align-bottom {
  text-align: bottom;
}

</style>