<template>
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>
<script>
export default {
  name: "CheckboxItem",
  props: ["name", "checked"], // 속성명을 배열로 정의
};
</script>
