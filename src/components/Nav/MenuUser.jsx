import { Mod } from "@/hook/Config";
import { Dropdown } from "antd";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";


export function MenuUser() {
  const { isActive } = Mod();

  const navigate = useNavigate();
  const items = [
    // {
    //   key: '1',
    //   label: (
    //     <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
    //       1st menu item
    //     </a>
    //   ),
    // },
    // {
    //   key: '2',
    //   label: (
    //     <a>
    //       2nd menu item (disabled)
    //     </a>
    //   ),
    //   icon: null,
    //   disabled: true,
    // },
    // {
    //   key: '3',
    //   label: (
    //     <a>
    //       3rd menu item (disabled)
    //     </a>
    //   ),
    //   disabled: true,
    // },
    {
      key: '4',
      danger: true,
      label: 'Cerrar sesion',
      onClick: () => { navigate("login") }
    },
  ];
    return (
        <>
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

        </>
    )
}
