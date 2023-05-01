<template>
    <div class="container">
        <div class="columns">
            <div class="column section has-background-black">
                <p class="is-size-2 has-text-white">Beef SMS API</p>
                <div class="section ">
                    <p class="has-text-white subtitle is-align-content-start">
                        {{description}}
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="columns section has-background-white">
                    <p class="is-size-2">How it works</p>
                </div>
                <div class="columns">
                    <div class="section">
                        <p class="subtitle is-pulled-left">{{howItWorks}}</p>
                    </div>
                </div>
                <div class="columns section has-background-primary">
                    <p class="is-size-2">Try it out!</p>

                </div>
                <div class="columns has-background-primary">
                    <div class="section is-fullwidth">

                            <div class="field is-size-2">
                                <p class="control has-icons-left">
                                    <input class="input mobile-input" placeholder="Mobile Number e.g. +639171234567" id="mobile" name="mobile" v-model="mobile"/>
                                    <span class="icon is-small is-left">
                                <i class="fas fa-user"></i><font-awesome-icon :icon="['fas', 'phone']" />
                                </span>
                                </p>
                            </div>
                            <div class="field is-size-2">
                                <p class="control has-icons-left">
                                    <textarea class="input mobile-input mobile-message" Placeholder="Message" id="msg" name="msg" v-model="msg"/>
                                    <span class="icon is-small is-left is-fixed-top">
                                <i class="fas fa-user"></i><font-awesome-icon :icon="['fas', 'comment']" />
                                </span>
                                </p>
                            </div>
                            <div class="field is-size-2">
                                <p class="control">
                                    <button class="button is-info" @click="sendSMS">Send</button>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BeefSms",
    data() {
        return {
            description: "This page demonstrates the use of the BeefSMS API. The BeefSMS API is a RESTful API that allows you to send SMS messages to any mobile phone in the world.",
            pricing: "For pricing information, please contact us at <a href='mailto:sales@hueburg.com'>Sales</a>.",
            howItWorks: "Type in the mobile number you want to send a message to, and then type in the message. Click the Send button to send the message. You will receive a confirmation message that the message was sent.",
            mobile: "",
            msg: ""
        }
    },
    methods: {
        sendSMS(){
            alert("Sending SMS to " + this.mobile + " with message " + this.msg);
        }
    }

}
</script>

<style scoped>
.mobile-input {
    width: 554px;
}
.mobile-message {
    height: 200px;
}

</style>