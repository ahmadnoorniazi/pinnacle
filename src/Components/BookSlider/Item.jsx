import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 150px;
  background-color: #fff;
  color: #fff;
  margin: 15px;
  font-size: 4em;
  padding: 10px;
  transition: transform .2s;
  :hover {
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2);
    height: auto;
	}
`;
