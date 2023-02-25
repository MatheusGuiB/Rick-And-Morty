import styled from 'styled-components'

export const StyledHeader = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #ff8484;
  display: flex;
  align-items: center;
  /* position: absolute; */

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
  }
  .container .header-icon {
    font-size: 50px;
  }
  .container button {
    padding: 10px 15px 10px 15px;
    border-radius: 8px;
  }
`
