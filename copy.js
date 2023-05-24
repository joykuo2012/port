const select = (DOM) => document.querySelector(DOM);

select("#btn").addEventListener("click", (e) => {
  // 建立 Range 物件
  const range = document.createRange();
  const texts = select("#text");
  range.selectNode(texts);
  // 取得 Selection 物件
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
});

const select2 = (DOM) => document.querySelector(DOM);

select("#btn2").addEventListener("click", (e) => {
  // 建立 Range 物件
  const range = document.createRange();
  const texts = select("#text2");
  range.selectNode(texts);
  // 取得 Selection 物件
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
});
