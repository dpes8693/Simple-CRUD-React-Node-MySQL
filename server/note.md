# List
前端會控制路由 Router
## STATUS code 
200 OK GET 成功取得資料
201 Created PUT POST 修改或新增成功
204 OK GET No Content 成功取得但資料是空的

400 Bad Request (en-US) 參數沒給
403 Forbidden 權限阻擋 未授權
404 Path Not Found 路徑問題 
<!-- 422：請求是正確的，但可能不符合操作流程（大多可從後端的回應中找到問題）。
429：請求次數過多，你被後端封鎖了，請過一段時間再試試看。 -->

500：後端不可預期的錯誤，請直接與後端聯絡


===
401 Unauthorized 未認證
503：後端無法正確處理該請求， 請跟老闆要求更好的機器（Ｘ） ，請跟後端確認當前伺服器狀態。

## 參考資料
https://www.cnblogs.com/qiqi715/p/12982102.html

## 為什麼POSTMAN有資料 網頁沒有?
1. fetch 的 header 很重要!
2. fetch 的 body 要轉字串因為後端伺服器是轉換成binary! body: JSON.stringify(body)
https://medium.com/tds-note/how-not-to-use-body-parser-b93241ba2d6a
https://stackoverflow.com/questions/54016068/empty-body-in-fetch-post-request

## fetch錯誤處理範例

```js
fetch('https://reqres.in/invalid-url')
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : null;

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        element.innerHTML = JSON.stringify(data, null, 4);
    })
    .catch(error => {
        element.parentElement.innerHTML = `Error: ${error}`;
        console.error('There was an error!', error);
    });
```    