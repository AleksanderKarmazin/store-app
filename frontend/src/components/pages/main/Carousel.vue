<template>
  <!-- <v-row>
    <v-col> -->
      <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        show-arrows-on-hover
        interval="9000"
      >
        <v-carousel-item v-for="(slide, i) in items" :key="i" :src="slide.src">
        </v-carousel-item>
      </v-carousel>
    <!-- </v-col>
  </v-row> -->
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      items: [
        {
          src:
            "https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/98d71c25-b710-11eb-aeb2-c20a07c8fc3c.jpeg",
        },
        {
          src:
            "https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/c7d85667-b983-11eb-8590-e2f408bd4a06.jpeg",
        },
        {
          src:
            "https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/8e6159bf-a3ff-11eb-9a89-aea27fd94bcf.jpeg",
        },
      ],
    };
  },
};
</script>

<style></style>
