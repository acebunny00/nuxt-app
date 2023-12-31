const { data, pending, error, refresh } = await useFetch("/api/modules", {
	pick: ["title"],
});

import { useFetch } from "@vueuse/core";

const url = ref("https://my-api.com/user/1");
const { isFetching, error, data, abort, canAbort, execute, onFetchResponse, onFetchError } = useFetch(url);
const { isFetching, error, data } = await useFetch(url);
const { data } = useFetch(url, { refetch: true });
const { data } = useFetch(url, { timeout: 100 });
const { execute } = useFetch(url, { immediate: false });
const { data } = useFetch(url, {
	async beforeFetch({ url, options, cancel }) {
		const myToken = await getMyToken();

		if (!myToken) cancel();

		options.headers = {
			...options.headers,
			Authorization: `Bearer ${myToken}`,
		};

		return {
			options,
		};
	},
});
const { data } = useFetch(url, {
	afterFetch(ctx) {
		if (ctx.data.title === "HxH") ctx.data.title = "Hunter x Hunter"; // Modifies the response data

		return ctx;
	},
});
const { data } = useFetch(url, {
	updateDataOnError: true,
	onFetchError(ctx) {
		// ctx.data can be null when 5xx response
		if (ctx.data === null) ctx.data = { title: "Hunter x Hunter" }; // Modifies the response data

		ctx.error = new Error("Custom Error"); // Modifies the error
		return ctx;
	},
});
const { data } = useFetch(url).get().json();
const { data } = useFetch(url).post().text();
const { data } = useFetch(url, { method: "GET" }, { refetch: true }).blob();
const useMyFetch = createFetch({
	baseUrl: "https://my-api.com",
	options: {
		async beforeFetch({ options }) {
			const myToken = await getMyToken();
			options.headers.Authorization = `Bearer ${myToken}`;

			return { options };
		},
	},
	fetchOptions: {
		mode: "cors",
	},
});
const { isFetching, error, data } = useMyFetch("users");
const useMyFetch = createFetch({
	baseUrl: "https://my-api.com",
	combination: "overwrite",
	options: {
		// beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
		async beforeFetch({ options }) {
			const myToken = await getMyToken();
			options.headers.Authorization = `Bearer ${myToken}`;

			return { options };
		},
	},
});
const { isFetching, error, data } = useMyFetch("users");
const { isFetching, error, data } = useMyFetch("users", {
	async beforeFetch({ url, options, cancel }) {
		const myToken = await getMyToken();

		if (!myToken) cancel();

		options.headers = {
			...options.headers,
			Authorization: `Bearer ${myToken}`,
		};

		return {
			options,
		};
	},
});
const { onFetchResponse, onFetchError } = useFetch(url);

url.value = "https://my-api.com/user/2"; // Will trigger another request

setTimeout(() => {
	if (canAbort.value) abort();
}, 100);

onFetchResponse((response) => {
	console.log(response.status);
});

onFetchError((error) => {
	console.error(error.message);
});
