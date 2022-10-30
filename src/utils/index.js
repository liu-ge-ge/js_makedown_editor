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

  /**
* 校验只要是数字（包含正负整数，0以及正负浮点数）就返回true
**/

function isNumber(val){

  var regPos = /^[0-9]+.?[0-9]*/; //判断是否是数字。

  if(regPos.test(val) ){
      return true;
  }else{
      return false;
  }
}

/**
 * 插入Dom方法
 * 待思考?
 */

function insertEditorDom(){

}

export {
    creHlabel,
    forcuDiv,
    isNumber,
    insertEditorDom
}