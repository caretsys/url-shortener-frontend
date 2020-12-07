import { Input, Form, Button } from 'antd'
import { RightSquareOutlined } from '@ant-design/icons'

const URLInput = ({ onSubmit, isLoading }) => {
  const [form] = Form.useForm()
  return (
    <Form
      layout="inline"
      onFinish={onSubmit}
      form={form}
      style={{ width: '100%' }}
    >
      <Form.Item
        rules={[
          { required: true, message: 'Need to have a URL to process further!' },
          { type: 'url', message: 'Must be a valid URL!' },
        ]}
        id="search-bar"
        name="url"
        style={{ width: '80%' }}
      >
        <Input placeholder="e.g. https://www.youtube.com/watch?v=UxJcdeQ0vPI" />
      </Form.Item>
      <Form.Item style={{ width: '15%' }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          icon={<RightSquareOutlined />}
        >
          Shorten It
        </Button>
      </Form.Item>
    </Form>
  )
}

export default URLInput
