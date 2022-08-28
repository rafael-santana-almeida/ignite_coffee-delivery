import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import CoffeImage from '../../../assets/Type=Expresso.svg';

import { MenuContainer, CartButton, MenuList, MenuItem, TagContainer, FooterContainer } from './styles';

export function Menu() {
  return (
    <MenuContainer>
      <h2>Nossos cafés</h2>

      <MenuList>
        <MenuItem>
          <img src={CoffeImage} alt="Café Tradicional" />

          <TagContainer>
            <span>Tradicional</span>
            <span>Com Leite</span>
          </TagContainer>
          
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <FooterContainer>
            <span>R$ <strong>9,90</strong></span>

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

        <MenuItem>
          <img src={CoffeImage} alt="Café Tradicional" />

          <TagContainer>
            <span>Tradicional</span>
            <span>Com Leite</span>
          </TagContainer>
          
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <FooterContainer>
            <span>R$ <strong>9,90</strong></span>

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

        <MenuItem>
          <img src={CoffeImage} alt="Café Tradicional" />

          <TagContainer>
            <span>Tradicional</span>
            <span>Com Leite</span>
          </TagContainer>
          
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <FooterContainer>
            <span>R$ <strong>9,90</strong></span>

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

        <MenuItem>
          <img src={CoffeImage} alt="Café Tradicional" />

          <TagContainer>
            <span>Tradicional</span>
            <span>Com Leite</span>
          </TagContainer>
          
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <FooterContainer>
            <span>R$ <strong>9,90</strong></span>

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

        <MenuItem>
          <img src={CoffeImage} alt="Café Tradicional" />

          <TagContainer>
            <span>Tradicional</span>
            <span>Com Leite</span>
          </TagContainer>
          
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <FooterContainer>
            <span>R$ <strong>9,90</strong></span>

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
      </MenuList>
    </MenuContainer>
  )
}