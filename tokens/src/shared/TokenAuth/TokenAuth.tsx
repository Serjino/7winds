import React from 'react';

export function TokenAuth() {

  async function requestToken () {
    let req = await fetch("https://backend.mobilization2021.tk/auth/request", {
      "headers": {
        "content-type": "application/json;charset=UTF-8"
      },
      "body": "{\"phone\":\"89003214590\"}",
      "method": "POST"
    });
    let res = await req.json();
    return res;
  }

  async function getToken () {
    let req = await fetch("https://backend.mobilization2021.tk/auth/validate", {
      "headers": {
        "content-type": "application/json;charset=UTF-8"
      },
      "body": "{\"code\":\"0000\",\"phone\":\"89003214590\"}",
      "method": "POST"
    })
    let tokenData = await req.json();
    return tokenData;
  }

  async function refreshToken (token:string | null) {
    console.log(`${token}`);
    let req = await fetch("https://backend.mobilization2021.tk/auth/refresh", {
      "headers": {
        "content-type": "application/json;charset=UTF-8"
      },
      "body": `{\"token\":\"${token}\"}`,
      "method": "POST"
    });
    let newTokenData = await req.json();
    return newTokenData;
  }

  interface ITokenData {
    refreshDurationMs: number;
    refreshToken: string;
    token: string;
    tokenDurationMs: number;
  }

  function saveTokenToLocalStorage (tokenDataFromServer: ITokenData) {
    localStorage.setItem('token', tokenDataFromServer.token);
    localStorage.setItem('refreshToken', tokenDataFromServer.refreshToken);
    localStorage.setItem('tokenDurationMs', JSON.stringify(tokenDataFromServer.tokenDurationMs));
    localStorage.setItem('refreshDurationMs', JSON.stringify(tokenDataFromServer.refreshDurationMs));
    localStorage.setItem('tokenEnd', JSON.stringify(new Date().getTime() + 10000));
  }

  async function autoTokenReload (){
    let token = localStorage.getItem('token');
    let tokenAvailableUntilMs = Number(localStorage.getItem('tokenEnd'));
    let startEndDiff = new Date().getTime() - tokenAvailableUntilMs;
    if (token != null) {
      console.log(`Token is available for ${Math.abs(startEndDiff)}`);
      setTimeout(async () => {
        let refreshTokenFromStorage = localStorage.getItem('refreshToken');
        let newToken = await refreshToken(refreshTokenFromStorage);
        saveTokenToLocalStorage(newToken);
        console.log('Token reloaded');
        startEndDiff = new Date().getTime() - tokenAvailableUntilMs;
        autoTokenReload();
      }, Math.abs(startEndDiff));
    } 
    else {
      console.log('First time token initiation');
      await requestToken();
      let token = await getToken();
      saveTokenToLocalStorage(token);
      autoTokenReload();
    }
  }

  autoTokenReload();

  return (
    <div></div>
  );
}
