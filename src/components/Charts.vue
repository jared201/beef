<template>
    <div class="is-info panel sidebar-sensitive">
        <div class="panel-heading">
            {{ msg }}
        </div>        
    </div>
    <div class="columns sidebar-sensitive">
        <div class="column">
            <div class="card">
                <header class="card-header has-background-info">
                    <p class="card-header-title">
                        1Q 2022 Covid Infection
                    </p>
                </header>
                <div class="card-content message is-info">
                    <BarChart/>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <header class="card-header has-background-warning">
                    <p class="card-header-title">
                        2Q 2022 Bitcoin Price
                    </p>
                </header>
                <div class="card-content message is-warning">
                    <LinearChart/>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <header class="card-header has-background-success">
                    <p class="card-header-title">
                        Unvaccinated Coverage
                    </p>
                </header>
                <div class="card-content message is-success">
                    <PieChart/>
                </div>
            </div>
        </div>
    </div>
    <div class="columns sidebar-sensitive">
        <div class="column ">
            <div class="card">
                <header class="card-header has-background-primary">
                    <p class="card-header-title">
                        Weather Widget
                    </p>
                    <div class="select is-normal mr-3 mt-3 mb-3">
                            <select id="city" @change="changeLocation">
                                <option selected>Select City</option>
                                <option value="143920">Muntinlupa City</option>
                                <option value="081268">Angeles City</option>
                                
                            </select>
                            <!-- <span class="icon is-normal is-left">
                                 <i class="fas fa-globe"></i><font-awesome-icon :icon="['fas', 'globe-americas']"></font-awesome-icon>
                             </span> -->
                        </div>
                </header>
                <div class="card-content message is-primary">
                    <div id="tomorrow" class="tomorrow" :data-location-id="location" data-language="EN" data-unit-system="METRIC" data-skin="light"
                            data-widget-type="aqiPollen" style="padding-bottom:22px;position:relative;">
                        <a href="https://www.tomorrow.io/weather/"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                            style="position: absolute; bottom: 0; transform: translateX(-50%); left: 50%;">
                        <!-- <img
                        alt="Powered by Tomorrow.io"
                        src="https://weather-website-client.tomorrow.io/img/powered-by-tomorrow.svg"
                        width="140"
                        height="15"
                        /> -->
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="columns sidebar-sensitive">
        <div class="column">
            <div class="card">
                <header class="card-header has-background-danger">
                    <p class="card-header-title">
                        A Bubble Graph
                    </p>
                </header>
                <div class="card-content message is-danger">
                   <BubbleChartVue/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue'
import NavBarHeaderVue from './NavBarHeader.vue'
import BarChart from './BarChart.vue'
import LinearChart from './LinearChart.vue'
import PieChart from './PieChart.vue'
import BubbleChartVue from './BubbleChart.vue'

function weather (d, s, id) 
    {
            if (d.getElementById(id)) {
                console.log("id: " + id);
                if (window.__TOMORROW__) {
                    console.log("render: " + window.__TOMORROW__);
                    window.__TOMORROW__.renderWidget();
                }
                return;
            }
            const fjs = d.getElementsByTagName(s)[0];
            const js = d.createElement(s);
            
            
            js.id = id;
            js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

            fjs.parentNode.insertBefore(js, fjs);
    }

export default {
    name: "Charts",
    setup() {
        onMounted(() => {
            var sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
            for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
                sidebarSensitiveDivs[i].addEventListener("click", function (event) {
                    NavBarHeaderVue.methods.closeNav(event);
                });
            }
            //console.log(this.$route.params.location);
            weather(document, "script", "tomorrow-sdk");
        });
    },
    data() {
        return {
            msg: "Charts and Graphs Examples here",
            location: this.$route.params.location,
            key: 0,
            
        };
    },
    methods: {
        changeLocation(event) {
            const dom = document.getElementById("tomorrow");
            console.log("location: " + this.location);
            this.location = event.target.value;
            console.log(this.location);
            dom.dataset.locationId = this.location;
            console.log("re-render widget");
            const iframe = document.getElementsByTagName("iframe")[0];
            iframe.dataset.locationId = this.location;
            //console.log(iframe)
            const path = "/charts/" + this.location;
            this.$router.push(path);
            weather(document, "script", "tomorrow-sdk");
            //this.$router.go();
            console.log(this.$route.fullPath);
        },
        forceUpdate(name) {
            console.log(name);
            this.key++;
        },
    },
    components: { 
        BarChart,
        LinearChart, 
        PieChart,
        BubbleChartVue,
    },
}

       
</script>
<style>
</style>