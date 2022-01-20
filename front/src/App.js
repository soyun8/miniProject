import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Main from "./pages/Main";
import Detail from "./pages/Details";
import Write from "./pages/Write";
import Layout from "./components/layout/Layout";
import customAxios from './customAxios';

function App() {
    // IP주소 변수 선언
  const [ip, setIp] = useState('');
    // IP주소 값을 설정합니다.
    function callback(data) {
      setIp(data);
    }
      // 첫번째 렌더링을 다 마친 후 실행합니다.
      useEffect(
        () => {
          // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
          customAxios('/ip', callback);
        }, []
      );
  const [message, setMessage]=useState([]);
  useEffect(()=>{
    fetch("/hello")
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
            setMessage(data);
        });
  },[]);
  return (
    <div className="App">
      <header className="App-header">
              이 기기의 IP주소는 {ip}입니다.
        // 기본코드
         <Layout>
             <Switch>
               <Route path="/" exact>
                 <Main />
               </Route>
               <Route path="/detail" exact>
                 <Detail />
               </Route>
               <Route path="/write" exact>
                 <Write />
               </Route>
             </Switch>
           </Layout>
      </header>
    </div>
  );
}

export default App;