import { useState } from 'react'
import { Alert } from 'antd'
import URLInput from './components/URLInput'
import Result from './components/Result'
import 'antd/dist/antd.less'
import './styles/app.css'

import { fetchLink } from './helpers/fetchFiles'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [link, setLink] = useState({})
  const onSubmit = async ({ url }) => {
    setIsLoading(true)
    const response = await fetchLink(url)
    setLink({ ...link, past: url, present: response })
    setIsLoading(false)
    setIsModalVisible(true)
  }
  return (
    <div className="App">
      <Alert
        banner
        message="छोटो-Link: A Caret Systems Product!"
        type="info"
        showIcon
      />
      <URLInput onSubmit={onSubmit} isLoading={isLoading} />
      <Result link={link} modal={{ isModalVisible, setIsModalVisible }} />
      <p></p>
    </div>
  )
}

export default App
