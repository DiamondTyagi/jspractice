for(let i = 0; i<=10;i++){
    console.log(`outer loop: ${i}`);
    for(let j = 0; j<=10;j++){
        console.log(i + `*` + j + `=` + i*j);
    }
}