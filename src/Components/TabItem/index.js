import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const activeTabClass = isActive ? 'active-tab' : ''

  return (
    <li className="tab-list">
      <button
        className={`tab-btn ${activeTabClass}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
