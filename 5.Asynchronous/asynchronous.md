# Asynchronous

ก่อนที่เราจะทำความรู้จักกับ Asynchronous เราจะต้องรู้จักเรื่องของ Synchronous ก่อน Synchronous คือ การทำงานที่เราต้องรอ ให้คำสั่งก่อนหน้าทำงานเสร็จก่อน จะทำงานในคำสั่งต่อไป ยกตัวอย่างเช่น

```js
posts = loadPostsSync();
// psot จะต้องรอให้ loadPostsSync() Fetch ข้อมูลมาให้เสร็จก่อนถึงจะทำงานต่อ
// หลังจากที่ posts ทำงานเสร็จแล้วถึงจะทำงานคำสั่งต่อไป

doThenextThins();
// จะทำงานก็ต่อเมื่อ posts ทำงานเสร็จแล้วเท่านั้น

loadPostsSync(function () {
    // loadPostsSync จะทำการ Fetch มาทำงานก่อน
    // LoadPostsSync ทำงานเสร็จถึงจะทำงาน คำสั่งต่อไป
});

doThenextThins();
// ทำงานทันทีเลย โดยที่ไม่ต้องรอให้ LoadPostsSync ทำงานเสร็จก่อน

```

## HTTP status

- 200 : 'OK'
- 403 : 'Forbidden'
- 404 : 'Not Found'

## ready state Values

-  0 : request not initialized
-  1 : server connection established
-  2 : request received
-  3 : processing request
-  4 : request finished and reponse is ready

XMLHttpRequest (XHR) เป็นเอพีไอที่สามารถเรียกใช้ได้จาก จาวาสคริปต์ เจสคริปต์ วีบีสคริปต์ และภาษาสคริปต์อื่นๆ ในการแลกเปลี่ยน และปรับรูปแบบ XML จากเว็บเซิร์ฟเวอร์ โดยใช้ HTTP ซึ่งสร้างการเชื่อมต่อระหว่างเว็บเบราว์เซอร์ (Client-Side) กับ เว็บเซิร์ฟเวอร์ (Server-Side)