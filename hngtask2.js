const data = [
    {
        'Principal': 2500,
        'Time': 1.8
    },
    {
        'Principal': 1000,
        'Time': 5
    },
    {
        'Principal': 3000,
        'Time': 1
    },
    {
        'Principal': 2000,
        'Time': 3
    }
];

const intrestCalculator = data => {
    const intrestData = [];

    for (let x = 0; x < data.length; x++) {

        let rate;
        if (data[x].Principal >= 2500 && data[x].Time > 1 && data[x].Time < 3) {
            rate = 3;
        }

        else if (data[x].Principal >= 2500 && data[x].Time >= 3) {
            rate = 4;
        }

        else if (data[x].Principal < 2500 || data[x].Time <= 1) {
            rate = 2;
        }

        else {
            rate = 1;
        }

        let intrest = (data[x].Principal * rate * data[x].Time) / 100;
        intrestData.push({
            'Principal': data[x].Principal,
            'Rate': rate,
            'Time': data[x].Time,
            'intrest': intrest
        });
    }

    console.log(intrestData);
    return intrestData;
}
intrestCalculator(data);
    