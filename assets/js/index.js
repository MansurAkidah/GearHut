var MVVM = {
    
    init: function () {
        var viewModel = function () {
            debugger;

            this.checkout = ko.observable(false);
            this.productName = ko.observable();
            this.price = ko.observable();
            this.Description = ko.observable();
            this.image = ko.observable();
            this.count = ko.observable(0);
            this.totalSum = ko.observable(0);
            this.names = ko.observable();
            this.phoneNumber = ko.observable();
            this.location = ko.observable();
            this.AirPodsList = ko.observable([
                { productName: 'AirPods Pro', price: 1500, description: 'With Noise Cancellation', image: 'assets/img/menu/airpods7.jpg' },
                { productName: 'JBL Live Pro 2', price: 1500, description: 'JBL Live Pro 2', image: 'assets/img/menu/airpods10.jpg'},
                { productName: 'Air R02', price: 1500, description: 'Denise', image: 'assets/img/menu/airr02.jpg' },
                { productName: 'Sony WF-1000XM4', price: 2000, description: 'Industry-Leading Noise Cancelation', image: 'https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg'},
                { productName: 'Samsung Galaxy Buds Pro', price: 1800, description: 'Immersive Sound with Intelligent ANC', image: 'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg' },
                { productName: 'AirPods Max', price: 3500, description: 'Over-Ear High-Fidelity Headphones', image: 'https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/b9f519195f84950573eea5088a49b964.png' },
                { productName: 'Bose QuietComfort Earbuds', price: 1900, description: 'Noise-Canceling True Wireless Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg'},
                { productName: 'Google Pixel Buds A-Series', price: 1200, description: 'Rich Sound and Clear Calls', image: 'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg' },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 1300, description: 'Hybrid Active Noise Cancellation', image: 'assets/img/menu/ankerSoundCore.jpg' },
                { productName: 'Jabra Elite 85t', price: 1750, description: 'Advanced Active Noise Cancellation', image: 'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg'},
                { productName: 'OnePlus Buds Pro', price: 1600, description: 'Smart Adaptive Noise Cancellation', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png' },
                // Add more AirPods or other products as needed
                { productName: 'Beats Powerbeats Pro', price: 1700, description: 'High-Performance Wireless Earphones', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg' },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 2100, description: 'Exceptional Sound Quality', image: 'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg' },
                { productName: 'Skullcandy Indy Evo', price: 1100, description: 'True Wireless In-Ear Earbuds', image: 'https://m.media-amazon.com/images/I/6119HR9g38L.jpg' },
                { productName: 'Huawei FreeBuds 4i', price: 1250, description: 'Active Noise Cancellation Earbuds', image: 'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg' },
                { productName: 'Beats Studio Buds', price: 1800, description: 'True Wireless Noise Cancelling Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg' },
                { productName: 'JBL Free X', price: 1150, description: 'Truly Wireless In-Ear Headphones', image: 'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png' },
            ]);

            this.CablesList = ko.observable([
                { productName: 'Apple USB-C Woven Charge Cable', price: 500, description: 'Fast charging for Apple devices', image: 'assets/img/cables/Apple USB-C Woven Charge Cable.jpg' },
                { productName: 'Apple Lightning to USB Cable (1 m)', price: 700, description: 'Durable and high-speed charging', image: 'assets/img/cables/Apple Lightning to USB Cable (1 m).jpg' },
                { productName: 'Apple Thunderbolt 3 (USB‑C) Cable (0.8 m)', price: 450, description: 'Supports Thunderbolt 3 data transfer up to 40 Gbps', image: 'assets/img/cables/Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).jpg' },
                { productName: 'Otterbox Lightning - USB C (Fast Charge) | 1meter - Cloud Sky', price: 350, description: 'OtterBox Fast Charge Premium Lightning to USB-C Cable', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/5/9/59d2e8f5_3825924a_SW-OS-SW-TAP2-001.jpg' },
                { productName: 'Apple Watch Magnetic Charging Cable (1 m)', price: 200, description: 'MagSafe technology with inductive charging', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1./preview/e/f/ef535460_64c2a777-Apple-Watch-Magnetic-Charging-Cable-1m.jpg' },
                { productName: 'Belkin USB-C TO LTG, BRAID SIL, 2M', price: 550, description: 'SKU: Belkin USB-C TO LTG, BRAID SIL, 2M', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/b/8/b892c0a1_e574acb7_SW-OS-SW-TAP2-027.jpg' },
                { productName: 'Apple Thunderbolt 4 (USB‑C) Pro Cable (1m)', price: 400, description: 'supports Thunderbolt 3, Thunderbolt 4 and USB 4 data transfer up to 40Gb/s', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/c/f/cf996451_7d842dd8_Thunderbolt-Pro.png' },
                // Add more cables or other products as needed
            ]);
            
            this.AvailableList = ko.observable([
                { productName: 'AirPods Pro', price: 1500, description: 'With Noise Cancellation', image: 'assets/img/menu/airpods7.jpg', inStock: 1, quantity: 1 },
                { productName: 'JBL Live Pro 2', price: 1500, description: 'JBL Live Pro 2', image: 'assets/img/menu/airpods10.jpg', inStock: 1, quantity: 1 },
                { productName: 'Air R02', price: 1500, description: 'Denise', image: 'assets/img/menu/airr02.jpg', inStock: 1, quantity: 1 },
                { productName: 'Sony WF-1000XM4', price: 2000, description: 'Industry-Leading Noise Cancelation', image: 'https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg', inStock: 0, quantity: 1 },
                { productName: 'Samsung Galaxy Buds Pro', price: 1800, description: 'Immersive Sound with Intelligent ANC', image: 'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg', inStock: 1, quantity: 1 },
                { productName: 'AirPods Max', price: 3500, description: 'Over-Ear High-Fidelity Headphones', image: 'https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/b9f519195f84950573eea5088a49b964.png', inStock: 0, quantity: 1 },
                { productName: 'Bose QuietComfort Earbuds', price: 1900, description: 'Noise-Canceling True Wireless Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg', inStock: 1, quantity: 1 },
                { productName: 'Google Pixel Buds A-Series', price: 1200, description: 'Rich Sound and Clear Calls', image: 'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg', inStock: 1, quantity: 1 },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 1300, description: 'Hybrid Active Noise Cancellation', image: 'assets/img/menu/ankerSoundCore.jpg', inStock: 1, quantity: 1 },
                { productName: 'Jabra Elite 85t', price: 1750, description: 'Advanced Active Noise Cancellation', image: 'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg', inStock: 0, quantity: 1 },
                { productName: 'OnePlus Buds Pro', price: 1600, description: 'Smart Adaptive Noise Cancellation', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png', inStock: 1, quantity: 1 },
                { productName: 'Beats Powerbeats Pro', price: 1700, description: 'High-Performance Wireless Earphones', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg', inStock: 1, quantity: 1 },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 2100, description: 'Exceptional Sound Quality', image: 'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg', inStock: 1, quantity: 1 },
                { productName: 'Skullcandy Indy Evo', price: 1100, description: 'True Wireless In-Ear Earbuds', image: 'https://m.media-amazon.com/images/I/6119HR9g38L.jpg', inStock: 0, quantity: 1 },
                { productName: 'Huawei FreeBuds 4i', price: 1250, description: 'Active Noise Cancellation Earbuds', image: 'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg', inStock: 1, quantity: 1 },
                { productName: 'Beats Studio Buds', price: 1800, description: 'True Wireless Noise Cancelling Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg', inStock: 0, quantity: 1 },
                { productName: 'JBL Free X', price: 1150, description: 'Truly Wireless In-Ear Headphones', image: 'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png', inStock: 1, quantity: 1 },
                { productName: 'Apple USB-C Woven Charge Cable', price: 500, description: 'Fast charging for Apple devices', image: 'assets/img/cables/Apple USB-C Woven Charge Cable.jpg', inStock: 0, quantity: 1 },
                { productName: 'Apple Lightning to USB Cable (1 m)', price: 700, description: 'Durable and high-speed charging', image: 'assets/img/cables/Apple Lightning to USB Cable (1 m).jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Thunderbolt 3 (USB‑C) Cable (0.8 m)', price: 450, description: 'Supports Thunderbolt 3 data transfer up to 40 Gbps', image: 'assets/img/cables/Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).jpg', inStock: 0, quantity: 1 },
                { productName: 'Otterbox Lightning - USB C (Fast Charge) | 1meter - Cloud Sky', price: 350, description: 'OtterBox Fast Charge Premium Lightning to USB-C Cable', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/5/9/59d2e8f5_3825924a_SW-OS-SW-TAP2-001.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Watch Magnetic Charging Cable (1 m)', price: 200, description: 'MagSafe technology with inductive charging', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1./preview/e/f/ef535460_64c2a777-Apple-Watch-Magnetic-Charging-Cable-1m.jpg', inStock: 1, quantity: 1 },
                { productName: 'Belkin USB-C TO LTG, BRAID SIL, 2M', price: 550, description: 'SKU: Belkin USB-C TO LTG, BRAID SIL, 2M', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/b/8/b892c0a1_e574acb7_SW-OS-SW-TAP2-027.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Thunderbolt 4 (USB‑C) Pro Cable (1m)', price: 400, description: 'supports Thunderbolt 3, Thunderbolt 4 and USB 4 data transfer up to 40Gb/s', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/c/f/cf996451_7d842dd8_Thunderbolt-Pro.png', inStock: 1, quantity: 1 },
                // ... (more cables)
            ]);
            this.cartProducts = ko.observableArray([]);
            var prods = [];
            this.sendMessageModal = function(){
                // $("#messageModal").modal('show');
            }
            this.sendMessage = function (value) {
                debugger;
                var self = this;
                let num = 254745655524;
                let msg = ""
                this.cartProducts().forEach(function(item) {
                    msg += "%0A" +item.productName + "( " + item.image +" )"+ "for Ksh" + item.price ;
                });
                let name = self.names();
                let location = self.location();
                debugger;
                var win = window.open(`https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20${location}.%20I%20would%20like%20to%20order%20these:%20${msg}.
                `, '_blank');
                // win.focus();
            }
            this.viewCart = function(){
                debugger;
                var self = this;
                var totalPrice = 0;
                $('#myModal').modal('show');
                if(prods.length == 0){
                    self.totalSum(totalPrice);
                }
                // self.AvailableList().forEach(function(item) {
                prods.forEach(function(item) {
                    totalPrice += item.price * item.quantity;
                });
                self.totalSum(totalPrice);
                
                self.cartProducts(prods);
            }
            this.closeCart  = function (){
                debugger;
                $('#myModal').modal('hide');
            }
            this.addCart = function (value){
                // alert('Added to cart');
                debugger;
                var self = this;
                this.count(this.count() + 1);
                //self.cartProducts().push(value);
                prods.push(value);
            }.bind(this);
            this.addToCart = function (value){
                // alert('Added to cart');
                debugger;
                var self = this;

                var productName = self.productName(value.productName);
                var price = self.price(value.price);
                var description = self.Description(value.description);
                var image = self.image(value.image);
                var quantity = 1;
                var value = [productName,price,description,image, quantity]

                this.count(this.count() + 1);
                //self.cartProducts().push(value);
                prods.push(value);
            }.bind(this);
            this.removeCart = function (value){
                // alert('Added to cart');
                debugger;
                var self = this;
                this.count(this.count() - 1);
                //self.cartProducts().push(value);
                //prods.pop(value);
                //prods.pop()
                self.cartProducts(prods);
                self.cartProducts.remove(value);
            }.bind(this);

            this.viewProduct = function(value){
                debugger;
                var self = this;
                self.productName(value.productName);
                self.price(value.price);
                self.Description(value.description);
                self.image(value.image);
                $('#ProductModal').modal('show');
                //self.cartProducts(prods);
            }.bind(this);
            this.closeProduct  = function (){
                debugger;
                var self = this;
                self.productName('');
                self.price('');
                self.Description('');
                self.image('');
                $('#ProductModal').modal('hide');
            }.bind(this);
            this.totalCalc = function() {
                var self = this;
                var totalPrice = 0;
                debugger;
                // Loop through each item in the array and add its price to the total
                if(prods.length == 0){
                    self.totalSum(totalPrice);
                }
                // self.AvailableList().forEach(function(item) {
                prods.forEach(function(item) {
                    totalPrice += item.price * item.quantity;
                });
                self.totalSum(totalPrice);
            };
            this.dateTwoDaysFromNow = ko.computed(function () {
                var self = this;
                var twoDaysFromNow = new Date();
                twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);
                return twoDaysFromNow.toDateString();
            });
            this.dateThreeDaysFromNow = ko.computed(function () {
                var self = this;
                var twoDaysFromNow = new Date();
                twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 3);
                return twoDaysFromNow.toDateString();
            });

        }
        var myModel = new viewModel();
        ko.applyBindings(myModel);
        // Assuming your ViewModel is named viewModel and the modal is in an element with the id "myModal"
        // ko.applyBindings(viewModel, document.getElementById('myModal'));
    }
};


$(document).ready(function () {
    debugger;
    MVVM.init();
});