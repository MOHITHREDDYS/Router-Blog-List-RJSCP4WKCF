// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogList_container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blog={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
