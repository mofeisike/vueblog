<template>
    <div class="singleblog">
        <h1>{{blog.title}}</h1>
        <!--<article>{{blog.body}}</article>-->
        <article>{{blog.content}}</article>
    </div>
</template>

<script>
    export default {
        name: "SingleBlog",
        data() {
            return {
                id:this.$route.params.id,
                blog:{},
            }
        },
        created() {
            // this.$axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
            //     .then(res => {
            //         console.log('res', res);
            //         this.blog = res.data;
            //     })
            //     .catch(error => {
            //             console.log(error)
            //         }
            //     )

            const query = Bmob.Query('test');
            query.get(this.id).then(res => {
                console.log(res)
                this.blog = res;
            }).catch(err => {
                console.log(err)
            })
        },
        components: {},
        methods: {}
    }
</script>

<style scoped>
    .singleblog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border:  1px dotted #aaa;
    }
</style>