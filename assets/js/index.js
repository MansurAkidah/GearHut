var MVVM = {
    
    init: function () {
        var Akida = function () {
            //debugger;
            this.checkout = ko.observable(false);
            this.productName = ko.observable();
            this.price = ko.observable();
            this.Description = ko.observable();
            this.image = ko.observable();
            this.images = ko.observableArray([]);
            this.instock = ko.observable();
            this.count = ko.observable(0);
            this.totalSum = ko.observable(0);
            this.names = ko.observable();
            this.phoneNumber = ko.observable();
            this.location = ko.observable();
            this.inquiryMessage = ko.observable();
            this.subject = ko.observable();
            this.locationText = ko.observable();
            this.selectedLocation = ko.observable();
            this.locationInput = ko.observable(false);
            this.specs = ko.observable([]);
            this.ordered = ko.observable(false);
            this.empty = ko.observable(false);
            this.cnt = ko.observable();
            this.shipping = ko.observable(false);
            this.shippingFee = ko.observable(110);
            this.otherLocation = ko.observable('');
            this.showOtherLocation = ko.observable(false);

            this.query = ko.observable("");  // Stores the user input
            this.locations = ko.observableArray([]);  // Stores fetched locations
            
            // document.onkeydown = (e) => { 
            //   if(e.key == 123){
            //     e.preventDefault();
            //   }
            //   if(e.ctrlKey && e.shiftKey && e.key == 'I'){
            //     e.preventDefault();
            //   }
            //   if (e.ctrlKey && e.shiftKey && e.key == 'C') {
            //     e.preventDefault();
            //   }
            //   if (e.ctrlKey && e.shiftKey && e.key == 'J') {
            //       e.preventDefault();
            //   }
            //   if (e.ctrlKey && e.key == 'U') {
            //       e.preventDefault();
            //   }
            // }
            //#region setMode
            // Function to set the dark mode state
            function setDarkMode(isDark) {
              const body = document.body;
              if (isDark) {
                  body.classList.add('dark-mode');
                  localStorage.setItem('darkMode', 'enabled');
              } else {
                  body.classList.remove('dark-mode');
                  localStorage.setItem('darkMode', 'disabled');
              }
            }

            // Function to toggle dark mode
            function toggleDarkMode() {
              const darkModeToggle = document.querySelector('.switch input');
              const isDark = darkModeToggle.checked;
              setDarkMode(isDark);
            }

            // Function to initialize dark mode based on user's previous preference
            function initDarkMode() {
              const darkModeToggle = document.querySelector('.switch input');
              const darkMode = localStorage.getItem('darkMode');
              
              // Check if user has a previous dark mode preference
              if (darkMode === 'enabled') {
                  darkModeToggle.checked = true;
                  setDarkMode(true);
              }
              
              // Check system preference if no previous preference exists
              else if (darkMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  darkModeToggle.checked = true;
                  setDarkMode(true);
              }
              
              // Add event listener for toggle changes
              darkModeToggle.addEventListener('change', toggleDarkMode);
            }

            // Initialize dark mode when the page loads
            document.addEventListener('DOMContentLoaded', initDarkMode);
            //#endregion

            
            //#region Search
            function SearchSmart() {
              // Get the search term
              var searchTerm = document.getElementById('searchSmartWatch').value.toLowerCase();
              
              // Get all the product elements
              var products = document.querySelectorAll('#menu-smart .col');
              
              products.forEach(function(product) {
                var productName = product.querySelector('.fw-bolder').textContent.toLowerCase();
                var productPrice = product.querySelector('span').textContent;
                
                // Check if the product name or price includes the search term
                if (productName.includes(searchTerm) || productPrice.includes(searchTerm)) {
                  product.style.display = ''; // Show the product
                } else {
                  product.style.display = 'none'; // Hide the product
                }
              });
            }
            
            // Add event listener for real-time search
            document.getElementById('searchSmartWatch').addEventListener('input', SearchSmart);
  
            

            function SearchiPhones() {
              // Get both filter values
              var searchTerm = document.getElementById('searchiPhones').value.toLowerCase();
              var maxPrice = document.getElementById('priceRangeiPhones').value;
              document.getElementById('priceValueiPhones').textContent = maxPrice;
              
              // Get all the product elements
              var products = document.querySelectorAll('#menu-iphones .col');
              
              products.forEach(function(product) {
                var productName = product.querySelector('.fw-bolder').textContent.toLowerCase();
                var priceText = product.querySelector('span').textContent;
                var price = parseInt(priceText.replace(/[^0-9]/g, ''));
                
                // Show product only if it matches both filters
                var matchesSearch = productName.includes(searchTerm) || priceText.includes(searchTerm);
                var matchesPrice = price <= maxPrice;
                
                if (matchesSearch && matchesPrice) {
                  product.style.display = ''; // Show the product
                } else {
                  product.style.display = 'none'; // Hide the product
                }
              });
            }

            // Add event listeners to both inputs
            document.getElementById('searchiPhones').addEventListener('input', SearchiPhones);
            document.getElementById('priceRangeiPhones').addEventListener('input', SearchiPhones);

            function SearchAvailable() {
              // Get both filter values
              var searchTerm = document.getElementById('searchAvailable').value.toLowerCase();
              var maxPrice = document.getElementById('priceRangeAvailable').value;
              document.getElementById('priceValueAvailable').textContent = maxPrice;
              
              // Get all the product elements
              var products = document.querySelectorAll('#menu-comrades .col');
              
              products.forEach(function(product) {
                var productName = product.querySelector('.fw-bolder').textContent.toLowerCase();
                var priceText = product.querySelector('span').textContent;
                var price = parseInt(priceText.replace(/[^0-9]/g, ''));
                
                // Show product only if it matches both filters
                var matchesSearch = productName.includes(searchTerm) || priceText.includes(searchTerm);
                var matchesPrice = price <= maxPrice;
                
                if (matchesSearch && matchesPrice) {
                  product.style.display = ''; // Show the product
                } else {
                  product.style.display = 'none'; // Hide the product
                }
              });
            }

            // Add event listeners to both inputs
            document.getElementById('searchAvailable').addEventListener('input', SearchAvailable);
            document.getElementById('priceRangeAvailable').addEventListener('input', SearchAvailable);

            function SearchAirpods() {
              // Get both filter values
              var searchTerm = document.getElementById('searchAirPods').value.toLowerCase();
              var maxPrice = document.getElementById('priceRangeAirPods').value;
              document.getElementById('priceValueAirPods').textContent = maxPrice;
              
              // Get all the product elements
              var products = document.querySelectorAll('#menu-airpods .col');
              
              products.forEach(function(product) {
                var productName = product.querySelector('.fw-bolder').textContent.toLowerCase();
                var priceText = product.querySelector('span').textContent;
                var price = parseInt(priceText.replace(/[^0-9]/g, ''));
                
                // Show product only if it matches both filters
                var matchesSearch = productName.includes(searchTerm) || priceText.includes(searchTerm);
                var matchesPrice = price <= maxPrice;
                
                if (matchesSearch && matchesPrice) {
                  product.style.display = ''; // Show the product
                } else {
                  product.style.display = 'none'; // Hide the product
                }
              });
            }

            // Add event listeners to both inputs
            document.getElementById('searchAirPods').addEventListener('input', SearchAirpods);
            document.getElementById('priceRangeAirPods').addEventListener('input', SearchAirpods);

            
            function SearchPhonesAll() {
              // Get both filter values
              var searchTerm = document.getElementById('searchPhones').value.toLowerCase();
              var maxPrice = document.getElementById('priceRangePhones').value;
              document.getElementById('priceValuePhones').textContent = maxPrice;
              
              // Get all the product elements
              var products = document.querySelectorAll('#menu-phones .col');
              
              products.forEach(function(product) {
                var productName = product.querySelector('.fw-bolder').textContent.toLowerCase();
                var priceText = product.querySelector('span').textContent;
                var price = parseInt(priceText.replace(/[^0-9]/g, ''));
                
                // Show product only if it matches both filters
                var matchesSearch = productName.includes(searchTerm) || priceText.includes(searchTerm);
                var matchesPrice = price <= maxPrice;
                
                if (matchesSearch && matchesPrice) {
                  product.style.display = ''; // Show the product
                } else {
                  product.style.display = 'none'; // Hide the product
                }
              });
            }
            
            // Add event listeners to both inputs
            document.getElementById('searchPhones').addEventListener('input', SearchPhonesAll);
            document.getElementById('priceRangePhones').addEventListener('input', SearchPhonesAll);
            
            this.fetchLocations = async function() {
              debugger;
              const query = document.getElementById('locationInput').value;
              const suggestionsContainer = document.getElementById('suggestions');
              
              if (query.length < 3) { 
                  suggestionsContainer.innerHTML = ''; 
                  return; 
              }
  
              try {
                  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&countrycodes=KE`);
                  const data = await response.json();
                  
                  suggestionsContainer.innerHTML = ''; // Clear previous results
                  
                  data.forEach(place => {
                      const div = document.createElement('div');
                      div.textContent = place.display_name;
                      div.onclick = () => {
                          document.getElementById('locationInput').value = place.display_name;
                          suggestionsContainer.innerHTML = '';
                      };
                      suggestionsContainer.appendChild(div);
                  });
              } catch (error) {
                  console.error('Error fetching locations:', error);
              }
          }
  
            //#endregion

            this.SmartWatchList = ko.observableArray([  
              { productName: 'Havit M9037', 
                price: 3500, 
                description: 'Havit M9037 Smart Life Series-Smart Watch - With Voice Assistants', 
                image: [ 
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFymcv339oGC_ZxzJqu6mjDtdQiK96BW1lWg&s',
                  'https://www.digitalstore.co.ke/cdn/shop/files/bb1_400x.webp?v=1712216730', 
                  'https://www.digitalstore.co.ke/cdn/shop/files/bb2_400x.webp?v=1712216730',
                  'https://skywave.co.ke/wp-content/uploads/2024/03/oraimo-Watch-ES-Amoled-OSW-41-431x431.jpg', 
                ], 
                inStock: 1, 
                quantity: 1, 
                specs: [ 
                  "Screen size: 1.91 inch TFT Screen", 
                  "Resolution: 240×280",
                  "Usage Time: 4-6 Days",
                  "100+ sports modes",
                  "Heart Rate and Blood oxygen measurement",
                  "Heart rhythm monitoring", 
                  "Weather", 
                  "Sleep Tracking",
                ] 
              },
              { productName: 'Oraimo Watch 4 Plus OSW-801', 
                price: 3500, 
                description: 'Make calls directly on your wrist, without the hassle of picking up your phone. Get more connected with single-chip Bluetooth that ensures fast', 
                image: [ 
                  'https://cdn-img.oraimo.com/fit-in/600x600/AE/product/2023/11/21/OSW-801-680-9.jpg',
                  'https://www.digitalstore.co.ke/cdn/shop/files/bb2_400x.webp?v=1712216730',
                  'https://skywave.co.ke/wp-content/uploads/2024/03/oraimo-Watch-ES-Amoled-OSW-41-431x431.jpg', 
                ], 
                inStock: 1, 
                quantity: 1, 
                specs: [ 
                  "Display Screen: 2.01'' TFT 240*282",
                  "BT Version: V5.2",
                  "Battery Capacity: 300mAh",
                  "Battery Type: Lithium Polymer",
                  "Battery Charging Time: 3h Normal",
                  "Using Time: Up to 7 days",
                  "Standby Time: 30 days",
                  "Watch Size: 53.4*39.1*11.5mm (without strap)",
                  "Weight: 41g (with strap)",
                  "Material: ABS/PC/Silica Gel",
                  "Waterproof: IP68 *",
                  "oraimo Lab test result",
                  "Model:osw-801"
                ] 
              },
              { productName: 'T88 Ultra Smart Watch', 
                price: 2000, 
                description: 'Comes in two variations: Black and white.Elegant design and identical to the latest Apple Watch, with a screen size of 2.0 inches, type IPs, with a resolution of 385*385 pixels. Features USB quick removal direct charge, smart life assistant functions like step tracking, heart rate monitoring, and smartphone connectivity for notifications.', 
                image: [ 'https://deylamshop.ir/wp-content/uploads/2023/04/%D8%B3%D8%A7%D8%B9%D8%AA-%D9%87%D9%88%D8%B4%D9%85%D9%86%D8%AF-%D9%85%D8%AF%D9%84-T88-Ultra-2.jpeg',
                  'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/01/3962981/3.jpg?1406', 
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/3962981/4.jpg?1406',
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/3962981/3.jpg?1406', 
                ], 
                inStock: 1, 
                quantity: 1, 
                specs: [ 
                  "Battery capacity: 150 mAh", 
                  "Supports All Android Devices - iOS via Wear Fit Pro app",
                  "Bluetooth version of BT. V5.0",
                  "280 mAh battery for continuous use that lasts 2-4 days of use",
                  "Heart Rate and G-sensor",
                  "screen size of 2.0 inches, type IPs, with a resolution of 385*385 pixels.", 
                  "Packing Size: 12.2*8.1*3.2cm/4.79*3.18*1.26 inch", 
                  "Net Weight: 45.0g/1.59oz", 
                  "Brand: Generic" 
                ] 
              },
              { productName: 'X8 ultra smart', 
                price: 1700, 
                description: 'Versatile X8 Ultra Max Bluetooth Calling Watch compatible with both Android and iOS operating systems', 
                image: [ 
                  'https://makropkstore.blob.core.windows.net/makroresources/SiteResources/Products/smart-watches-gadget/oem/x8-ultra-smartwatch-49mm-with-bluetooth-calling-orange/c6d395a1-abff-48a6-a3f8-41e1daaa7d5a.webp', 
                  'https://cdn.shopify.com/s/files/1/0267/3534/5709/files/W-O-Series-X8-Ultra-SmartWatch_1024x1024.jpg?v=1667569391',
                  'https://5.imimg.com/data5/ANDROID/Default/2023/9/342965013/GQ/QR/CR/92816460/product-jpeg.jpg',
                  'https://achishopping.com/cdn/shop/products/x8ultrabox.jpg?v=1668806857', 
                  'https://i0.wp.com/madukani.co.ke/wp-content/uploads/2023/04/X8-ULTRA-Smart-Watch-4.jpg?fit=988%2C1028&ssl=1',
                ], 
                inStock: 1, 
                quantity: 1, 
                specs: [ 
                  "Model:	X8 Ultra Max Bluetooth Calling Watch",
                  "Sim :Support	No",
                  "Water: Proof	Yes",
                  "Modes:	Multi-Sport Modes",
                  "Dimensions:	478112mm",
                  "Strap Material:	Silicone",
                  "Water Resistant:	IP67",
                  "Weight:	50g",
                  "Operating System:	Android and iOS",
                  "Speaker:	Yes",
                  "Screen Size:	2.2 Inches",
                  "Screen Resolution:	240*296 Pixels",
                  "Screen Type:	IPS Screen",
                  "Battery Life:	2-5 Days",
                  "Charging interface mode:	wireless charger cable"
                ] 
              },
              { productName: 'Itel 1.83\'\' Sones Smart Watch', 
                price: 2200, 
                description: 'Features voice assistant and Bluetooth phone call functionality, allowing hands-free convenience without needing to use your phone. Boasts a sleek, narrow metal bezel design with four customizable menu styles.', 
                image: [ 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/3045732/1.jpg?7849',
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/6977512/5.jpg?5858', 
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/6977512/2.jpg?5858', 
                  'https://pictures-nigeria.jijistatic.net/157688334_NjIwLTYyMC1lMTQyYWExM2Jk.webp'
                ], 
                inStock: 1, 
                quantity: 1, 
                specs: [ 
                  "Model Name: ISW-011", 
                  "Screen: 1.83\" IPS 240*284", 
                  "Battery: 220mAh", 
                  "BT version: V5.3", 
                  "Input port: Magnetic attraction charging", 
                  "Color: Black", 
                  "Voice assistant", 
                  "Message notification", 
                  "Find phone", 
                  "Remote camera", 
                  "Muti-dial theme", 
                  "Stopwatch", 
                  "Female menstrual cycle reminder"
                ] 
              },
              { productName: 'Itel 1.43" True 60Hz Smart Watch Horizon', 
              price: 2000, 
              description: 'Enjoy hands-free convenience with voice assistant and Bluetooth phone call features. Designed with a sleek, narrow metal bezel and four customizable menu styles for a premium experience.', 
              image: [ 
                'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/1938232/1.jpg?7238', 
                'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/1938232/1.jpg?7238', 
                'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/1938232/1.jpg?7238'
              ], 
              inStock: 1, 
              quantity: 1, 
              specs: [ 
                "Model Name: ISW-011", 
                "Screen: 1.83\" IPS 240*284", 
                "Battery: 220mAh", 
                "BT version: V5.3", 
                "Input port: Magnetic attraction charging", 
                "Color: Black", 
                "Voice assistant", 
                "Message notification", 
                "Find phone", 
                "Remote camera", 
                "Muti-dial theme", 
                "Stopwatch", 
                "Female menstrual cycle reminder"
              ] 
              },
              { productName: 'Itel Sones Smartwatch ISW-O11 Waterproof Native Storm Smart Watch Sones', 
            price: 2700, 
            description: 'Experience hands-free convenience with the voice assistant and Bluetooth phone call features. The watch features a narrow metal bezel design and offers four customizable menu styles.', 
            image: [ 
              'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/6977512/5.jpg?5858', 
              'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/6977512/2.jpg?5858'
            ], 
            inStock: 1, 
            quantity: 1, 
            specs: [ 
              "Model Name: ISW-011", 
              "Screen: 1.83\" IPS 240*284", 
              "Battery: 220mAh", 
              "BT version: V5.3", 
              "Input port: Magnetic attraction charging", 
              "Color: Black", 
              "Voice assistant", 
              "Message notification", 
              "Find phone", 
              "Remote camera", 
              "Muti-dial theme", 
              "Stopwatch", 
              "Female menstrual cycle reminder"
            ] 
              } 
            ]);
            
            
            this.performSearch = function() {
              var self = this;
              // The search is actually performed automatically by the computed observable
              // This function can be used for additional actions on search if needed
              console.log("Searching for: " + self.searchTerm());
            };
            this.AirPodsList = ko.observable([
                { productName: 'AirPods Max', price: 3500, description: 'Immerse yourself in a symphony of sound with AirPods Max - Over-Ear High-Fidelity Headphones.', 
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-orange_FV1_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725492894519',
                  'https://smartbuy.myimaginestore.com/media/mf_webp/jpg/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/a/i/airpods-max-colors_2.webp',
                  'https://futureaudiophile.com/wp-content/uploads/2022/09/2-Apple-AirPodsMax-ManyColors-1024x683.jpg',
                ], inStock: 1, quantity: 1 , specs: [
                  "Active Noise Cancellation (ANC)",
                  "Spatial audio with dynamic head tracking",
                  "Up to 20 hours of battery life with ANC",
                  "Apple-designed H1 chip for seamless connectivity",
                  "Premium over-ear design with adaptive EQ"
                ]
                  },
                { productName: 'Oraimo Freepods 4', price: 3999, description: 'oraimo FreePods 4 ANC True Wireless Earbuds', 
                image: [
                  'https://cdn-img.oraimo.com/NG/album/oeb-e105d/oeb-e105d.png',
                  'https://cdn-img.oraimo.com/fit-in/600x600/MA/product/2024/04/09/105D-nblue.png',
                  'https://files.sophie.co.ke/2023/12/Oraimo_Cannon_2_Pro_18W_Fast_Charging_Charger_Kit_Main_Images16_7202.jpg'
                ], inStock: 1, quantity: 1 ,specs: [
                  "Bluetooth version: 5.2",
                  "Wireless range: Up to 10 meters",
                  "Battery capacity (earbuds): 37mAh each",
                  "Battery capacity (charging case): 500mAh",
                  "Charging time (earbuds): Approximately 1.5 hours",
                  "Charging time (charging case): Approximately 2 hours",
                  "Playback time: Up to 4 hours on a single charge",
                  "Total playback time with charging case: Up to 24 hours",
                  "Touch controls for music and calls",
                  "Voice assistant support",
                  "Comfortable in-ear design",
                  "Input: Type-C",
                  "LED indicators for battery status",
                  "Compact and portable charging case"
                ]
                  },
                { productName: 'Oraimo Freepods 4 Tuned by Burna Boy', price: 5999, description: 'Oraimo X Burna Boy SpacePods True Wireless Earbuds', 
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/6941651/1.jpg?2845',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6SrQZ8IlkgyP0rdxbOfoK77FKEE9iL_e9A&s',
                    'https://cdn-img.oraimo.com/tinymce/images/d3d3c95158ba1df20b8a264215fc7cb766b213d1ad0c9.jpg',
                    'https://le.co.ke/wp-content/uploads/2023/11/oeb-e105d-_-680-b2_1_1.jpg'
                  ], inStock: 1, quantity: 1 ,specs: [
                  "Burna Boy Exclusive Voice Prompt, t feels like he's talking to you! 'Noise cancellation','Game Mode','Transparency' ",
                  "Burna Boy Specially Tuned After almost a year of collaboration between Grammy Award winner Burna Boy and the oraimo audio team",
                  "Wireless range: Up to 10 meters",
                  "Battery capacity (earbuds): 37mAh each",
                  "Battery capacity (charging case): 500mAh",
                  "Charging time (earbuds): Approximately 1.5 hours",
                  "Charging time (charging case): Approximately 2 hours",
                  "Playback time: Up to 4 hours on a single charge",
                  "Total playback time with charging case: Up to 24 hours",
                  "Touch controls for music and calls",
                  "Input: Type-C",
                  "Compact and portable charging case"
                ]
                  },
                { productName: 'AirPods Pro', price: 1900, description: 'Immerse yourself in pure audio perfection with AirPods Pro featuring advanced Noise Cancellation technology.', 
                  image: [
                    'https://www.phoneplacekenya.com/wp-content/uploads/2019/11/Apple-Airpods-Pro.png',
                    'https://i.ebayimg.com/images/g/0fkAAOSwNINgZlag/s-l500.jpg',
                    
                  ], inStock: 1, quantity: 1, specs: [
                    "Active Noise Cancellation (ANC)",
                    "Transparency mode",
                    "Adaptive EQ for audio optimization",
                    "Sweat and water resistance (IPX4)",
                    "Wireless charging case included"
                  ]
                  },
                
                { productName: 'JBL Live Pro 2', price: 19999, description: 'Elevate your audio experience to new heights with JBL Live Pro 2 – where style meets superior sound.', 
                  image: [
                    'https://www.jbl.com.sg/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6a81b882/1.JBL_Live%20Pro%202_Product%20image_Hero_Blue.png?sw=537&sfrm=png',
                    'https://avechi.co.ke/mogefov/2023/09/jbl-live-pro-e1687424160200.jpg',
                    'https://www.phoneplacekenya.com/wp-content/uploads/2022/09/JBL-Live-Pro-2-c.jpg',
                    'https://www.unboxify.in/cdn/shop/products/71zJjUcOXJL._SL1500_5752eb17-6a4c-4831-921f-11efdddaa24c.jpg?v=1694962972',
                    'https://gagadget.com/media/post_big/JBL_Live_Pro_2_on_Amazon.jpg'
                  ], inStock: 1, quantity: 1 , specs: [
                    "True Wireless In-Ear Earbuds",
                    "Active Noise Cancellation (ANC)",
                    "Up to X hours of battery life (varies with ANC)",
                    "Touch controls for music and calls",
                    "Voice assistant support (e.g., Google Assistant, Siri)"
                  ]
                  },
                { productName: 'Sony WF-1000XM4', price: 4000, description: 'Dive into a world of unparalleled audio with Sony WF-1000XM4 and its industry-leading Noise Cancelation.', 
                  image: ['https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg',
                    'https://www.counterpointresearch.com/wp-content/uploads/2022/04/Counterpoint-Sony-WF-1000XM4-Review.jpg',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/6180761/1.jpg?7845'
                  ], inStock: 1, quantity: 1 ,specs: [
                    "Industry-leading Noise Cancellation",
                    "High-resolution audio with LDAC",
                    "Up to 8 hours of battery life on a single charge",
                    "Additional 16 hours with the charging case",
                    "Speak-to-Chat feature for automatic pause/play"
                  ]
                  },
                { productName: 'Samsung Galaxy Buds Pro', price: 4800, description: 'Unleash immersive sound with intelligent ANC - Samsung Galaxy Buds Pro is your gateway to audio brilliance.', 
                  image: [
                    'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg',
                    'https://img.us.news.samsung.com/us/wp-content/uploads/2021/01/12135936/19_galaxybudspro_lifestyle_violetsilverblack_201230070154.jpg',
                    'https://us03-imgcdn.ymcart.com/97025/2023/08/22/e/3/e3e0db4109e86e4c.jpg'
                  ], inStock: 1, quantity: 1 , specs: [
                    "Intelligent Active Noise Cancellation (ANC)",
                    "360-degree surround sound with Dolby Atmos",
                    "Up to 8 hours of playback on a single charge",
                    "Additional 20 hours with the charging case",
                    "IPX7 water resistance for durability"
                  ]
                  },
                { productName: 'Mi True Wireless Earbuds Basic 2 in Kenya', price: 4000, description: 'The Wireless Earbuds Basic 2 is equipped with the latest Bluetooth 5.0 chip.', 
                    image: [
                      'https://www.mobilehub.co.ke/storage/2023/09/mi-true-wireless-earbuds-basic-2-650x650-1.jpg',
                      'https://www.digitalstore.co.ke/cdn/shop/products/71XQ_EjG8QL._AC_SX679_458c68be-5199-4d49-9544-b872fa83ed80_600x.jpg?v=1647686609',
                    ], inStock: 1, quantity: 1 , specs: [
                      "Bluetooth Version :5.0",
                      "Battery Life :(Single Charge ) 5H",
                      "Additional 20 hours with the charging case",
                      "Effective Distance: 10Metres ",
                      "Microphone Yes"
                    ]
                    },
                { productName: 'Bose QuietComfort Earbuds', price: 4900, description: 'Indulge in pure serenity with Bose QuietComfort Earbuds - Noise-Canceling True Wireless Earbuds.', image: [
                  'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg',
                  'https://cdn.vox-cdn.com/thumbor/yHQexpmsIp24XKyBcwKC3EXTGos=/0x0:2040x1360/1400x1400/filters:focal(1058x772:1059x773)/cdn.vox-cdn.com/uploads/chorus_asset/file/21946559/IMG_0720-1.0.jpeg',
                  
                ], inStock: 1, quantity: 1 , specs: [
                    "World-class noise cancellation technology",
                    "Up to 6 hours of battery life on a single charge",
                    "Additional 12 hours with the charging case",
                    "Secure and comfortable in-ear design",
                    "Customizable touch controls for music and calls"
                  ]
                  },
                { productName: 'Google Pixel Buds A-Series', price: 4200, description: 'Embark on a journey of rich sound and clear calls with Google Pixel Buds A-Series.', 
                  image: [
                    'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg',
                    'https://lh3.googleusercontent.com/g6l5UAXSFGZ3oiE2N-hGj7TwcAxsq84Pk4H93umJUgJnQ0OyL3XfSyOP65Nt_KYw0t5688w2pYZDoz-Rfs1C9pngonPxAh0VWPU=s0',
                    'https://images.fonearena.com/blog/wp-content/uploads/2021/09/Pixel-Buds-A-Series_FoneArena-2-1024x548.jpg',
                    'https://i.etsystatic.com/21656020/r/il/b8bb82/2622239385/il_570xN.2622239385_cbob.jpg'
                ], inStock: 1, quantity: 1, specs: [
                    "Rich sound and clear calls with Adaptive Sound",
                    "Up to 5 hours of listening time on a single charge",
                    "Additional 24 hours with the charging case",
                    "Quick Charge: 15 minutes for up to 3 hours of listening",
                    "Hands-free Google Assistant integration"
                  ]
                  },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 4300, description: 'Immerse yourself in a world of sound with Anker Soundcore Liberty Air 2 Pro - Hybrid Active Noise Cancellation.', 
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/918569/1.jpg?3445',
                    'https://www.digitaltrends.com/wp-content/uploads/2021/01/anker-soundcore-liberty-air-2-pro-00012.jpg?fit=1200%2C9999&p=1',
                    'https://anker.com.sg/cdn/shop/files/01_9fd3a704-7444-46d2-a8a9-ecef0824d645.jpg?v=1704879782',
                    'https://images-na.ssl-images-amazon.com/images/I/51snKP8HWiL._AC_UL600_SR600,600_.jpg'
                ], inStock: 1, quantity: 1 , specs: [
                    "Hybrid Active Noise Cancellation for immersive sound",
                    "Up to 7 hours of playtime on a single charge",
                    "Additional 26 hours with the charging case",
                    "HearID personalized sound for a customized listening experience",
                    "4 built-in microphones for clear calls and voice assistant support"
                  ]
                  },
                { productName: 'Jabra Elite 85t', price: 3750, description: 'Escape into tranquility with Jabra Elite 85t and its advanced Active Noise Cancellation.', 
                  image: [
                    'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg',
                    'https://i.ebayimg.com/images/g/tdIAAOSwh-FjqeW6/s-l1200.jpg',
                    'https://www.techielass.com/content/images/2021/12/20211221_081122.jpg',
                    'https://cdn.pickr.com.au/wp-content/uploads/2021/02/85F17DC7-AC36-4FF6-9E14-A4A54B020324.jpeg'
                  ], inStock: 0, quantity: 1 , specs: [
                    "Advanced Active Noise Cancellation (ANC)",
                    "Up to 5.5 hours of battery life on a single charge",
                    "Additional 25 hours with the charging case",
                    "6-microphone technology for clear calls and wind noise protection",
                    "Customizable equalizer for personalized sound"
                  ]
                  },
                { productName: 'OnePlus Buds Pro', price: 3600, description: 'Elevate your audio experience with OnePlus Buds Pro - Smart Adaptive Noise Cancellation at its best.', 
                  image: ['https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png',
                    'https://phonesstorekenya.com/wp-content/uploads/2024/05/OnePlus-Buds-Pro-2.jpg',
                    'https://images.hothardware.com/contentimages/article/3134/content/small_OnePlus-Buds-Pro-13.jpg',
                    'https://i.ytimg.com/vi/4A71COerYf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsDk9j6LwFh_npTCasAtr7cu5JMw'
                  ], inStock: 1, quantity: 1 , specs: [
                    "Smart Adaptive Noise Cancellation for an immersive experience",
                    "Up to 5 hours of playback on a single charge",
                    "Additional 15 hours with the charging case",
                    "OnePlus Audio ID for personalized sound",
                    "Wireless charging capability"
                  ]
                  },
                { productName: 'Beats Powerbeats Pro', price: 3700, description: 'Experience high-performance audio with Beats Powerbeats Pro - your key to wireless earphone excellence.', image:[
                   'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg',
                   'https://i5.walmartimages.com/seo/Open-Box-Beats-by-Dr-Dre-Powerbeats-Pro-Totally-Wireless-Earphones_7462a983-b00e-4c4f-9d77-999b53dc7073.d88e04886370f13ea994ea5515556f12.png',
                   'https://photos5.appleinsider.com/gallery/30607-50329-unleashed-spot-beats-powerbeats-pro-xl.jpg',

                  ], inStock: 1, quantity: 1 , specs: [
                    "High-performance audio with powerful bass",
                    "Up to 9 hours of listening time on a single charge",
                    "Additional 24 hours with the charging case",
                    "Sweat and water-resistant design for active lifestyles",
                    "Secure-fit ear hooks for stability during workouts"
                  ]
                  },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 4100, description: 'Indulge in exceptional sound quality with Sennheiser Momentum True Wireless 2.', 
                  image: [
                    'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg',
                    'https://www.theaudiostore.in/cdn/shop/files/Sennheiser_MOMENTUM_True_Wireless_4_Noise-Canceling_Earbuds_black_copper_09_1024x.jpg?v=1720723344',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ2MVTwjpo9r6cPWkr3Ex1nBK2kw6-kafAQ&s'
                  ], inStock: 1, quantity: 1 , specs: [
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
                { productName: 'Skullcandy Indy Evo', price: 13100, description: 'Experience freedom with Skullcandy Indy Evo - True Wireless In-Ear Earbuds.', 
                  image: [
                    'https://m.media-amazon.com/images/I/6119HR9g38L.jpg',
                    'https://m.media-amazon.com/images/I/71gxk3w6NrL.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_RSYTvUXAF5fAI0bFOlGAhjot-gnbw-Ojw&s',
                    'https://support.skullcandy.com/hc/article_attachments/25991292515479'
                  ], inStock: 0, quantity: 1 , specs: [
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
                { productName: 'Huawei FreeBuds 4i', price: 12000, description: 'Dive into pure audio bliss with Huawei FreeBuds 4i - Active Noise Cancellation Earbuds.', 
                  image: [
                    'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg',
                    'https://www.digitalstore.co.ke/cdn/shop/products/Freebuds4i3_1024x.jpg?v=1626959397',
                    'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/audio/freebuds4i/specs-img/pc_2x-3.jpg',
                    
                ], inStock: 1, quantity: 1, specs: [
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
                { productName: 'Beats Studio Buds', price: 3800, description: 'Unleash the power of sound with Beats Studio Buds - True Wireless Noise Cancelling Earbuds.', 
                  image: [
                    'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg',
                    'https://betanews.com/wp-content/uploads/2023/05/Beats2k23-scaled.jpg',
                    'https://d.newsweek.com/en/full/2017689/beats-studio-buds.jpg'
                ], inStock: 0, quantity: 1 ,specs: [
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
                { productName: 'JBL Free X', price: 13000, description: 'Immerse yourself in the music with JBL Free X - Truly Wireless In-Ear Headphones.', image: [
                  'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png',
                  'https://manuals.plus/wp-content/uploads/2020/12/JBL-FREE-X-with-Charging-Case_12-300x216.png?ezimgfmt=rs:368x265/rscb1/ng:webp/ngcb1',
                  'https://tradezone.ac/cdn/shop/products/71Hwuk_88AL._AC_SL1500_800x.jpg?v=1574963714'
                ], inStock: 1, quantity: 1 , specs: [
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
                { productName: 'JBL Go3', price: 6500, description: 'Grab & Go. JBL Go 3 features bold styling and rich JBL Pro Sound. With its new eye-catching edgy design, colorful fabrics and expressive details this a must-have accessory for your next outing', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1c56c775/JBL_GO_3_DETAIL_1_BLUE_0008_1605x1605px.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
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
                { productName: 'JBL Boombox3', price: 62000, description: 'Grab and go. The JBL Go Essential is an ultra-compact portable Bluetooth speaker. Stream music via Bluetooth for up to 5 hours of JBL Original Pro Sound', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c30e385/JBL_GO_ESSENTIAL_DETAIL_BLACK_31543_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Portable Bluetooth speaker",
                  "JBL Pro Sound for powerful audio",
                  "Massive battery capacity for extended playtime",
                  "IPX7 waterproof and durable design",
                  "Bluetooth connectivity with multi-device support",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  "Built-in powerbank feature for charging devices",
                  "Integrated carrying handle for easy portability",
                  "Durable fabric material and rugged construction",
                  // Add more specific features if available
                ]
                },
                { productName: 'JBL Boombox2', price: 54000, description: 'Massive Sound. All Day Long. Own the party. From backyard barbecues to weekend road trips, JBL Boombox 2 brings it with monstrous bass, bold design and up to 24 hours of play time', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw38da412a/JBL_BOOMBOX_2_HERO_020_x1.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Portable Bluetooth speaker",
                  "JBL Pro Sound for powerful audio",
                  "Massive battery capacity for extended playtime",
                  "IPX7 waterproof and durable design",
                  "Bluetooth connectivity with multi-device support",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  "Built-in powerbank feature for charging devices",
                  "Integrated carrying handle for easy portability",
                  "Durable fabric material and rugged construction",
                  // Add more specific features if available
                ]
                 },
                { productName: 'JBL Partybox310', price: 79000, description: 'Incredible JBL Sound with a Dazzling Light Show. Huge sound, dazzling lights and unbelievable power set this speaker apart from the crowd', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw91f4edd0/JBL_PartyBox_310_Hero_0176_x3.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "High-power portable Bluetooth party speaker",
                  "JBL Pro Sound for immersive audio",
                  "Dynamic light show with customizable patterns",
                  "Rechargeable battery for hours of playtime",
                  "IPX4 splashproof design for outdoor use",
                  "Wireless Bluetooth streaming with multi-device support",
                  "USB playback and DJ pad for music control",
                  "Microphone and guitar inputs for karaoke or live performances",
                  "JBL PartyBoost for linking multiple compatible speakers",
                  // Add more specific features if available
                ]
                },
                { productName: 'JBL Partybox710', price: 108000, description: 'The life of every party. The splashproof PartyBox 710 transforms your next event into a real party, concert or nightclub', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1b0c500b/JBL_PARTYBOX_710_TABLET_0056_x5.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "High-power portable Bluetooth party speaker",
                  "JBL Pro Sound for immersive audio",
                  "Dynamic light show with customizable patterns",
                  "Rechargeable battery for extended playtime",
                  "IPX4 splashproof design for outdoor use",
                  "Wireless Bluetooth streaming with multi-device support",
                  "USB playback and DJ pad for music control",
                  "Microphone and guitar inputs for karaoke or live performances",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  // Add more specific features if available
                ]
                },
                { productName: 'JBL Partybox1000', price: 148000, description: 'The Ultimate Party Machine! The JBL PartyBox 1000 is a powerful party speaker with JBL sound quality and exciting full panel light show', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw356c45cb/JBL_PartyBox_1000_Hero_344_fire_x2.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "High-power portable Bluetooth party speaker",
                  "JBL Pro Sound for powerful and immersive audio",
                  "Dynamic light show with customizable patterns",
                  "Rechargeable battery for extended playtime",
                  "IPX4 splashproof design for outdoor use",
                  "Wireless Bluetooth streaming with multi-device support",
                  "USB playback and DJ pad for music control",
                  "Microphone and guitar inputs for karaoke or live performances",
                  "JBL PartyBoost for connecting multiple compatible speakers",
                  "Air Gesture wristband for interactive light control",
                  // Add more specific features if available
                ]
                 },
                { productName: 'JBL Partybox Encore Essential ', price: 41000, description: 'The portable JBL PartyBox Encore Essential speaker gives you up to 6 hours of non-stop fun. With an easy grab-and-go handle and splash proof design, you can always take the party with you.', image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa43c2101/JBL_PARTYBOX_ENCORE_ESSENTIAL_HERO_1605x1605px.png?sw=535&sh=535', inStock: 1, quantity: 1 , specs: [
                  "Output power: 100W",
                  "Frequency response: 50Hz - 20kHz @ -6dB",
                  "Dimensions: 10.87 x 12.87 x 11.54 inches",
                  "Weight: 5.9 kg",
                  "Bluetooth version: 5.1",
                  "Bluetooth profiles: A2DP 1.3, AVRCP 1.6",
                  "Bluetooth frequency: 2.4 GHz - 2.4835 GHz",
                  "Bluetooth modulation: GFSK, π/4 DQPSK, 8DPSK",
                  "Bluetooth transmitter power: ≤ 15 dBm (EIRP)",
                  "Charging time: 3.5 hours",
                  "Maximum music playing time: 6 hours",
                  "Lightshow: Yes",
                  "Splashproof: Yes (IPx4)",
                  "Charging cable: Yes",
                  "Wireless: Yes",
                  "Rechargeable battery: Yes",
                  "Bluetooth: Yes"
                ]
                },
                // { productName: 'JBL ', price: 0, description: '', image: '', inStock: 1, quantity: 1 , },
                // { productName: 'JBL ', price: 0, description: '', image: '', inStock: 1, quantity: 1 , },
                // { productName: 'JBL ', price: 0, description: '', image: '', inStock: 1, quantity: 1 , },
            ]);
            this.laptopList = ko.observable([
                { productName: 'HP EliteBook 830 G5', price: 45000, description: 'refurbished Intel Core i5 8th Gen 8GB RAM 256GB SSD 13.3 Inches FHD Display', image: 'https://laptopparts.co.ke/wp-content/uploads/2022/08/830-g5.jpg', inStock: 1, quantity: 1, specs: [
                  "Keyboard: HP Premium Collaboration Keyboard (optional backlit)",
                  "Pointing Device: Clickpad with multi-touch gesture support",
                  "Battery: 3-cell Li-ion, 50 Whr, 14 hours and 15 minutes life",
                  "AC Adapter: Output: 65 W USB Type-C™ adapter",
                  "Ports: Thunderbolt™ (USB Type-C™), USB 3.1 Gen 1, HDMI 1.4b, RJ-45, docking connector, headphone/microphone combo, AC power",
                  "Wireless: Intel® Dual Band Wireless-AC 8265 802.11a/b/g/n/ac (2×2) Wi-Fi, Bluetooth 4.2 Combo, vPro",
                  "Wired Protocol: Intel® I219-LM 10/100/1000 GbE, vPro",
                  "Security: HP BIOSphere Gen4, HP DriveLock, Power-on authentication, HP Secure Erase, HP Fingerprint Sensor, TPM 2.0 embedded security chip",
                  "Management: HP Driver Packs, HP System Software Manager, HP BIOS Config Utility, HP Client Catalog, HP Manageability Integration Kit Gen2",
                  "Available Software: Native Miracast support, HP LAN Protection, HP Connection Optimizer, HP 3D DriveGuard, HP ePrint Driver + JetAdvantage, HP Hotkey Support, HP Recovery Manager, HP JumpStart, HP Support Assistant, HP Noise Cancellation Software, HP PhoneWise, HP Client Security Gen4, Buy Office",
                  "Product Type: HP EliteBook 830 G5 Notebook PC",
                  "Product Colour: Silver"]
                  },
                { productName: 'HP Renewed Elitebook 840 G3', price: 30999, description: '6th Gen , Core I5, 8GB RAM- SSD 256 -14", Sliver', image: 'https://bitratedigital.co.ke/wp-content/uploads/2022/07/1167430-e3a7141c47a242c1a3e0fafe7132f4f7-1.jpg', inStock: 1, quantity: 1 , specs: [
                  "CPU: 2.5GHz Intel Core i5",
                  "Operating System: Windows Trial",
                  "RAM: 8GB",
                  "Hard Drive Size: 256GB SSD",
                  "Display Size: 14\"",
                  "Graphics Card: Intel HD Graphics 6000"
                  ]
                  },
                { productName: 'Apple Refurbished MacBook Pro', price: 35500, description: '13" Core I5 16GB RAM, 1TB HDD ( 2012) 2.5GHz- Silver', image: 'https://www.patabay.co.ke/wp-content/uploads/2023/03/m1-500x500.jpg.webp', inStock: 1, quantity: 1 , specs: ["Brand: Apple",
                "Processor: Intel Core i5-3000M Processor (2.5GHz, Dual-Core)",
                "Memory: 16GB RAM",
                "Storage: 1TB HDD",
                "Storage Interface: Serial-ATA, 5400RPM",
                "Optical Drive: 8x Dual-Layer SuperDrive",
                "Display: 13-inch LED-Backlit TFT Display Screen",
                "Display Resolution: 1280 X 800 Resolution",
                "Graphics Card: Intel HD Graphics 4000",
                "Graphics Card Type: Integrated Memory",
                "Networking: Ethernet [LAN], 10/100/1000Base-T",
                "Wi-Fi: [WLAN], 802.11a/b/g/n",
                "Bluetooth: 2.1+EDR",
                "Audio: Built-in Stereo Speakers, Headphone Jack, Microphone Jack",
                "Input Devices: Trackpad, Numeric Keyboard",
                "Expansion: 2 X USB 2.0 Ports, 1 X Firewire Ports, 1 X SD Card Slot",
                "Dimensions: 32.5 x 22.7 x 2.41 cm",
                "Weight: 2.04KG",
                "Year: 2012",
                "Condition: Refurbished"]
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
                { productName: 'Surface Book 4', price: 270000, description: 'Unleash your creativity with the Surface Book 4 - A versatile 2-in-1 laptop that adapts to your every need.', image: 'https://www.yankodesign.com/images/design_news/2020/06/auto-draft/organami_1.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Razer Blade 15', price: 320000, description: 'Experience gaming excellence with the Razer Blade 15 - A gaming laptop that combines power, performance, and stunning visuals.', image: 'https://www.techspot.com/images/products/2022/laptops/org/2022-04-01-product-3.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'LG Gram 17', price: 139900, description: 'Elevate your productivity with the LG Gram 17 - An ultra-lightweight laptop that delivers power and endurance.', image: 'https://cdn.mos.cms.futurecdn.net/GggajARVjXZEc2qeHamATV.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Dell G3 15', price: 99900, description: 'Dominate the gaming arena with the Dell G3 15 - A budget-friendly gaming laptop that doesn\'t compromise on performance.', image: 'https://divinetechcomputerske.co.ke/wp-content/uploads/2022/12/DELL.png', inStock: 0, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Acer Swift 5', price: 109900, description: 'Experience portability with the Acer Swift 5 - An ultrathin and lightweight laptop that combines power with elegance.', image: 'https://cdn.uc.assets.prezly.com/c55bb2f8-4599-49bc-b301-ce585d597302/Acer-Swift-5-SF514-55-Standard_01.png', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'HP Omen 15', price: 139900, description: 'Conquer the gaming battlefield with the HP Omen 15 - A gaming laptop that delivers raw power and cutting-edge features.', image: 'https://onetechcomputers.co.ke/wp-content/uploads/2021/11/HP-OMEN-15-Gaming-Laptop-10TH-Gen-in-kenya.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Asus VivoBook S15', price: 89900, description: 'Experience style with the Asus VivoBook S15 - A laptop that combines performance with a bold and expressive design.', image: 'https://dlcdnwebimgs.asus.com/gain/418d0f3b-aeef-44a0-81e0-4a68cc46e9f0/', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Lenovo Yoga C940', price: 129900, description: 'Immerse yourself in versatility with the Lenovo Yoga C940 - A 2-in-1 laptop that adapts to your every need.', image: 'https://m.media-amazon.com/images/I/71fDYa07BZL.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
                { productName: 'Microsoft Surface Laptop Go', price: 69900, description: 'Simplify your life with the Microsoft Surface Laptop Go - A compact and lightweight laptop that doesn\'t compromise on performance.', image: 'https://vividgold.co.ke/wp-content/uploads/2021/04/microsoft-laptop.jpg', inStock: 1, quantity: 1 , specs: ["NaN","NaN","NaN"]},
            ]);
            this.phoneList = ko.observable([
              { productName: 'XIAOMI Redmi A3', price: 12000, description: '128GB ROM+8GB RAM, 5000mAh,Blue 6.6"', 
                image: [
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/4291641/1.jpg?8317',
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/2121452/1.jpg?7985',
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/2121452/5.jpg?7985'
                ]
                , inStock: 0, quantity: 1 , specs: ["4GB RAM +128GB Storage","Processor: MediaTek Helio G36 processor","Display: 6.71'' Dot Drop display","Rear Camera: 8MP main camera","Front Camera: 5MP front camera","7Battery & Charging: 5000mAh battery ","Security: Side fingerprint sensor; AI face unlock"]},
                { productName: 'Itel S23',
                  price: 10940,
                  description: '6.6", 128GB + 4GB RAM, 50MP Camera, (Dual SIM), 4G, 5000mAh - Starry Black',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/8016942/1.jpg?1977',
                    'https://ke.jumia.is/cms/external/pet/IT910MP3M9OGUNAFAMZ/1c61fcf7de33d97ac35c1f6a9e350c5a.jpg',
                    'https://ke.jumia.is/cms/external/pet/IT910MP3M9OGUNAFAMZ/28ad1ff1837d7e2db0a6d5abb4040c4d.jpg'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: [
                    "Size: 6.6 inches, 104.6 cm2 (~84.0% screen-to-body ratio)",
                    "OS: Android 12",
                    "Memory: Internal 128GB, 4GB RAM",
                    "Main Camera: Single Camera 50 MP, f/1.6, (wide), AF, 0.08 MP (auxiliary lens)",
                    "Selfie camera: Single 8 MP",
                    "Sensors: Fingerprint (side-mounted), accelerometer",
                    "Battery: 5000 mAh, non-removable"
                  ]
                },
                { productName: 'Samsung Galaxy A15',
                  price: 17940,
                  description: '6.5", 128GB + 4GB RAM (Dual SIM), 5000mAh, Blue Black (1YR WRTY)',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/5691052/1.jpg?0511',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/5691052/4.jpg?0511',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/5691052/2.jpg?0511'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: [
                    "Display: 6.5''",
                    "Memory: 128GB + 4GB RAM",
                    "OS: Android",
                    "Rear Camera: 50MP + 5MP + 2MP",
                    "Front Camera: 32MP",
                    "Battery: 5000mAh"
                  ]
                },
                { productName: 'Tecno POP 8',
                  price: 12199,
                  description: '6.6", 3GB RAM + 64GB, 13MP, 4G (Dual SIM) 5000MAh - Gravity Black',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/4088961/1.jpg?8425'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: [
                    "Display: 6.6'' 90Hz Hole Screen",
                    "Memory: 3GB RAM + 64GB",
                    "Processor: Octa-core",
                    "Dimension: 163.86x75.51x8.9mm",
                    "Network: 2G/3G/4G",
                    "Resolution: 720*1612",
                    "Sensor: The ambient light and distance sensor, G-Sensor, Side-edge fingerprint",
                    "Camera: 8MP Front Camera with Dual Flash, 13MP AI Rear Camera with Dual Flash",
                    "Connectivity: GPS, Wifi, BT, FM, OTG",
                    "Battery Capacity: Non Removable 5000mAh"
                  ]
                },
                { productName: 'Techno Spark 10',
                  price: 20000,
                  description: '128GB ROM+8GB RAM, 5000mAh,Blue 6.6"',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/4291641/1.jpg?8317'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["Height: 163.89mm","Width:75.39mm","Thickness:8.40mm","6.6''","HD+90Hz Refresh Rate","720*1612 Resolution","Octa-core","128GB ROM","5000mAh(typ)+18W","Android 13"]
                },
                { productName: 'Infinix Smart 7 HD',
                  price: 14000,
                  description: '2GB RAM, 64GB, 5000mAh, 4G(DUAL SIM) - Ink Black.',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/2338621/1.jpg?8497'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["Display: 6.6 inches", "Memory: 64GB + 2GB RAM", "Main Camera: 8MP+AI LENS DUAL FLASH LIGHT", "Selfie Camera: 5MP FF WITH FLASH LIGHT", "SIM Card Slot: DUAL NANO SIM+MICRO SD", "OS: Android™ 12", "Battery: 5000mAh"]
                },
                { productName: 'Infinix Note 30 4G',
                  price: 26000,
                  description: '256GB + 8GB RAM (Dual SIM), 5000mAh, Obsidian Black',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/6625831/1.jpg?4662'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["Display: 6.66\"", "Memory: 256GB + 8GB RAM", "Rear Camera: 64MP", "Front Camera: 16MP", "OS: Android 13", "CPU: MediaTek Helio G85", "Battery: 5000mAh"]
                },
                { productName: 'XIAOMI Redmi A2+',
                  price: 15000,
                  description: '3GB+64GB, 8.0MP, 5000mAh, 4G , Dual SIM - Black',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1909161/1.jpg?9623'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["Operating System: Android 12 (Go edition), MIUI", "Chipset: Mediatek Helio G36 (12 nm)", "Display: 6.52\" HD+", "Memory: 3GB RAM + 64GB Internal storage", "Camera: 8MP Rear Camera, 5MP Front Camera", "Battery: 5000mAh(Typ), Support 10W Charge, In-box 10W charger", "WIFI, Bluetooth 5.0", "Dual SIM + Micro-SD Card Slot", "2G: GSM: 850 900 1800 1900 MHz"]
                },
                { productName: 'Blackview A80Plus',
                  price: 15000,
                  description: 'Android 10.0, HD Camera, 4/64G Memory,4680Mah Battery-Black',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/182654/1.jpg?6559'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["Powered to Enjoy More", "4GB RAM + 64GB ROM", "4680mAh Big Battery", "5V/2A, Type-C Port", "HD+ 6.49'' In-Cell Waterdrop Screen", "89% Screen-to-Body Ratio"]
                },
                { productName: 'Samsung Galaxy A04e',
                  price: 16000,
                  description: '32GB ROM 3GB RAM 6.5" 5000mAh Battery - Black',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/4609161/1.jpg?4264'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["6.5'' display", "Android 12", "Octa-core processor", "13MP Rear camera and 2MP front camera", "32GB ROM 3GB RAM", "5000mAh Battery"]
                },
                { productName: 'Itel S23-6.6"HD',
                  price: 16000,
                  description: '128 GB/4GB RAM (UP TO 8GB)-50MP-5000MAH-4G LTE-WATCH & PODS',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/3801651/1.jpg?0043'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["ITEL S23", "6.6\" HD+ 90HZ WATERDROP FULLSCREEN", "128GB ROM/4GB RAM(UP TO 8GB RAM)", "50MP AI REAR CAMERA", "HIGH-SPEED 4G LTE NETWORK", "5000MAH BATTERY/10W FAST CHARGE", "FINGERPRINT"]
                },
                { productName: 'Nokia C1 2nd Edition',
                  price: 11000,
                  description: '5.45" - 16GB + 1 GB - Dual Sim - 2500 MAh, + FREE GITS',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/559235/1.jpg?7574'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["5.45\" toughened Glass Display", "5MP Rear Camera with Flash", "5MP Front Camera with Flash", "Android 11", "1GB RAM, 16GB Storage", "Dual Sim, 3G", "2500 mAh Battery", "Quad Core 1.3GHz processor", "Google Assistant Button", "Micro SD card slot Supports up to 64 GB"]
                },
                { productName: 'Infinix Hot 30i',
                  price: 19500,
                  description: '4GB RAM, 128GB, 5000mAh, Dual SIM Cards',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/5477051/1.jpg?1651'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["SIZE 6.56-INCH", "SCREEN-TO-BODY RATIO 90%", "RESOLUTION 720*1612", "Android™ 12", "nternal Storage: 128GB", "RAM 4GB(UP TO 8GB)", "BATTERY CAPACITY 5000mAh"]
                },
                { productName: 'Oppo A17K',
                  price: 18500,
                  description: '6.56" INCHES DISPLAY (3GB+ 64GB )Android 12 (Dual SIM), 5000 MAh',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/1701001/1.jpg?3904'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["RAM: 3GB", "Storage: 64GB", "Battery: 5000 mAh", "Camera: 8MP + 2MP", "Selfie: 5MP", "Display: 6.56 inch, IPS LCD", "Processor: Mediatek Helio P35", "Connectivity: Dual sim, 4G, Wi-Fi", "Colors: Midnight Black, Lake Blue", "OS: Android 12"]
                },
                { productName: 'Realme C33',
                  price: 22000,
                  description: '6.5" Display, 4GB RAM + 128GB, Dual Sim, 5000mAh',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/3388031/2.jpg?8471'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["4GB RAM +128 GB internal storage", "5000mAh battery", "Dual-Sim", "Unisoc T612,1.8GHz processor", "50MP + 5MP front camera", "Memory Card, up to 1TB"]
                },
                { productName: 'Oppo A17',
                  price: 23500,
                  description: '4GB + 64GB, 50MP, (Dual SIM), Blue + Airpods',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/4880161/2.jpg?7654'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["RAM: 4GB", "Storage: 64GB", "Battery: 5000 mAh", "Camera: 50MP + 2MP", "Selfie: 5MP", "Display: 6.56 inch, IPS LCD", "Processor: Mediatek Helio P35", "Connectivity: Dual sim, 4G, Wi-Fi", "Colors: Midnight Black, Lake Blue", "OS: Android 12"]
                },
                { productName: 'Realme C30s',
                  price: 14500,
                  description: '6.5", 64GB ROM + 3GB RAM, 8MP (Dual SIM) 5000mAh - Blue',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/3484921/2.jpg?0896'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["6.5 inches, 102.0 cm2 (~82.1% screen-to-body ratio)", "4GB RAM", "64GB expandable storage, Card slot", "8-megapixel main rear camera", "5-megapixel front camera", "5,000mAh battery", "Android 12 (Go Edition)"]
                },
                { productName: 'Samsung Galaxy A14',
                  price: 22500,
                  description: '6.6", 64GB + 4GB, 50MP, Dual SIM, 5000mAh, Black',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/2270321/1.jpg?0408'
                  ],
                  inStock: 0,
                  quantity: 1,
                  specs: ["Display: 6.6\"", "Memory: 64GB Internal, 4GB RAM", "OS: Android", "Rear Camera: 50MP + 5MP + 2MP + 2MP", "Front Camera: 13MP", "Battery:  5000mAh"]
            }]);            
            this.AvailableList = ko.observable([
              { 
                productName: 'Oraimo FreePods Lite', 
                price: 1700, 
                prevPrice: 2200, 
                description: 'Experience true wireless freedom with Oraimo FreePods Lite featuring premium sound quality, long battery life, and comfortable fit.',
                image: [
                  'https://cdn-img.oraimo.com/fit-in/600x600/NG/album/otw-330/otw-330-3.jpg',
                  'https://oraimo-shop.s3.eu-west-1.amazonaws.com/tinymce/images/ca206ff913c81368323fef5f7332dd5665226de18038c.jpg',
                  'https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/j/i/n/freepods-lite-otw-330-oraimo-original-imagsxyu3bdfkdhm.jpeg?q=90&crop=false',
                  'https://cdn-img.oraimo.com/fit-in/600x600/NG/album/otw-330/otw-330-5.jpg'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Up to 24 hours total playtime with charging case",
                  "Bluetooth 5.0 for stable connection",
                  "Touch controls for easy operation",
                  "IPX5 water resistance",
                  "Ergonomic design for comfortable fit",
                  "Built-in microphone for calls",
                  "Instant pairing technology"
                ]
              },
              { 
                productName: 'iTel Buds Ace', 
                price: 1300, 
                prevPrice: 1800, 
                description: 'iTel Buds Ace TWS earbuds deliver crystal clear sound with deep bass and seamless connectivity for your daily entertainment.',
                image: [
                  'https://alkayconcepts.com/wp-content/uploads/2024/08/budace22.jpg',
                  'https://m.media-amazon.com/images/I/61NWlcG8jVL.jpg',
                  'https://cdn.sanity.io/images/q5ix3yzs/production/9bc3ebc5ac3ac00d15a1c15664043065565cd519-1200x1200.png?fit=max&auto=format'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "20 hours total playtime with charging case",
                  "10mm dynamic drivers",
                  "Smart touch controls",
                  "Bluetooth 5.0 connectivity",
                  "Ergonomic and lightweight design",
                  "Voice assistant support",
                  "Quick charging capability"
                ]
              },
              { 
                productName: 'iTel Buds Ace ANC', 
                price: 1800, 
                prevPrice: 2500, 
                description: 'Experience immersive audio with iTel Buds Ace ANC featuring active noise cancellation and premium sound quality for an enhanced listening experience.',
                image: [
                  'https://img.drz.lazcdn.com/static/bd/p/3e007a2751baf4fa43e6d74beee88c37.jpg_720x720q80.jpg_.webp',
                  'https://www.itel-life.com/fileadmin/assets/img/plp/BudsAce/PC-image/BudsAcePC_10.jpg',
                  'https://cdn.sanity.io/images/q5ix3yzs/production/a6d607e8ceae2f88b9ea4d23e68acfc1c790bba2-4284x4284.jpg?fit=max&auto=format'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Active Noise Cancellation up to 25dB",
                  "Transparency mode for ambient sound",
                  "30 hours total playtime with case",
                  "Dual device connectivity",
                  "Low latency gaming mode",
                  "IPX5 water resistance",
                  "USB-C fast charging",
                  "Bluetooth 5.2 technology"
                ]
              },
              { productName: 'AirPods Pro', price: 1700,
                prevPrice: 1900, description: 'Immerse yourself in pure audio perfection with AirPods Pro featuring advanced Noise Cancellation technology.', 
                image: [
                  'https://www.phoneplacekenya.com/wp-content/uploads/2019/11/Apple-Airpods-Pro.png',
                  'https://i.ebayimg.com/images/g/0fkAAOSwNINgZlag/s-l500.jpg',
                  
                ], inStock: 1, quantity: 1, specs: [
                  "Active Noise Cancellation (ANC)",
                  "Transparency mode",
                  "Adaptive EQ for audio optimization",
                  "Sweat and water resistance (IPX4)",
                  "Wireless charging case included"
                ]
                },
                {
                  productName: 'Oraimo Airbuds 4',
                  price: 2350,
                  prevPrice: 2800,
                  description: 'Premium wireless earbuds with enhanced features',
                  image: [
                    'https://www.phoneplacekenya.com/wp-content/uploads/2024/02/Oraimo-Airbuds-4.jpg',
                    'https://cdn-img.oraimo.com/tinymce/images/058403717182272b7051c34638ef7be765c1f8805d489.jpg',
                    'https://cdn-img.oraimo.com/tinymce/images/227a384d9501c19d3a3dc896649be94765d5629d551eb.jpg'
                  ],
                  inStock: 1,
                  quantity: 1,
                  specs: [
                    "Active noise reduction",
                    "Touch controls",
                    "IPX5 water resistance",
                    "40 hours total playtime",
                    "Bluetooth 5.2"
                  ]
                },
                {
                  productName: 'Air Max P9 Pro',
                  price: 3500,
                  description: 'Experience premium wireless audio with the Air Max P9 Pro - Professional Over-Ear Bluetooth Headphones with advanced connectivity and superior sound quality.',
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/7573221/3.jpg?6132',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/7573221/4.jpg?6132',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/7573221/1.jpg?6132',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/7573221/2.jpg?6132'
                  ],
                  inStock: 1,
                  quantity: 1,
                  specs: [
                    "Bluetooth 5.0 protocol for stable connection",
                    "10 meters transmission range",
                    "Power display and call function support",
                    "NFC function for easy pairing",
                    "Voice control and music support",
                    "Multipoint connection capability",
                    "Professional over-ear design",
                    "Stereo channel audio delivery"
                  ]
                },
              { productName: 'TWS Original Airpods Pro 3', price: 750, prevPrice: 950, description: 'Smartphone earbuds HiFi sound headphonesStyle.', 
              image: [
                'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/H/O/122813_1667536907.jpg',
                'https://5.imimg.com/data5/SELLER/Default/2022/6/LR/NO/QG/138494772/1654961443259-png-1000x1000.png',
                'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/56/8691551/1.jpg?4591'
              ], 
              inStock: 1, quantity: 1, specs: [
              "Listening time: 3 hours",
              "360mAh charging case",
              "Lightning charging cable",
              "Sweat and water resistance (IPX4)",
              "Wireless charging case included",
              "Compatible with Android and iOS devices"
              ]
              },
              { productName: 'Pro 5s', price: 900, prevPrice: 1200, description: 'True Wireless Communication: Enjoy the freedom of movement with no wires to hold you back. The earphones connect wirelessly to your device for a seamless audio experience.', 
                image: [
                    'https://static-01.daraz.com.np/p/aa109dc5ca5984584b79bd197af090a2.jpg',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/100417/3.jpg?2146',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP16XUr9eb5mG_pLH7pKYEP_bkdbHvnXHw2V_t2cfBiciQsVDW40FLZUtu2d0Cxz80aCw&usqp=CAU',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-bacrkIsqp0eoFkq9MY2NhEJyGjCh0PxToJnFockwR-vZ0sjbQRlJTDmNTEAeYnICLQ&usqp=CAU'

                ],
                inStock: 1, 
                quantity: 1, 
                specs: ["Listening time: 3 hours", "360mAh charging case", "Lightning charging cable"] 
              },
              { productName: 'JBL TWS 4 Earbuds', price: 900, prevPrice: 1200, description: 'Introducing Denise - the Air-R02 with extraordinary sound quality and stylish design.', 
                image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/3732541/1.jpg?8352',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/5507111/1.jpg?5858',
                    'https://shoppingekart.com/images/product-images/1599817161869471089.jpg'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: ["Sweat proof", "Compatible with all mobile phone (android or ios) and music players", "Touch sensitive controls"] 
              },
              { productName: 'Air R03', price: 900, prevPrice: 1200, description: 'Experience the freedom of Air-R03 Wireless TWS Earbuds – Your perfect companion for untethered music bliss!', 
                image: [
                  'https://meowpo.com/liveimages/meow_product_images/3580303014.jpg',
                  'https://meowpo.com/liveimages/meow_product_images/2709324513.jpg',
                  'https://ph-test-11.slatic.net/p/f4e9c47904cd540e9e0fd08faa635f35.jpg',
                  'https://basket-14.wbcontent.net/vol2102/part210232/210232094/images/big/2.webp'
                ]
                , inStock: 1, quantity: 1 , specs: [
                "Wireless TWS Earbuds",
                "Bluetooth v5.0",
                "Up to 3 hours of listening time",
                "Charging case with 360mAh capacity",
                "Compatible with Android and iOS devices"
              ]
              },
              {
                productName: 'ITEL SONES Smart Watch',
                price: 1750,
                prevPrice: 2000,
                description: 'Smart watch with health and fitness tracking',
                image: [
                  'https://chomart.com/storage/images/itel-sones-smart-watch-native-storm-ip68-waterproof-blue-sogxp164837.webp',
                  'https://cdn.sanity.io/images/q5ix3yzs/production/ca90e563e63de5141b6654f376037f0e05e4dc96-1440x1440.jpg?fit=max&auto=format'
                ],
                inStock: 1,
                quantity: 1,
                specs: [
                  "Heart rate monitoring",
                  "Sleep tracking",
                  "Multiple sport modes",
                  "Call notifications",
                  "Water resistant"
                ]
              },
              { productName: 'In-Ear Earphone Stereo', price: 900, prevPrice: 1200, description: 'Wireless Bluetooth 5.2 In-Ear Earphone Stereo Headset', 
                image: [
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/576237/6.jpg?1179',
                  'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/H/O/122813_1667536907.jpg'
                ], inStock: 1, quantity: 1, specs: [
                "Bluetooth Version: 5.2",
                "Wearing Mode: Neckband",
                "Charging Time: 2-3 Hours",
                "Playing Time: About 6 Hours",
                "Compatible Models: for Android/for iPhone"
              ]
              },
              { productName: 'Air R02', price: 950, prevPrice: 1150, description: 'True wireless earbuds that comes with a Free anti fingerprint silicone case. Bluetooth v5.0 supports both android and IOS devices. Smooth in ear design', 
                image: [
                  'https://elbay.ge/wp-content/uploads/2023/09/jbl-air-r02-%E1%83%91%E1%83%9D%E1%83%AE-2.jpg',
                  'https://img1.ibay.com.mv/is1/full/2024/07/item_5588110_598.jpg',
                  'https://elbay.ge/wp-content/uploads/2023/09/jbl-air-r02-%E1%83%91%E1%83%9D%E1%83%AE-2.jpg'
                ], inStock: 1, quantity: 1, specs: [
                "True Wireless Earbuds",
                "Bluetooth v5.0",
                "Up to 3 hours of listening time",
                "Charging case included",
                "Compatible with Android and iOS devices"
              ]
              },
             
              
              {
                productName: 'Playstation 5 controller',
                price: 9000,
                prevPrice: 10500,
                description: 'Official PS5 DualSense wireless controller',
                image: [
                  'https://www.pcrichard.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/dw42daebc9/images/hires/Z_1000044153.jpg?sw=800&sh=800&sm=fit',
                  'https://videogamesplus.ca/cdn/shop/files/Screenshot_2024-10-08_121509_739x405.png?v=1728404164',
                  'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_125853827?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402'
                ],
                inStock: 1,
                quantity: 1,
                specs: [
                  "Wireless connectivity",
                  "Haptic feedback",
                  "Adaptive triggers",
                  "Built-in microphone",
                  "USB-C charging port"
                ]
              },
              {
                productName: 'Wireless Earbuds + Free Silicone Case',
                price: 650,
                prevPrice: 750,
                description: 'Wireless earbuds with protective silicone case included',
                image: [
                  'https://pictures-kenya.jijistatic.com/46195395_NjIwLTgyNy04MTljOTVmY2Fk.webp',
                      'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/5093861/1.jpg?0428',
                      'https://pictures-kenya.jijistatic.com/34661399_NjIwLTgyNy1mZWFkYjllMjUy.webp'
                ],
                inStock: 1,
                quantity: 1,
                specs: [
                  "Bluetooth connectivity",
                  "Touch controls",
                  "Free silicone case",
                  "Charging case included",
                  "Compatible with all devices"
                ]
              },
              {
                productName: 'Oraimo Conch 2 Earphones',
                price: 250,
                prevPrice: 350,
                description: 'Wired earphones with enhanced bass',
                image: [
                  'https://www.smartcomputersketech.co.ke/wp-content/uploads/2023/12/Oraimo-Conch-2-Stylish-Deeper-Bass-In-ear-Earphone-1.png',
                  'https://restockitssupplies.com/wp-content/uploads/2023/09/Oraimo-OEP-E11-Deeper-Bass-Earphone-Restockits-4.jpeg'
                ],
                inStock: 1,
                quantity: 1,
                specs: [
                  "Enhanced bass",
                  "Built-in microphone",
                  "3.5mm jack",
                  "Tangle-free cable",
                  "Universal compatibility"
                ]
              },
              
              {
                productName: 'Wireless Rechargeable Mouse',
                price: 800,
                prevPrice: 1000,
                description: 'Wireless optical mouse with rechargeable battery',
                image: [
                  'https://www.territories.co.ke/wp-content/uploads/2024/06/Untitled-design-22.jpg'
                ],
                inStock: 1,
                quantity: 1,
                specs: [
                  "Rechargeable battery",
                  "Wireless connectivity",
                  "Adjustable DPI",
                  "Ergonomic design",
                  "Compatible with all computers"
                ]
              },
              {
                productName: 'Oraimo Type C to 3.5mm Audio Jack',
                price: 300,
                prevPrice: 450,
                description: 'Connect earphones or aux cable to your Type-C device',
                image: [
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/1288961/1.jpg?0927',
                  'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/1288961/2.jpg?0927',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5b0e7wfBK2Fzisw_ZgDN8dlWlzaP53a5OVg&s'
                ],
                inStock: 1,
                quantity: 1,
                specs: [
                  "Type-C to 3.5mm conversion",
                  "Hi-Fi audio support",
                  "Plug and play",
                  "Compact design",
                  "Compatible with most Type-C devices"
                ]
              },
              { productName: 'Stereo F9 Bluetooth Earphone', price: 900, prevPrice: 1100, description: 'Stereo F9 Bluetooth Earphone', 
                image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/812253/1.jpg?0315',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/3896571/1.jpg?8004'
                ],
                inStock: 0, 
                quantity: 1, 
                specs: [
                    "About 5 hours music time/talk time for the 1 time fully charged earphone by 70& volume, 15 times for the charging box to charge the earphone.",
                    "Easy touch control by touching earphone for volume up/down, Play/Pause Song, Next/Previous Song, activate/deactivate Voice Assistant(Siri and Android Voice assistant), power on/off, Answer/Reject call",
                    "Power Level Display for the charging box and earphone",
                    "Bluetooth 5.0",
                    "Effective Distance: > 10m",
                    "Sweat/rainy waterproofing"
                ] 
              },
              { productName: 'Silicone Protective Case Cover', price: 150, prevPrice: 350, description: 'Silicone material made, durable and wear-resistant', 
                image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/948983/1.jpg?7829'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: [
                    "Portable and lightweight, easy to carry and use",
                    "Application: For AirPods Pro",
                    "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] 
              },
              { productName: 'Silicone Protective Case Cover', price: 150, prevPrice: 350, description: 'Silicone material made, durable and wear-resistant', 
                image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/948983/1.jpg?7828'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: [
                    "Portable and lightweight, easy to carry and use",
                    "Application: For AirPods Pro",
                    "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] 
              },
              { productName: 'Silicone Protective Case Cover', price: 150, prevPrice: 350, description: 'Silicone material made, durable and wear-resistant', 
                image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/446983/1.jpg?2121'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: [
                    "Portable and lightweight, easy to carry and use",
                    "Application: For AirPods Pro",
                    "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] 
              },
              { productName: 'Silicone Protective Case Cover', price: 150, prevPrice: 350, description: 'Silicone material made, durable and wear-resistant', 
                image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/646983/1.jpg?2174'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: [
                    "Portable and lightweight, easy to carry and use",
                    "Application: For AirPods Pro",
                    "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] 
              },
              { productName: 'Protective TPU Cover Case For AirPods Pro', price: 900, prevPrice: 1200, description: 'Protective TPU Cover Case For AirPods Pro', 
                image: [
                    'https://i.ebayimg.com/images/g/6~kAAOSwgmBfySTN/s-l1200.jpg',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/693295/3.jpg?4138',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/693295/1.jpg?4138',
                    'https://images.fyndiq.se/images/f_auto/t_600x600/prod/5e8ec3f434704774/fd0a52aa549d/airpods-pro-etui-brun',
                    'https://m.media-amazon.com/images/I/61OTE7ZJAtL.jpg'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: [
                    "Portable and lightweight, easy to carry and use",
                    "Application: For AirPods Pro",
                    "Portable, Anti-scratch, Dust-proof, Anti-fall"
                ] 
              },
              { productName: '2Pcs Anti-lost Anti-slip Soft Earcaps Earphone', price: 250, prevPrice: 450, description: '2Pcs Anti-lost Anti-slip Soft Earcaps Earphone', 
                image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/948983/1.jpg?7828',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/955584/1.jpg?5324',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQF4ZYNf_0AMnTUA1ha3-cUdZWolA1T2nZsK9GpvgNFnjeDm0SXOMjegy2cbE156B5GOo&usqp=CAU',
                    'https://static-01.daraz.com.bd/p/c74fbc96474339adfbf3d160dce070c2.jpg'
                ],
                inStock: 1, 
                quantity: 1, 
                specs: [
                    "Made of soft silicone material, it is comfortable to use",
                    "Application: For AirPods Pro",
                    "Portable, Anti-scratch, Dust-proof, Anti-fall",
                    "You can send it to friends as a gift"
                ] 
              }
            ]);
            this.iPhoneList = ko.observableArray([
              { 
                productName: 'iPhone 11 (128GB)', 
                price: 43000,
                description: 'iPhone 11 128GB',
                image: [
                  'https://www.mobile-store.co.ke/images/iphone_11_64gb_03v2_negro_ad_l.webp',
                  'https://mobileprokenya.odoo.com/web/image/product.template/11/image_1024?unique=0ed18df',
                  'https://orifon.co.ke/wp-content/uploads/2021/08/iphone_11_128_gb_11.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch",
                  "Camera: Dual 12MP Ultra Wide and Wide cameras",
                  "Processor: A13 Bionic chip",
                  "Battery life: Up to 17 hours of video playback"
                ]
              },
              {
                productName: 'iPhone 11 (256GB)',
                price: 46000,
                description: 'iPhone 11 256GB',
                image: [
                  'https://fancytech.co.ke/wp-content/uploads/2024/11/iPhone-11-Pro-256GB-Lipa-Mdogo-Mdogo.jpg.webp',
                  'https://infinitetech.co.ke/wp-content/uploads/2024/08/Untitled-design-2024-08-28T110321.153.jpg',
                  'https://www.mobile-store.co.ke/images/iphone_11_64gb_03_blanco_ad_l.webp'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch",
                  "Camera: Dual 12MP Ultra Wide and Wide cameras",
                  "Processor: A13 Bionic chip", 
                  "Battery life: Up to 17 hours of video playback"
                ]
              },
              {
                productName: '11 Pro (256GB)',
                price: 49000,
                description: 'iPhone 11 Pro 256GB',
                image: [
                  'https://smartphonestorekenya.com/wp-content/uploads/2020/09/apple-iphone-11-pro-256gb-5.8.jpg',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro_Colors_091019_big.jpg.large.jpg',
                  'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-max-4.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 5.8 inch Super Retina XDR display",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A13 Bionic chip",
                  "Battery life: Up to 18 hours of video playback"
                ]
              },
              {
                productName: '11 Pro max (256GB)',
                price: 56000,
                description: 'iPhone 11 Pro Max 256GB',
                image: [
                  'https://istore.ke/wp-content/uploads/2021/08/Apple-iPhone-11-Pro.jpg',
                  'https://smartphonestorekenya.com/wp-content/uploads/2020/09/l_10198017_005.jpg',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro-Max_Colors_091019_big.jpg.large.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.5 inch Super Retina XDR display",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A13 Bionic chip",
                  "Battery life: Up to 20 hours of video playback"
                ]
              },
              {
                productName: '12 (128GB)',
                price: 53000,
                description: 'iPhone 12 128GB',
                image: [
                  'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12/iphone-12-red.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12_10132020_big.jpg.large.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display",
                  "Camera: Dual 12MP Ultra Wide and Wide cameras",
                  "Processor: A14 Bionic chip",
                  "Battery life: Up to 17 hours of video playback"
                ]
              },
              {
                productName: '12 (256GB)',
                price: 56000,
                description: 'iPhone 12 256GB',
                image: [
                  'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12/iphone-12-purple.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000',
                  'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple_iPhone-12-spring21_purple_04202021_big.jpg.large.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display",
                  "Camera: Dual 12MP Ultra Wide and Wide cameras",
                  "Processor: A14 Bionic chip",
                  "Battery life: Up to 17 hours of video playback"
                ]
              },
              {
                productName: '12 mini (128GB)',
                price: 46000,
                description: 'iPhone 12 mini 128GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-black-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343705000',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone12mini-spring21_purple_04202021_big.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343706000'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 5.4 inch Super Retina XDR display",
                  "Camera: Dual 12MP Ultra Wide and Wide cameras",
                  "Processor: A14 Bionic chip",
                  "Battery life: Up to 15 hours of video playback"
                ]
              },
              {
                productName: '12 Pro (256GB)',
                price: 63000,
                description: 'iPhone 12 Pro 256GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-12-Pro-Max_Pacific-Blue_10132020_big.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021659000'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A14 Bionic chip",
                  "Battery life: Up to 17 hours of video playback"
                ]
              },
              {
                productName: '12 Pro (128GB)',
                price: 59000,
                description: 'iPhone 12 Pro 128GB',
                image: [
                  'https://repairlogic.gr/wp-content/uploads/2021/12/iphone-12-pro-family-hero-all_940x-6-300x300.jpg.webp',
                  'https://i.ebayimg.com/images/g/FmcAAOSw6WFm76nZ/s-l400.jpg',
                  'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg',
                  'https://www.manlylaptops.com.au/assets/full/MLPHN99170-G.jpg?20240509122340'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display", 
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A14 Bionic chip",
                  "Battery life: Up to 17 hours of video playback"
                ]
              },
              {
                productName: '12 Pro max (128GB)',
                price: 69000,
                description: 'iPhone 12 Pro Max 128GB',
                image: [
                  'https://www.phoneplacekenya.com/wp-content/uploads/2020/08/Apple-iPhone-12-Pro-Max.jpg',
                  'https://i0.wp.com/oalixsmartcloud.co.ke/wp-content/uploads/2023/04/V7.png?fit=600%2C600&ssl=1',
                  'https://pcrigenerati.eu/wp-content/uploads/2023/01/004936PCR-EU.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.7 inch Super Retina XDR display",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A14 Bionic chip",
                  "Battery life: Up to 20 hours of video playback"
                ]
              },
              {
                productName: '12 Pro max (256GB)',
                price: 73000,
                description: 'iPhone 12 Pro Max 256GB',
                image: [
                  'https://appleguyza.co.za/wp-content/uploads/2022/08/IMG_7019.jpg',
                  'https://mobileprokenya.odoo.com/web/image/product.template/3075/image_1024?unique=0ed18df',
                  'https://i.ebayimg.com/images/g/bF4AAOSwp2tlczHF/s-l1200.jpg',
                  'https://eshop.odoo.com/web/image/product.template/1/image_1024/Apple%20iPhone%2012%20Pro%20Max?unique=ecc2f59'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.7 inch Super Retina XDR display",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A14 Bionic chip",
                  "Battery life: Up to 20 hours of video playback"
                ]
              },
              {
                productName: '13 mini (128GB)',
                price: 56000,
                description: 'iPhone 13 mini 128GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-mini-midnight-2022?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072980362',
                  'https://www.dimprice.co.uk/image/cache/catalog/Apple/appple-iphone-13-mini-pink-06-800x800.png',
                  'https://www.financialexpress.com/wp-content/uploads/2021/09/iphone13-1.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 5.4 inch Super Retina XDR display",
                  "Camera: Dual 12MP Ultra Wide and Wide cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 17 hours of video playback"
                ]
              },
              {
                productName: '13 mini (256GB)',
                price: 63000,
                description: 'iPhone 13 mini 256GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-mini-midnight-2022_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1671646516129',
                  'https://i.ebayimg.com/00/s/MTI2MFgxNjAw/z/rZMAAOSwIPhh6yWi/$_57.JPG?set_id=8800005007',
                  'https://cdn.shopify.com/s/files/1/0874/4068/7387/files/whats_in_the_box_d.jpg?v=1736528514' 
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 5.4 inch Super Retina XDR display",
                  "Camera: Dual 12MP Ultra Wide and Wide cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 17 hours of video playback"
                ]
              },
              {
                productName: '13 (128GB)',
                price: 61000,
                description: 'iPhone 13 128GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-mini-midnight-2022?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1679072980362',
                  'https://images.fonearena.com/blog/wp-content/uploads/2021/09/Apple-iPhone-13-Pro_FoneArena-1-1024x577.jpg',
                  'https://thumbs.dreamstime.com/b/antalya-turkey-november-back-view-new-iphone-pro-smartphone-box-236206895.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display",
                  "Camera: Dual 12MP Ultra Wide and Wide cameras", 
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 19 hours of video playback"
                ]
              },
              {
                productName: '13 (256GB)',
                price: 66000,
                description: 'iPhone 13 256GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg',
                  'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display",
                  "Camera: Dual 12MP Ultra Wide and Wide cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 19 hours of video playback"
                ]
              },
              {
                productName: '13 Pro (128GB)',
                price: 74000,
                description: 'iPhone 13 Pro 128GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652957000',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 22 hours of video playback"
                ]
              },
              {
                productName: '13 Pro (256GB)',
                price: 80000,
                description: 'iPhone 13 Pro 256GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652954000',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652956000'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 22 hours of video playback"
                ]
              },
              {
                productName: '13 Pro (512GB)',
                price: 83000,
                description: 'iPhone 13 Pro 512GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652954000',
                  'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_big.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-sierra-blue-witb-2021_FMT_WHH?wid=560&hei=744&fmt=png-alpha&.v=1629943697000'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 22 hours of video playback"
                ]
              },
              {
                productName: '13 Pro max (128GB)',
                price: 84000,
                description: 'iPhone 13 Pro Max 128GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652957000',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_New-Camera-System_09142021_big.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652955000'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.7 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 28 hours of video playback"
                ]
              },
              {
                productName: '13 Pro max (256GB)',
                price: 88000,
                description: 'iPhone 13 Pro Max 256GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652956000',
                  'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple_iPhone-13-Pro_Lifestyle-01_09142021_big.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652956000'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.7 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 28 hours of video playback"
                ]
              },
              {
                productName: '13 Pro max (512GB)',
                price: 94000,
                description: 'iPhone 13 Pro Max 512GB',
                image: [
                  'https://mac-more.co.ke/wp-content/uploads/2024/02/i-img1200x1200-1694935175kr6tlb14.jpg',
                  'https://zurimall.co.ke/wp-content/uploads/2022/12/Artboard-1-copy@300x-100-1-1.jpg',
                  'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/e/0/v/-original-imagh7g8urcwshmn.jpeg?q=20&crop=false'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.7 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 12MP Ultra Wide, Wide, and Telephoto cameras", 
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 28 hours of video playback"
                ]
              },
              {
                productName: '14 (128GB)',
                price: 76000,
                description: 'iPhone 14 128GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&.v=1661026582322',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907_inline.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&.v=1660753619946'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display",
                  "Camera: Dual 12MP Wide and Ultra Wide cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 20 hours of video playback"
                ]
              },
              {
                productName: '14 (256GB)',
                price: 81000,
                description: 'iPhone 14 256GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg&.v=1661026579503',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-blue-220907_inline.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202209_GEO_US?wid=5120&hei=2880&fmt=p-jpg&.v=1660753617559'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display",
                  "Camera: Dual 12MP Wide and Ultra Wide cameras",
                  "Processor: A15 Bionic chip",
                  "Battery life: Up to 20 hours of video playback"
                ]
              },
              {
                productName: '14 Pro (128GB)',
                price: 88000,
                description: 'iPhone 14 Pro 128GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&.v=1663703841896',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&.v=1660753619946'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 48MP Wide, 12MP Ultra Wide, and 12MP Telephoto cameras",
                  "Processor: A16 Bionic chip",
                  "Battery life: Up to 23 hours of video playback"
                ]
              },
              {
                productName: '14 Pro (256GB)',
                price: 96000,
                description: 'iPhone 14 Pro 256GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=5120&hei=2880&fmt=p-jpg&.v=1663703841907',
                  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907_inline.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&.v=1660753619940'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.1 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 48MP Wide, 12MP Ultra Wide, and 12MP Telephoto cameras",
                  "Processor: A16 Bionic chip",
                  "Battery life: Up to 23 hours of video playback"
                ]
              },
              {
                productName: '14 Pro max (128GB)',
                price: 92000,
                description: 'iPhone 14 Pro Max 128GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&.v=1663703841896',
                  'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-lifestyle-01-220907_Full-Bleed-Image.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&.v=1660753619946'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.7 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 48MP Wide, 12MP Ultra Wide, and 12MP Telephoto cameras",
                  "Processor: A16 Bionic chip",
                  "Battery life: Up to 29 hours of video playback"
                ]
              },
              {
                productName: '14 Pro max (256GB)',
                price: 100000,
                description: 'iPhone 14 Pro Max 256GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-finish-select-202209-6-7inch-gold?wid=5120&hei=2880&fmt=p-jpg&.v=1663703841894',
                  'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-lifestyle-02-220907_Full-Bleed-Image.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&.v=1660753619940'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.7 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 48MP Wide, 12MP Ultra Wide, and 12MP Telephoto cameras",
                  "Processor: A16 Bionic chip",
                  "Battery life: Up to 29 hours of video playback"
                ]
              },
              {
                productName: '14 Pro max (512GB)',
                price: 112000,
                description: 'iPhone 14 Pro Max 512GB',
                image: [
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-finish-select-202209-6-7inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&.v=1663703841896',
                  'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-lifestyle-03-220907_Full-Bleed-Image.jpg.large.jpg',
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-storage-select-202209-6-7inch-spaceblack_AV1?wid=5120&hei=2880&fmt=p-jpg&.v=1671474959519'
                ],
                
                inStock: 1, 
                quantity: 1, 
                specs: [
                  "Screen size: 6.7 inch Super Retina XDR display with ProMotion",
                  "Camera: Triple 48MP Wide, 12MP Ultra Wide, and 12MP Telephoto cameras",
                  "Processor: A16 Bionic chip",
                  "Battery life: Up to 29 hours of video playback"
                ]
              }
            ]);
            this.locations = ko.observableArray(['CBD', 'Nairobi West', 'South C','Juja','KU', 'Along Thika road','Thika', "Other"])
            // this.showOtherLocation = ko.computed(() => {
            //   return this.location() === 'Other';
            // });
            this.cartProducts = ko.observableArray([]);
            var prods = [];
            this.termsAgreed = ko.observable(false);
            this.termsAgreed.subscribe(function(newValue) {
              // debugger;
              var orderButton = document.getElementById('location');
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
            this.location.subscribe( async function(newValue){
              debugger;
               var self = this;

              var query = self.location().trim();
              if (query.length < 3) {
                  self.locations([]); // Clear suggestions if input is too short
                  return;
              }
              
              try {
                  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&countrycodes=KE`);
                  const data = await response.json();
                  self.locations(data);
                  debugger;
              } catch (error) {
                  console.error('Error fetching locations:', error);
              }

            }.bind(this));
            this.selectLocation = function(place) {
              debugger;
              self.location(place.display_name); // Set input to selected place
              self.locations([]); // Hide suggestions
            };

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
                  if(item.quantity != 0)
                    msg += "%0A" + item.quantity + " - " +item.productName + " @ Ksh." + item.price ;
                  else
                    msg += "%0A" + "(REQUEST) - " + item.productName + " @ Ksh." + item.price;
                });//+ "( " + item.image +" )"
                let name = self.names();
                let location = self.location();
                let total = self.totalSum();
                //debugger;
                if(name === undefined || location === undefined || name === " " || location === " "){
                    alert("Please provide your name and location");
                    return;
                }
                if(this.location() === 'Other'){
                  location = self.otherLocation();
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
                //Akida.checkCount();
                //self.checkCount();
                checkCount.call(this);
            }.bind(this);
            this.addRequest = function(value){
                var self = this;
                debugger;
                self.ordered(false);
                value.quantity = 0;
                //this.count(this.count() + 1);
                //self.cartProducts().push(value);
                prods.push(value);
                //Akida.checkCount();
                //self.checkCount();
                checkCount.call(this);
            }.bind(this);
            this.addToCart = function (value){
                // alert('Added to cart');
                debugger;
                // var self = this;

                // var productName = self.productName();
                // var price = self.price();
                // var description = self.Description();
                // var image = self.image();
                // var quantity = 1;
                // var value = [productName,price,description,image, quantity]

                // this.count(this.count() + 1);
                // //self.cartProducts().push(value);
                // prods.push(value);
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
              //debugger;
              var self = this;
              self.totalSum(self.totalSum() + self.shippingFee());
            }.bind(this);
            this.removeShipment = function (){
              //debugger;
              var self = this;
              self.totalSum(self.totalSum() - self.shippingFee());
            }.bind(this);
            this.viewProduct = function(value){
                debugger;
                var self = this;
                var prodImages = []
                self.productName(value.productName);
                self.price(value.price);
                self.Description(value.description);
                self.image(value.image);
                self.instock(value.instock);
                self.specs(value.specs);
                for (let i = 0; i < value.image.length; i++) {
                  prodImages.push(value.image[i]);
                }
                self.images(prodImages);
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
        var mansur = new Akida();
        ko.applyBindings(mansur);
        // Assuming your Akida is named Akida and the modal is in an element with the id "myModal"
        // ko.applyBindings(Akida, document.getElementById('myModal'));
    }
};


$(document).ready(function () {
    //debugger;
    MVVM.init();
});
