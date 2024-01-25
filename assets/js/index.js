var MVVM = {
    
    init: function () {
        var viewModel = function () {
            debugger;

            this.checkout = ko.observable(false);
            this.productName = ko.observable();
            this.price = ko.observable();
            this.Description = ko.observable();
            this.image = ko.observable();
            this.instock = ko.observable();
            this.count = ko.observable(0);
            this.totalSum = ko.observable(0);
            this.names = ko.observable();
            this.phoneNumber = ko.observable();
            this.location = ko.observable();
            this.inquiryMessage = ko.observable();
            this.subject = ko.observable();
            this.AirPodsList = ko.observable([
                { productName: 'Air R03', price: 1300, description: 'Experience the freedom of Air-R03 Wireless TWS Earbuds – Your perfect companion for untethered music bliss!', image: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/64/27671064/168519644491371200830.webp', inStock: 1, quantity: 1 },
                { productName: 'AirPods Pro', price: 1500, description: 'Immerse yourself in pure audio perfection with AirPods Pro featuring advanced Noise Cancellation technology.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2019/11/Apple-Airpods-Pro.png', inStock: 1, quantity: 1 },
                { productName: 'JBL Live Pro 2', price: 4500, description: 'Elevate your audio experience to new heights with JBL Live Pro 2 – where style meets superior sound.', image: 'https://www.jbl.com.sg/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6a81b882/1.JBL_Live%20Pro%202_Product%20image_Hero_Blue.png?sw=537&sfrm=png', inStock: 1, quantity: 1 },
                { productName: 'Air R02', price: 1200, description: 'Introducing Denise - the Air-R02 with extraordinary sound quality and stylish design.', image: 'https://bejikkala.ir/wp-content/uploads/2023/04/%D9%87%D9%86%D8%AF%D8%B2%D9%81%D8%B1%DB%8C-%D8%A7%DB%8C%D8%B1%D9%BE%D8%A7%D8%AF-jbl-AIR-R02-%D8%A8%D8%A7-%DA%A9%D8%A7%D9%88%D8%B1-%D9%88-%DA%AF%DB%8C%D8%B1%D9%87-1.jpg', inStock: 1, quantity: 1 },
                { productName: 'Sony WF-1000XM4', price: 4000, description: 'Dive into a world of unparalleled audio with Sony WF-1000XM4 and its industry-leading Noise Cancelation.', image: 'https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg', inStock: 0, quantity: 1 },
                { productName: 'Samsung Galaxy Buds Pro', price: 4800, description: 'Unleash immersive sound with intelligent ANC - Samsung Galaxy Buds Pro is your gateway to audio brilliance.', image: 'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg', inStock: 1, quantity: 1 },
                { productName: 'AirPods Max', price: 3500, description: 'Immerse yourself in a symphony of sound with AirPods Max - Over-Ear High-Fidelity Headphones.', image: 'https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/b9f519195f84950573eea5088a49b964.png', inStock: 1, quantity: 1 },
                { productName: 'Bose QuietComfort Earbuds', price: 4900, description: 'Indulge in pure serenity with Bose QuietComfort Earbuds - Noise-Canceling True Wireless Earbuds.', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg', inStock: 1, quantity: 1 },
                { productName: 'Google Pixel Buds A-Series', price: 4200, description: 'Embark on a journey of rich sound and clear calls with Google Pixel Buds A-Series.', image: 'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg', inStock: 1, quantity: 1 },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 4300, description: 'Immerse yourself in a world of sound with Anker Soundcore Liberty Air 2 Pro - Hybrid Active Noise Cancellation.', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/918569/1.jpg?3445', inStock: 1, quantity: 1 },
                { productName: 'Jabra Elite 85t', price: 3750, description: 'Escape into tranquility with Jabra Elite 85t and its advanced Active Noise Cancellation.', image: 'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg', inStock: 0, quantity: 1 },
                { productName: 'OnePlus Buds Pro', price: 3600, description: 'Elevate your audio experience with OnePlus Buds Pro - Smart Adaptive Noise Cancellation at its best.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png', inStock: 1, quantity: 1 },
                { productName: 'Beats Powerbeats Pro', price: 3700, description: 'Experience high-performance audio with Beats Powerbeats Pro - your key to wireless earphone excellence.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg', inStock: 1, quantity: 1 },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 2100, description: 'Indulge in exceptional sound quality with Sennheiser Momentum True Wireless 2.', image: 'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg', inStock: 1, quantity: 1 },
                { productName: 'Skullcandy Indy Evo', price: 2100, description: 'Experience freedom with Skullcandy Indy Evo - True Wireless In-Ear Earbuds.', image: 'https://m.media-amazon.com/images/I/6119HR9g38L.jpg', inStock: 0, quantity: 1 },
                { productName: 'Huawei FreeBuds 4i', price: 2250, description: 'Dive into pure audio bliss with Huawei FreeBuds 4i - Active Noise Cancellation Earbuds.', image: 'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg', inStock: 1, quantity: 1 },
                { productName: 'Beats Studio Buds', price: 3800, description: 'Unleash the power of sound with Beats Studio Buds - True Wireless Noise Cancelling Earbuds.', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg', inStock: 0, quantity: 1 },
                { productName: 'JBL Free X', price: 2500, description: 'Immerse yourself in the music with JBL Free X - Truly Wireless In-Ear Headphones.', image: 'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png', inStock: 1, quantity: 1 },
                ]);
            this.CablesList = ko.observable([
                { productName: 'Apple USB-C Woven Charge Cable', price: 500, description: 'Fast charging for Apple devices', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/c/1/c162a9b6_ea221940_MQKJ3.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Lightning to USB Cable (1 m)', price: 700, description: 'Durable and high-speed charging', image: 'assets/img/cables/Apple Lightning to USB Cable (1 m).jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Thunderbolt 3 (USB‑C) Cable (0.8 m)', price: 450, description: 'Supports Thunderbolt 3 data transfer up to 40 Gbps', image: 'assets/img/cables/Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).jpg', inStock: 0, quantity: 1 },
                { productName: 'Otterbox Lightning - USB C (Fast Charge) | 1meter - Cloud Sky', price: 350, description: 'OtterBox Fast Charge Premium Lightning to USB-C Cable', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/5/9/59d2e8f5_3825924a_SW-OS-SW-TAP2-001.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Watch Magnetic Charging Cable (1 m)', price: 200, description: 'MagSafe technology with inductive charging', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1./preview/e/f/ef535460_64c2a777-Apple-Watch-Magnetic-Charging-Cable-1m.jpg', inStock: 1, quantity: 1 },
                { productName: 'Belkin USB-C TO LTG, BRAID SIL, 2M', price: 550, description: 'SKU: Belkin USB-C TO LTG, BRAID SIL, 2M', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/b/8/b892c0a1_e574acb7_SW-OS-SW-TAP2-027.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Thunderbolt 4 (USB‑C) Pro Cable (1m)', price: 400, description: 'supports Thunderbolt 3, Thunderbolt 4 and USB 4 data transfer up to 40Gb/s', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/c/f/cf996451_7d842dd8_Thunderbolt-Pro.png', inStock: 1, quantity: 1 },
                // Add more cables or other products as needed
            ]);
                
            this.laptopList = ko.observable([
                { productName: 'Dell XPS 13', price: 24000, description: 'Experience perfection with the Dell XPS 13 - A slim and powerful laptop that redefines elegance and performance.', image: 'https://m.media-amazon.com/images/I/61hSHC1ClAL._AC_UF894,1000_QL80_.jpg', inStock: 1, quantity: 1 },
                { productName: 'MacBook Air M2', price: 254999, description: 'Elevate your productivity with the MacBook Air M2 - A sleek and lightweight powerhouse designed for creativity and efficiency.', image: 'https://istore.ph/cdn/shop/products/MacBook_Air_M2_Space_Gray_PDP_Image_Position-3__ROSA.jpg?v=1657016049&width=4000', inStock: 1, quantity: 1 },
                { productName: 'HP Spectre x360', price: 190500, description: 'Immerse yourself in innovation with the HP Spectre x360 - A versatile 2-in-1 laptop that combines style and performance.', image: 'https://yellowappletechnologies.co.ke/wp-content/uploads/2021/03/3R494PAABG_006.jpg', inStock: 1, quantity: 1 },
                { productName: 'Asus ROG Zephyrus G14', price: 115000, description: 'Unleash gaming excellence with the Asus ROG Zephyrus G14 - A high-performance gaming laptop that delivers power and portability.', image: 'https://www.phone-x.co.ke/wp-content/uploads/2022/07/2-11.jpg', inStock: 1, quantity: 1 },
                { productName: 'Lenovo ThinkPad X1 Carbon', price: 60000, description: 'Power through your workday with the Lenovo ThinkPad X1 Carbon - An ultra-light business laptop that blends durability with sophistication.', image: 'https://www.lenovo.com/medias/lenovo-laptops-x1-carbon-6th-gen-hero.png?context=bWFzdGVyfHJvb3R8Mjk0NzU4fGltYWdlL3BuZ3xoYTIvaDZjLzE0NDQ3MTYzNzM2MDk0LnBuZ3xiMThiNWJlY2NjODExN2U0M2E4ZDE2NGNmMTM2NTExMWZkNzYwMzE4YTBmNDE5YzFiNThhODc2ZDEzYTMwZWQ5', inStock: 0, quantity: 1 },
                { productName: 'Microsoft Surface Laptop 4', price: 53599.00, description: 'Achieve perfection with the Microsoft Surface Laptop 4 - A premium device that combines style, power, and versatility.', image: 'https://dreamaudio.co.ke/wp-content/uploads/2022/03/1618331810_1631868.jpg', inStock: 1, quantity: 1 },
                { productName: 'Acer Predator Helios 300', price: 25399, description: 'Dominate the gaming arena with the Acer Predator Helios 300 - A gaming laptop that delivers unrivaled performance and style.', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Acer_Predator_Helios_300_PH315_01.jpg', inStock: 1, quantity: 1 },
                { productName: 'Dell Inspiron 14', price: 48199, description: 'Experience reliability with the Dell Inspiron 14 - A budget-friendly laptop that doesn\'t compromise on performance and features.', image: 'https://www.saruk.co.ke/images/76121645260282.jpg', inStock: 1, quantity: 1 },
                { productName: 'HP Envy x360', price: 120000, description: 'Immerse yourself in creativity with the HP Envy x360 - A convertible laptop that combines sleek design with powerful capabilities.', image: 'https://smartbuy.co.ke/wp-content/uploads/2021/05/hp-envy-x360-bd1033dx-3.jpg', inStock: 1, quantity: 1 },
                { productName: 'Asus ZenBook 14', price: 99599, description: 'Experience elegance with the Asus ZenBook 14 - An ultraportable laptop that combines beauty and performance seamlessly.', image: 'https://www.saruk.co.ke/images/20351691670915.png', inStock: 1, quantity: 1 },
                { productName: 'Lenovo Legion 5', price: 55000, description: 'Conquer the gaming battlefield with the Lenovo Legion 5 - A gaming laptop that strikes the perfect balance between power and affordability.', image: 'https://vgnet.co.ke/wp-content/uploads/2022/06/Lenovo-Legion-5-Pro.jpg', inStock: 0, quantity: 1 },
                { productName: 'Surface Book 4', price: 53599, description: 'Unleash your creativity with the Surface Book 4 - A versatile 2-in-1 laptop that adapts to your every need.', image: 'https://www.yankodesign.com/images/design_news/2020/06/auto-draft/organami_1.jpg', inStock: 1, quantity: 1 },
                { productName: 'Razer Blade 15', price: 1799, description: 'Experience gaming excellence with the Razer Blade 15 - A gaming laptop that combines power, performance, and stunning visuals.', image: 'https://www.techspot.com/images/products/2022/laptops/org/2022-04-01-product-3.jpg', inStock: 1, quantity: 1 },
                { productName: 'LG Gram 17', price: 1399, description: 'Elevate your productivity with the LG Gram 17 - An ultra-lightweight laptop that delivers power and endurance.', image: 'https://cdn.mos.cms.futurecdn.net/GggajARVjXZEc2qeHamATV.jpg', inStock: 1, quantity: 1 },
                { productName: 'Dell G3 15', price: 999, description: 'Dominate the gaming arena with the Dell G3 15 - A budget-friendly gaming laptop that doesn\'t compromise on performance.', image: 'https://divinetechcomputerske.co.ke/wp-content/uploads/2022/12/DELL.png', inStock: 0, quantity: 1 },
                { productName: 'Acer Swift 5', price: 1099, description: 'Experience portability with the Acer Swift 5 - An ultrathin and lightweight laptop that combines power with elegance.', image: 'https://cdn.uc.assets.prezly.com/c55bb2f8-4599-49bc-b301-ce585d597302/Acer-Swift-5-SF514-55-Standard_01.png', inStock: 1, quantity: 1 },
                { productName: 'HP Omen 15', price: 1399, description: 'Conquer the gaming battlefield with the HP Omen 15 - A gaming laptop that delivers raw power and cutting-edge features.', image: 'https://onetechcomputers.co.ke/wp-content/uploads/2021/11/HP-OMEN-15-Gaming-Laptop-10TH-Gen-in-kenya.jpg', inStock: 1, quantity: 1 },
                { productName: 'Asus VivoBook S15', price: 899, description: 'Experience style with the Asus VivoBook S15 - A laptop that combines performance with a bold and expressive design.', image: 'https://dlcdnwebimgs.asus.com/gain/418d0f3b-aeef-44a0-81e0-4a68cc46e9f0/', inStock: 1, quantity: 1 },
                { productName: 'Lenovo Yoga C940', price: 1299, description: 'Immerse yourself in versatility with the Lenovo Yoga C940 - A 2-in-1 laptop that adapts to your every need.', image: 'https://m.media-amazon.com/images/I/71fDYa07BZL.jpg', inStock: 1, quantity: 1 },
                { productName: 'Microsoft Surface Laptop Go', price: 699, description: 'Simplify your life with the Microsoft Surface Laptop Go - A compact and lightweight laptop that doesn\'t compromise on performance.', image: 'https://vividgold.co.ke/wp-content/uploads/2021/04/microsoft-laptop.jpg', inStock: 1, quantity: 1 },
            ]);
            this.phoneList = ko.observable([
                { productName: 'iPhone 13 Pro', price: 150000, description: 'Unleash the power of innovation with the iPhone 13 Pro - A smartphone that pushes the boundaries of technology and style.', image: 'https://le.co.ke/wp-content/uploads/2022/04/iphone-13-pro-silver-select.png', inStock: 0, quantity: 1 },
                { productName: 'Samsung Galaxy S21 Ultra', price: 133500, description: 'Experience excellence with the Samsung Galaxy S21 Ultra - A smartphone that redefines photography and performance.', image: 'https://i.ebayimg.com/images/g/ThgAAOSwq4Nh9Dv2/s-l1200.webp', inStock: 1, quantity: 1 },
                { productName: 'Google Pixel 6 Pro', price: 75000, description: 'Step into the future with the Google Pixel 6 Pro - A smartphone that combines cutting-edge technology with unparalleled camera capabilities.', image: 'https://api.priceinkenya.com/media/124832/conversions/google-pixel-6-8gb128gb-y1F0suvRFY-original.webp', inStock: 1, quantity: 1 },
                { productName: 'OnePlus 9 Pro', price: 85000, description: 'Elevate your mobile experience with the OnePlus 9 Pro - A flagship killer that delivers top-notch performance and stunning visuals.', image: 'https://www.bovic.co.ke/wp-content/uploads/2021/08/Oneplus-9-256.jpg', inStock: 0, quantity: 1 },
                { productName: 'iPhone SE (2nd generation)', price: 56000, description: 'Experience power in a compact form with the iPhone SE (2nd generation) - A budget-friendly smartphone that doesn\'t compromise on performance.', image: 'https://applecenter.co.ke/wp-content/uploads/2021/12/3rd-Generation-iPhone-Se-2022-in-Nairobi-kenya.jpg', inStock: 1, quantity: 1 },
                { productName: 'Samsung Galaxy Z Fold 3', price: 160000.00, description: 'Unfold new possibilities with the Samsung Galaxy Z Fold 3 - A foldable smartphone that combines versatility with cutting-edge technology.', image: 'https://brix.co.ke/wp-content/uploads/2023/08/Samsung-Galaxy-Z-Fold-5-1.webp', inStock: 1, quantity: 1 },
                { productName: 'Google Pixel 5a', price: 59500, description: 'Capture the moment with the Google Pixel 5a - A reliable and affordable smartphone that excels in camera performance.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2021/02/Google-Pixel-5a.jpg', inStock: 1, quantity: 1 },
                { productName: 'OnePlus Nord 2', price: 46000, description: 'Step into the future with the OnePlus Nord 2 - A mid-range marvel that delivers flagship-like performance and design.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2021/09/OnePlus-Nord-2-5G-b.jpg', inStock: 1, quantity: 1 },
                { productName: 'iPhone 13', price: 115000, description: 'Embrace the future with the iPhone 13 - A sleek and powerful smartphone that sets new standards in performance and design.', image: 'https://gadgetsleo.com/storage/2021/09/iPhone-13-Color-Options.jpg', inStock: 1, quantity: 1 },
                { productName: 'Samsung Galaxy S21', price: 70500, description: 'Immerse yourself in innovation with the Samsung Galaxy S21 - A smartphone that combines style with advanced features.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2021/01/Samsung-Galaxy-S21-5G-c.jpg', inStock: 1, quantity: 1 },
                { productName: 'Google Pixel 6', price: 64500, description: 'Experience the future of mobile technology with the Google Pixel 6 - A smartphone that pushes the boundaries of photography and AI.', image: 'https://www.androidheadlines.com/wp-content/uploads/2021/05/Google-Pixel-6-CAD-render-3-1420x799.jpg', inStock: 1, quantity: 1 },
                { productName: 'OnePlus 9', price: 56500, description: 'Dominate the mobile arena with the OnePlus 9 - A flagship smartphone that combines style with top-tier performance.', image: 'https://www.phoneshopkenya.co.ke/wp-content/uploads/2021/10/Oneplus-9-RT-1.jpg', inStock: 0, quantity: 1 },
                { productName: 'iPhone 12', price: 77000, description: 'Elevate your mobile experience with the iPhone 12 - A smartphone that delivers stunning visuals and performance.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/08/Apple-iPhone-12-mini-b-1.jpg', inStock: 1, quantity: 1 },
                { productName: 'Samsung Galaxy A52', price: 40000, description: 'Discover the perfect balance with the Samsung Galaxy A52 - A mid-range smartphone that excels in camera and performance.', image: 'https://www.queensmobile.co.ke/img/products/56/Samsung-Galaxy-A52-w-1.jpg', inStock: 1, quantity: 1 },
            ]);            
            
            this.AvailableList = ko.observable([
                { productName: 'Air R03', price: 1300, description: 'Experience the freedom of Air-R03 Wireless TWS Earbuds – Your perfect companion for untethered music bliss!', image: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/64/27671064/168519644491371200830.webp', inStock: 1, quantity: 1 },
                { productName: 'AirPods Pro', price: 1500, description: 'Immerse yourself in pure audio perfection with AirPods Pro featuring advanced Noise Cancellation technology.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2019/11/Apple-Airpods-Pro.png', inStock: 1, quantity: 1 },
                { productName: 'Pro 3', price: 1000, description: '+ FREE case.', image: 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/H/O/122813_1667536907.jpg', inStock: 1, quantity: 1 },
                { productName: 'pro 5s', price: 1500, description: 'Elevate your audio experience to new heights with JBL Live Pro 2 – where style meets superior sound.', image: 'https://static.jamboshop.com/0/img/product/PRO5SEARBUDS-7/He7eefa6d014042c2acdb9e39710c9124M.png', inStock: 1, quantity: 1 },
                { productName: 'Air R02', price: 1200, description: 'Introducing Denise - the Air-R02 with extraordinary sound quality and stylish design.', image: 'https://bejikkala.ir/wp-content/uploads/2023/04/%D9%87%D9%86%D8%AF%D8%B2%D9%81%D8%B1%DB%8C-%D8%A7%DB%8C%D8%B1%D9%BE%D8%A7%D8%AF-jbl-AIR-R02-%D8%A8%D8%A7-%DA%A9%D8%A7%D9%88%D8%B1-%D9%88-%DA%AF%DB%8C%D8%B1%D9%87-1.jpg', inStock: 1, quantity: 1 },
                { productName: 'Air R03s', price: 1300, description: 'Introducing Denise - the Air-R02 with extraordinary sound quality and stylish design.', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/5093861/1.jpg?0428', inStock: 1, quantity: 1 },
                { productName: 'JBL TWS 4 Earbuds', price: 1100, description: 'Introducing Denise - the Air-R02 with extraordinary sound quality and stylish design.', image: 'https://images.africasokoni.co.ke/electronics/20211027/DLFT-1099a.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple USB-C Woven Charge Cable', price: 500, description: 'Charge your Apple devices in style with the fast and reliable Apple USB-C Woven Charge Cable.', image: 'assets/img/cables/Apple USB-C Woven Charge Cable.jpg', inStock: 0, quantity: 1 },
                { productName: 'Apple Lightning to USB Cable (1 m)', price: 700, description: 'Experience durable and high-speed charging with the Apple Lightning to USB Cable (1 m).', image: 'assets/img/cables/Apple Lightning to USB Cable (1 m).jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Thunderbolt 3 (USB‑C) Cable (0.8 m)', price: 450, description: 'Unleash the power of Thunderbolt with the Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).', image: 'assets/img/cables/Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).jpg', inStock: 0, quantity: 1 },
                { productName: 'Otterbox Lightning - USB C (Fast Charge) | 1meter - Cloud Sky', price: 350, description: 'Charge with style using the OtterBox Fast Charge Premium Lightning to USB-C Cable in Cloud Sky.', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/5/9/59d2e8f5_3825924a_SW-OS-SW-TAP2-001.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Watch Magnetic Charging Cable (1 m)', price: 200, description: 'Experience MagSafe technology with inductive charging using the Apple Watch Magnetic Charging Cable (1 m).', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1./preview/e/f/ef535460_64c2a777-Apple-Watch-Magnetic-Charging-Cable-1m.jpg', inStock: 1, quantity: 1 },
                { productName: 'Belkin USB-C TO LTG, BRAID SIL, 2M', price: 550, description: 'Step into the future with Belkin USB-C TO LTG, BRAID SIL, 2M - your key to seamless connectivity.', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/b/8/b892c0a1_e574acb7_SW-OS-SW-TAP2-027.jpg', inStock: 1, quantity: 1 },
                { productName: 'Apple Thunderbolt 4 (USB‑C) Pro Cable (1m)', price: 400, description: 'Unleash the power of Thunderbolt with the Apple Thunderbolt 4 (USB‑C) Pro Cable (1m).', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/c/f/cf996451_7d842dd8_Thunderbolt-Pro.png', inStock: 1, quantity: 1 },
            ]);
            
            this.cartProducts = ko.observableArray([]);
            var prods = [];

            function checkCount (){
                debugger;
                var self = this;
                if (localStorage.getItem('prods')){
                    // Retrieve the existing prods array from localStorage
                    // prods = JSON.parse(localStorage.getItem('prods'));
                    //prods = JSON.parse(sessionStorage.getItem('prods'));
                    // Update the count based on the length of the retrieved array
                    self.count(prods.length);
                    localStorage.setItem('prods', JSON.stringify(prods));
                    return;
                }
                localStorage.setItem('prods', JSON.stringify(prods));
            }
            
            checkCount.call(this);
            this.sendMessageModal = function(){
                // $("#messageModal").modal('show');
            }
            this.sendInquiry = function(){
                debugger;
                var self = this;
                let num = 254745655524;
                let msg = "inquire"
                // this.cartProducts().forEach(function(item) {
                //     msg += "%0A" +item.productName + "( " + item.image +" )"+ "for Ksh" + item.price ;
                // });
                let name = self.names();
                let location = self.location();
                debugger;
                // var win = window.open(`https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20${location}.%20I%20would%20like%20to%20${msg}.
                // `, '_blank');
                let email = 'akidahmansur@gmail.com';
                let subject = self.subject();
                let body = `Hi, my name is ${self.names()}. I would like to inquire about Your products:` + self.inquiryMessage();
            
                // this.cartProducts().forEach(function (item) {
                //     body += `${item.productName} ( ${item.image} ) for Ksh ${item.price}\n`;
                // });
                var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                var win = window.open(mailtoLink, '_blank');
            }
            this.sendMessage = function (value) {
                debugger;
                var self = this;
                let num = 254745655524;
                let msg = ""
                this.cartProducts().forEach(function(item) {
                    msg += "%0A" +item.productName + " for Ksh" + item.price ;
                });//+ "( " + item.image +" )"
                let name = self.names();
                let location = self.location();
                debugger;
                if(name === undefined || location === undefined || name === " " || location === " "){
                    alert("Please provide your name and location");
                    return;
                }
                var win = window.open(`https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20${location}.%20I%20would%20like%20to%20order%20these:%20${msg}.
                `, '_blank');
                // var whatsappLink = `https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20${location}.%20I%20would%20like%20to%20order%20these:%20${msg}.`;

                //delete from the local storage 
                localStorage.removeItem('prods');
                // window.location.href = whatsappLink;
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
                //this.count(this.count() + 1);
                //self.cartProducts().push(value);
                prods.push(value);
                //viewModel.checkCount();
                //self.checkCount();
                checkCount.call(this);
            }.bind(this);
            this.addToCart = function (value){
                // alert('Added to cart');
                debugger;
                var self = this;

                var productName = self.productName();
                var price = self.price();
                var description = self.Description();
                var image = self.image();
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
                // self.cartProducts.remove(value);
                // Find the first occurrence of the item in the array
                var indexToRemove = self.cartProducts.indexOf(value);

                // Remove the item if found
                if (indexToRemove !== -1) {
                    self.cartProducts.splice(indexToRemove, 1);
                }
                var totalPrice = 0;
                // self.AvailableList().forEach(function(item) {
                self.cartProducts().forEach(function(item) {
                    totalPrice += item.price * item.quantity;
                });
                self.totalSum(totalPrice);
            }.bind(this);
            
            this.viewProduct = function(value){
                debugger;
                var self = this;
                self.productName(value.productName);
                self.price(value.price);
                self.Description(value.description);
                self.image(value.image);
                self.instock(value.instock)
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