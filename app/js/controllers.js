/* App Controllers */

function PhoneListCtrl($xhr) {
    var self = this;

    $xhr('GET', 'phones/phones.json', function (code, response) {
        self.phones = response;
    });

    var count = 0;
    self.hello = function () {
        console.debug(self);
        return "Hello, World! (" + count++ + ")";
    }
    self.orderProp = 'age';
    self.query = "Motor";
}
