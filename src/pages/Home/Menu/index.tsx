import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import { coffees } from '../../../data/coffees';

import { MenuContainer, CartButton, MenuList, MenuItem, TagContainer, FooterContainer } from './styles';

export function Menu() {
  return (
    <MenuContainer>
      <h2>Nossos cafés</h2>

      <MenuList>
        {coffees.map(coffee => (
          <MenuItem key={coffee.id}>
            <img src={coffee.image} alt={coffee.name} />

            <TagContainer>
              {coffee.tags.map(tag => <span>{tag}</span>)}
            </TagContainer>
            
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>

            <FooterContainer>
              <span>R$ <strong>{coffee.price}</strong></span>

              <div>
                <div>
                  <Minus />
                  1
                  <Plus />
                </div>

                <CartButton type='button'>
                  <ShoppingCart size={22} weight='fill' />
                </CartButton>
              </div>            
            </FooterContainer>
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  )
}