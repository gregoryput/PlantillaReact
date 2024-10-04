import { HomeOutlined, UserOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom";

export default function MenuBar() {
  const navigate = useNavigate();
  return (
    <Menu
          className='container-sider  '
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'sub1',
              label: 'Navigation Example',

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
                    
                  ],
                },
                {
                  key: 'g2',
                  label: 'Item 2',
                  type: 'group',
                  children: [
                    
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
              label: 'Navigation Example',

              children: [
                {
                  key: '5',
                  label: 'Option 5',
                },
                {
                  key: '6',
                  label: 'Option 6',
                }
              ],
            },
            {
              type: 'divider',
            },
            {
              key: 'grp',
              type: 'group',
              children: [
                {
                  key: '13',
                  label: 'Home',
                  icon: <HomeOutlined />,
                  onClick: () => { navigate("home") }
                },
                {
                  key: '14',
                  label: 'Usuario',
                  icon: <UserOutlined />,
                  onClick: () => { navigate("user") }
                },
              ],
            },
          ]}
        />
  )
}
