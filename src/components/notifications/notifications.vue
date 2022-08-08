<script>
import { EventService } from "./event.service";

export default {
  setup() {
    const events = new EventService();
  },
};
</script>

<template>
  <div class="absolute right-10 top-5 border text-white">notifications</div>
</template>
