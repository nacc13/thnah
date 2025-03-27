document.getElementById('download-btn').addEventListener('click', function() {
    const name = document.getElementById('name-input').value;
    if (!name) {
        alert('الرجاء إدخال اسمك!');
        return;
    }

    // إنشاء صورة مخصصة مع الاسم (يمكن استبدال هذا الجزء برسم على Canvas إذا أردت إضافة الاسم للصورة)
    const image = document.getElementById('invitation-image');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    
    // رسم الصورة والخلفية
    ctx.drawImage(image, 0, 0);
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(name, 50, 50); // إضافة الاسم إلى الصورة (تعديل الإحداثيات حسب الحاجة)
    
    // تحويل Canvas إلى صورة للتحميل
    const link = document.createElement('a');
    link.download = `دعوة-${name}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
});