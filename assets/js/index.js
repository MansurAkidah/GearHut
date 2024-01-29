var MVVM = {
    
    init: function () {
        var viewModel = function () {
            ////debugger;

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
            this.selectedLocation = ko.observable();
            this.specs = ko.observable([]);
            this.ordered = ko.observable(false);
            this.empty = ko.observable(false);
            this.cnt = ko.observable();
            this.shipping = ko.observable(false);
            this.shippingFee = ko.observable(110);
            //this.termsAgreed = ko.observable(false);
            this.AirPodsList = ko.observable([
                { productName: 'Air R03', price: 1300, description: 'Experience the freedom of Air-R03 Wireless TWS Earbuds – Your perfect companion for untethered music bliss!', image: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/64/27671064/168519644491371200830.webp', inStock: 1, quantity: 1 , specs: [
                    "Wireless TWS Earbuds",
                    "Bluetooth v5.0",
                    "Up to X hours of listening time",
                    "Charging case with XmAh capacity",
                    "Compatible with Android and iOS devices"
                  ]
                  },
                { productName: 'AirPods Pro', price: 1500, description: 'Immerse yourself in pure audio perfection with AirPods Pro featuring advanced Noise Cancellation technology.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2019/11/Apple-Airpods-Pro.png', inStock: 1, quantity: 1, specs: [
                    "Active Noise Cancellation (ANC)",
                    "Transparency mode",
                    "Adaptive EQ for audio optimization",
                    "Sweat and water resistance (IPX4)",
                    "Wireless charging case included"
                  ]
                  },
                { productName: 'JBL Live Pro 2', price: 4500, description: 'Elevate your audio experience to new heights with JBL Live Pro 2 – where style meets superior sound.', image: 'https://www.jbl.com.sg/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6a81b882/1.JBL_Live%20Pro%202_Product%20image_Hero_Blue.png?sw=537&sfrm=png', inStock: 1, quantity: 1 , specs: [
                    "True Wireless In-Ear Earbuds",
                    "Active Noise Cancellation (ANC)",
                    "Up to X hours of battery life (varies with ANC)",
                    "Touch controls for music and calls",
                    "Voice assistant support (e.g., Google Assistant, Siri)"
                  ]
                  },
                { productName: 'Air R02', price: 1200, description: 'True wireless earbuds that comes with a Free anti fingerprint silicone case. Bluetooth v5.0 supports both android and IOS devices. Smooth in ear design', image: 'https://bejikkala.ir/wp-content/uploads/2023/04/%D9%87%D9%86%D8%AF%D8%B2%D9%81%D8%B1%DB%8C-%D8%A7%DB%8C%D8%B1%D9%BE%D8%A7%D8%AF-jbl-AIR-R02-%D8%A8%D8%A7-%DA%A9%D8%A7%D9%88%D8%B1-%D9%88-%DA%AF%DB%8C%D8%B1%D9%87-1.jpg', inStock: 1, quantity: 1, specs: [
                    "True Wireless Earbuds",
                    "Bluetooth vX.X",
                    "Up to X hours of listening time",
                    "Charging case included",
                    "Compatible with Android and iOS devices"
                  ]
                  },
                { productName: 'Sony WF-1000XM4', price: 4000, description: 'Dive into a world of unparalleled audio with Sony WF-1000XM4 and its industry-leading Noise Cancelation.', image: 'https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg', inStock: 0, quantity: 1 ,specs: [
                    "Industry-leading Noise Cancellation",
                    "High-resolution audio with LDAC",
                    "Up to 8 hours of battery life on a single charge",
                    "Additional 16 hours with the charging case",
                    "Speak-to-Chat feature for automatic pause/play"
                  ]
                  },
                { productName: 'Samsung Galaxy Buds Pro', price: 4800, description: 'Unleash immersive sound with intelligent ANC - Samsung Galaxy Buds Pro is your gateway to audio brilliance.', image: 'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg', inStock: 1, quantity: 1 , specs: [
                    "Intelligent Active Noise Cancellation (ANC)",
                    "360-degree surround sound with Dolby Atmos",
                    "Up to 8 hours of playback on a single charge",
                    "Additional 20 hours with the charging case",
                    "IPX7 water resistance for durability"
                  ]
                  },
                { productName: 'AirPods Max', price: 3500, description: 'Immerse yourself in a symphony of sound with AirPods Max - Over-Ear High-Fidelity Headphones.', image: 'https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/b9f519195f84950573eea5088a49b964.png', inStock: 1, quantity: 1 , specs: [
                    "Active Noise Cancellation (ANC)",
                    "Spatial audio with dynamic head tracking",
                    "Up to 20 hours of battery life with ANC",
                    "Apple-designed H1 chip for seamless connectivity",
                    "Premium over-ear design with adaptive EQ"
                  ]
                  },
                { productName: 'Bose QuietComfort Earbuds', price: 4900, description: 'Indulge in pure serenity with Bose QuietComfort Earbuds - Noise-Canceling True Wireless Earbuds.', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg', inStock: 1, quantity: 1 , specs: [
                    "World-class noise cancellation technology",
                    "Up to 6 hours of battery life on a single charge",
                    "Additional 12 hours with the charging case",
                    "Secure and comfortable in-ear design",
                    "Customizable touch controls for music and calls"
                  ]
                  },
                { productName: 'Google Pixel Buds A-Series', price: 4200, description: 'Embark on a journey of rich sound and clear calls with Google Pixel Buds A-Series.', image: 'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg', inStock: 1, quantity: 1, specs: [
                    "Rich sound and clear calls with Adaptive Sound",
                    "Up to 5 hours of listening time on a single charge",
                    "Additional 24 hours with the charging case",
                    "Quick Charge: 15 minutes for up to 3 hours of listening",
                    "Hands-free Google Assistant integration"
                  ]
                   },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 4300, description: 'Immerse yourself in a world of sound with Anker Soundcore Liberty Air 2 Pro - Hybrid Active Noise Cancellation.', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/918569/1.jpg?3445', inStock: 1, quantity: 1 , specs: [
                    "Hybrid Active Noise Cancellation for immersive sound",
                    "Up to 7 hours of playtime on a single charge",
                    "Additional 26 hours with the charging case",
                    "HearID personalized sound for a customized listening experience",
                    "4 built-in microphones for clear calls and voice assistant support"
                  ]
                  },
                { productName: 'Jabra Elite 85t', price: 3750, description: 'Escape into tranquility with Jabra Elite 85t and its advanced Active Noise Cancellation.', image: 'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg', inStock: 0, quantity: 1 , specs: [
                    "Advanced Active Noise Cancellation (ANC)",
                    "Up to 5.5 hours of battery life on a single charge",
                    "Additional 25 hours with the charging case",
                    "6-microphone technology for clear calls and wind noise protection",
                    "Customizable equalizer for personalized sound"
                  ]
                  },
                { productName: 'OnePlus Buds Pro', price: 3600, description: 'Elevate your audio experience with OnePlus Buds Pro - Smart Adaptive Noise Cancellation at its best.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png', inStock: 1, quantity: 1 , specs: [
                    "Smart Adaptive Noise Cancellation for an immersive experience",
                    "Up to 5 hours of playback on a single charge",
                    "Additional 15 hours with the charging case",
                    "OnePlus Audio ID for personalized sound",
                    "Wireless charging capability"
                  ]
                  },
                { productName: 'Beats Powerbeats Pro', price: 3700, description: 'Experience high-performance audio with Beats Powerbeats Pro - your key to wireless earphone excellence.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg', inStock: 1, quantity: 1 , specs: [
                    "High-performance audio with powerful bass",
                    "Up to 9 hours of listening time on a single charge",
                    "Additional 24 hours with the charging case",
                    "Sweat and water-resistant design for active lifestyles",
                    "Secure-fit ear hooks for stability during workouts"
                  ]
                  },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 2100, description: 'Indulge in exceptional sound quality with Sennheiser Momentum True Wireless 2.', image: 'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg', inStock: 1, quantity: 1 , specs: [
                    "Premium sound quality with deep bass and clear treble",
                    "Active Noise Cancellation for immersive audio experience",
                    "Up to 7 hours of playback on a single charge",
                    "Additional 21 hours with the charging case",
                    "Touch controls for music playback, calls, and voice assistant",
                    "Customizable touch controls and equalizer settings via the app",
                    "Transparent Hearing feature for ambient sound awareness",
                    "Bluetooth 5.1 for reliable wireless connectivity",
                    "IPX4 water resistance for sweat and splash resistance",
                    "Ergonomic design for a comfortable and secure fit"
                  ]
                  },
                { productName: 'Skullcandy Indy Evo', price: 2100, description: 'Experience freedom with Skullcandy Indy Evo - True Wireless In-Ear Earbuds.', image: 'https://m.media-amazon.com/images/I/6119HR9g38L.jpg', inStock: 0, quantity: 1 , specs: [
                    "True Wireless In-Ear Earbuds",
                    "Up to 30 hours of total battery life with the charging case",
                    "Built-in Tile tracker for easy locating",
                    "IP55 sweat, water, and dust resistance",
                    "Touch controls for music, calls, and voice assistant",
                    "Ambient Mode for environmental awareness",
                    "Rapid charge: 10 minutes for 2 hours of playback",
                    "Bluetooth connectivity for wireless convenience"
                  ]
                  },
                { productName: 'Huawei FreeBuds 4i', price: 2250, description: 'Dive into pure audio bliss with Huawei FreeBuds 4i - Active Noise Cancellation Earbuds.', image: 'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg', inStock: 1, quantity: 1, specs: [
                    "Active Noise Cancellation for an immersive listening experience",
                    "Up to 10 hours of playback on a single charge",
                    "Additional 6.5 hours with the charging case",
                    "Dual-microphone system for clear calls and noise reduction",
                    "Touch controls for music playback and calls",
                    "Lightweight and comfortable in-ear design",
                    "Awareness mode for environmental sound awareness",
                    "Bluetooth 5.2 for stable and efficient wireless connectivity"
                  ]
                   },
                { productName: 'Beats Studio Buds', price: 3800, description: 'Unleash the power of sound with Beats Studio Buds - True Wireless Noise Cancelling Earbuds.', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg', inStock: 0, quantity: 1 ,specs: [
                    "Powerful and balanced sound profile",
                    "Active Noise Cancellation for immersive audio",
                    "Up to 8 hours of listening time on a single charge",
                    "Additional 16 hours with the charging case",
                    "Sweat and water-resistant design for workouts and active use",
                    "Secure-fit ear tips for comfort and stability",
                    "One-touch pairing with both Apple and Android devices",
                    "USB-C charging for quick and convenient power replenishment"
                  ]
                  },
                { productName: 'JBL Free X', price: 2500, description: 'Immerse yourself in the music with JBL Free X - Truly Wireless In-Ear Headphones.', image: 'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png', inStock: 1, quantity: 1 , specs: [
                    "Truly Wireless In-Ear Headphones",
                    "Up to 4 hours of playback on a single charge",
                    "Additional 20 hours with the charging case",
                    "Hands-free calls with built-in microphone",
                    "Comfortable and secure fit for active lifestyles",
                    "Splashproof design for protection against sweat and light rain",
                    "Easy touch controls for music playback and calls",
                    "Smart charging case with LED indicators"
                  ]
                  },
                ]);
            this.speakerList = ko.observable([
                { productName: 'Jbl Charge 5 ', price: 22000, description: 'JBL CHARGE 5 - Bold JBL Original Pro Sound', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/223269/1.jpg?7704', inStock: 1, quantity: 1, specs: [
                  "Powerful portable Bluetooth speaker",
                  "JBL Pro Sound with deep bass",
                  "Built-in rechargeable battery with up to 20 hours of playtime",
                  "IP67 waterproof and dustproof design",
                  "USB-C charging port and powerbank feature",
                  "Wireless Bluetooth streaming with multi-device connectivity",
                  "JBL PartyBoost for syncing multiple compatible speakers",
                  "Durable fabric material and rugged rubber housing",
                  "Integrated noise- and echo-canceling speakerphone"
                ]
                },
                { productName: 'Jbl Xtreme 3 ', price: 34000, description: '4 drivers and 2 JBL Bass Radiators', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/3055651/1.jpg?8563', inStock: 1, quantity: 1 , specs: [
                  "Powerful portable Bluetooth speaker",
                  "JBL Pro Sound with immersive stereo sound",
                  "Built-in rechargeable battery with up to 15 hours of playtime",
                  "IP67 waterproof and dustproof design",
                  "USB-C charging port and powerbank feature",
                  "Wireless Bluetooth streaming with multi-device connectivity",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  "Durable fabric material and rugged rubber housing",
                  "Integrated noise- and echo-canceling speakerphone"
                ]
                },
                { productName: 'JBL Flip 6 ', price: 16000, description: 'Louder, more powerful sound', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/2465651/1.jpg?5506', inStock: 1, quantity: 1 , specs: [
                  "Compact and portable Bluetooth speaker",
                  "JBL Signature Sound with clear and powerful audio",
                  "Built-in rechargeable battery with extended playtime",
                  "Waterproof and durable design for outdoor use",
                  "USB-C charging port",
                  "Wireless Bluetooth streaming with easy device pairing",
                  "Integrated speakerphone for hands-free calling",
                  "JBL Connect feature for linking multiple compatible speakers"
                ]
                },
                { productName: 'Flip Essential', price: 13000, description: 'All purpose, all weather companion.', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw586de883/JBL_FlipEssential_Back_006_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Compact and portable Bluetooth speaker",
                  "JBL Signature Sound for clear and powerful audio",
                  "Built-in rechargeable battery with extended playtime",
                  "Waterproof and durable design for outdoor use",
                  "USB-C charging port",
                  "Wireless Bluetooth streaming with easy device pairing",
                  "Integrated speakerphone for hands-free calling",
                  "JBL Connect feature for linking multiple compatible speakers"
                ]
                },
                { productName: 'JBL Clip 4', price: 8500, description: 'Clip and Play. Cool, portable, and waterproof. The vibrant fresh looking JBL Clip 4 delivers surprisingly rich JBL Original Pro Sound in a compact package. The unique oval shape fits easy in your hand. ', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2e0d5a46/101664_JBL_CLIP4_HERO_PHONE_GREY_PINK_x2.png?sw=1605&sh=1605', inStock: 1, quantity: 1, specs: [
                  "Ultra-portable Bluetooth speaker with carabiner clip",
                  "JBL Pro Sound for clear and powerful audio",
                  "Built-in rechargeable battery with up to 10 hours of playtime",
                  "IP67 waterproof and dustproof design",
                  "Clip it anywhere with the integrated carabiner",
                  "Wireless Bluetooth streaming with easy device pairing",
                  "Integrated speakerphone for hands-free calling",
                  "Durable fabric material and rugged rubber housing",
                  "USB-C charging port for quick and convenient charging"
                ]
                },
                { productName: 'JBL Go3', price: 550, description: 'Grab & Go. JBL Go 3 features bold styling and rich JBL Pro Sound. With its new eye-catching edgy design, colorful fabrics and expressive details this a must-have accessory for your next outing', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1c56c775/JBL_GO_3_DETAIL_1_BLUE_0008_1605x1605px.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Ultra-portable Bluetooth speaker",
                  "JBL Pro Sound for clear and punchy audio",
                  "Built-in rechargeable battery with up to 5 hours of playtime",
                  "IP67 waterproof and dustproof design",
                  "Compact and stylish design with integrated loop",
                  "Wireless Bluetooth streaming with easy device pairing",
                  "Speakerphone feature for hands-free calling",
                  "Durable fabric material and rugged rubber housing",
                  "USB-C charging port for quick and convenient charging"
                ]
                },
                { productName: 'JBL GO Essentia', price: 5000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Output power: 3.1W",
                  "Frequency response: 180Hz - 20kHz",
                  "Dimensions: 3.4 x 2.8 x 1.2 inches",
                  "Weight: 0.18 kg",
                  "Bluetooth version: 4.2",
                  "Bluetooth profiles: A2DP V1.2, AVRCP V1.5",
                  "Bluetooth frequency: 2400 MHz - 2483.5 MHz",
                  "Bluetooth modulation: GFSK, π/4 DQPSK, 8DPSK",
                  "Bluetooth transmitter power: ≤ 6 dBm (EIRP)",
                  "Charging time: 2.5 hours",
                  "Maximum music playing time: 5 hours",
                  "Features: Charging cable, Waterproof, Wireless, Rechargeable battery, Bluetooth"
                ]
                 },
                // { productName: 'JBL Boombox3', price: 62000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , },
                // { productName: 'JBL GO Essentia', price: 5000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , },
                // { productName: 'JBL GO Essentia', price: 5000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , },
                // { productName: 'JBL GO Essentia', price: 5000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , },
                // { productName: 'JBL GO Essentia', price: 5000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , },
                // { productName: 'JBL GO Essentia', price: 5000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , },
                // { productName: 'JBL GO Essentia', price: 5000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , },
                // { productName: 'JBL GO Essentia', price: 5000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , },
                // Add more cables or other products as needed
            ]);
            this.laptopList = ko.observable([
                { productName: 'Dell XPS 13', price: 24000, description: 'Experience perfection with the Dell XPS 13 - A slim and powerful laptop that redefines elegance and performance.', image: 'https://m.media-amazon.com/images/I/61hSHC1ClAL._AC_UF894,1000_QL80_.jpg', inStock: 1, quantity: 1, specs: [
                    "Intel Core i5 or i7 (10th, 11th, or later generation)",
                    "8GB or 16GB LPDDR4x",
                    "256GB or 512GB PCIe NVMe SSD",
                    "13.4-inch InfinityEdge display with FHD+ (1920 x 1200) or 4K UHD+ (3840 x 2400) resolution",
                    "Intel UHD Graphics (integrated) or Intel Iris Xe Graphics",
                    "Windows 10 or later, or Ubuntu-based Developer Edition",
                    "USB-C with Thunderbolt 3, USB-C 3.1, microSD card slot, 3.5mm headphone/microphone combo jack",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "HD webcam with IR for Windows Hello facial recognition",
                    "High-capacity battery for extended usage",
                    "Premium build materials, aluminum chassis, and carbon fiber or glass fiber palm rest",
                    "Varies based on the specific configuration but often lightweight"
                  ]
                  },
                { productName: 'MacBook Air M2', price: 254999, description: 'Elevate your productivity with the MacBook Air M2 - A sleek and lightweight powerhouse designed for creativity and efficiency.', image: 'https://istore.ph/cdn/shop/products/MacBook_Air_M2_Space_Gray_PDP_Image_Position-3__ROSA.jpg?v=1657016049&width=4000', inStock: 1, quantity: 1 , specs: [
                    "Apple M2 chip",
                    "8GB or 16GB unified memory",
                    "256GB, 512GB, 1TB, or 2TB SSD storage options",
                    "13.3-inch Retina display with True Tone",
                    "Apple M1 GPU",
                    "macOS Monterey",
                    "Two Thunderbolt/USB 4 ports",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p FaceTime HD camera",
                    "Up to 15 hours of web browsing battery life",
                    "Aluminum chassis with a fanless design",
                    "Weight: Approximately 2.8 pounds (1.29 kg)"
                  ]
                  },
                { productName: 'HP Spectre x360', price: 190500, description: 'Immerse yourself in innovation with the HP Spectre x360 - A versatile 2-in-1 laptop that combines style and performance.', image: 'https://yellowappletechnologies.co.ke/wp-content/uploads/2021/03/3R494PAABG_006.jpg', inStock: 1, quantity: 1 , specs: [
                    "Intel Core i5 or i7 processor",
                    "8GB or 16GB RAM",
                    "256GB, 512GB, or 1TB SSD storage options",
                    "13.3-inch or 15.6-inch display with FHD or 4K resolution",
                    "Intel Iris Xe Graphics",
                    "Windows 10",
                    "Multiple USB-C/Thunderbolt ports",
                    "Wi-Fi 6 (802.11ax), Bluetooth",
                    "HP TrueVision HD IR Camera with integrated digital microphone",
                    "Up to 22 hours of battery life (varies by configuration and usage)",
                    "Aluminum chassis with gem-cut design",
                    "Weight: Varies by model and screen size"
                  ]
                  },
                { productName: 'Asus ROG Zephyrus G14', price: 115000, description: 'Unleash gaming excellence with the Asus ROG Zephyrus G14 - A high-performance gaming laptop that delivers power and portability.', image: 'https://www.phone-x.co.ke/wp-content/uploads/2022/07/2-11.jpg', inStock: 1, quantity: 1 , specs: [
                    "AMD Ryzen 9 5900HS or Ryzen 7 5800HS processor",
                    "16GB or 32GB DDR4 RAM",
                    "512GB or 1TB NVMe SSD storage options",
                    "14-inch QHD (2560 x 1440) or FHD (1920 x 1080) display",
                    "NVIDIA GeForce RTX 3060 or RTX 3070 GPU",
                    "Windows 10",
                    "Multiple USB ports, including USB-C with DisplayPort support",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD webcam",
                    "Up to 10 hours of battery life (varies by usage)",
                    "AniMe Matrix LED display on the lid",
                    "Weight: Approximately 3.5 pounds (1.6 kg)"
                  ]
                  },
                { productName: 'Lenovo ThinkPad X1 Carbon', price: 60000, description: 'Power through your workday with the Lenovo ThinkPad X1 Carbon - An ultra-light business laptop that blends durability with sophistication.', image: 'https://www.lenovo.com/medias/lenovo-laptops-x1-carbon-6th-gen-hero.png?context=bWFzdGVyfHJvb3R8Mjk0NzU4fGltYWdlL3BuZ3xoYTIvaDZjLzE0NDQ3MTYzNzM2MDk0LnBuZ3xiMThiNWJlY2NjODExN2U0M2E4ZDE2NGNmMTM2NTExMWZkNzYwMzE4YTBmNDE5YzFiNThhODc2ZDEzYTMwZWQ5', inStock: 0, quantity: 1 , specs: [
                    "Intel Core i5, i7, or i9 processor",
                    "8GB, 16GB, or 32GB LPDDR4x RAM",
                    "256GB, 512GB, 1TB, or 2TB NVMe SSD storage options",
                    "14-inch FHD (1920 x 1080) or 4K UHD (3840 x 2160) display",
                    "Intel UHD Graphics or Intel Iris Xe Graphics",
                    "Windows 10 Pro",
                    "Multiple USB-C/Thunderbolt ports",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.2",
                    "720p HD or IR camera with ThinkShutter privacy cover",
                    "Up to 15 hours of battery life (varies by configuration and usage)",
                    "Dolby Atmos speaker system",
                    "Carbon fiber or aluminum chassis",
                    "Weight: Starting from 2.4 pounds (1.09 kg)"
                  ]
                  },
                { productName: 'Microsoft Surface Laptop 4', price: 53599.00, description: 'Achieve perfection with the Microsoft Surface Laptop 4 - A premium device that combines style, power, and versatility.', image: 'https://dreamaudio.co.ke/wp-content/uploads/2022/03/1618331810_1631868.jpg', inStock: 1, quantity: 1 , specs: [
                    "Intel Core i5 or i7, or AMD Ryzen 5 or 7 processor",
                    "8GB, 16GB, or 32GB LPDDR4x RAM",
                    "256GB, 512GB, 1TB, or 2TB SSD storage options",
                    "13.5-inch or 15-inch PixelSense display with FHD or 4K resolution",
                    "Intel Iris Xe Graphics or AMD Radeon Graphics",
                    "Windows 10 Home or Windows 10 Pro",
                    "USB-A, USB-C, Surface Connect ports",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD front-facing camera",
                    "Up to 32GB of RAM for Intel models, up to 16GB for AMD models",
                    "Up to 32 hours of battery life (varies by configuration and usage)",
                    "Aluminum chassis",
                    "Weight: Starting from 2.79 pounds (1.27 kg) for 13.5-inch model, and starting from 3.40 pounds (1.54 kg) for 15-inch model"
                  ]
                  },
                { productName: 'Acer Predator Helios 300', price: 25399, description: 'Dominate the gaming arena with the Acer Predator Helios 300 - A gaming laptop that delivers unrivaled performance and style.', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Acer_Predator_Helios_300_PH315_01.jpg', inStock: 1, quantity: 1 , specs: [
                    "Intel Core i7 or i9 processor",
                    "16GB or 32GB DDR4 RAM",
                    "512GB or 1TB NVMe SSD storage options",
                    "15.6-inch Full HD (1920 x 1080) display with 144Hz or 240Hz refresh rate",
                    "NVIDIA GeForce RTX 3060 or RTX 3070 GPU",
                    "Windows 10 Home",
                    "Multiple USB ports, including USB-C",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD webcam",
                    "Up to 6 hours of battery life (varies by usage)",
                    "Backlit keyboard with customizable RGB lighting",
                    "Metal chassis",
                    "Weight: Approximately 5.07 pounds (2.3 kg)"
                  ]
                  },
                { productName: 'Dell Inspiron 14', price: 48199, description: 'Experience reliability with the Dell Inspiron 14 - A budget-friendly laptop that doesn\'t compromise on performance and features.', image: 'https://www.saruk.co.ke/images/76121645260282.jpg', inStock: 1, quantity: 1, specs: [
                    "Intel Core i3, i5, or i7 processor",
                    "4GB, 8GB, or 16GB DDR4 RAM",
                    "128GB, 256GB, 512GB, or 1TB SSD storage options",
                    "14-inch Full HD (1920 x 1080) display",
                    "Intel UHD Graphics or discrete AMD or NVIDIA graphics",
                    "Windows 10",
                    "Multiple USB ports, including USB-C",
                    "Wi-Fi 5 (802.11ac), Bluetooth",
                    "720p HD webcam",
                    "Up to 10 hours of battery life (varies by configuration and usage)",
                    "Backlit keyboard (varies by model)",
                    "Plastic or aluminum chassis",
                    "Weight: Varies by model and configuration"
                  ]
                   },
                { productName: 'HP Envy x360', price: 120000, description: 'Immerse yourself in creativity with the HP Envy x360 - A convertible laptop that combines sleek design with powerful capabilities.', image: 'https://smartbuy.co.ke/wp-content/uploads/2021/05/hp-envy-x360-bd1033dx-3.jpg', inStock: 1, quantity: 1 , specs: [
                    "AMD Ryzen 5 or Ryzen 7, or Intel Core i5 or i7 processor",
                    "8GB or 16GB DDR4 RAM",
                    "256GB, 512GB, or 1TB SSD storage options",
                    "13.3-inch or 15.6-inch Full HD (1920 x 1080) or 4K UHD (3840 x 2160) display",
                    "Integrated AMD Radeon or Intel Iris Xe Graphics",
                    "Windows 10 Home",
                    "Multiple USB ports, including USB-C with Thunderbolt support",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "HP Wide Vision HD or IR camera",
                    "Up to 10 hours of battery life (varies by usage)",
                    "Aluminum chassis with a 360-degree hinge for 2-in-1 functionality",
                    "Backlit keyboard",
                    "Weight: Varies by model and screen size"
                  ]
                  },
                { productName: 'Asus ZenBook 14', price: 99599, description: 'Experience elegance with the Asus ZenBook 14 - An ultraportable laptop that combines beauty and performance seamlessly.', image: 'https://www.saruk.co.ke/images/20351691670915.png', inStock: 1, quantity: 1 , specs: [
                    "Intel Core i5 or i7 processor",
                    "8GB or 16GB LPDDR4x RAM",
                    "256GB, 512GB, or 1TB PCIe NVMe SSD storage options",
                    "14-inch Full HD (1920 x 1080) or 14-inch 2.8K NanoEdge display",
                    "Integrated Intel Iris Xe Graphics or NVIDIA GeForce MX450",
                    "Windows 10",
                    "USB-A, USB-C, HDMI, microSD card reader",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD IR camera",
                    "Up to 22 hours of battery life (varies by configuration and usage)",
                    "ErgoLift hinge for comfortable typing and improved cooling",
                    "Military-grade durability with MIL-STD-810G standard",
                    "Weight: Approximately 2.62 pounds (1.19 kg)"
                  ]
                  },
                { productName: 'Lenovo Legion 5', price: 55000, description: 'Conquer the gaming battlefield with the Lenovo Legion 5 - A gaming laptop that strikes the perfect balance between power and affordability.', image: 'https://vgnet.co.ke/wp-content/uploads/2022/06/Lenovo-Legion-5-Pro.jpg', inStock: 0, quantity: 1, specs: [
                    "AMD Ryzen 5 or Ryzen 7, or Intel Core i5 or i7 processor",
                    "8GB, 16GB, or 32GB DDR4 RAM",
                    "256GB, 512GB, or 1TB NVMe SSD storage options",
                    "15.6-inch Full HD (1920 x 1080) display with 120Hz or 144Hz refresh rate",
                    "NVIDIA GeForce GTX 1650, GTX 1660 Ti, RTX 3060, RTX 3070, or AMD Radeon Graphics",
                    "Windows 10 Home or Windows 10 Pro",
                    "Multiple USB ports, HDMI, Ethernet",
                    "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
                    "720p HD webcam",
                    "Up to 8 hours of battery life (varies by configuration and usage)",
                    "Legion TrueStrike keyboard with 4-zone RGB lighting",
                    "Legion Coldfront 2.0 cooling system",
                    "Plastic and metal construction",
                    "Weight: Approximately 5.5 pounds (2.5 kg)"
                ]
                },
                { productName: 'Surface Book 4', price: 53599, description: 'Unleash your creativity with the Surface Book 4 - A versatile 2-in-1 laptop that adapts to your every need.', image: 'https://www.yankodesign.com/images/design_news/2020/06/auto-draft/organami_1.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Razer Blade 15', price: 1799, description: 'Experience gaming excellence with the Razer Blade 15 - A gaming laptop that combines power, performance, and stunning visuals.', image: 'https://www.techspot.com/images/products/2022/laptops/org/2022-04-01-product-3.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'LG Gram 17', price: 139900, description: 'Elevate your productivity with the LG Gram 17 - An ultra-lightweight laptop that delivers power and endurance.', image: 'https://cdn.mos.cms.futurecdn.net/GggajARVjXZEc2qeHamATV.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Dell G3 15', price: 99900, description: 'Dominate the gaming arena with the Dell G3 15 - A budget-friendly gaming laptop that doesn\'t compromise on performance.', image: 'https://divinetechcomputerske.co.ke/wp-content/uploads/2022/12/DELL.png', inStock: 0, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Acer Swift 5', price: 109900, description: 'Experience portability with the Acer Swift 5 - An ultrathin and lightweight laptop that combines power with elegance.', image: 'https://cdn.uc.assets.prezly.com/c55bb2f8-4599-49bc-b301-ce585d597302/Acer-Swift-5-SF514-55-Standard_01.png', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'HP Omen 15', price: 139900, description: 'Conquer the gaming battlefield with the HP Omen 15 - A gaming laptop that delivers raw power and cutting-edge features.', image: 'https://onetechcomputers.co.ke/wp-content/uploads/2021/11/HP-OMEN-15-Gaming-Laptop-10TH-Gen-in-kenya.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Asus VivoBook S15', price: 89900, description: 'Experience style with the Asus VivoBook S15 - A laptop that combines performance with a bold and expressive design.', image: 'https://dlcdnwebimgs.asus.com/gain/418d0f3b-aeef-44a0-81e0-4a68cc46e9f0/', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Lenovo Yoga C940', price: 129900, description: 'Immerse yourself in versatility with the Lenovo Yoga C940 - A 2-in-1 laptop that adapts to your every need.', image: 'https://m.media-amazon.com/images/I/71fDYa07BZL.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Microsoft Surface Laptop Go', price: 69900, description: 'Simplify your life with the Microsoft Surface Laptop Go - A compact and lightweight laptop that doesn\'t compromise on performance.', image: 'https://vividgold.co.ke/wp-content/uploads/2021/04/microsoft-laptop.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
            ]);
            this.phoneList = ko.observable([
                { productName: 'iPhone 13 Pro', price: 150000, description: 'Unleash the power of innovation with the iPhone 13 Pro - A smartphone that pushes the boundaries of technology and style.', image: 'https://le.co.ke/wp-content/uploads/2022/04/iphone-13-pro-silver-select.png', inStock: 0, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Samsung Galaxy S21 Ultra', price: 133500, description: 'Experience excellence with the Samsung Galaxy S21 Ultra - A smartphone that redefines photography and performance.', image: 'https://i.ebayimg.com/images/g/ThgAAOSwq4Nh9Dv2/s-l1200.webp', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Google Pixel 6 Pro', price: 75000, description: 'Step into the future with the Google Pixel 6 Pro - A smartphone that combines cutting-edge technology with unparalleled camera capabilities.', image: 'https://api.priceinkenya.com/media/124832/conversions/google-pixel-6-8gb128gb-y1F0suvRFY-original.webp', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'OnePlus 9 Pro', price: 85000, description: 'Elevate your mobile experience with the OnePlus 9 Pro - A flagship killer that delivers top-notch performance and stunning visuals.', image: 'https://www.bovic.co.ke/wp-content/uploads/2021/08/Oneplus-9-256.jpg', inStock: 0, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'iPhone SE (2nd generation)', price: 56000, description: 'Experience power in a compact form with the iPhone SE (2nd generation) - A budget-friendly smartphone that doesn\'t compromise on performance.', image: 'https://applecenter.co.ke/wp-content/uploads/2021/12/3rd-Generation-iPhone-Se-2022-in-Nairobi-kenya.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Samsung Galaxy Z Fold 3', price: 160000.00, description: 'Unfold new possibilities with the Samsung Galaxy Z Fold 3 - A foldable smartphone that combines versatility with cutting-edge technology.', image: 'https://brix.co.ke/wp-content/uploads/2023/08/Samsung-Galaxy-Z-Fold-5-1.webp', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Google Pixel 5a', price: 59500, description: 'Capture the moment with the Google Pixel 5a - A reliable and affordable smartphone that excels in camera performance.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2021/02/Google-Pixel-5a.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'OnePlus Nord 2', price: 46000, description: 'Step into the future with the OnePlus Nord 2 - A mid-range marvel that delivers flagship-like performance and design.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2021/09/OnePlus-Nord-2-5G-b.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'iPhone 13', price: 115000, description: 'Embrace the future with the iPhone 13 - A sleek and powerful smartphone that sets new standards in performance and design.', image: 'https://gadgetsleo.com/storage/2021/09/iPhone-13-Color-Options.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Samsung Galaxy S21', price: 70500, description: 'Immerse yourself in innovation with the Samsung Galaxy S21 - A smartphone that combines style with advanced features.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2021/01/Samsung-Galaxy-S21-5G-c.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Google Pixel 6', price: 64500, description: 'Experience the future of mobile technology with the Google Pixel 6 - A smartphone that pushes the boundaries of photography and AI.', image: 'https://www.androidheadlines.com/wp-content/uploads/2021/05/Google-Pixel-6-CAD-render-3-1420x799.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'OnePlus 9', price: 56500, description: 'Dominate the mobile arena with the OnePlus 9 - A flagship smartphone that combines style with top-tier performance.', image: 'https://www.phoneshopkenya.co.ke/wp-content/uploads/2021/10/Oneplus-9-RT-1.jpg', inStock: 0, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'iPhone 12', price: 77000, description: 'Elevate your mobile experience with the iPhone 12 - A smartphone that delivers stunning visuals and performance.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2020/08/Apple-iPhone-12-mini-b-1.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Samsung Galaxy A52', price: 40000, description: 'Discover the perfect balance with the Samsung Galaxy A52 - A mid-range smartphone that excels in camera and performance.', image: 'https://www.queensmobile.co.ke/img/products/56/Samsung-Galaxy-A52-w-1.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
            ]);            
            this.AvailableList = ko.observable([
                { productName: 'Air R03', price: 1300, description: 'Experience the freedom of Air-R03 Wireless TWS Earbuds – Your perfect companion for untethered music bliss!', image: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/64/27671064/168519644491371200830.webp', inStock: 1, quantity: 1 , specs: [
                    "Wireless TWS Earbuds",
                    "Bluetooth v5.0",
                    "Up to 3 hours of listening time",
                    "Charging case with 360mAh capacity",
                    "Compatible with Android and iOS devices"
                  ]
                  },
                { productName: 'AirPods Pro', price: 1500, description: 'Immerse yourself in pure audio perfection with AirPods Pro featuring advanced Noise Cancellation technology.', image: 'https://www.phoneplacekenya.com/wp-content/uploads/2019/11/Apple-Airpods-Pro.png', inStock: 1, quantity: 1, specs: [
                    "Active Noise Cancellation (ANC)",
                    "Transparency mode",
                    "Adaptive EQ for audio optimization",
                    "Sweat and water resistance (IPX4)",
                    "Wireless charging case included"
                  ]
                  },
                { productName: 'JBL Live Pro 2', price: 4500, description: 'Elevate your audio experience to new heights with JBL Live Pro 2 – where style meets superior sound.', image: 'https://www.jbl.com.sg/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6a81b882/1.JBL_Live%20Pro%202_Product%20image_Hero_Blue.png?sw=537&sfrm=png', inStock: 1, quantity: 1 , specs: [
                    "True Wireless In-Ear Earbuds",
                    "Active Noise Cancellation (ANC)",
                    "Up to 5 hours of battery life (varies with ANC)",
                    "Touch controls for music and calls",
                    "Voice assistant support (e.g., Google Assistant, Siri)"
                  ]
                  },
                { productName: 'Air R02', price: 1200, description: 'True wireless earbuds that comes with a Free anti fingerprint silicone case. Bluetooth v5.0 supports both android and IOS devices. Smooth in ear design', image: 'https://bejikkala.ir/wp-content/uploads/2023/04/%D9%87%D9%86%D8%AF%D8%B2%D9%81%D8%B1%DB%8C-%D8%A7%DB%8C%D8%B1%D9%BE%D8%A7%D8%AF-jbl-AIR-R02-%D8%A8%D8%A7-%DA%A9%D8%A7%D9%88%D8%B1-%D9%88-%DA%AF%DB%8C%D8%B1%D9%87-1.jpg', inStock: 1, quantity: 1, specs: [
                    "True Wireless Earbuds",
                    "Bluetooth v5.0",
                    "Up to 3 hours of listening time",
                    "Charging case included",
                    "Compatible with Android and iOS devices"
                  ]
                   },
                { productName: 'Pro 3', price: 1000, description: '+ FREE case.', image: 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/H/O/122813_1667536907.jpg', inStock: 1, quantity: 1, specs: ["Listening time: 3 hours","360mAh charging case","Lightning charging cable"] },
                { productName: 'pro 5s', price: 1500, description: 'True Wireless Communication : Enjoy the freedom of movement with no wires to hold you back. The earphones connect wirelessly to your device for a seamless audio experience.', image: 'https://static.jamboshop.com/0/img/product/PRO5SEARBUDS-7/He7eefa6d014042c2acdb9e39710c9124M.png', inStock: 1, quantity: 1, specs: ["Listening time: 3 hours","360mAh charging case","Lightning charging cable"] },
                { productName: 'Air R03s', price: 1300, description: 'Introducing Denise - the Air-R02 with extraordinary sound quality and stylish design.', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/5093861/1.jpg?0428', inStock: 1, quantity: 1, specs: ["Listening time: 3 hours","360mAh charging case","Lightning charging cable"] },
                { productName: 'JBL TWS 4 Earbuds', price: 1100, description: 'Introducing Denise - the Air-R02 with extraordinary sound quality and stylish design.', image: 'https://images.africasokoni.co.ke/electronics/20211027/DLFT-1099a.jpg', inStock: 1, quantity: 1, specs: ["Sweat proof","Compatible with all mobile phone (android or ios) and music players","Touch sensitive controls"] },
            //     { productName: 'Apple USB-C Woven Charge Cable', price: 500, description: 'Charge your Apple devices in style with the fast and reliable Apple USB-C Woven Charge Cable.', image: 'assets/img/cables/Apple USB-C Woven Charge Cable.jpg', inStock: 0, quantity: 1 },
            //     { productName: 'Apple Lightning to USB Cable (1 m)', price: 700, description: 'Experience durable and high-speed charging with the Apple Lightning to USB Cable (1 m).', image: 'assets/img/cables/Apple Lightning to USB Cable (1 m).jpg', inStock: 1, quantity: 1 },
            //     { productName: 'Apple Thunderbolt 3 (USB‑C) Cable (0.8 m)', price: 450, description: 'Unleash the power of Thunderbolt with the Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).', image: 'assets/img/cables/Apple Thunderbolt 3 (USB‑C) Cable (0.8 m).jpg', inStock: 0, quantity: 1 },
            //     { productName: 'Otterbox Lightning - USB C (Fast Charge) | 1meter - Cloud Sky', price: 350, description: 'Charge with style using the OtterBox Fast Charge Premium Lightning to USB-C Cable in Cloud Sky.', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/5/9/59d2e8f5_3825924a_SW-OS-SW-TAP2-001.jpg', inStock: 1, quantity: 1 },
            //     { productName: 'Apple Watch Magnetic Charging Cable (1 m)', price: 200, description: 'Experience MagSafe technology with inductive charging using the Apple Watch Magnetic Charging Cable (1 m).', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1./preview/e/f/ef535460_64c2a777-Apple-Watch-Magnetic-Charging-Cable-1m.jpg', inStock: 1, quantity: 1 },
            //     { productName: 'Belkin USB-C TO LTG, BRAID SIL, 2M', price: 550, description: 'Step into the future with Belkin USB-C TO LTG, BRAID SIL, 2M - your key to seamless connectivity.', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/b/8/b892c0a1_e574acb7_SW-OS-SW-TAP2-027.jpg', inStock: 1, quantity: 1 },
            //     { productName: 'Apple Thunderbolt 4 (USB‑C) Pro Cable (1m)', price: 400, description: 'Unleash the power of Thunderbolt with the Apple Thunderbolt 4 (USB‑C) Pro Cable (1m).', image: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/c/f/cf996451_7d842dd8_Thunderbolt-Pro.png', inStock: 1, quantity: 1 },
             ]);
            this.locations = ko.observableArray(['South C', 'Kilimani','Juja', 'Thika'])
            this.cartProducts = ko.observableArray([]);
            var prods = [];
            this.termsAgreed = ko.observable(false);
            this.termsAgreed.subscribe(function(newValue) {
              // debugger;
              var orderButton = document.getElementById('orderButton');
              if (newValue) {
                  // orderButton.disabled = false;
                  orderButton.classList.remove('disabled');
              }
              else{
                orderButton.classList.add('disabled');
              }
                /* Do something when ShowOpened changes.
                  newValue variable holds the new value, obviously. :) */
            });
            this.isProductInList = function(productName) {
                var availableProducts = this.AvailableList();
                
                for (var i = 0; i < availableProducts.length; i++) {
                    if (availableProducts[i].productName === productName) {
                        ////debugger;
                        return true; // Product found in the list
                    }
                }
                //debugger;
                return false; // Product not found in the list
            }
            
            function checkCount (){
                //debugger;
                var self = this;
                if (localStorage.getItem('prods')){
                    // Retrieve the existing prods array from localStorage
                    // prods = JSON.parse(localStorage.getItem('prods'));
                    //prods = JSON.parse(sessionStorage.getItem('prods'));
                    // Update the count based on the length of the retrieved array
                    self.count(prods.length);
                    if(self.count() === 0 && !self.ordered()){
                        self.empty(true);
                    }else{
                        self.empty(false);
                    }
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
                //debugger;
                var self = this;
                let num = 254745655524;
                let msg = "inquire"
                // this.cartProducts().forEach(function(item) {
                //     msg += "%0A" +item.productName + "( " + item.image +" )"+ "for Ksh" + item.price ;
                // });
                let name = self.names();
                let location = self.location();
                //debugger;
                // var win = window.open(`https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20${location}.%20I%20would%20like%20to%20${msg}.
                // `, '_blank');
                let email = 'gearhutsales@gmail.com';
                let subject = self.subject();
                let body = `Hi, my name is ${self.names()}. ` + self.inquiryMessage();
            
                // this.cartProducts().forEach(function (item) {
                //     body += `${item.productName} ( ${item.image} ) for Ksh ${item.price}\n`;
                // });
                var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                // Open the mailtoLink in a new tab
                var win = window.open(mailtoLink, '_blank');

                // Focus on the new tab (optional)
                if (win) {
                    win.focus();
                } else {
                    // Handle cases where pop-up blocking is enabled
                    alert('Please allow pop-ups for this site to open the email composer.');
                }
            }
            this.sendMessage = function (value) {
                //debugger;
                var self = this;
                let num = 254745655524;
                let msg = ""
                this.cartProducts().forEach(function(item) {
                    msg += "%0A" + item.quantity + " - " +item.productName + " @ Ksh." + item.price ;
                });//+ "( " + item.image +" )"
                let name = self.names();
                let location = self.location();
                let total = self.totalSum();
                //debugger;
                if(name === undefined || location === undefined || name === " " || location === " "){
                    alert("Please provide your name and location");
                    return;
                }
                var win = window.open(`https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20*${location}*.%20I%20would%20like%20to%20order%20these:%20${msg}.%0ATotal%20=%20*${total}*`, '_blank');
                // var whatsappLink = `https://wa.me/${num}?text=Hi,%20my%20name%20is%20${name}%20from%20${location}.%20I%20would%20like%20to%20order%20these:%20${msg}.`;
                //debugger;
                //delete from the local storage 
                localStorage.removeItem('prods');
                self.cartProducts([]);
                self.ordered(true);
                prods = [];
                checkCount.call(this);
                checkCount.call(this);
                // window.location.href = whatsappLink;
                // win.focus();
            }.bind(this);
            this.viewCart = function(){
                //debugger;
                var self = this;
                var totalPrice = 0;
                var cnt = 0;
                $('#myModal').modal('show');
                if(prods.length == 0){
                    self.totalSum(totalPrice);
                }
                // self.AvailableList().forEach(function(item) {
                prods.forEach(function(item) {
                    totalPrice += item.price * item.quantity;
                    cnt++;
                });
                
                self.totalSum(totalPrice);
                self.cnt(cnt);
                checkCount.call(this);
                self.cartProducts(prods);
            }
            this.closeCart  = function (){
                //debugger;
                $('#myModal').modal('hide');
            }
            this.enableOrderButton = function() {
              var orderButton = document.getElementById('orderButton');
              if (orderButton) {
                  orderButton.disabled = false;
              }
          }
            this.addCart = function (value){
                // alert('Added to cart');
                //debugger;
                var self = this;
                self.ordered(false);
                //this.count(this.count() + 1);
                //self.cartProducts().push(value);
                prods.push(value);
                //viewModel.checkCount();
                //self.checkCount();
                checkCount.call(this);
            }.bind(this);
            this.addRequest = function(){
                var self = this;
                //debugger;
            };
            this.addToCart = function (value){
                // alert('Added to cart');
                //debugger;
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
                //debugger;
                var self = this;
                var cnt = 0;
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
                    cnt++;
                });
                self.totalSum(totalPrice);
                self.cnt(cnt);
                checkCount.call(this);
            }.bind(this);
            this.addShipment = function (){
              debugger;
              var self = this;
              self.totalSum(self.totalSum() + self.shippingFee());
            }.bind(this);
            this.removeShipment = function (){
              debugger;
              var self = this;
              self.totalSum(self.totalSum() - self.shippingFee());
            }.bind(this);
            this.viewProduct = function(value){
                debugger;
                var self = this;
                self.productName(value.productName);
                self.price(value.price);
                self.Description(value.description);
                self.image(value.image);
                self.instock(value.instock);
                self.specs(value.specs);
                $('#ProductModal').modal('show');
                //self.cartProducts(prods);
            }.bind(this);
            this.closeProduct  = function (){
                //debugger;
                var self = this;
                self.productName('');
                self.price('');
                self.Description('');
                self.image('');
                $('#ProductModal').modal('hide');
            }.bind(this);
            this.requestProduct = function(){
                
            };
            this.totalCalc = function() {
                var self = this;
                var totalPrice = 0;
                var cnt = 0;
                //debugger;
                // Loop through each item in the array and add its price to the total
                if(prods.length == 0){
                    self.totalSum(totalPrice);
                }
                // self.AvailableList().forEach(function(item) {
                prods.forEach(function(item) {
                    totalPrice += item.price * item.quantity;
                    cnt+= 1;
                });
                self.totalSum(totalPrice);
                self.cnt(cnt);
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
    //debugger;
    MVVM.init();
});