const textarea = document.querySelector('.tweet-area');
const wordCountSpan = document.getElementById('wordCount');
const wordLimit = 50;

textarea.addEventListener('input', () => {
    let text = textarea.value;
    let words = text.split(/\s+/).filter(word => word.length > 0);

if (words.length > wordLimit) {
    let trimmedWords = words.slice(0, wordLimit).join(" ");
    textarea.value = trimmedWords;
    words = trimmedWords.split(/\s+/).filter(word => word.length > 0);
}

wordCountSpan.textContent = wordLimit - words.length;

});