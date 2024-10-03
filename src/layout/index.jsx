
import "./layout.css"
import { Mod, useLanguageStore } from '@/hook/Config';
import { Dropdown, Layout, Menu, Space } from 'antd';
import i18next from "i18next";
import { Moon, Sun, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: null,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
export default function LayoutApp() {
  const { isActive, toggleActive } = Mod();
  const [collapsed] = useState(false);
  // const { t } = useTranslation('global');
  const { language, toggleLanguage } = useLanguageStore();

  useEffect(() => {
    // Asegura que el idioma sea cambiado al cargar la página si existe en localStorage
    const storedLang = localStorage.getItem('_lang');
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }
  }, []);


  return (
    <Layout className={`container ${isActive == false ? "appDark " : "appLigth"} `}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          className='container navTheme'
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: null,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: null,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: null,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className='box-transparent ' style={{ backgroundColor: "transparent" }}>
        <Header className="header">
          <div>

          </div>

          <section style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <button onClick={() => toggleActive(!isActive)} className={`button ${isActive === false ? "dark" : ""}`}>
              {isActive == true ? <Sun /> : <Moon />}
            </button>
            <button onClick={() => toggleLanguage(!language)} className="button">
              {language == false ? <b style={{ color: `${isActive == false ? "white" : "black"}` }}>ES</b> : <b style={{ color: `${isActive == false ? "white" : "black"}` }}>EN</b>}
            </button>

            <div className="container-layout">

              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <div >
                    <p>Gregoryput</p>
                    <div className='avatar'>
                      <User />
                    </div>
                  </div>
                </a>
              </Dropdown>
            </div>
          </section>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: "transparent",

          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}