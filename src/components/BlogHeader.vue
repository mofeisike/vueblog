
<!---->
<template>
    <div class="BlogHeader">
        <nav>
            <ul>
                <li><router-link :to="{name:'homeLink'}" exact>首页</router-link></li>
                <li><router-link :to="{name:'addLink'}" exact>添加</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "BlogHeader",
        data() {
            return {}
        },
        components: {},
        methods: {}
    }
</script>

<style scoped>
    ul{
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    li{
        display: inline-block;
        font-size: 30px;
        margin: 0 10px;
    }
    a{
        color: white;
        text-decoration: none;
        border-radius: 5px;
        padding: 12px;
    }
    nav{
        background: crimson;
        padding: 30px 0;
    }
    .router-link-active{
        background: rgba(255,255,255,0.8);
        color: #444;
    }

</style>