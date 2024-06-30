function switchToEnglish() {
    document.querySelectorAll('.en').forEach(function(el) {
        el.style.display = 'block';
    });
    document.querySelectorAll('.vi').forEach(function(el) {
        el.style.display = 'none';
    });
}

function switchToVietnamese() {
    document.querySelectorAll('.en').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.vi').forEach(function(el) {
        el.style.display = 'block';
    });
}

// Hiển thị nội dung mặc định
switchToEnglish();
