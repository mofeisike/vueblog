<template>
    <div class="edit-blog">
        <h2>编辑博客</h2>
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

            <button v-on:click.prevent="post">编辑完成</button>
        </form>

        <div v-if="submmited">
            <h3>你的博客修改成功</h3>
        </div>

        <div id="preview" v-if="submmited">
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

        <div v-if="submmited">
            <router-link :to=" '/blog/'+id" tag="button">返回文章</router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "EditBlog",
        data() {
            return {
                id:this.$route.params.id,
                blog:{},
                authors:["Hemian","Heny","Banriy"],
                submmited: false,
            }
        },
        created(){
            const query = Bmob.Query('test');
            query.get(this.id).then(res => {
                this.blog = res;
            }).catch(err => {
                console.log(err)
            })
        },
        methods:{
            post:function () {
                const query = Bmob.Query('test');
                query.get(this.id).then(res => {
                    res.set("title",this.blog.title);
                    res.set("content",this.blog.content);
                    res.set("categories",this.blog.categories);
                    res.set("author",this.blog.author);
                    res.save();
                    this.submmited= true;
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
    .edit-blog *{
        box-sizing: border-box;
    }
    /*添加博客页面*/
    .edit-blog{
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