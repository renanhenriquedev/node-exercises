const IMC = (Weight, height) => {
    const calc = Weight / (height * height);
    console.log(calc);
    return calc
}

IMC(60, 1.75)
