import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "phosphor-react";
import coffeeImage from "../../assets/coffees/american.svg";

import {
  CheckoutContainer,
  CompleteYourOrderContainer,
  AddressContainer,
  AddressFormContainer,
  PaymentContainer
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteYourOrderContainer>
        <h3>Complete seu pedido</h3>

        <AddressContainer>
          <div>
            <MapPin size={22} />

            <div>
              <span>Endereço de entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <AddressFormContainer>
            <div>
              <input placeholder="CEP" />
            </div>
            
            <div>
              <input placeholder="Rua" />
            </div>

            <div>
              <input placeholder="Número" />
              <input placeholder="Complemento" />
            </div>

            <div>
              <input placeholder="Bairro" />
              <input placeholder="Cidade" />
              <input placeholder="UF" />
            </div>
          </AddressFormContainer>
        </AddressContainer>

        <PaymentContainer>
          <div>
            <CurrencyDollar size={22} />

            <div>
              <span>Pagamento</span>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </div>

          <div>
            <button>
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </button>

            <button>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </button>

            <button>
              <Money size={16} />
              DINHEIRO
            </button>
          </div>
        </PaymentContainer>
      </CompleteYourOrderContainer>

      <div>
        <h3>Cafés selecionados</h3>

        <div>
          <ul>
            <li>
              <img src={coffeeImage} alt="" />

              <div>
                <span>Expresso Tradicional</span>
                <div>
                  <div>
                    <Minus />
                    1
                    <Plus />
                  </div>

                  <button>
                    <Trash />
                    REMOVER
                  </button>
                </div>
                <span>R$ 9,90</span>
              </div>
            </li>
          </ul>

          <div>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>

          <button>CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </CheckoutContainer>
  )
}