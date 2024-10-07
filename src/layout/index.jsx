
import { Menubar, MenuUser } from "@/components";
import "./layout.css"
import { Mod, useLanguageStore } from '@/hook/Config';
import { Layout } from 'antd';
import i18next from "i18next";
import { MenuIcon, Moon, Sun, } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;




export default function LayoutApp() {
  const { isActive, toggleActive } = Mod();
  const [sider, setSider] = useState(false);
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
        <div onClick={() => { setSider(!sider) }} className="btn-menu">
          <MenuIcon />
        </div>
        {/* este es el menu */}
        <Menubar />
      </Sider>
      <Layout className='box-transparent ' style={{ backgroundColor: "transparent" }}>
        <Header className="header">
          <div>
            {/* este espacion pagregar algo el lado izquierdo de navbar */}
          </div>

          <section style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <button onClick={() => toggleActive(!isActive)} className={`button ${isActive === false ? "dark" : ""}`}>
              {isActive == true ? <Sun /> : <Moon />}
            </button>
            <button onClick={() => toggleLanguage(!language)} className="button">
              {language == false ? <b style={{ color: `${isActive == false ? "white" : "black"}` }}>ES</b> : <b style={{ color: `${isActive == false ? "white" : "black"}` }}>EN</b>}
            </button>
            {/* componente de menu de usuario */}
            <MenuUser />
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