import styled from "styled-components";

export const Wrapper = styled.div`
  // min-height: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  max-width: 1180px;
  margin: 0px auto;
`;
export const Content = styled.div`
  flex: 1 1 auto;
`;
export const Hi = styled.div`
  padding: 50px 0;
  background-color: #445162;
`;
export const HiRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HiBody = styled.div`
  color: #ffffff;
  padding: 0px 30px 0px 0px;
`;
export const HiTitle = styled.div`
  margin: 0px 0px 38px 0px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  font-size: 60px;
`;
export const HiList = styled.ul`
  // padding: 0px 0px 0px 36px;
  // margin: 0px 0px 15px 0px;

  li {
    background: url(/images/icon.png) 0 1px no-repeat;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
    font-size: 20px;
    line-height: 22px;
    padding: 0px 0px 0px 36px;
    margin: 0px 0px 15px 0px;
  }

  li:last-child {
    margin: 0;
  }
`;

export const HiImage = styled.div``;

export const What = styled.div`
  padding: 50px 0px;
`;
export const WhatRow = styled.div`
  display: flex;
`;
export const WhatImage = styled.div`
  flex: 0 0 430px;

  img {
    max-width: 100%;
  }
`;
export const WhatBody = styled.div`
  flex: 1 1 auto;
  padding: 0 0 0 38px;
`;
export const WhatTitle = styled.div`
  color: #445161;
  font-size: 30px;
  margin: 0px 0px 35px 0px;
`;
export const WhatText = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 24px;
  p {
    margin: 0px 0px 15px 0px;
  }

  p:last-child {
    margin: 0;
  }
`;
export const Columns = styled.div`
  background-color: #f5f5f5;
  padding: 50px 0 20px 0;
`;
export const ColumnTitle = styled.div`
  text-align: center;
  margin: 0px 0px 30px 0px;
  color: #445161;
  font-size: 30px;
  margin: 0px 0px 35px 0px;
`;
export const ColumnsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`;
export const ColumnsColumn = styled.div`
  padding: 0 -8px;
  flex: 0 1 50%;
  margin: 0 0 30px 0;
`;
export const ColumnsItem = styled.div``;
export const ItemRow = styled.div`
  display: flex;
`;
export const ItemImage = styled.div`
  flex: 0 0 200px;
`;
export const ItemBody = styled.div`
  flex: 1 1 auto;
  padding: 0 0 0 15px;
`;
export const ItemTitle = styled.div`
  color: #445161;
  font-size: 24px;
  line-height: 30px;
  margin: 0px 0px 15px 0px;
`;
export const ItemText = styled.div`
  color: #333333;
  font-size: 16px;
  line-height: 24px;
`;
export const Vertical = styled.div`
  padding: 50px 0;
`;
export const VerticalTitle = styled.div`
  text-align: center;
  margin: 0 0 30px 0;
  color: #445161;
  font-size: 30px;
  margin: 0px 0px 35px 0px;
`;
export const VerticalBody = styled.div`
  max-width: 990px;
  margin: 0 auto;
`;
export const VerticalRow = styled.div`
  display: flex;
  margin: 0 22.5px;
`;

export const VerticalColumn = styled.div`
  flex: 0 1 33.333%;
  padding: 0 22.5px;
`;
export const VerticalItem = styled.div`
  background-color: #445162;
  border-radius: 5px;
  color: #fff;
  border: 1px solid #445162;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 20px 0px;
  min-height: 60vh;
`;

export const VerticalSubTitle = styled.div`
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  padding: 12px 0;
`;
export const VerticalLabel = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 12px 0;
  color: #445162;
  font-size: 40px;
`;
export const VerticalText = styled.div`
  padding: 20px;
  font-size: 14px;
  line-heign: 24px;
  flex: 1 1 auto;

  p {
    margin: 0 0 15px 0;
  }
  p:last-child {
    margin: 0;
  }
`;
export const VerticalBtm = styled.a`
  display: block;
  margin: 0px 20px;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  border-radius: 5px;
  color: #445161;
  font-size: 18px;
`;
