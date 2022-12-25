<template>
<!-- -->
  <section class="hero">
    <div class="hero-body sidebar-sensitive">
        <div class="container">
        <h1 class="title">
            Bitcoin Price
        </h1>
        <h2 class="subtitle">
          {{ bitcoin_price }}
        </h2>
        </div>
    </div>
  </section>
  <Palette/>
</template>

<script>
const url = '/get_bitcoin_price';
export default {
  name: "Pricing",
  data() {
    return {
      bitcoin_price: 0,
    };
  },
  methods: {
    getBitcoinPrice() {
      fetch(url)
        .then((response) => response.text())
        .then((text) => {
          this.bitcoin_price = text;
        });
    },
  },
  created() {
    this.getBitcoinPrice();
  },
  watch: {
    bitcoin_price: {
      handler() {
        console.log("bitcoin_price changed");
        setInterval(this.getBitcoinPrice, 2000);
      },
    },
    immediate: true,
  },

}
</script>

<style scoped>

</style>
