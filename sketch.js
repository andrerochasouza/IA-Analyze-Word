var train = true;

function setup() {
    createCanvas(720, 400);

    nn = new neuralNetwork(2, 3, 1);

    // XOR Problem
    dataset = {
        inputs:
            [[0, 0],
            [0, 1],
            [1, 0],
            [1, 1]],
        outputs:
            [[0],
            [1],
            [1],
            [0]]
    }

    points = [];
    seed = 100 * random();

    plot = new GPlot(this);
    plot.setPos(0, 0);
    plot.setOuterDim(width, height);


    // Set the plot title and the axis labels
    plot.setTitleText("Crescimento do treinamento");
    plot.getXAxis().setAxisLabelText("Eixo X");
    plot.getYAxis().setAxisLabelText("Eixo Y");

    // Draw it!
    plot.defaultDraw();
}

function draw() {
    if (train) {
        for (var i = 0; i < 10000; i++) {
            var index = floor(random(4));
            nn.train(dataset.inputs[index], dataset.outputs[index]);
        }

        if (nn.predict([0, 0])[0] < 0.04 && nn.predict([1, 0])[0] > 0.98) {
            train = false;
            console.log("terminou");
        }

    }
}