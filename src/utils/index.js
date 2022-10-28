const creHlabel = (num) => {
    let str = "";
    for (let i = 0; i < num; i++) {
      str += "#";
    }
    return str;
  };

//聚焦
const forcuDiv = (myeditor) => {
    myeditor.focus();
    var range = document.createRange();
    range.selectNodeContents(myeditor);
    range.collapse(false);
    var sel = window.getSelection();
    //判断光标位置，如不需要可删除
    if (sel.anchorOffset != 0) {
      return;
    }
    sel.removeAllRanges();
    sel.addRange(range);
  };
export {
    creHlabel,
    forcuDiv
}