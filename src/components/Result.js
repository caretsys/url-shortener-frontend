import { Result as AntResult, Modal, Button, Typography } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

const { Paragraph } = Typography

function Result({ link, modal }) {
  const handleCancel = () => {
    modal.setIsModalVisible(false)
  }
  const goToLink = () => {
    window.open(link.present, '_blank')
  }
  const renderHTML = (
    <Modal footer={null} onCancel={handleCancel} visible={modal.isModalVisible}>
      <AntResult
        title="There You Go!"
        icon={<SmileOutlined />}
        subTitle={`${link.past} has been shortened to: `}
        extra={[
          <Paragraph
            style={{ textAlign: 'center', fontWeight: 'bold' }}
            copyable
          >
            {link.present}
          </Paragraph>,
          <Button
            style={{ margin: '0 auto', display: 'block' }}
            type="primary"
            key="on-the-go"
            onClick={goToLink}
          >
            Go to Link
          </Button>,
        ]}
      />
    </Modal>
  )
  return link ? renderHTML : null
}

export default Result
