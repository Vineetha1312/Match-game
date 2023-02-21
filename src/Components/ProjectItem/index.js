import './index.css'

const ProjectItem = props => {
  const {projectDetails, clickOnThumbnailImage} = props
  const {thumbnailUrl, category} = projectDetails

  const onClickItem = () => {
    clickOnThumbnailImage(category)
  }

  return (
    <li className="list-item">
      <button className="img-btn" type="button" onClick={onClickItem}>
        <img src={thumbnailUrl} alt={category} className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ProjectItem
