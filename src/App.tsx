import { useState } from 'react'
import styled from "styled-components";
import IdStore from './zustand/stores';

// 테스트 코드들 삭제가눙
const SayHello = styled.div`
  border: 1px solid red;
`;

function App() {
  
  const [count, setCount] = useState(0);

  const {id} = IdStore();

  return (
    <div className="App">
      <SayHello>
        <h1>Hello</h1>
        <div>{id} zustand 상태관리 </div>
      </SayHello>
      <input type="text" value={count} />
      <button onClick={()=> setCount((curr) => curr+1)}>Up!</button>
    </div>
  )
}

export default App
