<template>
    <div>{{msg}}</div>
    <div class="tile">
   <!-- The magical tile element! -->
   <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
         <div class="tile">
            <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
             <div class="card">
               <div class="card-image">
                  <figure class="image is-4by3">
                     <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                  </figure>
               </div>
               <div class="card-content">
                  <div class="media">
                     <div class="media-left">
                     <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                     </figure>
                     </div>
                     <div class="media-content">
                     <p class="title is-4">{{author}}</p>
                     <p class="subtitle is-6">@jaredpogi</p>
                     </div>
                  </div>

                  <div class="content">
                    {{card_content}}  <a>@jaredpogi</a>.
                     <a href="#">#css</a> <a href="#">#responsive</a>
                     <br>
                     <time datetime="2016-1-1">{{timestamp}}</time>
                  </div>
      </div>
   </div>
            </article>
            <article class="tile is-child notification is-warning">
               <div class="card">
               <header class="card-header">
                  <p class="card-header-title">
                     Component
                  </p>
                  <button class="card-header-icon" aria-label="more options">
                     <span class="icon">
                     <i class="fas fa-angle-down" aria-hidden="true"></i>
                     </span>
                  </button>
               </header>
               <div class="card-content">
                  <div class="content">
                     This card is for interacting with users on their day-to-day activities
                     <a href="#">@jaredpogi</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                     <br>
                     <time datetime="2016-1-1">{{timestamp}}</time>
                  </div>
               </div>
               <footer class="card-footer">
                  <a href="#" class="card-footer-item">Save</a>
                  <a href="#" class="card-footer-item">Edit</a>
                  <a href="#" class="card-footer-item">Delete</a>
               </footer>
               </div>
            </article>
            </div>
            <div class="tile is-parent">
            <article class="tile is-child notification is-info">
               <p class="title">Middle tile</p>
               <p class="subtitle">With an image</p>
               <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png">
               </figure>
            </article>
            </div>
         </div>
         <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
               <!-- Content -->
            </div>
            </article>
         </div>
      </div>
      <div class="tile is-parent">
         <article class="tile is-child notification is-success">
            <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
               <!-- Content -->
            </div>
            </div>
         </article>
      </div>
   </div>
      </div>
</template>
<script>


export default ({
   data () {
      return {
        msg: "Cards Showcase here",
        card_content: "This is card with placeholder image and a media sub-content " +
                     "great for building journalistic content for bloggers and journalists.",
        author: "Jared Odulio",             
        timestamp: this.getNow(),          
      }
   },
   name: "Cards",
   methods: {
      getNow() {
         const today = new Date();
         const date = today.getFullYear()+ '-' + (today.getMonth()+1)+'-'+today.getDate();
         const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
         const dateTime = date + ' '+ time;
         console.log(dateTime);
         return dateTime;
      },     
   }
})
</script>
<style scoped>

</style>