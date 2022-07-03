<template>
<footer class="footer is-fixed-bottom" >
  <div class="content has-text-centered">
    <div>
      <p>
        <strong>Beef Dashboard Template</strong> by <a href="https://main.hueburg.com">Hueburg Solutions Consultancy, Inc.</a> Copyright {{ year }} 
      </p>
    </div>
  </div>
</footer>

</template>
<script>

export default {
    name: 'NavBarFooter',
    data () {
      return {
        year: this.getYear(),
      }
    },
    methods: {
      getYear() {
        const date = new Date();
        const year = date.getFullYear();
        return year;
      }
    }
}
</script>

<style scoped>

</style>