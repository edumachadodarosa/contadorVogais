const textarea = document.querySelector("#textarea");
const button = document.querySelector("#count");
const output = document.querySelector(".output");

button.addEventListener('click', () => {
    if (textarea.value === '') {
        output.innerHTML = "Por favor insira algum texto";
    } else { 
        const val = textarea.value.toLowerCase();
        let count = 0;
        for(let i = 0; i < val.length; i++) {
            if ('aeiou'.includes(val[i])) {
                count++;
            }
        }
        output.innerHTML = `O número de vogais é ${count}`;
    }
});