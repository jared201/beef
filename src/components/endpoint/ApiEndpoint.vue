<template>
<div class="container">
    <div class="columns">
        <div class="column section has-background-black">
            <p class="is-size-2 has-text-white">Beef Server API</p>
            <div class="panel is-justify-content-left">
            <p class="has-text-white is-pulled-left">
                {{description}}
            </p>
            </div>
        </div>
        <div class="column">
            <div class="columns section is-primary">
                <p class="is-size-2">First section</p>
            </div>
            <div class="columns section has-background-primary">
                <p class="is-size-2">Second section</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ApiEndpoint",
    data() {
        return {
            clicked: false,
            is_active: "",
            description: "This is the Beef API endpoint page. It will contain all the information about the API endpoints and how to use them.",
        }
    },
}
</script>

<style scoped>

</style>