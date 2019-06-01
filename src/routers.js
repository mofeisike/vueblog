//一级路由
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import SingleBlog from './components/SingleBlog'



//路由数组
export const routes = [
    {path:"/", name:'homeLink',component:ShowBlogs},
    {path:"/add", name:'addLink',component:AddBlog},
    {path:"/blog/:id", name:'addLink',component:SingleBlog},
]