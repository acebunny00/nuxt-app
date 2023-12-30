<script setup>
	// https://nuxt.com/docs/guide/concepts/auto-imports
	// import { useCounterStore } from "@/stores/counter";
	// import { storeToRefs } from "pinia";

	// 컴포넌트 어디에서나 `store` 변수에 액세스 ✨
	const counter = useCounterOptionStore();

	// ❌ 반응성을 깨뜨리기 때문에 작동하지 않습니다.
	// `props`에서 디스트럭처링하는 것과 동일합니다.
	// const { name, doubleCount } = counter;

	// ✅ 이것은 반응적일 것입니다
	// 💡 또한 `store.doubleCount`로 직접 사용할 수도 있습니다.
	const doubleValue = computed(() => counter.doubleCount);

	// `name`과 `doubleCount`는 반응형 refs임.
	// 이것은 플러그인에 의해 추가된 속성에 대한 'refs'도 추출함.
	// 그러나 모든 액션 또는 비반응형(ref/반응형이 아닌) 속성을 건너뜀.
	const { name, doubleCount } = storeToRefs(counter);
	// increment 액션은 그냥 구조화 가능.
	const { increment } = counter;

	counter.count++;
	// 자동 완성 기능 ✨
	counter.$patch({ count: counter.count + 1 });
	// 또는 actions 사용
	increment();

	setTimeout(() => {
		increment();
	}, 1000);

	setTimeout(() => {
		counter.$reset();
	}, 2000);

	const userList = useUserListStore();
	const { getUserById } = storeToRefs(userList);
	// <script setup> 내에서 함수에 액세스하려면
	// `getUserById.value`를 사용해야 합니다.

	// 스토어의 액션을 메서드처럼 호출
	counter.randomizeCounter();

	// const someStore = useSomeStore();

	// // 이 구독은 컴포넌트가 마운트 해제된 후에도 유지됨.
	// someStore.$onAction(callback, true);
</script>

<template>
	<!-- 스토어에서 직접 상태에 액세스 -->
	<h2>Option API</h2>
	<div>counter.name: {{ counter.name }}</div>
	<div>counter.count: {{ counter.count }}</div>
	<div>counter.doubleCount: {{ counter.doubleCount }}</div>
	<div>doubleValue: {{ doubleValue }}</div>
	<p>Double count is {{ counter.doublePlusOne }}</p>
	<p>User2: {{ getUserById(2) }}</p>
	<!-- 템플릿에서 -->
	<button @click="counter.randomizeCounter()">랜덤</button>
	<hr />
</template>
