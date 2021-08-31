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
    token: string;
    refreshToken: string;
    refreshDurationMs: string;
  }

  let tokenRefreshCounter: NodeJS.Timer;
  let refreshTokenCurrentState : number;

  function saveTokenToLocal (token: ITokenData) {
    localStorage.setItem('token', token.token);
    localStorage.setItem('refresh', token.refreshToken);
    localStorage.setItem('refreshDurationMs', token.refreshDurationMs);
  }

  function countTokenRefreshState () {
    tokenRefreshCounter = setInterval( async () => {
      refreshTokenCurrentState = Number(localStorage.getItem('refreshDurationMs'));
      if (refreshTokenCurrentState > 0) {
        refreshTokenCurrentState -= 1000;
        localStorage.setItem('refreshDurationMs', JSON.stringify(refreshTokenCurrentState));
      }
      else if (refreshTokenCurrentState <= 1000 && refreshTokenCurrentState != null) {
        clearInterval(tokenRefreshCounter);
        refreshTokenCurrentState = 0;
        let token = localStorage.getItem('refresh');
        let newTokendata = await refreshToken(token);
        console.log(newTokendata);
        saveTokenToLocal(newTokendata);
        console.log('Authentification completed');
        countTokenRefreshState();
      }
      else {
        return;
      }
    }, 1000);
  }

  async function autoTokenReload () {
    let localToken = localStorage.getItem('token');
    if (localToken !== null) {
      console.log('We have token');
      countTokenRefreshState();
    }
    else {
      console.log('Authentification is in progress');
      await requestToken();
      let tokenData = await getToken();
      console.log(tokenData);
      saveTokenToLocal(tokenData);
      console.log('Authentification completed');
      countTokenRefreshState();
    }
  }
  
  autoTokenReload ();

  return (
    <div></div>
  );
}
