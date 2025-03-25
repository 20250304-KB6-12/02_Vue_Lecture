<template>
  <li>
    <input type="checkbox" :checked="idol.checked" />{{ idol.id }}-{{
      idol.name
    }}
  </li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  // data() {
  //   return {
  //     checked: false,
  //   };
  // },

  props: ['idol'],
};
</script>
