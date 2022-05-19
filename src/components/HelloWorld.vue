<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/store/user';
import { Focus as vFocus } from '@/directive';
import { useFocus } from '@/hooks';

defineProps<{ msg: string }>();

const count = ref(0);

const user = useUserStore();

const reference = ref(null);
const { focus } = useFocus(reference);

onMounted(() => {
    focus();
});
</script>

<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <div>
        <div>{{ user.name }}</div>
        <div v-if="false"><input v-focus /></div>
        <div><input ref="reference" /></div>
    </div>
    <div>
        <el-button type="primary">primary</el-button>
        <el-button type="success">success</el-button>
        <el-button type="warning">warning</el-button>
        <el-button type="danger">danger</el-button>
        <el-button type="info">info</el-button>
    </div>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    padding: 2px 4px;
    color: #304455;
    background-color: #eee;
    border-radius: 4px;
}
</style>
