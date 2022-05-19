<template>
  <div id="div1" @click="increment">{{ state.count }}</div>
  <button @click="incrementToGetDomUpdated">test</button>
  <button @click="mutateDeeply">testDepply</button>
  <li v-for="item in obj.arr" :key="item.id">
    {{ item }}
  </li>
</template>

<script setup lang="ts">
import { nextTick, reactive } from "vue";
import { ref } from "vue";

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}

/*
When you mutate reactive state, the DOM is updated automatically.
However, it should be noted that the DOM updates are not applied synchronously.
Instead, Vue buffers them until the "next tick" in the update cycle to ensure that each component needs to
update only once no matter how many state changes you have made.
 */
function incrementToGetDomUpdated() {
  state.count++;
  console.log(document?.getElementById("div1")!.textContent);
  nextTick(() => {
    console.log(document?.getElementById("div1")!.textContent);
  });
}

/*
In Vue, state is deeply reactive by default.
This means you can expect changes to be detected even when you mutate nested objects or arrays:
 */

const obj = reactive({
  nested: { count: 0 },
  arr: ["foo", "bar"],
});

function mutateDeeply() {
  // these will work as expected.
  obj.nested.count++;
  obj.arr.push("baz");
}

/*
It is important to note that the returned value from reactive() is a Proxy of the original object,
which is not equal to the original object:
 */

const raw = {};
const proxy = reactive(raw);

// proxy is NOT equal to the original.
console.log("Proxy and Origin: " + (proxy === raw)); // false∏

/*
Only the proxy is reactive - mutating the original object will not trigger updates.
Therefore, the best practice when working with Vue's reactivity system is to
exclusively use the proxied versions of your state.

To ensure consistent access to the proxy, calling reactive() on the same object
always returns the same proxy, and calling reactive() on an existing proxy also
returns that same proxy:
 */
// calling reactive() on the same object returns the same proxy
console.log(reactive(raw) === proxy); // true
// calling reactive() on a proxy returns itself
console.log(reactive(proxy) === proxy); // true

/*
This rule applies to nested objects as well.
Due to deep reactivity, nested objects inside a reactive object are also proxies:
 */
const proxy1 = reactive({});
const raw1 = {};
proxy1.nested = raw1;
console.log(proxy1.nested === raw1); // false

const state2 = reactive({ count2: 0 });

state2.count2++;
console.log(state2.count2);

// n is a local variable that is disconnected
// from state.count.
let n = state2.count2;
// does not affect original state
n++;
console.log(state2.count2);

// count is also disconnected from state.count.
let count2 = state2.count2;
// does not affect original state
count2++;
  console.log(state2.count2);

// the function receives a plain number and
// won't be able to track changes to state.count
testReactive(state2.count2);
console.log(state2.count2);
function testReactive(x: number) {
  x++;
}

const state3 = reactive({ nested3: { count3: 0 } });

let ncopy = state3.nested3;
ncopy.count3++;
console.log(state3.nested3.count3);

const countRef = ref(0);
console.log(countRef.value); // 0

countRef.value++;
console.log(countRef.value); // 1

</script>
