import * as React from "react";
import {
  Wrapper,
  Content,
  Container,
  Hi,
  HiRow,
  HiTitle,
  HiBody,
  HiList,
  WhatTitle,
  What,
  WhatRow,
  WhatImage,
  WhatBody,
  WhatText,
  Columns,
  ColumnTitle,
  ColumnsRow,
  ColumnsColumn,
  ColumnsItem,
  ItemRow,
  ItemImage,
  ItemBody,
  ItemTitle,
  ItemText,
  Vertical,
  VerticalTitle,
  VerticalBody,
  VerticalRow,
  VerticalColumn,
  VerticalItem,
  VerticalSubTitle,
  VerticalLabel,
  VerticalText,
  VerticalBtm,
} from "../components/styles/Main.styled";
import Layout from "../components/Layout";
import {
  Footer,
  FooterRow,
  FooterText,
} from "../components/styles/Footer.styled";

const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Content>
          <Hi>
            <Container>
              <HiRow>
                <HiBody>
                  <HiTitle>Привет друг</HiTitle>
                  <HiList>
                    <li>У тебя все получится!</li>
                    <li>Никогда не здавайся!</li>
                    <li>Сегодня ты уже знаешь больше чем вчера!</li>
                    <li>Спасибо тебе за поддержку!</li>
                  </HiList>
                </HiBody>
                <div class="hi__image">
                  <img src="/images/image.jpg" />
                </div>
              </HiRow>
            </Container>
          </Hi>
          <What>
            <Container>
              <WhatRow>
                <WhatImage>
                  <img src="/images/image_2.jpg" />
                </WhatImage>
                <WhatBody>
                  <WhatTitle>Что такое FlexBox?</WhatTitle>
                  <WhatText>
                    <p>
                      Flexbox - это целый модуль, содержащий в себе набор
                      свойств и их значений как для родителя flex-контейнера так
                      и для его дочерних элементов flex-элементов.
                    </p>
                    <p>
                      Основным преимуществом гибкой FLEX разметки является
                      возможность изменять ширину/высоту пространство вокруг и
                      порядок flex-элементов, для того чтобы наилучшим образом
                      заполнить доступное пространство flex-контейнера
                    </p>
                  </WhatText>
                </WhatBody>
              </WhatRow>
            </Container>
          </What>
          <Columns>
            <Container>
              <ColumnTitle>Колонки с flex-контейнерами</ColumnTitle>
              <ColumnsRow>
                <ColumnsColumn>
                  <ColumnsItem>
                    <ItemRow>
                      <ItemImage>
                        <img src="/images/image_3.jpg" />
                      </ItemImage>
                      <ItemBody>
                        <ItemTitle>The description for the image</ItemTitle>
                        <ItemText>
                          Pariatur iure ab sunt nesciunt, quibusdam odio iste
                          cumque itaque, ipsa vel exercitationem ullam quos aut
                          nostrum cupiditate fuga quaerat quam animi dolores.
                          Sequi itaque, unde perferendis nemo debitis dolor.
                        </ItemText>
                      </ItemBody>
                    </ItemRow>
                  </ColumnsItem>
                </ColumnsColumn>
                <ColumnsColumn>
                  <ColumnsItem>
                    <ItemRow>
                      <ItemImage>
                        <img src="/images/image_3.jpg" />
                      </ItemImage>
                      <ItemBody>
                        <ItemTitle>The description for the image</ItemTitle>
                        <ItemText>
                          Pariatur iure ab sunt nesciunt, quibusdam odio iste
                          cumque itaque, ipsa vel exercitationem ullam quos aut
                          nostrum cupiditate fuga quaerat quam animi dolores.
                          Sequi itaque, unde perferendis nemo debitis dolor.
                        </ItemText>
                      </ItemBody>
                    </ItemRow>
                  </ColumnsItem>
                </ColumnsColumn>
                <ColumnsColumn>
                  <ColumnsItem>
                    <ItemRow>
                      <ItemImage>
                        <img src="/images/image_3.jpg" />
                      </ItemImage>
                      <ItemBody>
                        <ItemTitle>The description for the image</ItemTitle>
                        <ItemText>
                          Pariatur iure ab sunt nesciunt, quibusdam odio iste
                          cumque itaque, ipsa vel exercitationem ullam quos aut
                          nostrum cupiditate fuga quaerat quam animi dolores.
                          Sequi itaque, unde perferendis nemo debitis dolor.
                        </ItemText>
                      </ItemBody>
                    </ItemRow>
                  </ColumnsItem>
                </ColumnsColumn>
                <ColumnsColumn>
                  <ColumnsItem>
                    <ItemRow>
                      <ItemImage>
                        <img src="/images/image_3.jpg" />
                      </ItemImage>
                      <ItemBody>
                        <ItemTitle>The description for the image</ItemTitle>
                        <ItemText>
                          Pariatur iure ab sunt nesciunt, quibusdam odio iste
                          cumque itaque, ipsa vel exercitationem ullam quos aut
                          nostrum cupiditate fuga quaerat quam animi dolores.
                          Sequi itaque, unde perferendis nemo debitis dolor.
                        </ItemText>
                      </ItemBody>
                    </ItemRow>
                  </ColumnsItem>
                </ColumnsColumn>
              </ColumnsRow>
            </Container>
          </Columns>
          <Vertical>
            <Container>
              <VerticalTitle>Вертикальное выравнивание</VerticalTitle>
              <VerticalBody>
                <VerticalRow>
                  <VerticalColumn>
                    <VerticalItem>
                      <VerticalSubTitle>БУДУ РАД</VerticalSubTitle>
                      <VerticalLabel>Подписке</VerticalLabel>
                      <VerticalText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sint tenetur fugit vel, eligendi illum, placeat
                        quo vero reiciendis consectetur.
                      </VerticalText>
                      <VerticalBtm href="">Подписаться</VerticalBtm>
                    </VerticalItem>
                  </VerticalColumn>
                  <VerticalColumn>
                    <VerticalItem>
                      <VerticalSubTitle>БУДУ РАД</VerticalSubTitle>
                      <VerticalLabel>лайку</VerticalLabel>
                      <VerticalText>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sint tenetur fugit vel, eligendi illum, placeat
                          quo vero reiciendis consectetur voluptatibus atque et
                          itaque, hic, deleniti. Sunt commodi tempora voluptatum
                          dolorum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sint tenetur fugit vel, eligendi illum, placeat
                          quo vero reiciendis consectetur tempora voluptatum
                          dolorum.
                        </p>
                      </VerticalText>
                      <VerticalBtm href="">лайку</VerticalBtm>
                    </VerticalItem>
                  </VerticalColumn>
                  <VerticalColumn>
                    <VerticalItem>
                      <VerticalSubTitle>БУДУ РАД</VerticalSubTitle>
                      <VerticalLabel>комментарию</VerticalLabel>
                      <VerticalText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sint tenetur fugit vel, eligendi illum, placeat
                        quo vero reiciendis consectetur.
                      </VerticalText>
                      <VerticalBtm href="">комментарию</VerticalBtm>
                    </VerticalItem>
                  </VerticalColumn>
                </VerticalRow>
              </VerticalBody>
            </Container>
          </Vertical>
        </Content>
        <Footer>
          <Container>
            <FooterRow>
              <FooterText>Фрилансер по жизни 2019</FooterText>
            </FooterRow>
          </Container>
        </Footer>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
