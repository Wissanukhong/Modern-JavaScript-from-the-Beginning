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