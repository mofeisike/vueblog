<template>
    <div class="singleblog">
        <h1>{{blog.title}}</h1>
        <!--<article>{{blog.body}}</article>-->
        <article>{{blog.content}}</article>
        <p>作者: {{blog.author}}</p>
        <p>分类</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <router-link :to=" '/' " tag="button">返回首页</router-link>
        <router-link :to=" '/edit/'+id" tag="button">编辑</router-link>
        <button @click="deleteBlog()">删除</button>
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
        methods: {
            deleteBlog(){
                const query = Bmob.Query('test');
                query.destroy(this.id).then(res => {
                    this.$router.push({path:'/'})
                }).catch(err => {
                    console.log(err)
                })
            },

        }
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
    /*按钮*/
    button{
        display: inline-block;
        margin: 20px;
        background: crimson;
        color: #ffffff;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }
</style>