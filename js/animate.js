// 封装一个JS文件， 这个文件就是动画文件

/*
    element：要移动的元素
    targetVal：要移动的距离
   speed：一步要移动距离
 */

// 定义全局变量
var dsq;

function moveElement(element, targetVal, speed) {

	// 一上来先清除上一个
	window.clearInterval(dsq);

	// 点击设置定时器
	dsq = window.setInterval(function() {
		// 每次点击都会启动定时器，当多次点击，多次启动，会有n个定时器提示控制元素移动         // 我们要想处理这个问题：保证页面只有一个定时器
		// 每次点击要清除上一个定时器，再打开新的定时器

		// 要想设置盒子移动，我们需要知道上一次盒子left的值，再加上10，最后赋值给盒子的left
		// 获取盒子左距离
		var leftVal = element.offsetLeft;
		// 如果到达指定位置，我们要停止定时器继续运动
		if (leftVal == targetVal) {
			window.clearInterval(dsq);
			return;
		}

		// 判断：如果不成倍数的移动，那么元素会左右晃动，原因是因为不够走，强制走就会大于，再小目标来回弹动
		// 处理：如果不够继续移动一步，直接让元素到大目标既可
		// 所以此时元素有两种，一种够移动一步，一种是不够走一步，不够走一步直接设置元素到达目标
		if (Math.abs(targetVal - leftVal) < speed) { // 不够走一步
			// 直接把元素设置到目标
			element.style.left = targetVal + 'px';
		} else {
			// 够走一步
			// 加10
			if (targetVal > leftVal) { // 正方向
				leftVal = leftVal + speed;
			} else {
				leftVal = leftVal - speed;
			}

			// 设置给盒子的left
			element.style.left = leftVal + 'px';
		}

	}, 10);

}
