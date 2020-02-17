class VigenereCipheringMachine {
    encrypt(input, key) {
        if(!input || !key) throw new Error();

        let output = "";
        const len = input.length;
	    for (let i = 0, j = 0; i < len; i++) {
            const c = input.charCodeAt(i);
		    if ((65 <= c && c <= 90) || (97 <= c && c <= 122)) {
			    output += String.fromCharCode((c + key[j % key.length]) % 26);
			    j++;
		    } else {
			    output += input[i];
		    }
	    }
	    return output;
    }

    decrypt(input, key) {
        if(!input || !key) throw new Error();
    }
}

module.exports = VigenereCipheringMachine;
