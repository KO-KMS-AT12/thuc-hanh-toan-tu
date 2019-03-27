function bai1() {
    var a = parseInt(prompt("Nhap vao a:"));
    var b = parseInt(prompt("Nhap vao b:"));
    document.write(a+b<4 ? 'Below':'Over');
}
bai1();
document.write("<br>");
function bai2() {
    var login = prompt("Nhap vao message:");
    document.write((login=='Employee')?'Hello':(login=='Director')?'Greetings':(login==null)?'No login':'');
}
bai2();