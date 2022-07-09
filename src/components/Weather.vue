<template>
    <div class="content is-primary mt-3">
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
</template>
<script>
import { onMounted } from "@vue/runtime-core";


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


export default ({
     
    setup() {
        onMounted(()=>{
            weather(document, "script", "tomorrow-sdk");
        });
    },
})
</script>
<style>

</style>
