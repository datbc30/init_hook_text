import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseStateDemo from './Pages/HookDemo/UseStateDemo/UseStateDemo';
import BaiTapChonXe from './Pages/HookDemo/UseStateDemo/BaiTapChonXe';
import UseEffectDemo from './Pages/HookDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './Pages/HookDemo/UseCallBlackDemo/UseCallBackDemo';
import UseRefDemo from './Pages/HookDemo/UseRefDemo/UseRefDemo';
//set up redux
import { Provider } from 'react-redux'
import { store } from './redux/configStore';
import UseReduxDemo from './Pages/HookDemo/UseRedux/UseReduxDemo';
import DemoFacebookApp from './Pages/HookDemo/UseRedux/DemoFacebookApp';
import LoginDemo from './Pages/HookDemo/UseHookRouter/LoginDemo/LoginDemo';
import Home from './Pages/HookDemo/UseHookRouter/UseHookParams/Home';
import Detail from './Pages/HookDemo/UseHookRouter/UseHookParams/Detail';
import UseSreachParams from './Pages/HookDemo/UseHookRouter/UseSreahParams/UseSreachParams';
import DemoCustomHook from './Pages/HookDemo/DemoCustomHook/DemoCustomHook';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='usestate' element={<UseStateDemo />}></Route>
          <Route path='demochonxe' element={<BaiTapChonXe />}></Route>
          <Route path='useeffect' element={<UseEffectDemo />}></Route>
          <Route path='usecallback' element={<UseCallBackDemo />}></Route>
          <Route path='useref' element={<UseRefDemo />}></Route>
          <Route path='democustomhook' element={<DemoCustomHook />}></Route>

          <Route path='useredux' element={<UseReduxDemo />}></Route>
          <Route path='face' element={<DemoFacebookApp />}></Route>
          <Route path='login' element={<LoginDemo />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='search' element={<UseSreachParams />}>
           
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
