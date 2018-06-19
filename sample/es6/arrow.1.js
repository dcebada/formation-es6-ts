var maxFinder = {
    max: 0,
    find: function (numbers) {
        numbers.forEach(
            function (element) {
                if (element > this.max) {
                    this.max = element;
                }
            });
    }
};
maxFinder.find([2, 3, 4]);


var maxFinder = {
    max: 0,
    find: function (numbers) {
        var self = this;
        numbers.forEach(
            function (element) {
                if (element > self.max) {
                    self.max = element;
                }
            });
    }
};
maxFinder.find([2, 3, 4]);


var maxFinder = {
    max: 0,
    find: function (numbers) {
        numbers.forEach(
            function (element) {
                if (element > this.max) {
                    this.max = element;
                }
            }.bind(this));
    }
};
maxFinder.find([2, 3, 4]);


var maxFinder = {
    max: 0,
    find: function (numbers) {
        numbers.forEach(
            function (element) {
                if (element > this.max) {
                    this.max = element;
                }
            }, this);
    }
};
maxFinder.find([2, 3, 4]);


const maxFinder = {
    max: 0,
    find: function (numbers) {
        numbers.forEach(element => {
            if (element > this.max) {
                this.max = element;
            }
        });
    }
};
maxFinder.find([2, 3, 4]);