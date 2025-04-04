<template>
  <div>store : {{ store }}</div>
  <div>count : {{ store.count }}</div>
  <div>count2 : {{ count2 }}</div>
  <div>store : {{ store }}</div>
  <button @click="increment">증가</button>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter.js';
import { computed } from 'vue';

const store = useCounterStore();
console.log(store);

// store에서 제공하는 increment 함수 분해 할당
const { count, increment } = store;
console.log(count);

/* 
  store.doubleCount는 store객체 내에서 computed처리 되어있어 반응성 유지.
  
  count2는 store.doubleCount의 결과만을 저장하기 때문에 반응성을 잃음!!
  -> 사용되는 컴포넌트에서 computed 처리를 추가 진행해야 반응성이 유지된다!
*/
// let count2 = store.doubleCount;
const count2 = computed(() => store.doubleCount);

// const count = computed(() => store.count);
</script>
