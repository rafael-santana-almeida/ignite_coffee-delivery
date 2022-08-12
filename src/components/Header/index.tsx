import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

import { CartButton, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery" />

      <div>
        <span>
          <MapPin size={22} weight='fill'/>
          Porto Alegre, RS
        </span>

        <CartButton type='button'>
          <ShoppingCart size={22} weight='fill' />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}