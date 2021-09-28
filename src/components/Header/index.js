import React from 'react'
import {Layout} from 'antd'
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { Avatar } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { Link } from 'gatsby'
import * as S from './styled'
function Header() {
    return (
          <S.MainHeader>
              <S.ContainerFluid>
        <h1>Time Zone</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/latest">Latest</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/content">Content</Link>
        </ul>
        <AiOutlineSearch />
        <AiOutlineShoppingCart />
        <Avatar size="large" icon={<UserOutlined />} />
                </S.ContainerFluid>
        </S.MainHeader>
    )
}

export default Header
