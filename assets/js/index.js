var MVVM = {
    
    init: function () {
        var viewModel = function () {
            debugger;

            this.hasError = ko.observable(false);
            this.productName = ko.observable();
            this.price = ko.observable();
            this.Description = ko.observable();
            this.image = ko.observable();
            this.count = ko.observable(0);
            this.AirPodsList = ko.observable([
                { productName: 'AirPods Pro', price: 'Ksh.1,500', description: 'With Noise Cancellation', image: 'assets/img/menu/airpods7.jpg' },
                { productName: 'JBL Live Pro 2', price: 'Ksh.1,500', description: 'JBL Live Pro 2', image: 'assets/img/menu/airpods10.jpg'},
                { productName: 'Air R02', price: 'Ksh.1,500', description: 'Denise', image: 'assets/img/menu/airr02.jpg' },
                { productName: 'Sony WF-1000XM4', price: 'Ksh.2,000', description: 'Industry-Leading Noise Cancelation', image: 'https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg'},
                { productName: 'Samsung Galaxy Buds Pro', price: 'Ksh.1,800', description: 'Immersive Sound with Intelligent ANC', image: 'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg' },
                { productName: 'AirPods Max', price: 'Ksh.3,500', description: 'Over-Ear High-Fidelity Headphones', image: 'https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/b9f519195f84950573eea5088a49b964.png' },
                { productName: 'Bose QuietComfort Earbuds', price: 'Ksh.1,900', description: 'Noise-Canceling True Wireless Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg'},
                { productName: 'Google Pixel Buds A-Series', price: 'Ksh.1,200', description: 'Rich Sound and Clear Calls', image: 'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg' },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 'Ksh.1,300', description: 'Hybrid Active Noise Cancellation', image: 'assets/img/menu/ankerSoundCore.jpg' },
                { productName: 'Jabra Elite 85t', price: 'Ksh.1,750', description: 'Advanced Active Noise Cancellation', image: 'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg'},
                { productName: 'OnePlus Buds Pro', price: 'Ksh.1,600', description: 'Smart Adaptive Noise Cancellation', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png' },
                // Add more AirPods or other products as needed
                { productName: 'Beats Powerbeats Pro', price: 'Ksh.1,700', description: 'High-Performance Wireless Earphones', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg' },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 'Ksh.2,100', description: 'Exceptional Sound Quality', image: 'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg' },
                { productName: 'Skullcandy Indy Evo', price: 'Ksh.1,100', description: 'True Wireless In-Ear Earbuds', image: 'https://m.media-amazon.com/images/I/6119HR9g38L.jpg' },
                { productName: 'Huawei FreeBuds 4i', price: 'Ksh.1,250', description: 'Active Noise Cancellation Earbuds', image: 'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg' },
                { productName: 'Beats Studio Buds', price: 'Ksh.1,800', description: 'True Wireless Noise Cancelling Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg' },
                { productName: 'JBL Free X', price: 'Ksh.1,150', description: 'Truly Wireless In-Ear Headphones', image: 'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png' },
            ]);

            this.CablesList = ko.observable([
                { productName: 'Apple USB-C Woven Charge Cable', price: 'Ksh.500', description: 'Fast charging for Apple devices', image: 'assets/img/cables/Apple USB-C Woven Charge Cable.jpg' },
                { productName: 'Apple Lightning to USB Cable (1 m)', price: 'Ksh.700', description: 'Durable and high-speed charging', image: 'assets/img/cables/Apple Lightning to USB Cable (1 m).jpg' },
                { productName: 'Apple Thunderbolt 3 (USB‑C) Cable (0.8 m)', price: 'Ksh.450', description: 'Supports Thunderbolt 3 data transfer up to 40 Gbps', image: 'assets/img/cables/Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).jpg' },
                { productName: 'Otterbox Lightning - USB C (Fast Charge) | 1meter - Cloud Sky', price: 'Ksh.350', description: 'OtterBox Fast Charge Premium Lightning to USB-C Cable', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/5/9/59d2e8f5_3825924a_SW-OS-SW-TAP2-001.jpg' },
                { productName: 'Apple Watch Magnetic Charging Cable (1 m)', price: 'Ksh.200', description: 'MagSafe technology with inductive charging', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1./preview/e/f/ef535460_64c2a777-Apple-Watch-Magnetic-Charging-Cable-1m.jpg' },
                { productName: 'Belkin USB-C TO LTG, BRAID SIL, 2M', price: 'Ksh.550', description: 'SKU: Belkin USB-C TO LTG, BRAID SIL, 2M', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/b/8/b892c0a1_e574acb7_SW-OS-SW-TAP2-027.jpg' },
                { productName: 'Apple Thunderbolt 4 (USB‑C) Pro Cable (1m)', price: 'Ksh.400', description: 'supports Thunderbolt 3, Thunderbolt 4 and USB 4 data transfer up to 40Gb/s', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/c/f/cf996451_7d842dd8_Thunderbolt-Pro.png' },
                // Add more cables or other products as needed
            ]);
            
            this.AvailableList = ko.observable([
                { productName: 'AirPods Pro', price: 'Ksh.1,500', description: 'With Noise Cancellation', image: 'assets/img/menu/airpods7.jpg', inStock: 1, quantity: 1 },
                { productName: 'JBL Live Pro 2', price: 'Ksh.1,500', description: 'JBL Live Pro 2', image: 'assets/img/menu/airpods10.jpg', inStock: 1, quantity: 1 },
                { productName: 'Air R02', price: 'Ksh.1,500', description: 'Denise', image: 'assets/img/menu/airr02.jpg', inStock: 1, quantity: 1 },
                { productName: 'Sony WF-1000XM4', price: 'Ksh.2,000', description: 'Industry-Leading Noise Cancelation', image: 'https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg', inStock: 0, quantity: 1 },
                { productName: 'Samsung Galaxy Buds Pro', price: 'Ksh.1,800', description: 'Immersive Sound with Intelligent ANC', image: 'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg', inStock: 1, quantity: 1 },
                { productName: 'AirPods Max', price: 'Ksh.3,500', description: 'Over-Ear High-Fidelity Headphones', image: 'https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/b9f519195f84950573eea5088a49b964.png', inStock: 0, quantity: 1 },
                { productName: 'Bose QuietComfort Earbuds', price: 'Ksh.1,900', description: 'Noise-Canceling True Wireless Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg', inStock: 1, quantity: 1 },
                { productName: 'Google Pixel Buds A-Series', price: 'Ksh.1,200', description: 'Rich Sound and Clear Calls', image: 'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg', inStock: 1, quantity: 1 },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 'Ksh.1,300', description: 'Hybrid Active Noise Cancellation', image: 'assets/img/menu/ankerSoundCore.jpg', inStock: 1, quantity: 1 },
                { productName: 'Jabra Elite 85t', price: 'Ksh.1,750', description: 'Advanced Active Noise Cancellation', image: 'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg', inStock: 0, quantity: 1 },
                { productName: 'OnePlus Buds Pro', price: 'Ksh.1,600', description: 'Smart Adaptive Noise Cancellation', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png', inStock: 1, quantity: 1 },
                { productName: 'Beats Powerbeats Pro', price: 'Ksh.1,700', description: 'High-Performance Wireless Earphones', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg', inStock: 1, quantity: 1 },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 'Ksh.2,100', description: 'Exceptional Sound Quality', image: 'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg', inStock: 1, quantity: 1 },
                { productName: 'Skullcandy Indy Evo', price: 'Ksh.1,100', description: 'True Wireless In-Ear Earbuds', image: 'https://m.media-amazon.com/images/I/6119HR9g38L.jpg', inStock: 0, quantity: 1 },
                { productName: 'Huawei FreeBuds 4i', price: 'Ksh.1,250', description: 'Active Noise Cancellation Earbuds', image: 'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg', inStock: 1, quantity: 1 },
                { productName: 'Beats Studio Buds', price: 'Ksh.1,800', description: 'True Wireless Noise Cancelling Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg', inStock: 0, quantity: 1 },
                { productName: 'JBL Free X', price: 'Ksh.1,150', description: 'Truly Wireless In-Ear Headphones', image: 'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png', inStock: 1, quantity: 1 },
                { productName: 'Apple USB-C Woven Charge Cable', price: 'Ksh.500', description: 'Fast charging for Apple devices', image: 'assets/img/cables/Apple USB-C Woven Charge Cable.jpg', inStock: 0, quantity: 1 },
                { productName: 'Apple Lightning to USB Cable (1 m)', price: 'Ksh.700', description: 'Durable and high-speed charging', image: 'assets/img/cables/Apple Lightning to USB Cable (1 m).jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Thunderbolt 3 (USB‑C) Cable (0.8 m)', price: 'Ksh.450', description: 'Supports Thunderbolt 3 data transfer up to 40 Gbps', image: 'assets/img/cables/Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).jpg', inStock: 0, quantity: 1 },
                { productName: 'Otterbox Lightning - USB C (Fast Charge) | 1meter - Cloud Sky', price: 'Ksh.350', description: 'OtterBox Fast Charge Premium Lightning to USB-C Cable', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/5/9/59d2e8f5_3825924a_SW-OS-SW-TAP2-001.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Watch Magnetic Charging Cable (1 m)', price: 'Ksh.200', description: 'MagSafe technology with inductive charging', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1./preview/e/f/ef535460_64c2a777-Apple-Watch-Magnetic-Charging-Cable-1m.jpg', inStock: 1, quantity: 1 },
                { productName: 'Belkin USB-C TO LTG, BRAID SIL, 2M', price: 'Ksh.550', description: 'SKU: Belkin USB-C TO LTG, BRAID SIL, 2M', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/b/8/b892c0a1_e574acb7_SW-OS-SW-TAP2-027.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Thunderbolt 4 (USB‑C) Pro Cable (1m)', price: 'Ksh.400', description: 'supports Thunderbolt 3, Thunderbolt 4 and USB 4 data transfer up to 40Gb/s', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/c/f/cf996451_7d842dd8_Thunderbolt-Pro.png', inStock: 1, quantity: 1 },
                // ... (more cables)
            ]);
            
            
            this.cartProducts = ko.observableArray([]);
            var prods = [];
            this.sendMessage = function (value) {
                debugger;
                // let num=document.getElementById("number").value;
                
                // let msg= document.getElementById("msg").value;
                
                // let name= document.getElementById("name").value;
                    
                // var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`, '_blank');
                // win.focus();
            }
            
            this.viewCart = function(){
                debugger;
                var self = this;
                $('#myModal').modal('show');
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