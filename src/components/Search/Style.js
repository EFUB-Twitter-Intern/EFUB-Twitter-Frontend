import styled from "styled-components"
export const Wrapper = styled.div`
  width:100%;
  background:transparent;
`
export const SearchArea = styled.div`
  background: #f0f3f4;
  border-radius: 30px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 12px;
`;

export const SearchBar = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  overflow: hidden;
  resize: none;
  outline: none;
  margin-left: 4px;
`;