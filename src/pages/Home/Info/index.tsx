import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import coffeeDelivery from '../../../assets/coffeeDelivery.svg';

import { InfoContainer, ItemIcon, ItemsContainer, TitleContainer } from "./styles";

export function Info() {
  return (
    <InfoContainer>
      <section>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </TitleContainer>        

        <ItemsContainer>
          <div>
            <ItemIcon backgroundColor="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </ItemIcon>
            Compra simples e segura
          </div>
          <div>
            <ItemIcon backgroundColor="base-text">
              <Package size={16} weight="fill" />
            </ItemIcon>
            Embalagem mantém o café intacto
          </div>
          <div>
            <ItemIcon backgroundColor="yellow">
              <Timer size={16} weight="fill" />
            </ItemIcon>
            Entrega rápida e rastreada
          </div>
          <div>
            <ItemIcon backgroundColor="purple">
              <Coffee size={16} weight="fill" />
            </ItemIcon>
            O café chega fresquinho até você
          </div>
        </ItemsContainer>
      </section>

      <img src={coffeeDelivery} alt="" />
    </InfoContainer>
  )
}