<template>
    <div class="showblogs" v-theme:column="'wide'">
        <h1>博客总揽</h1>
        <input type="text" placeholder="搜索" v-model="search">
        <!--遍历的数组,就不是blogs,而是filteredBlogs计算属性的这个处理后的返回的变量-->
        <div v-for="blog in filteredBlogs" class="single-blog">
            <!--<router-link :to=" '/blog/'+blog.id ">-->
            <router-link :to=" '/blog/'+blog.objectId ">
                <h2 v-rainrow>{{blog.title | touppercase}}</h2>
            </router-link>
            <!--<article>{{blog.body | snippet}}</article>-->
            <article>{{blog.content | snippet}}</article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShowBlogs",
        data() {
            return {
                blogs:[], // 未处理的数据
                search:'', //搜索的关键字
            }
        },
        computed:{
            // 匹配字符串的数据,在变量(对象数据),返回一个处理过后的数据,遍历
            filteredBlogs:function(){
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.search);
                })
            }
        },
        created(){
            //this.$axios.get('./../public/posts.json') //请求本地Json ??
            // this.$axios.get('http://jsonplaceholder.typicode.com/posts')
            // .then(res => {
            //     this.blogs = res.data.slice(0,10);
            //     console.log('res',this.blogs);
            // })
            // .catch(error => {
            //         console.log(error)
            //     }
            // )

            const query = Bmob.Query("test");
            query.find().then(res => {
                this.blogs = res.slice(0,6);
            }).catch(err => {
                console.log(err)
            })

        },
        //直接是一个方法
        filters:{
            // 自定义过滤器 : 全部大写
            "touppercase":function (val) {
                // val : 表示管理符 | 左边的值
                return val.toUpperCase();
            },
            "snippet" :function (val) {
                // val : 表示管理符 | 左边的值
                return val.slice(0,50)+"......";
            }
        },
        //直接是一个对象
        directives:{
            'rainrow':{
                bind(el,bind,vnode){
                    // 随机颜色
                    el.style.color = "#" + Math.random().toString(16).slice(2,8);
                }
            },
            'theme':{
                bind(el,bind,vnode){
                    if (bind.value == 'wide'){
                        el.style.maxWidth = '1260px';
                    }
                    // bind.arg : 表示:参数
                    if (bind.arg = 'column') {
                        el.style.background = "#6677cc";
                        el.style.padding = "20px";
                    }
                }
            }
        }
    }
</script>

<!--https://vuedemo-6baf1.firebaseio.com-->

<style scoped>
    .showblogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
        border: 1px dotted #aaa;
    }
    a{
        text-decoration: none;
    }
    input[type="text"]{
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
    }


</style>