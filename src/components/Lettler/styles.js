import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45vw;
  height: 100%;
  background-color: white;
  line-height: 20px;
  border-radius: 15px;
  border: 5px solid grey;
  padding: 30px;
  box-shadow: 7px 11px #888888;
  h1,
  h2,
  h3 {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 20px;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: flex-end;
  align-items: center;
`;

export const Select = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 100%;
  padding: 20px;
  border: 1px solid;
  &:focus {
    outline: none;
    border: 2px solid;
    background-color: white;
  }
  position: absolute;
  top: 0;
  right: 180px;
  transform: translateY(-50%);
`;
