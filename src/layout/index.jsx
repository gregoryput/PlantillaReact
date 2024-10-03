
import "./layout.css"
import { Mod, useLanguageStore } from '@/hook/Config';
import { Dropdown, Layout, Menu } from 'antd';
import i18next from "i18next";
import { MenuIcon, Moon, Sun, User } from 'lucide-react';
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
      <a>
        2nd menu item (disabled)
      </a>
    ),
    icon: null,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a>
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'Cerrar sesion',
    onClick: () => { alert("hola") }
  },
];

export default function LayoutApp() {
  const { isActive, toggleActive } = Mod();
  const [sider,setSider] = useState(false);
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
      <Sider trigger={null} collapsible collapsed={sider} >
        <div onClick={()=>{setSider(!sider)}} className="btn-menu">
          <MenuIcon/>
        </div>
        <Menu
          className='container-sider  navTheme'
          mode="inline"
          defaultSelectedKeys={['1']}

          items={[  
            {
              key: 'sub1',
              label: 'Navigation One',
             
              children: [
                {
                  key: 'g1',
                  label: 'Item 1',
                  type: 'group',
                  children: [
                    {
                      key: '1',
                      label: 'Option 1',
                    },
                    {
                      key: '2',
                      label: 'Option 2',
                    },
                  ],
                },
                {
                  key: 'g2',
                  label: 'Item 2',
                  type: 'group',
                  children: [
                    {
                      key: '3',
                      label: 'Option 3',
                    },
                    {
                      key: '4',
                      label: 'Option 4',
                    },
                  ],
                },
              ],
            },
            {
              key: 'sub2',
              label: 'Navigation Two',
            
              children: [
                {
                  key: '5',
                  label: 'Option 5',
                },
                {
                  key: '6',
                  label: 'Option 6',
                },
                {
                  key: 'sub3',
                  label: 'Submenu',
                  children: [
                    {
                      key: '7',
                      label: 'Option 7',
                    },
                    {
                      key: '8',
                      label: 'Option 8',
                    },
                  ],
                },
              ],
            },
            {
              type: 'divider',
            },
            {
              key: 'sub4',
              label: 'Navigation Three',
              
              children: [
                {
                  key: '9',
                  label: 'Option 9',
                },
                {
                  key: '10',
                  label: 'Option 10',
                },
                {
                  key: '11',
                  label: 'Option 11',
                },
                {
                  key: '12',
                  label: 'Option 12',
                },
              ],
            },
            {
              key: 'grp',
              label: 'Group',
              type: 'group',
              children: [
                {
                  key: '13',
                  label: 'Option 13',
                },
                {
                  key: '14',
                  label: 'Option 14',
                },
              ],
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


            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}  >
                <div className="container-layout " style={{ color: `${isActive == false ? "white" : "black"}` }} >
                  <p>Gregoryput</p>
                  <div className='avatar'>
                    <User />
                  </div>
                </div>
              </a>
            </Dropdown>

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