# DOM practice

- addEventListener () วิธีการที่ใช้ในการเพิ่มตัวจัดการเหตุการณ์ที่จะเป็นองค์ประกอบที่ระบุ
- addEventListener () วิธีการเพิ่มตัวจัดการเหตุการณ์ไม่เขียนทับตัวจัดการเหตุการณ์ที่มีอยู่
- e.preventDefault() เอาไว้ Cancel event ที่จะเกิดขึ้น เช่นเวลาเรากดปุ่ม submit form มันจะ refresh หน้า แต่เราไม่ต้องการให้มัน refresh หน้า 

```js
// e.preventDefault
function handleOnSubmit(event) {
   event.preventDefault()
}

<form onSubmit={handleOnSubmit} >
 <button type"submit"> submit form </button>
</form>

```
