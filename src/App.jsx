
import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { Mod } from "./hook/Config";


function App() {

  const { isActive } = Mod();

  // let dark = <button onClick={() => { setMod(!mod) }}>dark</button>

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
      <div className={`${isActive === false ? "appDark" : "appLigth"}`}>
        <RouterProvider router={router} />
      </div>
    </ConfigProvider>
  )
}

export default App;
