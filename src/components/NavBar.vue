<template>
    <nav>
        <v-app-bar app color="primary" dark>
            
            <v-btn text>
                <v-icon v-on:click="drawer = !drawer">mdi-menu</v-icon>
            </v-btn>

            <div class="d-flex align-center">
                <v-img
                alt="Zeal Logo"
                class="shrink mx-4"
                contain
                src="../assets/Zeal-Logo.png"
                transition="scale-transition"
                width="75"
                />

                <h1 class="hidden-sm-and-down">Online Remote Classroom</h1>

            </div>

            <v-spacer></v-spacer>
            
            <v-btn text>
                <v-icon>mdi-plus</v-icon>
            </v-btn>

            <v-btn text>
                <v-icon>mdi-bell</v-icon>
            </v-btn>

            <v-btn text>
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" color="primary" dark width="400px" class="mt-12 d-lg-flex">
            <v-list class="mt-3">
                <v-list-item v-for="subject in subjects" :key="subject.name" route :to="subject.route" replace>
                    <v-list-item-icon>
                        <v-icon>{{subject.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ subject.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            drawer: true,
            subjects:[
                {name: 'Artificial Intelligence', icon: 'mdi-brain', route: '/ai'},
                {name: 'Cryptography & Network Security', icon: 'mdi-security', route: '/cns'},
                {name: 'Data Structures & Algorithms', icon: 'mdi-graph', route: '/dsa'},
                {name: 'Database Management System', icon: 'mdi-database', route: '/dbms'},
                {name: 'Growth Hacking', icon: 'mdi-trending-up', route: '/gh'},
                {name: 'Leadership & Communication', icon: 'mdi-voice', route: '/lc'},
                {name: 'Web App Development', icon: 'mdi-web', route: '/wad'}
            ]
        }
    }
}
</script>