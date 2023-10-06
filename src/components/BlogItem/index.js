import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <li className="list-item">
      <div className="name-container">
        <h1 className="title-head">{title}</h1>
        <p className="title-para">{publishedDate}</p>
      </div>
      <p className="description-para">{description}</p>
    </li>
  )
}

export default BlogItem
