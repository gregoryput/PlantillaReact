import { Button, Form, Input } from "antd";


export function FormLogin() {

    const onFinish = (values) => {
        console.log('Success:', values);
    
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div>
            <Form
                name="basic"
                className="form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}

            >
                <Form.Item

                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder="Username" style={{ height: "40px", marginTop: "20px" }} />
                </Form.Item>

                <Form.Item

                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Password" style={{ height: "40px", marginTop: "10px" }} />
                </Form.Item>



                <Form.Item
                >
                    <Button type="primary" style={{ width: "100%", height: "40px", marginTop: "30px" }} htmlType="submit">
                        Iniciar
                    </Button>
                </Form.Item>

                <Form.Item
                >
                    <Button style={{ width: "100%", height: "40px" }} >
                        Auth0
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
