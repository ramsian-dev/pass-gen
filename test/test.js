const passGen = require("../main");

function testPassGen() {
    let charset =  "123abc";
    
    let pass = passGen.default.generatePassword(12, charset);

    if (pass.length != 12 ){
        console.log("password len is wrong: ", pass)
        return
    }
    
    for (i in pass) {
        if (pass[i] == "1" || pass[i] == "2" || pass[i] == "3" || pass[i] == "a" || pass[i] == "b" || pass[i] == "c") {
            continue
        }
        console.log("charset usage error: ", pass);
        return
    }
    console.log("test done successfully.");
}

testPassGen();
