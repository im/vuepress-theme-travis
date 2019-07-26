Date.prototype.Format = function (fmt) {
	var o = {
		"y+": this.getFullYear(),
		"M+": this.getMonth() + 1, // month
		"d+": this.getDate(), // day
		"H+": this.getHours(), // hour
		"m+": this.getMinutes(), // Minute
		"s+": this.getSeconds(), // Seconds
		"q+": Math.floor((this.getMonth() + 3) / 3), // Quarter
		"S": this.getMilliseconds() // millisecond
	};
	if (!fmt) fmt = 'yyyy-MM-dd HH:mm:ss'
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	return fmt;
}