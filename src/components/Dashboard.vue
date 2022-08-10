<template class="sidebar-sensitive">
  <div class="columns sidebar-sensitive">
    <div class="column">
      <div class="panel">
        <header class="panel-heading has-background-danger">
          <p><strong>Network Usage</strong></p>
        </header>
        <section class="content">
          <NetworkTraffic/>
        </section>
      </div>
    </div>
    <div class="column">
      <div class="panel">
        <header class="panel-heading has-background-info">
          <p><strong>Monthly Sales</strong></p>
        </header>
        <section class="content">
          <SalesPie/>
        </section>
      </div>
    </div>
    <div class="column">
      <div class="panel">
        <div class="panel-heading has-background-warning">
          <strong>Disk Usage</strong>
        </div>
        <section class="content">
          <DiskUsage/>
        </section>
      </div>
    </div>

  </div>
  <metainfo>
    <template v-slot:description="{content}">
      {{content}}
    </template>
  </metainfo>
  <div class="columns sidebar-sensitive">
    <div class="column">
      <div class="message">
        <header class="message-header">
           Messages
        </header>
        <section class="message-body">
          <div class="media">
              <div class="media-left">
                <figure class="image is-48x48 has-background-grey-light pt-3">
                  <i class="far fa-user"></i><font-awesome-icon :icon="['far', 'user']" />
                </figure>
              </div>
              <div class="media-content align-left">
                 <p class="title is-4">Satoshi Nakamoto</p>
                 <p class="subtitle is-6">@satoshi</p>
              </div>
          </div>
          <div class="content align-left">
            <br>
            <p>Bitcoin is forever , don't sell.</p>
            <br>
            <time >{{ timestamp }}</time>
          </div>
        </section>
      </div>
    </div>
    <div class="column">
      <div class="message is-success">
        <header class="message-header has-background-info">
            News
        </header>
        <section class="message-body">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48 has-background-grey-light pt-3">
                <i class="fas fa-newspaper"></i><font-awesome-icon :icon="['fas', 'newspaper']" />
              </figure>
            </div>
            <div class="media-content align-left">
              <p class="title is-4">Ukraine Surrenders</p>
              <p class="subtitle is-6">It's about time</p>
            </div>
          </div>
          <br>
          <div class="content">
            <time> {{ timestamp }}</time>
          </div>

        </section>
      </div>
    </div>
  </div>
</template>

<script>
import NetworkTraffic from "@/components/NetworkTraffic";
import SalesPie from "@/components/SalesPie";
import DiskUsage from "@/components/DiskUsage";
import {onMounted} from "vue";
import NavBarHeaderVue from "@/components/NavBarHeader";
import { useMeta} from "vue-meta";


export default {
  name: "Dashboard",
  data () {
    return {
      message: 'Dashboard page',
      timestamp: new Date(),
      content: 'The Dashboard component represents how a typical dashboard can look like'
    }
  },
  setup () {
    const dashboard_preview = require('../assets/dashboard.png');
    const desc = 'The Dashboard component represents how a typical dashboard can look like'
    onMounted(() => {
      let sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
      for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
        sidebarSensitiveDivs[i].addEventListener('click', function(event) {
          NavBarHeaderVue.methods.closeNav(event);
        });
      }
    })
    useMeta({
      meta: [
        {
          name: 'twitter:title',
          content: 'Dashboard Component Page'
        },
        {
          name: 'twitter:description',
          content: `${desc}`
        },
        {
          name: 'twitter:image',
          content: `${dashboard_preview}`
        },
        {
          name: 'description',
          content: `${desc}`
        },
        {
          property: 'og:description',
          content: `${desc}`
        },
        {
          property: 'og:image',
          content: `${dashboard_preview}`
        },
        {
          property: 'og:title',
          content: 'Dashboard Component Page'
        }
      ],
    })
  },
  components: {
    NetworkTraffic,
    SalesPie,
    DiskUsage
  },

}
</script>

<style scoped>
.align-left {
  text-align: left;
}
</style>