/*
原理:利用touchstart 和 touchend 两个事件位置基本一致,若没有发生位移则是点击事件
*/
function tap(options) {
  /*
   * @desc tap
   * @param {object} opts
   * @param dom 对象
   * @param callback 点击回调函数
  */
    const defaultOpts = {
        dom:'',
        callback:null
    }
    const opts = Object.assign(defaultOpts,options);
    let touchPosition = {
        x: 0,
        y: 0,
        time: null
    }
    const touchStart = function(event) {
        touchPosition.x = event.touches[0].pageX,
        touchPosition.y = event.touches[0].pageY,
        touchPosition.time = new Date().getTime()
    }
    const  touchEnd = function(event) {
        event.preventDefault() //阻止事件默认行为
        event.stopPropagation() //阻止事件冒泡
        const timeDiffer = new Date().getTime() - touchPosition.time
        touchPosition.x -= event.changedTouches[0].pageX
        touchPosition.y -= event.changedTouches[0].pageY
        if (Math.abs(touchPosition.x) < 5 && Math.abs(touchPosition.y) < 5 && timeDiffer < 500) {
            opts.callback.call(this, event)
        }
    }
    const bindEvent = function(){
        opts.dom.addEventListener('touchstart', touchStart)
        opts.dom.addEventListener('touchend', touchEnd)
    }
    bindEvent()
    return {
        removeEvent:function(){
            opts.dom.removeEventListener('touchstart', touchStart)
            opts.dom.removeEventListener('touchend', touchEnd)
        }
    }
}

export default tap