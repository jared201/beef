<template>
    <div><p>{{ msg }}</p></div>
    <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
        <div class="tile">
        <div class="tile is-parent is-vertical">
            <article class="tile is-child notification ">
                <p class="title">A simple button</p>
                <p class="subtitle">with no color or style</p>
                <button class="button">Button</button>
            </article>
            <article class="tile is-child notification ">
                <p class="title">The button is available in all the different colors</p>
                <button class="button is-white">White</button>
                <button class="button is-light">Light</button>
                <button class="button is-dark">Dark</button>
                <button class="button is-black">Black</button>
                <button class="button is-text">Text</button>
                <button class="button is-ghost">Ghost</button>
                <div class="buttons">
                    <button class="button is-primary">Primary</button>
                    <button class="button is-link">Link</button>
                </div>

                <div class="buttons">
                    <button class="button is-info">Info</button>
                    <button class="button is-success">Success</button>
                    <button class="button is-warning">Warning</button>
                    <button class="button is-danger">Danger</button>
                </div>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child notification ">
                <p class="title">The button can be used on</p>
                <p class="subtitle">anchor links, form buttons, submit inputs, reset inputs</p>
                <a class="button">Anchor</a>
                <button class="button">Button</button>
                <input class="button" type="submit" value="Submit input">
                <input class="button" type="reset" value="Reset input">
            </article>
        </div>
        </div>
        <div class="tile is-parent">
        <article class="tile is-child notification ">
            <p class="title">The button comes in 4 different sizes</p>
            <p class="subtitle">
                small, normal, medium, large
            </p>
            <div class="content">
                <button class="button is-small">Small</button>
                <button class="button">Default</button>
                <button class="button is-normal">Normal</button>
                <button class="button is-medium">Medium</button>
                <button class="button is-large">Large</button>
            </div>
        </article>
        </div>
    </div>
    <div class="tile is-parent">
        <article class="tile is-child notification ">
        <div class="content">
            <p class="title">Try it yourself!</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
            <!-- Content -->
                <button class="button is-large is-success">Contact us</button>
            </div>
        </div>
        </article>
    </div>
    </div>    
</template>
<script>
export default {
    data () {
        return {
            name: "Buttons",
            msg: "Different buttons for different purposes",
        }
    }    
}
</script>
<style>

</style>