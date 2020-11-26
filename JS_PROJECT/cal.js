val = (n) => {
    console.log(n);
    len = n.length
    console.log(len);
    exp = len - 1
    s = 0
    go = true
    for (i of n) {
        if(i == 8 || i == 9) {
            console.log('err');
            document.getElementById("disp").innerHTML = `<h1>please enter an octal number</h1>`
            go = false
        }
    }
    if(go) {
        for (i of n) {
            s += (i*8**exp)
            exp -=1
        }
        document.getElementById("disp").innerHTML = `<h2>Decimal Value =  ${s}</h2>`
        decimal = s
        r_list = []
        while(decimal > 0) {
            q = parseInt(decimal/2)
            r = decimal%2
            r_list.push(r)
            decimal = q
        }
        r_list.reverse()
        if(r_list == '') {
            r_list.push(0)
        }
        document.getElementById("binary").innerHTML = `<h2>Binary Value =  ${r_list}</h2>`
    }
}

oncall = () => {
    n = document.getElementById("read_val").value
    document.getElementById("binary").innerHTML = ''
    document.getElementById("disp").innerHTML = ''
    val(n)
}
