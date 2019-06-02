//一级路由
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'



//路由数组
export const routes = [
    {path:"/", name:'homeLink',component:ShowBlogs},
    {path:"/add", name:'addLink',component:AddBlog},
    {path:"/blog/:id", name:'addLink',component:SingleBlog},
    {path:"/edit/:id", name:'editLink',component:EditBlog},
]