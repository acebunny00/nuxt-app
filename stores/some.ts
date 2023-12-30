const unsubscribe = someStore.$onAction(
	({
		name, // 액션의 이름.
		store, // 스토어 인스턴스, `someStore`와 같음.
		args, // 액션으로 전달된 인자로 이루어진 배열.
		after, // 액션에서 반환 또는 해결 이후의 훅.
		onError, // 액션에서 실패 또는 거부될 경우의 훅.
	}) => {
		// 이 특정 액션 호출에 대한 공유 변수.
		// 역자설명: 이 액션의 훅에서 참조하게 되는 클로저 변수 개념.
		const startTime = Date.now();

		// 이곳은 `store`의 액션이 실행되기 전에 트리거됨.
		console.log(`"${name}"가 [${args.join(", ")}] 인자를 전달받아 시작됩니다.`);

		// 액션이 성공하고 완전히 실행된 후에 트리거됨.
		// 프라미스 반환을 대기.
		after((result) => {
			console.log(`"${name}"가 ${Date.now() - startTime}ms 후 종료됬습니다.\n결과: ${result}.`);
		});

		// 액션이 실패하거나 프라미스가 거부되면 트리거 됨.
		onError((error) => {
			console.warn(`"${name}"가 ${Date.now() - startTime}ms 후 실패했습니다.\n애러: ${error}.`);
		});
	}
);

// 리스너를 수동으로 제거.
unsubscribe();
