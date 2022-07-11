<template>
    <div class="accordion">
        <div
            class="accordion-btn"
            @click="toggleAccordion()"
            :aria-expanded="isOpen"
            :aria-controls="`collapse${_uid}`"
            >
            <span>
                <slot name="title" />
            </span>
            <span class="accordion-icon">
                <img src="../assets/arrow-right.png"/>
            </span>
            </div>
            <div v-show="isOpen" :id="`collapse${_uid}`">
            <slot name="content" />
        </div>
    </div>
   
</template>

<script>

export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
      const doc = this.$el
      const accordionBtn = doc.querySelector(".accordion-btn")
      const accordionIcon = doc.querySelector(".accordion-icon")
      accordionBtn.classList.toggle("active")
      accordionIcon.classList.toggle("rotate-90")
      console.log(accordionBtn)
    },
  },
};
</script>
