<template>
  <div>
    <!-- <h1>Carc1</h1>
    <Calc /> -->
    <!-- <hr />
    <h1>Carc2</h1>
    <Calc2 /> -->
    <!-- <hr />
    <h1>Carc3</h1>
    <Calc3 /> -->
    <!-- <hr />
    <h1>Carc4</h1>
    <Calc4 /> -->
    <hr />
    <h1>Carc5</h1>
    <Calc5 />
  </div>
</template>
<script>
import Calc from "./components/Calc.vue";
import Calc2 from "./components/Calc2.vue";
import Calc3 from "./components/Calc3.vue";
import Calc4 from "./components/Calc4.vue";
import Calc5 from "./components/Calc5.vue";
export default {
  name: "App",
  components: { Calc, Calc2, Calc3, Calc4, Calc5 },
};
</script>
