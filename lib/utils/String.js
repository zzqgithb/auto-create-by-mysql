// 下划线转驼峰
String.prototype.underlineToHump = function () {
    let reg = /_(\w)/g;
    return this.toLowerCase().replace(reg, (x) => {
            return x.slice(1).toUpperCase()
        }
    );
}
String.prototype.transferString = function () {
    let str = this
    try {
        str = str.replace(/\r\n/g, '')
    } catch (e) {
        alert(e.message);
    }
    return str.trim();
}