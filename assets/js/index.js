var MVVM = {
    
    init: function () {
        var viewModel = function () {
            debugger;

            this.hasError = ko.observable(false);
            this.productName = ko.observable();
            this.price = ko.observable();
            this.Description = ko.observable();
            this.image = ko.observable();
            this.AirPodsList = ko.observable([
                { productName: 'AirPods Pro', price: 'Ksh.1,500', Description: 'With Noise Cancellation', image: 'assets/img/menu/airpods7.jpg' },
                { productName: 'JBL Live Pro 2', price: 'Ksh.1,500', Description: 'JBL Live Pro 2', image: 'assets/img/menu/airpods10.jpg'},
                { productName: 'Air R02', price: 'Ksh.1,500', Description: 'Denise', image: 'assets/img/menu/airr02.jpg' },
                { productName: 'Sony WF-1000XM4', price: 'Ksh.2,000', Description: 'Industry-Leading Noise Cancelation', image: 'https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg'},
                { productName: 'Samsung Galaxy Buds Pro', price: 'Ksh.1,800', Description: 'Immersive Sound with Intelligent ANC', image: 'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg' },
                { productName: 'AirPods Max', price: 'Ksh.3,500', Description: 'Over-Ear High-Fidelity Headphones', image: 'https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/b9f519195f84950573eea5088a49b964.png' },
                { productName: 'Bose QuietComfort Earbuds', price: 'Ksh.1,900', Description: 'Noise-Canceling True Wireless Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg'},
                { productName: 'Google Pixel Buds A-Series', price: 'Ksh.1,200', Description: 'Rich Sound and Clear Calls', image: 'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg' },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 'Ksh.1,300', Description: 'Hybrid Active Noise Cancellation', image: 'assets/img/menu/ankerSoundCore.jpg' },
                { productName: 'Jabra Elite 85t', price: 'Ksh.1,750', Description: 'Advanced Active Noise Cancellation', image: 'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg'},
                { productName: 'OnePlus Buds Pro', price: 'Ksh.1,600', Description: 'Smart Adaptive Noise Cancellation', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png' },
                // Add more AirPods or other products as needed
                { productName: 'Beats Powerbeats Pro', price: 'Ksh.1,700', Description: 'High-Performance Wireless Earphones', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg' },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 'Ksh.2,100', Description: 'Exceptional Sound Quality', image: 'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg' },
                { productName: 'Skullcandy Indy Evo', price: 'Ksh.1,100', Description: 'True Wireless In-Ear Earbuds', image: 'https://m.media-amazon.com/images/I/6119HR9g38L.jpg' },
                { productName: 'Huawei FreeBuds 4i', price: 'Ksh.1,250', Description: 'Active Noise Cancellation Earbuds', image: 'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg' },
                { productName: 'Beats Studio Buds', price: 'Ksh.1,800', Description: 'True Wireless Noise Cancelling Earbuds', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg' },
                { productName: 'JBL Free X', price: 'Ksh.1,150', Description: 'Truly Wireless In-Ear Headphones', image: 'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png' },
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
            
            

            var populateProduct = function (){

            }


        }
        var myModel = new viewModel();
        ko.applyBindings(myModel);
    }
};


$(document).ready(function () {
    debugger;
    MVVM.init();
});