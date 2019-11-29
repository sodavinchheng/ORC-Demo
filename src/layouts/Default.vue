<template>
    <v-app>
        <NavBar />
        
        <main class="main">
            <slot />
        </main>
    </v-app>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
    components: {
        NavBar
    }
}
</script>