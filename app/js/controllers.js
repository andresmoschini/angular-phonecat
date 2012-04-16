/* App Controllers */

function PhoneListCtrl() {
    var ctrl = this;
    var count = 0;
    this.hello = function () {
        console.debug(this);
        return "Hello, World! (" + count++ + ")";
    }
    this.orderProp = 'age';
    this.query = "Motor";
    this.phones = [
        { "name": "Nexus S", "snippet": "Fast just got faster with Nexus S.", "age": 0 },
        { "name": "Motorola XOOM™ with Wi-Fi", "snippet": "The Next, Next Generation tablet.", "age": 1 },
        { "name": "MOTOROLA XOOM™", "snippet": "The Next, Next Generation tablet.", "age": 2}];
}
