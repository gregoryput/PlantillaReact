
import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { Mod } from "./hook/Config";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_es from "./translation/ES/global.json";
import global_en from "./translation/EN/global.json";

function App() {

  const { isActive } = Mod();
  //configuracion de multiples idiomas
  let language = !localStorage.getItem("_lang")
    ? "ES"
    : localStorage.getItem("_lang");

  i18next.init({
    interpolation: { escapeValue: true },
    lng: language,
    resources: {
      ES: {
        global: global_es,
      },
      EN: {
        global: global_en,
      },
    },
  });

  return (
    <ConfigProvider
      theme={{
        algorithm: isActive == false ? theme.darkAlgorithm : theme.defaultAlgorithm,

        token: {
          colorSuccess: "#5f6062",
          colorPrimary: "#00703c",
          colorInfo: "#00703c",
          colorError: "#f90509",
          borderRadius: 25
        },

      }}
    >
      <I18nextProvider i18n={i18next}>
        <div className={`${isActive === false ? "appDark" : "appLigth"}`}>
          <RouterProvider router={router} />
        </div>
      </I18nextProvider>
    </ConfigProvider>
  )
}

export default App;
