   // وقتی کاربر کلیدی رو فشار بده، این تابع اجرا میشه
   document.addEventListener('keydown', function(event) {
    // گرفتن عنصر output با استفاده از id
    const output = document.getElementById('output');

    // نمایش نام کلید فشرده‌شده در خروجی
    output.textContent = `تو الان کلید "${event.key}" زدی`;
  });