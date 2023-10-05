import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="home-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
        />
        <h1>Wade Warren</h1>
        <p>Software developer at UK</p>
      </div>
      <ul>
        {blogsList.map(eachBlog => (
          <BlogItem blogItem={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
