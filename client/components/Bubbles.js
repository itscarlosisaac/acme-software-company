function heroBubbles(container) {

    // Initial Setup
    var canvas = document.querySelector(container); // getting the item when the fuction is called
    var context = canvas.getContext('2d'); // passings objs of the canvas

    canvas.width = window.innerWidth;
    canvas.height = 600 //window.innerHeight;

    // Variables
    var mouse = {
        x: undefined,
        y: undefined
    };

    var maxRadius = 20;

    // Event Listeners
    window.addEventListener('mousemove', function (event) {

        mouse.x = event.x;
        mouse.y = event.y;

    });

    window.addEventListener('resize', function () {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        init();

    });

    // Constructor, Objects in js the function name is in uppercase
    function Circle(x, y, dx, dy, radius, color) {

        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;

        // methods
        this.draw = function () {

            //Circle
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            context.strokeStyle = this.color;
            context.stroke();

        };

        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            // interactivity on mouse hover
            if (
                mouse.x - this.x < 50 &&
                mouse.x - this.x > -50 &&
                mouse.y - this.y < 50 &&
                mouse.y - this.y > -50
            ) {
                if (this.radius < maxRadius) {
                    this.radius += 0.5;
                }
            } else if (this.radius > radius) {
                this.radius -= 1;
            }

            this.draw();
        };
    }

    // Constructor, Objects in js the function name is in uppercase
    function Lines(x, y, dx, radius, color) {

        this.x = x;
        this.y = y;
        this.dx = dx;
        this.radius = radius;
        this.color = color;

        // methods
        this.draw = function () {

            // Lines
            context.rect(this.x, this.y, this.radius, 0);
            context.strokeStyle = this.color;
            context.stroke();

        };


        this.update = function () {

            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            this.x += this.dx;

            this.draw();

        };
    }

    // Implementation
    var cicleArray = [];
    var lineArray = [];

    let colors = ['#FF387D', '#3BC9DF', '#9D5EFF', '#45FF38', '#FF8A06']

    function init() {

        cicleArray = [];
        lineArray = [];

        // Circles
        for (var i = 0; i < 60; i++) {

            var radius = Math.random() * 6 + 1;
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * (innerHeight - radius * 2) + radius;
            var dx = Math.random() - 0.5;
            var dy = Math.random() - 0.5;
            var color = colors[Math.floor(Math.random() * colors.length)]
            cicleArray.push(new Circle(x, y, dx, dy, radius, color));

        }

        // Lines
        for (var i = 0; i < 6; i++) {


            var radius = Math.random() * ((90 - 150) + 9) + 90;
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * (innerHeight - radius * 2) + radius;
            var dx = Math.random() - 0.5;
            var color = colors[Math.floor(Math.random() * colors.length)]

            lineArray.push(new Lines(x, y, dx, radius, color));

        }
    }


    // Animation Loop
    function animation() {

        requestAnimationFrame(animation); // create a loop, basically this going to refresh the page and draw and increment a value.

        context.clearRect(0, 0, innerWidth, innerHeight); // to clear the canvas every time

        // circles
        for (let i = 0; i < cicleArray.length; i++) {
            cicleArray[i].update();
        }

        // lines
        for (let i = 0; i < lineArray.length; i++) {
            lineArray[i].update();
        }
    }

    init();
    animation();

}

export default heroBubbles;