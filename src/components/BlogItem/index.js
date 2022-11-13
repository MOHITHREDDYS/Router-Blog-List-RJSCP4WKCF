// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog

  return (
    <li className="blog_item_container">
      <div className="title_date_container">
        <h1 className="blog_heading">{title}</h1>
        <p className="blog_date">{publishedDate}</p>
      </div>
      <p className="blog_description">{description}</p>
    </li>
  )
}

export default BlogItem
