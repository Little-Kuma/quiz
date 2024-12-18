let count = 0; //เอาไว้นับคะแนนที่กดแล้วถูกต้อง

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count=1; //ที่ต้อง=1 เพราะกันไว้ ไม่ให้คะแนนมัน stack ถ้าคลิ๊กซ้ำๆ เลยกำหนดให้มันแค่เท่ากับ1 เท่านั้น
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
  }

  function checkAnswer2(answer) {
    const result = document.getElementById('result2'); //ไอ้ตัว result ในโค้ดนี้จะเป็นแค่ตัวปแปรนะ
    const result3 = document.getElementById('result3');
    if (answer === 'd') {
        result.textContent = "ถูกต้อง ไก่ต้องมี 2 ขาสิเพื่อน";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "ไม่ถูก ตอบใหม่แจ้";
        result.style.color = 'red';
    }

    result3.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน"
    count = 0; //อันนี้คือดักไว้ไม่ให้มัน stack คะแนน
  }