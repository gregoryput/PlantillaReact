
import { Mod, MultIdioma } from "@/hook/Config";
import "./login.css"
import { Github, Linkedin, Moon, Sun } from "lucide-react"
import { Button, Card, Form, Input } from "antd";
import img from "../../assets/logo.jpeg";

export default function Login() {
  const { isActive, toggleActive } = Mod();
  const { Idioma, toggleIdioma } = MultIdioma();

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container-login">
      <div className="nav-login">
        <div className="box-container-align">
          <img src={img} alt="" style={{ width: 20, height: 20 }} />
          <p style={{ marginLeft: 10, fontWeight: "bold", marginRight: 20 }}>Progreso</p>
          <span>|</span>
          <p style={{ marginLeft: 10 }}>Version 1.0.0</p>
        </div>
        <div className="box-container-align">
          <button onClick={() => toggleIdioma(!Idioma)} className="button-login">
            {Idioma == true ? <b style={{ color: `${isActive == false ? "white" : "black"}` }}>ES</b> : <b style={{ color: `${isActive == false ? "white" : "black"}` }}>EN</b>}
          </button>
          <button onClick={() => toggleActive(!isActive)} className={`button-login ${isActive === false ? "dark" : ""}`}>
            {isActive == true ? <Sun /> : <Moon />}
          </button>
        </div>

      </div>
      <div className="form-container">
        <Card
          className="form-card"
        >
          <h1 className="title-login">
            Iniciar Sesion
          </h1>
          <p className="subtitle-login">¡Bienvenido a la Familia Progreso! Inicia sesión para continuar.</p>


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
        </Card>
      </div>

      <footer className="footer">
        <p style={{ marginLeft: 10 , fontWeight:"lighter", cursor:"default", fontSize:13 }}>Developed by</p>

        <div onClick={() => { window.location.href = 'https://github.com/gregoryput'; }} className="btn-credi">
          <Github width={20} />
        </div>
        <div onClick={() => { window.location.href = 'https://www.linkedin.com/in/gregory-albert-s%C3%A1nchez-05820019b/'; }} className="btn-credi">
          <Linkedin  width={20} />
        </div>
      </footer>
    </div>
  )
}
