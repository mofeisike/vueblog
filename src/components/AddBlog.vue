<template>
    <div class="add-blog">
        <h2>添加博客</h2>
        <form action="" v-if="!submmited">
            <label >博客标题</label>
            <input type="text" v-model="blog.title" required>

            <label >博客内容</label>
            <textarea v-model="blog.content"></textarea>

            <div id="checkboxs">
                <label >Vue.js</label>
                <input type="checkbox" value="Vue.js"
                       v-model="blog.categories">
                <label >Node.js</label>
                <input type="checkbox" value="Node.js"
                       v-model="blog.categories">
                <label >React.js</label>
                <input type="checkbox" value="React.js"
                       v-model="blog.categories">
                <label >Angular.js</label>
                <input type="checkbox" value="Angular.js"
                       v-model="blog.categories">
            </div>

            <label >作者</label>
            <select  v-model="blog.author">
                <option v-for="author in authors">
                    {{author}}
                </option>
            </select>

            <button v-on:click.prevent="post">添加博客</button>
        </form>

        <div v-if="submmited">
            <h3>你的博客发布成功</h3>
        </div>

        <hr>

        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题 : {{blog.title}}</p>
            <p>博客内容</p>
            <p>{{blog.content}}</p>
            <p>博客分类 </p>
            <ul>
                <li v-for="category in blog.categories">
                    {{category}}
                </li>
            </ul>
            <p>作者 : {{blog.author}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AddBlog",
        data() {
            return {
                blog:{
                    title:"",
                    content:"",
                    categories:[],
                    author:"",
                },
                authors:["Hemian","Heny","Banriy"],
                submmited: false,
            }
        },
        methods:{
            // http://jsonplaceholder.typicode.com/posts
            post:function () {
                // this.$axios.post('http://jsonplaceholder.typicode.com/posts',
                //     // this.blog 可以直接对象
                //     {
                //         title:this.blog.title,
                //         body:this.blog.content,
                //         userId:1
                //     })
                //     .then(res => {
                //         console.log('res',res);
                //         this.submmited = true;
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     }
                // )

                const query = Bmob.Query('test');
                query.set("title",this.blog.title)
                query.set("content",this.blog.content)
                query.set("categories",this.blog.categories)
                query.set("author",this.blog.author)
                query.save().then(res => {
                    console.log(res)
                    this.submmited = true;
                }).catch(err => {
                    console.log(err)
                })
            },
        },
        components: {}
    }
</script>

<style scoped>
    /*所有元素都是块状*/
    .add-blog *{
        box-sizing: border-box;
    }
    /*添加博客页面*/
    .add-blog{
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }
    /*标签单行*/
    label{
        display: block;
        margin: 20px 0 10px;
    }
    /*单行*/
    input[type="text"],textarea,select{
        display: block;
        width: 100%;
        padding: 8px;
    }
    textarea{
        height: 200px;
    }
    #checkboxs{
        display: inline-block;
        margin-top: 0;
    }
    #checkboxs input{
        display: inline-block;
        margin-right: 10px;
    }
    /*按钮*/
    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #ffffff;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }
    /*下面的博客显示*/
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }


</style>