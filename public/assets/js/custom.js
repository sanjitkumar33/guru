//step wizard kyc-form


$(document).ready(function(){
    $('.nav-tabs > li a[title]').tooltip();
		    
		    //Wizard
		    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

		        var target = $(e.target);
		    
		        if (target.parent().hasClass('disabled')) {
		            return false;
		        }
		    });

		    $(".next-step").click(function (e) {

		        var active = $('.wizard .nav-tabs li.active');
		        active.next().removeClass('disabled');
		        nextTab(active);

		    });
		    $(".prev-step").click(function (e) {

		        var active = $('.wizard .nav-tabs li.active');
		        prevTab(active);

		    });
            function nextTab(elem) {
                $(elem).next().find('a[data-toggle="tab"]').click();
            }
            function prevTab(elem) {
                $(elem).prev().find('a[data-toggle="tab"]').click();
            }

});



    $(document).ready(function () {
        $('.nav-tabs').on('click', 'li', function() {
		    $('.nav-tabs li.active').removeClass('active');
		    $(this).addClass('active');
		});
    });

    //state-district selection
    $(document).ready(function(){
    		var AndraPradesh = ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"];
			var ArunachalPradesh = ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"];
			var Assam = ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"];
			var Bihar = ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
			var Chhattisgarh = ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"];
			var Goa = ["North Goa","South Goa"];
			var Gujarat = ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"];
			var Haryana = ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"];
			var HimachalPradesh = ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"];
			var JammuKashmir = ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"];
			var Jharkhand = ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"];
			var Karnataka = ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"];
			var Kerala = ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"];
			var MadhyaPradesh = ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna",
			"Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"];
			var Maharashtra = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
			var Manipur = ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"];
			var Meghalaya = ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"];
			var Mizoram = ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
			var Nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
			var Orissa = ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"];
			var Punjab = ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"];
			var Rajasthan = ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"];
			var Sikkim = ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"];
			var TamilNadu = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"];
			var Telangana = ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
			var Tripura = ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"];
			var UttarPradesh = ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"];
			var Uttaranchal  = ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"];
			var WestBengal = ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
			var AndamanNicobar = ["Nicobar","North Middle Andaman","South Andaman"];
			var Chandigarh = ["Chandigarh"];
			var DadraHaveli = ["Dadra Nagar Haveli","Diu","Daman"];
			var Delhi = ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"];
			var Lakshadweep = ["Lakshadweep"];
			var Pondicherry = ["Karaikal","Mahe","Puducherry","Yanam"];
			var Ladakh = ["Kargil","Leh"];

			$("#inputState1").change(function(){
			  var StateSelected = $(this).val();
			  var optionsList;
			  var htmlString = "";

			  switch (StateSelected) {
			    case "Andra Pradesh":
			        optionsList = AndraPradesh;
			        break;
			    case "Arunachal Pradesh":
			        optionsList = ArunachalPradesh;
			        break;
			    case "Assam":
			        optionsList = Assam;
			        break;
			    case "Bihar":
			        optionsList = Bihar;
			        break;
			    case "Chhattisgarh":
			        optionsList = Chhattisgarh;
			        break;
			    case "Goa":
			        optionsList = Goa;
			        break;
			    case  "Gujarat":
			        optionsList = Gujarat;
			        break;
			    case "Haryana":
			        optionsList = Haryana;
			        break;
			    case "Himachal Pradesh":
			        optionsList = HimachalPradesh;
			        break;
			    case "Jammu and Kashmir":
			        optionsList = JammuKashmir;
			        break;
			    case "Jharkhand":
			        optionsList = Jharkhand;
			        break;
			    case  "Karnataka":
			        optionsList = Karnataka;
			        break;
			    case "Kerala":
			        optionsList = Kerala;
			        break;
			    case  "Madya Pradesh":
			        optionsList = MadhyaPradesh;
			        break;
			    case "Maharashtra":
			        optionsList = Maharashtra;
			        break;
			    case  "Manipur":
			        optionsList = Manipur;
			        break;
			    case "Meghalaya":
			        optionsList = Meghalaya ;
			        break;
			    case  "Mizoram":
			        optionsList = Mizoram;
			        break;
			    case "Nagaland":
			        optionsList = Nagaland;
			        break;
			    case  "Orissa":
			        optionsList = Orissa;
			        break;
			    case "Punjab":
			        optionsList = Punjab;
			        break;
			    case  "Rajasthan":
			        optionsList = Rajasthan;
			        break;
			    case "Sikkim":
			        optionsList = Sikkim;
			        break;
			    case  "Tamil Nadu":
			        optionsList = TamilNadu;
			        break;
			    case  "Telangana":
			        optionsList = Telangana;
			        break;
			    case "Tripura":
			        optionsList = Tripura ;
			        break;
			    case  "Uttaranchal":
			        optionsList = Uttaranchal;
			        break;
			    case  "Uttar Pradesh":
			        optionsList = UttarPradesh;
			        break;
			    case "West Bengal":
			        optionsList = WestBengal;
			        break;
			    case  "Andaman and Nicobar Islands":
			        optionsList = AndamanNicobar;
			        break;
			    case "Chandigarh":
			        optionsList = Chandigarh;
			        break;
			    case  "Dadar and Nagar Haveli":
			        optionsList = DadraHaveli;
			        break;
			    case "Ladakh":
			        optionsList = Ladakh;
			        break;
			    case  "Delhi":
			        optionsList = Delhi;
			        break;
			    case "Lakshadweep":
			        optionsList = Lakshadweep ;
			        break;
			    case  "Pondicherry":
			        optionsList = Pondicherry;
			        break;
			}


			  for(var i = 0; i < optionsList.length; i++){
			    htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
			  }
			  $("#inputDistrict1").html(htmlString);

			});
        });

            //DOB only for Proprietary and Partnership
            $(document).ready(function(){
                $('#inputOwnership').on('change',function(){
                    if($(this).val() === 'proprietary' || $(this).val() === 'partnership'){
                      $('#Date').removeAttr('disabled').focus();
                    }else{
                      $('#Date').attr('disabled','disabled');
                    }
                  });
            });
            
            
            //for other document
            $(document).ready(function(){
                $('#electricNumber').on('keyup',function(){
  
                  if($(this).val().length >= 15){
                    $('#elctric_board_code').removeAttr('disabled').focus();
                  }else{
                    $('#elctric_board_code').attr('disabled','disabled');
                  }
              });
            });

		    $(document).ready(function(){
			  $('#otherDocument').on('change',function(){
			    if($(this).val() === 'udyogAdhar'){
			      $('#udyogAdhar').removeAttr('disabled').focus();
			    }else{
			      $('#electricNumber').attr('disabled','disabled');
			    }
			  });

			  $('#otherDocument').on('change',function(){
			    if($(this).val() === 'electricNumber' ){
			      $('#electricNumber').removeAttr('disabled').focus();
			    }else{
			      $('#electricNumber').attr('disabled','disabled');
			    }
			  });
			});

			//for MCC
            $(document).ready(function(){
				var AgriculturalServices = ["--Select One--","Veterinary Services","Wine Producers","Champagne Producers","Agricultural Co-operatives",
				"Horticultural and Landscaping"];
				var ContractServices = [,"--Select One--","General Contractors","Heating, Plumbing, A/C","Electrical Contractors","Masonry, Stonework, and Plaster",
				"Carpentry Contractors","Roofing/Siding, Sheet Metal","Concrete Work Contractors","Special Trade Contractors"];
				var WholesaleSuppliersAndManufacturers = ["--Select One--","Miscellaneous Publishing and Printing","Typesetting,Plate Making",
				"Specialty Cleaning","Auto Parts","Furniture","Building Materials","Office Equipment","Computers and Software","Equipment",
				"Medical Equipment","Metal processing","Electronics","Plumbing","Industry","Jewellery","Goods","Chancery","Drugs",
				"Haberdashery","Clothing","Footwear","Chemicals","Petroleum","Books Press","Flowers","Paints","Alcohol","Document Flow",];
				var Airlines = ["--Select One--","Airlines","Security"];
				var CarRents = ["--Select One--","Car Rent","Truck Rental"];
				var HotelResort = ["--Select One--","Hotel / Resorts"];
				var NotCategorized = ["--Select One--","Cashing","Miscellaneous","Cashback","VISA","Emergency Services","In-company purchases"]; 
				var TransportationServices = ["--Select One--","Railway","Passenger Transportation","Passenger Railways","Ambulance","Taxi",
				"Transportation Bus","Transportation Delivery","Delivery Service","Storage","Cruise Lines","Boat Rentals","Yachting Service",
				"Airports","Tourism","Tour Operators","Transportation Services","Telemarketing","Toll Roads"];
				var UtilityServices = ["--Select One--","Telecommunication Equipment","Retail Outlets With Telephony","Mobile Connection","Telephone Services",
				"Information Services","Telegraph","The Television","Utilities"];
				var ServicesProvider = ["--Select One--","Money Transfer","Caterers","Cashier Office","Financial Services","Banks",
				"Quasi Cash","Securities","Insurance","Rental Property","Card Replenishment","Bonds","Timeshares","Recreation",
				"Campgrounds"];
				var RetailOutletServices = ["--Select One--","Household Products","Building Materials","Renovation","Hardware Stores",
				"Garden Accessories","Marketplaces","Mobile Homes","Retail Stores","Gas Sales","Wholesalers","Duty Free","Discounters",
				"Department Stores","Variety Stores","Merchandise Stores","Grocery","Meat","Sweets","Farm Goods","Bakeries","Food stores"];
				var CarsandVehicles = ["--Select One--","Car Dealerships","Auto Parts","Tires","Auto Shops","Service Stations","Gas Station","Boats",
				"Charging Stations","Car Dealerships"];
				var ClothingStores = ["--Select One--","Mens Clothing","Womens Clothing","Clothing Stores","Baby Clothes","Clothes",
				"Sportswear","Shoes","Fur","Atelier","Wigs","Accessories"];
				var MiscellaneousStores = ["--Select One--","Furniture","Floor Coverings","Curtains","Fireplaces","Household Appliance","Musical Instruments",
				"Computer Software","Record Shops","Cafe Restaurants","Bars","Fast Food","Digital Goods","Games","Applications","Digital Goods",
				"Antiques","Drug Stores","Alcohols","Second Hand","Pawn Shops","Car Dump","Reproduction Stores","Bicycles",
				"Sports Goods","Book Stores","Stationery","Clock","Toys","Photo Goods","Souvenirs","Leather Products","Sewing Supplies",
				"Crystal / Glassware","Salesmen","Art Goods","Galleries","Philatelicism","Church Shops","Rubber Stamp","Hearing Aids","Prostheses",
				"Cosmetics","Printing Machines","Fuel","Florists","Tobacco Products","Newspapers Magazines","Pet Supplies","Swimming Pools",
				"Razors","Tents","Miscellaneous Stores"];
				var MailTelephoneSales = ["--Select One--","Insurance","Goods by mail","Travels","Information Services","Subscriptions"];
				var PersonalServices = ["--Select One--","Dry Cleaners","Laundry","Cleaning","Photographic Studios","The Beauty","Clothing Repair","Funeral Services",
				"Escort","Dating Escort","Taxes","Consultation","Shopping","Hospitals","Babysitters","Clothing Rental","Massage",
				"Health and Beauty","miscellaneous"];
				var BusinessServices = ["--Select One--","Advertising","Credit Bureaus","Collection Agencies","Copy Centers","Photography and Art",
				"Disinfecting","Cleaning and Maintenance","Employment","Programming","Information Services","Computer Repair","Business Services",
				"Consulting, PR","Detective Agencies","Equipment Rental","Photo Printing","Parking"];
				var RepairServices = ["--Select One--","Auto Repair","Tire Service","Car Paints","Maintenance Stations","Car Washes","Tow Truck","Repair of Equipment",
				"HVAC Equipment Repair","Repair of Watches and Jewellery","Furniture Repair","Welding Works","Repairs"];
				var EntertainmentServices = ["--Select One--","Government Owned Lottery","Online Casino","Horse / Dog Racing","Video Rental","Cinemas",
				"Dance studios / Dance Schools","Tickets","Music Bands Orchestras","Billiard","Bowling Clubs","Sports Clubs","Tourism","Golf",
				"Videogames","Gambling","Entertainment","Entertainment and Sport","Aquariums Dolphinariums"];
				var ProfessionalServices = ["--Select One--","Medicine","Dentistry","Chiropractors","Optics","Podiatrists","Caregiver / Nurse","Hospitals",
				"Medicine and Dentistry","Medical Services","Lawyers","School","Education University","Schools, Correspondence","Education Business",
				"Education","Kindergarten","Testing laboratories","Architects","Accounting Audit","Professional Services"];
				var MembershipOrganizations = ["--Select One--","Charity","Public Organizations","Organizations, Political",
				"Organizations, Religious","Autoclub","Organizations, Membership"];
				var GovernmentServices = ["--Select One--","I-Purchasing Pilot","Court","Fines","Payouts Bonds","Taxes",
				"Government Services","Mail","Government Procurement","Horse / Dog Racing"];
				
				$("#MCC").change(function(){
				  var MCCSelected = $(this).val();
				  var optionsList;
				  var htmlString = "";
	
				  switch (MCCSelected) {
					case "Agricultural Services":
						optionsList = AgriculturalServices;
						break;
					case "Contract Services":
						optionsList = ContractServices;
						break;
					case "Wholesale suppliers and manufacturers":
						optionsList = WholesaleSuppliersAndManufacturers;
						break;
					case "Airlines":
						optionsList = Airlines;
						break;
					case "Car Rents":
						optionsList = CarRents;
					break;
					case "Hotel / Resort":
						optionsList = HotelResort;
						break;
					case "Not Categorized":
						optionsList = NotCategorized;
						break;
					case "Transportation Services":
						optionsList = TransportationServices;
						break;
					case "Utility Services":
						optionsList = UtilityServices;
						break;
					case "Service Provider":
						optionsList = ServicesProvider;
						break;
					case "Retail Outlet Services":
						optionsList = RetailOutletServices;
						break;
					case "Cars and Vehicles":
						optionsList = CarsandVehicles;
						break;
					case "Clothing Stores":
						optionsList = ClothingStores;
						break;
					case "Miscellaneous Stores":
						optionsList = MiscellaneousStores;
						break;
					case "Mail / Telephone Sales":
						optionsList = MailTelephoneSales;
						break;
						case "Personal Services":
						optionsList = PersonalServices;
						break;
						case "Business Services":
						optionsList = BusinessServices;
						break;
						case "Repair Services":
						optionsList = RepairServices;
						break;
						case "Entertainment Services":
						optionsList = EntertainmentServices;
						break;
						case "Professional Services":
						optionsList = ProfessionalServices;
						break;
						case "Membership оrganizations":
						optionsList = MembershipOrganizations;
						break;
						case "Professional Services":
						optionsList = ProfessionalServices;
						break;
						case "Government Services":
						optionsList = GovernmentServices;
						break;
				}
	
				for(var i = 0; i < optionsList.length; i++){
					htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
				}
				$("#category").html(htmlString);
				});

			});

			//for MCC Select Category
            $(document).ready(function(){
				var VeterinaryServices = ["Veterinary Services (0742)"];
				var WineProducers = ["Wine Producers (0743)"];
				var ChampagneProducers = ["Champagne Producers (0744)"];
				var AgriculturalCoOperatives = ["Agricultural Co-operatives (0763)"];
				var HorticulturalAndLandscaping = ["Horticultural and Landscaping Services (0780)"];
				var GeneralContractors = ["General Contractors - Residential and Commercial (1520)"];
				var HeatingPlumbingAC = ["Air Conditioning Contractors - Sales and Installation, Heating Contractors - Sales, Service, Installation (1711)"];
				var ElectricalContractors = ["Electrical Contractors (1731)"];
				var MasonryStoneworkAandPlaster = ["Insulation - Contractors, Masonry, Stonework Contractors, Plastering Contractors, Stonework and Masonry Contractors, Tile Settings Contractors (1740)"];
				var CarpentryContractors = ["Carpentry Contractors (1750)"];
				var RoofingSidingSheetMetal = ["Roofing - Contractors, Sheet Metal Work - Contractors, Siding - Contractors (1761)"];
				var ConcreteWorkContractors = ["Contractors - Concrete Work (1771)"];
				var GeneralConSpecialTradeContractorstractors = ["Contractors - Special Trade (1799)"];
				var MiscellaneousPublishingandPrinting = ["Miscellaneous Publishing And Printing (2741)","Miscellaneous Publishing And Printing (2744)"];
				var TypesettingPlateMaking = ["Typesetting, Plate Making & Related Services (2791)"];
				var SpecialtyCleaning = ["Specialty Cleaning, Polishing, and Sanitation Preparations (2842)"];
				var Airlines1 = ["United Airlines (3000)","American Airlines (3001)","Pan American World Airways (3002)","Eurofly (3003)","Dragon Airlines (3004)","British Airways (3005)","Japan Air Lines (3006)","Air France (3007)","Lufthansa (3008)","Air Canada (3009)","KLM (Royal Dutch Airlines) (3010)","Aeroflot - Russian Airlines (3011)","Qantas (3012)","Alitalia (3013)","Saudi Arabian Airlines (3014)","Swiss International Air Lines (3015)","Scandinavian Airline System (3016)","South African Airways (3017)",
				"Varig (Brazil) (3018)","Airlines (3019)","Air India (3020)","Air Algerie (3021)","Philippine Airlines (3022)","Mexicana de Aviación (3023)","Pakistan International Airlines (3024)","Air New Zealand Limited International (3025)","Emirates Airlines (3026)","Union de Transports Aeriens (3027)","Air Malta (3028)","SN Brussels Airlines (3029)","Aerolineas Argentinas (3030)","Olympic Airways (3031)","El Al (3032)","Ansett Airlines (3033)","Etihad Airways (3034)","Tap (Portugal) (3035)","VASP (Brazil) (3036)","EgyptAir (3037",
				"Kuwait Airways (3038)","Avianca (3039)","Gulf Air (Bahrain) (3040)","Balkan-Bulgarian Airlines (3041)","Finnair (3042)","Aer Lingus (Ireland) (3043)","Air Lanka (3044)","Nigeria Airways (3045)","Cruzeiro do Sul (Brazil) (3046)","Turkish Airlines (3047)","Royal Air Maroc (3048)","Tunis Air (3049)","Icelandair (3050)","Austrian Airlines (3051)","LATAM Chile Airlines (3052)","AVIACO (Spain) (3053)","LADECO (Chile) (3054)","LAB (Bolivia) (3055)","Jet Airways (India) (3056)","Virgin America (3057)","Delta Air Lines (3058)","DBA Airlines (3059)","Northwest Airlines (USA) (3060)",
				"Continental Airlines (3061)","Hapag-Lloyd Express (3062)","U.S. Airways (3063)","Adria Airways (3064)","Air Inter (3065)","Southwest Airlines (USA) (3066)","Vanguard Airlines (USA) (3067)","Air Astana (3068)","Sun Country Airlines (3069)","Pacific Southwest Airlines (3070)","Air British Columbia (Canada) (3071)","Cebu Pacific (Philippines) (3072)","Air California (3073)","Airlines (3074)","Singapore Airlines (3075)","Aeromexico (3076)","Thai International Airlines (3077)","China Airlines (3078)","Jetstar Airways (Australia) (3079)","Airlines (3080)","Nordair (Canada) (3081)",
				"Korean Airlines (3082)","Air Afrique (3083)","Eva Airways (Taiwan) (3084)","Midwest Express Airlines (3085)","Carnival Airlines (USA) (3086)","Metro Airlines (3087)","Croatia Air (3088)","Transaero (Russia) (3089)","Uni Airways (Taiwan) (3090)","Airlines (3091)","Midway Airlines (USA) (3092)","Airlines (3093)","Zambia Airways (3094)","Airlines (3095)","Air Zimbabwe (3096)","Spanair (3097)","Asiana Airlines (3098)","Cathay Pacific (Hong Kong) (3099)","Malaysian Airline System (3100)","Airlines (3101)","Iberia (Spain) (3102)","Garuda (Indonesia) (3103)","Airlines (3104)",
				"Airlines (3105)","Braathens S.A.F.E. (Norway) (3106)","Airlines (3107)","Airlines (3108)","Airlines (3109)","Airlines (3110)","British Midland Airways (3111)","Windward Island (3112)","Airlines (3113)","Airlines (3114)","Airlines (3115)","Airlines (3116)","Venezolana International de Aviacion (3117)","Valley International Airport (3118)","Airlines (3119)","Airlines (3120)","Airlines (3121)","Airlines (3122)","Airlines (3123)","Airlines (3124)","Tan Airlines (3125)","Talair (Papua New Guinea) (3126)","TACA International (3127)","Airlines (3128)","Surinam Airways (3129)",
				"Sunworld International Airways (3130)","VLM Airlines (Belgium) (3131)","Frontier Airlines (USA) (3132)","Sunbelt Airlines (3133)","Airlines (3134)","Sudan Airways (3135)","Qatar Airways (3136)","Singleton (3137)","Simmons Airlines (USA) (3138)","Airlines (3139)","Airlines (3140)","Airlines (3141)","Airlines (3142)","Scenic Airlines (USA) (3143)","Virgin Atlantic (USA) (3144)","San Juan Airlines (3145)","Luxair (Luxembourg) (3146)","Airlines (3147)","Air Littoral (France) (3148)","Airlines (3149)","Airlines (3150)","Air Zaire (3151)","Airlines (3152)","Airlines (3153)",
				"Princeville (3154)","Airlines (3155)","GO FLY Airline (3156)","Airlines (3157)","Airlines (3158)","Provincetown-Boston Airways (3159)","Airlines (3160)","All Nippon Airways (Japan) (3161)","Airlines (3162)","Airlines (3163)","Norontair (Canada) (3164)","Airlines (3165)","Airlines (3166)","Aero Continente (Peru) (3167)","Airlines (3168)","Airlines (3169)","Mount Cook (3170)","Canadian Airlines (3171)","National Airlines (USA) (3172)","Airlines (3173)","JetBlue Airways (USA) (3174)","Middle East Air (Lebanon) (3175)","Metroflight airlines (USA) (3176)",
				"AirTran Airways (USA) (3177)","Mesa Air (USA) (3178)","Airlines (3179)","Westjet Airlines (Canada) (3180)","Malev Hungarian Airlines (3181)","LOT - Polish Airlines (3182)","Oman Aviation Services (3183)","LIAT (Antigua and Barbuda) (3184)","LAV (Venezuela) (3185)","LAP (Paraguay) (3186)","Avianca Costa Rica (3187)","Virgin Express (Belgium) (3188)","Airlines (3189)","Jugoslav Air (Serbia) (3190)","Island Airlines (USA) (3191)","Iran Air (3192)","Indian Airlines (3193)","Airlines (3194)","Airlines (3195)","Hawaiian Airlines (3196)","Havasu Airlines (3197)","Airlines (3198)",
				"Servicios Aereos Militares (3199)","Guyana Airways (3200)","Airlines (3201)","Airlines (3202)","Golden Pacific Airlines (USA) (3203)","Freedom Airline Express (Kenya) (3204)","Airlines (3205)","China Eastern Airlines (3206)","Airlines (3207)","Airlines (3208)","Airlines (3209)","Airlines (3210)","Norwegian Air Shuttle (3211)","Dominicana de Aviacion (3212)","Braathens Regional Airlines (Sweden) (3213)","Airlines (3214)","Dan-Air (United Kingdom) (3215)","Greater Cumberland Regional Airport (3216)","CSA Ceskoslovenske Aerolinie (3217)","Crown Airways (USA) (3218)",
				"Compania Panamena de Aviacion (3219)","Compania Faucett (Peru) (3220)","Transportes Aeros Militares Ecuatorianos (3221)","Command Airways (USA) (3222)","Comair (South Africa) (3223)","Airlines (3224)","Airlines (3225)","Skyways Express (Sweden) (3226)","Airlines (3227)","Cayman Airways (3228)","Sociedad Ecuatorianas De Transportes Aereo (3229)","Airlines (3230)","Servicio Aero de Honduras (3231)","Airlines (3232)","Capitol Air (3233)","Caribbean Airlines / West Indies Airways (3234)","Brockway Air (3235)","Air Arabia Airline (United Arab Emirates) (3236)","Airlines (3237)",
				"Bemidji Airlines (USA) (3238)","Bar Harbor Airlines (USA) (3239)","Bahamasair (Bahamas) (3240)","Avianca (Guatemala) (3241)","Avensa (Venezuela) (3242)","Austrian Airlines (3243)","Airlines (3244)","EasyJet (United Kingdom)v(3245)","Ryanair (3246)","Gol Airlines (Brazil) (3247)","Tam Airlines (Brazil) (3248)","Airlines (3249)","Airlines (3250)","Aloha Airlines (USA) (3251)","ALM Antilean Airlines (3252)","America West Airlines (3253)","Trump Airline (3254)","Airlines (3255)","Alaska Airlines (3256)","Airlines (3257)","Airlines (3258)","American Trans Air (3259)",
				"Spirit Airlines (USA) (3260)","Air China (3261)","Reno Air, Inc. / American Airlines (3262)","Aserca Airlines / Aero Servicio Carabobo (Venezuela) (3263)","Airlines (3264)","Airlines (3265)","Air Seychelles (3266)","Air Panama International (3267)","Airlines (3268)","Airlines (3269)","Airlines (3270)","Airlines (3271)","Airlines (3272)","Airlines (3273)","Airlines (3274)","Airlines (3275)","Airlines (3276)","Airlines (3277)","Airlines (3278)","Airlines (3279)","Air Jamaica (3280)","Air Djibouti (3281)","Air Djibouti (3282)","Airlines (3283)","Aero Virgin Islands (3284)",
				"Aero Peru (3285)","Aero Nicaraguenses (3286)","Aero Coach Aviation (3287)","Airlines (3288)","Airlines (3289)","Airlines (3290)","Ariana Afghan Airlines (3291)","Cyprus Airways (3292)","Ecuatoriana de Aviación (3293)","Ethiopian Airlines (3294)","Kenya Airways (3295)","Air Berlin (3296)","TAROM / Romanian Air Transport (3297)","Air Mauritius (3298)","Wideroes Flyveselskap (Norway) (3299)","Azul Airlines (Brazil) (3300)","Wizz Air (Hungary) (3301)","Flybe Air (United Kingdom) (3302)","Air Carriers, Airlines (4511)"];
				var Security = ["Aserca Airlines / Aero Servicio Carabobo (Venezuela) (6236)"];
				var CarRent = ["Affiliated Auto Rental (3351)","American Intl Rent-a-car (3352)","Brooks Rent-a-car (3353)","Action Auto Rental (3354)","Car rental agencies (3355)","Car rental agencies (3356)","Hertz Rent-a-car (3357)","Car rental agencies (3358)","Payless Car Rental (3359)","Snappy Car Rental (3360)","Airways Rent-a-car (3361)","Altra Auto Rental (3362)","Car rental agencies (3363)","Agency Rent-a-car (3364)","Car rental agencies (3365)","Budget Rent a Car (3366)","Car rental agencies (3367)","Holiday Rent-a-wreck (3368)","Car rental agencies (3369)","Rent-a-wreck (3370)",
				"Car rental agencies (3371)","Car rental agencies (3372)","Car rental agencies (3373)","Car rental agencies (3374)","Car rental agencies (3375)","Ajax Rent-a-car (3376)","Car rental agencies (3377)","Car rental agencies (3378)","Car rental agencies (3379)","Car rental agencies (3380)","Europ Car (3381)","Car rental agencies (3382)","Car rental agencies (3383)","Car rental agencies (3384)","Tropical Rent-a-car (3385)","Showcase Rental Cars (3386)","Alamo Rent-a-car (3387)","Car rental agencies (3388)","Avis Rent-a-car (3389)","Dollar Rent-a-car (3390)","Europe By Car (3391)",
				"Car rental agencies (3392)","National Car Rental (3393)","Kemwell Group Rent-a-car (3394)","Thrifty Rent-a-car (3395)","Tilden Tent-a-car (3396)","Car rental agencies (3397)","Econo-car Rent-a-car (3398)","Amerex Rent-a-Car (3399)","Auto Host Cost Car Rentals (3400)","Car rental agencies (3401)","Car rental agencies (3402)","Car rental agencies (3403)","Car rental agencies (3404)","Enterprise Rent-a-car (3405)","Car rental agencies (3406)","Car rental agencies (3407)","Car rental agencies (3408)","General Rent-a-car (3409)","Car rental agencies (3410)","Car rental agencies (3411)",
				"A-1 Rent-a-car (3412)","Car rental agencies (3413)","Godfrey Natl Rent-a-car (3414)","Car rental agencies (3415)","Car rental agencies (3416)","Car rental agencies (3417)","Car rental agencies (3418)","Alpha Rent-a-car (3419)","Ansa Intl Rent-a-car (3420)","Allstae Rent-a-car (3421)","Car rental agencies (3422)","Avcar Rent-a-car (3423)","Car rental agencies (3424)","Automate Rent-a-car (3425)","Car rental agencies (3426)","Avon Rent-a-car (3427)","Carey Rent-a-car (3428)","Insurance Rent-a-ca (3429)r","Major Rent-a-car (3430)","Replacement Rent-a-car (3431)",
				"Reserve Rent-a-car (3432)","Ugly Duckling Rent-a-car (3433)","USA Rent-a-car (3434)","Value Rent-a-car (3435)","Autohansa Rent-a-car (3436)","Cite Rent-a-car (3437)","Interent Rent-a-car (3438)","Milleville Rent-a-car (3439)","Via Route Rent-a-Car (3440)","Car rental agencies (3441)","Automobile Rental Agency (7512)","Motor Home and Recreational Vehicle Rental (7519)"];
				var TruckRental = ["Truck Rental (7513)"];
				var HotelResorts = ["Holiday Inns (3501)","Best Western Hotels & Resorts (3502)","Sheraton Hotels and Resorts (3503)","Hilton Hotels & Resorts (3504)","Rocco Forte Hotels (3505)","Golden Tulip Hotels (3506)","Friendship Inns (3507)","Quality Inns (3508)","Marriott Hotels (3509)","Days Inn (3510)","Arabella Hotels (3511)","Inter-continental Hotels (3512)","Westin Hotels & Resorts (3513)","AmeriSuites Hotels (3514)","Rodeway Inns (3515)","La Quinta Motor Inns (3516)","Americana Hotels (3517)","Sol Hotels (3518)","Pullman International Hotels (3519)","Meridien Hotels (3520)",
				"Forte Crest Hotels (3521)","Tokyo Hotel (3522)","Peninsula Hotels (3523)","Welcomgroup Hotels (3524)","Dunfey Hotels (3525)","Prince Hotels (3526)","Downtowner-passport Hotel (3527)","Red Lion Hotels (3528)","Canadian Pacific Hotels (3529)","Renaissance Hotels (3530)","Astir Hotels (3531)","Sun Route Hotels (3532)","Hotel Ibis (3533)","Southern Pacific Hotels (3534)","Hilton International (3535)","Amfac Hotels (3536)","ANA Hotel (3537)","Concorde Hotels (3538)","Summerfield Suites Hotels (3539)","Iberotel Hotels (3540)","Okura Hotels & Resorts (3541)","Royal Hotels (3542)",
				"Four Seasons Hotels (3543)","Ciga Hotels (3544)","Shangri-La Hotels and Resorts (3545)","Hotel Sierra (3546)","Breakers Resort (3547)","Melia Hotels International (3548)","Auberge Des Governeurs (3549)","Regal 8 Inns (3550)","Mirage Hotels and Casino (3551)","Coast Hotels (3552)","Park Inns International (3553)","Pinehurst Resort (3554)","Treasure Island Hotel and Casino (3555)","Barton Creek Resort (3556)","Manhattan East Suite Hotels (3557)","Jolly Hotels (3558)","Candleood Suites (3559)","Alladin Resort and Casino (3560)","Golden Nugget (3561)","Comfort Inns (3562)",
				"Journey's End Motеls (3563)","Sam Town Hotel and Casino (3564)","Relax Inns (3565)","Garden Place Hotel (3566)","Soho Grand Hotel (3567)","Ladbroke Hotels (3568)","Tribeca Grand Hotels (3569)","Grand Met Forum Hotels (3570)","Grand Wailea Hotels (3571)","Miyako Hotels & Resorts (3572)","Sandman Hotels (3573)","Venture Inns (3574)","Vagabond Hotels (3575)","La Quinta Resort (3576)","Mandarin Oriental Hotel (3577)","Bavarian Inn Lodge (3578)","Hotel Mercure (3579)","Hotel Del Coronado (3580)","Delta Hotels (3581)","California Hotel and Casino (3582)","Radisson Blue Hotel (3583)",
				"Princess Hotels International (3584)","Hungary Hotels (3585)","Sokos Hotels (3586)","Doral Hotels (358)7","Helmsley Hotels (3588)","Doral Golf Resort (3589)","Fairmont Hotels (3590)","Sonesta Hotels (3591)","Omni Hotels & Resorts (3592)","Cunard Hotels (3593)","Arizona Biltmore, A Waldorf Astoria Resort (3594)","Hospitality International (3595)","Wynn Las Vegas (3596)","Riverside Resort and Casino (3597)","Regent Hotels & Resorts (3598)","Pannonia Hotels (3599)","Saddlebrook Resort (3600)","TradeWinds Island Grand Resort (3601)","Hudson Hotel (3602)",
				"Noah's Ark Hotel and Resort (3603)","Hilton Garden Inn (3604)","Jurys Inn (3605)","Jefferson Hotel (3606)","Fontainebleau Resort (3607)","Gaylord Opryland Resort (3608)","Gaylord Palms Resort (3609)","Gaylord Texan Resort (3610)","C'mon Inn Hotel & Suites (3611)","Movenpick Hotels & Resorts (3612)","Microtel Inn and Suites (3613)","AmericInn (3614)","Travelodge Hotels (3615)","Hermitage Hotels (3616)","America's Best Value Inn (3617)","Great Wolf Resorts (3618)","Aloft Hotels (3619)","Binions Horseshoe Club (3620)","Extended Stay (3621)","Merlin Hotel (Perth) (3622)",
				"Dorint Hotels & Resort (3623)","Lady Luck Hotel and Casino (3624)","Hotel Universal (3625)","Prince Hotels / Studio Plus Hotel (3626)","Extended Stay America (3627)","Excalibur Hotel and Casino (3628)","Dan Hotels (3629)","Extended Stay Deluxe (3630)","Sleep Inn (3631)","The Phoenician Resort (3632)","Rank Hotels (3633)","Swissôtel Hotels & Resorts (3634)","Reso Hotels (3635)","Sarova Hotels (3636)","Ramada Inns (3637)","Howard Johnson Hotels (3638)","Mount Charlotte Hotels (3639)","Hyatt Hotels/International (3640)","Sofitel Hotels & Resorts (3641)","Novotel Sieh (Accor) (3642)",
				"Steigenberger Hotels and Resorts (3643)","Econo-Travel Motor Hotel (3644)","Queens Moat Houses (3645)","Swallow Hotels (3646)","HUSA Hotels (3647)","De Vere Hotels (3648)","Radisson Hotels (3649)","Red Roof Inns (3650)","Imperial London Hotels (3651)","Embassy Suites Hotels by Hilton (3652)","Penta Hotels (3653)","Loews Hotels (3654)","Scandic Hotels (3655)","Sara Hotels (3656)","Oberoi Hotels & Resorts (3657)","New Otani Hotels (3658)","Taj Hotels Intl (3659)","Knights Inn (3660)","Metropole Hotel and SPA (3661)","Circus Circus Hotel and Casino (3662)",
				"Hoteles El Presidente (3663)","Flag Inns (3664)","Hampton Inns by Hilton (3665)","Stakis Hotels (3666)","Luxor Hotel and Casino (3667)","Maritim (3668)","Eldorado Hotel and Casino (3669)","Arcade Hotel (3670)","Arctia Hotels (3671)","Campanile Hotel (3672)","Ibusz Hotels (3673)","Rantasipi Hotels (3674)","Interhotel Cedok (3675)","Monte Carlo Hotel and Casino (3676)","Climat De France Hotels (3677)","Cumulus Hotels (3678)","Silver Legacy Hotel and Casino (3679)","Hoteis Othan (3680)","Adams Mark Hotels (3681)","Sahara Hotel and Casino (3682)","Bradbury Suites (3683)",
				"Budget Host Hotels (3684)","Budgetel (3685)","Suisse Chalet Hotels (3686)","Clarion Hotels (3687)","Compri Hotel Bucks County (3688)","Consort Hotel (3689)","Courtyard by Marriott Hotel (3690)","Dillon Inn (3691)","DoubleTree by Hilton (3692)","Drury Hotels (3693)","Economy Inns Of America (3694)","Embassy Suites by Hilton (3695)","Excel Inn (3696)","Fairfield Hotel by Marriott (3697)","Harley Hotel (3698)","Midway Motor Lodge (3699)","Motel 6 (3700)","La Mansion Del Rio (3701)","Registry Hotels (3702)","Residence Inn by Marriott (3703)","Royce Hotel (3704)","Sandman Inn (3705)",
				"Shilo Inn (3706)","Shoneys Inn (3707)","Virgin River Hotel and Casino (3708)","Super 8 Motel (3709)","Ritz-Carlton Hotel (3710)","Flag Inns (Australia) (3711)","Buffalo Bills Hotel and Casino (3712)","Quality Pacific Hotel (3713)","Four Seasons Hotels (Australia) (3714)","Fairfield Inn (3715)","Carlton Hotels (3716)","City Lodge Hotels (3717)","Karos Hotels (3718)","Protea Hotels by Marriott (3719)","Southern Sun Hotels (3720)","Conrad Hotels (3721)","Wyndham Hotels & Resorts (3722)","Rica Hotels (3723)","Inter Nor Hotels (3724)","Sea Pines Resort (3725)","Rio Suites (3726)",
				"Broadmoor Hotel (3727)","Ballys Hotel and Casino (3728)","Nugget Casino Resort (3729)","MGM Grand Hotel (3730)","Harrah's Hotels and Casinos (3731)","Opryland Hotel (3732)","Boca Raton Resort and Club (3733)","Harvey Bristol Hotels (3734)","Masters Economy Inns (3735)","Colorado Belle Edgewater Resort (3736)","Riviera Hotel and Casino (3737)","Tropicana Resort and Casino (3738)","Woodside Hotels and Resorts (3739)","Towneplace Suites (3740)","Millennium Times Square New York (3741)","Club Med (3742)","Atlanta Biltmore Hotel and Apartments (3743)","Carefree Resorts (3744)",
				"St. Regis Hotel (3745)","The Eliot Hotel (3746)","Club Corporation / Club Resorts (3747)","Wellesley Inns (3748)","Beverly Hills Hotel (3749)","Crowne Plaza Hotels (3750)","Homewood Suites by Hilton (3751)","Peabody Hotels (3752)","Greenbriar Resorts (3753)","Amelia Island Plantation (3754)","Homestead Hotels (3755)","South Seas Island Resort (3756)","Canyon Ranch (3757)","Kahala Mandarin Oriental Hotel (3758)","Orchid At Mauna Lani (3759)","Halekulani Hotel / Waikiki Parc (3760)","Primadonna Hotel and Casino (3761)","Whiskey Pete's Hotel and Casino (3762)",
				"Chateau Elan Winery and Resort (3763)","Beau Rivage Hotel and Casino (3764)","Bellagio Resort and Casino (3765)","Fremont Hotel and Casino (3766)","Main Street Station Casino Brewery Hotel (3767)","Silver Star Hotel and Casino (3768)","Stratosphere Hotel and Casino (3769)","Springhill Suites (3770)","Caesars Hotel and Casino 3771)","Nemacolin Woodlands (3772)","Venetian Resort Hotel and Casino (3773)","New York-New York Hotel & Casino (3774)","Sands Resort (3775)","Nevele Grande Resort and Country Club (3776)","Mandalay Bay Resort (3777)","Four Points Hotels (3778)","W Hotels (3779)",
				"Disneyland Resorts (3780)","Patricia Grand Resort Hotels (3781)","Rosen Hotel and Resorts (3782)","Town and Country Resort and Convention Center (3783)","First Hospitality Hotels (3784)","Outrigger Hotels and Resorts  (3785)","Ohana Hotels of Hawaii (3786)","Caribe Royal Orlando Resort Suite and Villas (3787)","Ala Moana Honolulu by Mantra (3788)","Smugglers Notch Resort (3789)","Raffles Hotels & Resorts (3790)","Staybridge Suites (3791)","Claridge Casino Hotel (3792)","The Flamingo Hotels (3793)","Grand Casino Hotel & Resort (3794)","Paris Las Vegas Hotel (3795)",
				"Peppermill Hotel Casino (3796)","The Atlantic Club Casino Hotel (3797)","Embassy Vacation Resort (3798)","Hale Koa Hotel (3799)","Homestead Suites (3800)","Wilderness Hotel and Resort (3801)","The Palace Hotel (3802)","The Wigwam Golf Resort and Spa (3803)","The Diplomat Country Club and Spa (3804)","The Atlantic Hotel (3805)","Princeville Resort (3806)","Element Hotel (3807)","LXR (Luxury Resorts) (3808)","Settle Inn (3809)","La Costa Resort (3810)","Premier Travel Inns (3811)","Hyatt Place (3812)","Hotel Indigo (3813)","The Roosevelt Hotel NY (3814)",
				"Nickelodeon Family Suites by Holiday Inn (3815)","Home2 Suites by Hilton (3816)","Affinia Hotels (3817)","Mainstay Suites (3818)","Oxford Suites (3819)","Jumeirah Essex House (3820)","Caribe Royal Orlando Resort Suite and Villas (3821)","Crossland Economy Studios Hotels (3822)","Grand Sierra Resort (3823)","Aria Hotels (3824)","Vdara Hotel & Spa (3825)","Hotel am Steinplatz (3826)","The Galt House Hotel by Wyndham (3827)","Cosmopolitan of Las Vegas (3828)","Country Inn By Carlson (3829)","Park Plaza Hotel (3830)","Waldorf Astoria Hotels & Resorts (3831)",
				"Curio Hotels Country Inn by Hilton (3832)","Canopy Hotels by Hilton(3833)","Baymont Inn & Suites (3834)","Dolce Hotels and Resorts (3835)","Hawthorn by Wyndham (3836)","Hoshino Resorts (3837)","Kimpton Hotels (3838)","Hotels and Resorts (7011)"]
				var Cashing = ["Cash collection (cashing) (3882)"];
				var Miscellaneous1 = ["Miscellaneous (4304)","Miscellaneous (4785)","Miscellaneous (5292)","Miscellaneous (5295)",
				"Miscellaneous (5415)","Miscellaneous (9999)"];
				var Cashback = ["Automated Referral Service (9700)"];
				var VISA = ["Visa Credential Server (9701)"];
				var EmergencyServices = ["GCAS Emergency Services (9702)"];
				var InCompanyPurchases = ["Intra-Company Purchases (cashing) (9950)"];
				var Railway = ["Railroads - Freight (4011)","Transportation Services (4789)"];
				var PassengerTransportation = ["Transportation-Suburban and Local Commuter Passenger, including Ferries (4111)"];
				var PassengerRailways = ["Passenger Railways (4112)"];
				var Ambulance = ["Ambulance Service (4119)"];
				var Taxi = ["Taxicabs and Limousines (4121)"];
				var TransportationBus = ["Bus Lines (4131)"];
				var TransportationDelivery = ["Motor Freight Carriers,Trucking-Local/Long Distance, Moving and Storage Companies, Local Delivery (4214)"];
				var DeliveryService = ["Courier Services - Air and Ground, Freight Forwarders (4215)"];
				var Storage1 = ["Public Warehousing-Farm Products, Refrigerated Goods, Household Goods Storage (4225)"];
				var CruiseLines1 = ["Cruise Lines (4411)"];
				var BoatRentals = ["Boat Leases and Boat Rentals (4457)"];
				var YachtingService = ["Marinas, Marine Service/Supplies (4468)"];
				var Airports = ["Airports, Airport Terminals, Flying Fields (4582)"];
				var Tourism = ["Travel Agencies and Tour Operators (4722)"];
				var TourOperators = ["Package Tour Operators (Germany Only) (4723)"];
				var TransportationServices = ["Passenger transportation services (4729)"];
				var Telemarketing = ["Telemarketing of Travel Related Services and Vitamins (4761)"];
				var TollRoads = ["Bridge and Road Fees, Tolls (4784)"];
				var TelecommunicationEquipment = ["Telecommunication Equipment Including Telephone Sales (4812)"];
				var RetailOutletWithTelephony = ["Key-Entry Telecom Merchant providing single local and long-distance phone calls using a central access number in a non-face-to-face environment using key entry (4813)"];
				var MobileConnection = ["Telecommunication Services (4814)"];
				var TelephoneServices = ["Telephone services (4815)"];
				var InformationServices = ["Computer Network/Information Services (4816)"];
				var Telegraph = ["Telegraph Services (4821)"];
				var TheTelevision = ["Cable, Satellite, and Other Pay Television and Radio Services (4899)"];
				var Utilities = ["Utilities - Electric, Gas, Heating Oil, Sanitary, Water (4900)"];
				var MoneyTransfer = ["Wire Transfer Money Orders / Money Transfer (4829)","Payment for services - money transfers (6531)",
				"Payment Transaction - Financial Institution (6532)","Payment operation - seller (6533)","Money Transfer - Financial Institution (6534)",
				"Value Purchase - Member Financial Institution (6535)","MoneySend Intracountry (6536)","MoneySend Intracountry (6537)","MoneySend Funding (6538)",
				"Funding Transaction (Excluding MoneySend) (6539)","POI (Point of Interaction) Funding Transactions (Excluding MoneySend) (6540)","Overpayments (6611)"];
				var Caterers = ["Caterers (5811)"];
				var CashiersOffice = ["Member Financial Institution - Manual Cash Disbursements (6010)",
				"Member Financial Institution - Automated Cash Disbursements (6011)"];
				var FinancialServices = ["Member Financial Institution - Merchandise And Services (6012)"];
				var Banks = ["Financial Institution (internal RCL) (6022)","State Banks (RCL Internal) (6023)",
				"National Banks (RCL Internal) (6025)","National Banks Non Federal (RCL Internal) (6026)",
				"Unincorporated Private Banks (RCL Internal) (6028)"];
				var QuasiCash = ["Quasi Cash - Member Financial Institution (6050)","Quasi Cash - Merchant (6051)"];
				var Securities = ["Securities - Brokers and Dealers (6211)"];
				var Insurance = ["Insurance Sales, Underwriting and Premiums (6300)","Insurance - Premiums (6381)","Insurance (6399)"];
				var RentalProperty = ["Real Estate Agents and Managers - Rentals (6513)"];
				var CardReplenishment = ["Remote Stored Value Load - Member Financial Institution (6530)",
				"Remove Stored Value Load - Merchant (6530)"];
				var Bonds = ["Savings Bonds (6760)"];
				var Timeshares = ["Timeshares (7012)"];
				var Recreation = ["Sporting and Recreational Camps (7032)"];
				var Campgrounds = ["Campgrounds and Trailer Parks (7033)"];
				var AutoParts = ["Motor Vehicle Supplies and New Parts (5013)"];
				var Furniture = ["Office and Commercial Furniture (5021)"];
				var BuildingMaterials = ["Construction Materials (5039)"];
				var OfficeEquipment = ["Office, Photographic, Photocopy and Microfilm Equipment (5044)"];
				var ComputersandSoftware = ["Computers, Computer Peripheral Equipment , Software (5045)"];
				var Equipment = ["Commercial Equipment (5046)","Hardware Equipment and Supplies (5072)"];
				var MedicalEquipment = ["Dental / Laboratory / Medical / Ophthalmic Hospital Equipment and Supplies (5047)"];
				var MetalProcessing = ["Metal Service Centers and Offices (5051)"];
				var Electronics = ["Electrical Parts and Equipment (5065)"];
				var Plumbing = ["Plumbing and Heating Equipment (5074)"];
				var Industry = ["Industrial Supplies (5085)"];
				var Jewelry = ["Precious Stones and Metals, Watches and Jewelry (5094)"];
				var Goods = ["Durable Goods (5099)","Non-Durable Goods (5199)"];
				var Chancery = ["Stationery, Office Supplies, Printing and Writing Paper (5111)"];
				var Drugs = ["Drugs, Drug Proprietors and Druggists Sundries (5122)"];
				var Haberdashery = ["Piece Goods, Notions, and Other Dry Goods (5131)"];
				var Clothing = ["Men's, Women's and Children's Uniforms and Commercial Clothing (5137)"];
				var Footwear = ["Commercial Footware (5139)"];
				var Chemicals = ["Chemicals and Allied Products (5169)"];
				var Petroleum = ["Petroleum and Petroleum Products (5172)"];
				var BooksPress = ["Books, Periodicals and Newspapers (5192)"];
				var Flowers = ["Florists Supplies, Nursery Stock and Flowers (5193)"];
				var Paints = ["Paints, Varnishes and Supplies (5198)"];
				var Alcohol = ["Wholesalers of alcohol (5715)"]
				var DocumentFlow = ["UK Supermarkets, Electronic Hot File (9751)","UK Petrol Stations, Electronic Hot File (9752)"];
				var HouseholdProducts = ["Home Supply Warehouse Stores (5200)"];
				var BuildingMaterials = ["Building Materials, Lumber Stores (5211)"];
				var Renovation = ["Glass, Paint, Wallpaper Stores (5231)"];
				var HardwareStores = ["Hardware Stores (5251)"];
				var GardenAccessories = ["Lawn and Garden Supply Stores (5261)"];
				var Marketplaces = ["Marketplaces (5262)"];
				var MobileHomes = ["Mobile Home Dealers (5271)"];
				var RetailStores = ["Online retail stores (5297)","Internet Shopping Grocery Store (5298)"];
				var GasSales = ["Warehouse Club Gas (5299)"];
				var Wholesalers = ["Wholesale Clubs (5300)"];
				var DutyFree = ["Duty Free Stores (5309)"];
				var Discounters = ["Discount Stores (5310)"];
				var DepartmentStores = ["Department Stores (5311)"];
				var VarietyStores = ["Variety Stores (5331)"];
				var MerchandiseStores = ["Miscellaneous General Merchandise Stores (5399)"];
				var Grocery = ["Grocery Stores, Supermarkets (5411)"];
				var Meat = ["Freezer and Locker Meat Provisioners (5422)"];
				var Sweets = ["Candy, Nut and Confectionery Stores (5441)"];
				var FarmGoods = ["Dairy Products Stores (5451)"];
				var Bakeries = ["Bakeries (5462)"];
				var FoodStores = ["Miscellaneous Food Stores - Convenience Stores, Markets, Specialty Stores, and Vending Machines (5499)"];
				var CarDealerships = ["Automobile and Truck Dealers - Sales, Service, Repairs, Parts and Leasing (5511)",
				"Automobile and Truck Dealers-(Used Only)-Sales (5521)","Camper Dealers, Recreational and Utility Trailers (5561)",
				"Motorcycle Shops and Dealers (5571)","Motor Home Dealers (5592)","Snowmobile Dealers (5598)",
				"Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers (5599)"];
				var AutoParts = ["Auto shops and household goods (5531)"];
				var Tires = ["Automotive Tire Stores (5532)"];
				var AutoShops = ["Automotive Parts and Accessories Stores (5533)"];
				var ServiceStations = ["Service Stations (With or Without Ancillary Services) (5541)"];
				var GasStation = ["Fuel Dispenser, Automated (5542)"];
				var Boats = ["Boat Dealers (5551)"];
				var ChargingStations = ["Electric car charging stations (5552)"];
				var MensClothing = ["Men's and Boys' Clothing and Accessories Stores (5611)"]; 
				var WomensClothing = ["Women's Ready to Wear Stores (5621)"];
				var ClothingStores = ["Women's Accessory and Specialty Stores (5631)"];
				var BabyClothes = ["Children's and Infants' Wear Stores (5641)"];
				var Clothes = ["Family Clothing Stores (5651)","Men's and Women's Clothing Stores (5691)"];
				var Sportswear = ["Sports Apparel, and Riding Apparel Stores (5655)"];
				var Shoes = ["Shoe Stores (5661)"];
				var Fur = ["Furriers and Fur Shops (5681)"];
				var Atelier = ["Alterations, Mending, Seamstresses, Tailors (5697)"];
				var Wigs = ["Wig and Toupee Shops (5698)"];
				var Accessories = ["Accessory and Apparel Stores - Miscellaneous (5699)"];
				var Furniture = ["Equipment, Furniture and Home Furnishings Stores (except Appliances) (5712)",
				"Miscellaneous House Furnishing Specialty Shops (5719)"];
				var FloorCoverings = ["Floor Covering Stores (5713)"];
				var Curtains = ["Drapery, Upholstery and Window Coverings Stores (5714)"];
				var Fireplaces = ["Fireplace, Fireplace Screens and Accessories Stores (5718)"];
				var HouseholdAppliance = ["Household Appliance Stores (5722)","Electronics Sales (5732)"];
				var MusicalInstruments = ["Music Stores - Musical Instruments, Pianos and Sheet Music (5733)"];
				var ComputerSoftware = ["Computer Software Stores (5734)"];
				var RecordShops = ["Record Shops (5735)"];
				var CafeRestaurants = ["Eating Places and Restaurants (5812)"];
				var Bars = ["Bars, Cocktail Lounges, Discotheques, Nightclubs and Taverns-Drinking Places (Alcoholic Beverages) (5813)"];
				var FastFood = ["Fast Food Restaurants (5814)"];
				var DigitalGoods = ["Books, Movies, Music (5815)","Large Digital Goods Merchant / Digital Goods: Multi-Category (5818)"];
				var Games = ["Games (5816)"];
				var Applications = ["Applications (Excludes Games) (5817)"];
				var Antiques = ["Antique Shops - Sales, Repairs, and Restoration Services (5832)",
				"Antique Shops-Sales, Repairs and Restoration Services (5932)"];
				var DrugStores = ["Drug Stores and Pharmacies (5912)"];
				var Alcohol1 = ["Package Stores - Beer, Wine and Liquor (5921)"];
				var SecondHand = ["Second Hand Stores, Used Merchandise Stores (5931)"];
				var PawnShops = ["Pawn Shops (5933)"];
				var CarDump = ["Wrecking and Salvage Yards (5935)"];
				var ReproductionStores = ["Antique Reproduction Stores (5937)"];
				var Bicycles = ["Bicycle Shops-Sales and Service (5940)"];
				var SportsGoods = ["Sporting Goods Stores (5941)"];
				var BookStores = ["Book Stores (5942)"];
				var Stationery = ["Office, School Supply and Stationery Stores (5943)"];
				var Clock = ["Clock, Jewelry, Watch and Silverware Stores (5944)"];
				var Toys = ["Game, Toy and Hobby Shops (5945)"];
				var PhotoGoods = ["Camera and Photographic Supply Stores (5946)"];
				var Souvenirs = ["Card, Gift, Novelty and Souvenir Shops (5947)"];
				var LeatherProducts = ["Leather Goods and Luggage Stores (5948)"];
				var SewingSupplies = ["Fabric, Needlework, Piece Goods and Sewing Stores (5949)"];
				var CrystalGlassware = ["Crystal and Glassware Stores (5950)"];
				var Salesmen = ["Door-to-Door Sales (5963)"];
				var ArtGoods = ["Artist Supply Stores, Craft Shops (5970)"];
				var Galleries = ["Art Dealers and Galleries (5971)"];
				var Philatelicism = ["Stamp and Coin Stores - Philatelic and Numismatic Supplies (5972)"];
				var ChurchShops = ["Religious Goods Stores (5973)"];
				var RubberStamp = ["Rubber Stamp Store (5974)"];
				var HearingAids = ["Hearing Aids - Sales, Service, Supply Stores (5975)"];
				var Prostheses = ["Orthopedic Goods - Artificial Limb Stores (5976)"];
				var Cosmetics = ["Cosmetic Stores (5977)"];
				var PrintingMachines = ["Typewriter Stores - Rentals, Sales, Service (5978)"];
				var Fuel = ["Fuel Dealers - Coal, Fuel Oil, Liquefied Petroleum, Wood (5983)"];
				var Florists = ["Florists (5992)"];
				var TobaccoProducts = ["Cigar Stores and Stands (5993)"];
				var NewspapersMagazines = ["News Dealers and Newsstands (5994)"];
				var PetSupplies = ["Pet Shops, Pet Food and Supplies (5995)"];
				var SwimmingPools = ["Swimming Pools - Sales and Supplies (5996)"];
				var Razors = ["Electric Razor Stores - Sales and Service (5997)"];
				var Tents = ["Tent and Awning Shops (5998)"];
				var MiscellaneousStores= ["Miscellaneous and Specialty Retail Stores (5999)"];
				var Insurance = ["Direct Marketing Insurance Services (5960)"];
				var Goodsbymail = ["Mail Order Houses Including Catalog Order Stores (5961)","Direct Marketing-Catalog Merchants (5964)",
				"Direct Marketing - Combination Catalog and Retail Merchant (5965)","Direct Marketing - Outbound Telemarketing Merchants (5966)",
				"Direct Marketing - Other Direct Marketers (5969)"];
				var Travels = ["Direct Marketing - Travel Related Arrangement Services (5962)"];
				var InformationServices = ["Direct Marketing - Inbound Telemarketing Merchants (5967)"];
				var Subscriptions = ["Direct Marketing - Continuity / Subscription Merchants (5968)"];
				var DryCleaners = ["Cleaning, Garment and Laundry Services(7210)","Dry Cleaners (7216)"];
				var Laundry = ["Laundry Services - Family and Commercial (7211)"]; 
				var Cleaning = ["Carpet and Upholstery Cleaning (7217)"]; 
				var PhotographicStudios = ["Photographic Studios (7221)"];  
				var TheBeauty = ["Barber and Beauty Shops (7230)"]; 
				var ClothingRepair = ["Hat Cleaning Shops, Shoe Repair Shops, Shoe Shine Parlors (7251)"]; 
				var FuneralServices = ["Funeral Service and Crematories (7261)"]; 
				var Escort = ["Escort Services (7272)"]; 
				var DatingEscort = ["Dating Services (7273)"]; 
				var Taxes = ["Tax Preparation Service (7276)"]; 
				var Consultation = ["Debt, Marriage, Personal - Counseling Services (7277)"]; 
				var Shopping = ["Buying / Shopping Clubs, Services (7278)"]; 
				var Hospitals = ["Hospital Patient - Personal Funds Withdrawal (7280)"]; 
				var Babysitters = ["Babysitting Services (7295)"];
				var ClothingRental = ["Clothing Rental - Costumes, Uniforms and Formal Wear (7296)"];
				var Massage = ["Massage Parlors (7297)"];
				var HealthandBeauty = ["Health and Beauty Spas (7298)"];
				var miscellaneous = ["Other Services (7299)"]; 
				var Advertising = ["Advertising Services (7311)"];
				var CreditBureaus = ["Consumer Credit Reporting Agencies (7321)"];
				var CollectionAgencies = ["Debt collection agencies (7322)"];
				var CopyCenters = ["Blueprinting and Photocopying Services (7332)","Quick Copy, Reproduction and Blueprinting Services (7338)"];
				var PhotographyandArt = ["Commercial Art, Graphics, Photography (7333)"];
				var Stenography = ["Stenographic and Secretarial Support Services (7339)"]; 
				var Disinfecting = ["Exterminating and Disinfecting Services (7342)"];
				var CleaningandMaintenance = ["Cleaning and Maintenance, Janitorial Services (7349)"];
				var Employment = ["Employment Agencies and Temporary Help Services (7361)"];
				var Programming = ["Computer Programming, Data Processing and Integrated System Design Services (7372)"];
				var InformationServices = ["Information Retrieval Services (7375)"];
				var ComputerRepair = ["Computer Maintenance, Repair And Services (7379)"]; 
				var BusinessServices = ["Business Services (7389)","Business Services (7399)"];
				var ConsultingPR = ["Consulting, Management and Public Relations Services (7392)"];
				var DetectiveAgencies = ["Detective Agencies, Protective Agencies, Security Services including Armored Cars, Guard Dogs (7393)"];
				var EquipmentRental = ["Equipment Rental and Leasing Services, Furniture Rental, Tool Rental (7394)"];
				var PhotoPrinting = ["Photo Developing, Photofinishing Laboratories (7395)"];
				var Parking = ["Truck parking (7511)","Automobile Parking Lots and Garages (7523)",
				"Express Payment Service Merchants - Parking Lots and Garages (7524)"]; 
				var AutoRepair = ["Automotive Body Repair Shops (7531)"];
				var TireService = ["Tire Retreading and Repair Shops (7534)"];
				var CarPaints = ["Automotive Paint Shops (7535)"];
				var MaintenanceStations = ["Automotive Service Shops (7538)"];
				var CarWashes = ["Car Washes (7542)"];
				var TowTruck = ["Towing Services (7549)"];
				var RepairofEquipment = ["Electronic Repair Shops (7622)","Appliance Repair Shops, Electrical and Small  (7629)"];
				var HVACEquipmentRepair = ["Air Conditioning and Refrigeration Repair Shops (7623)"];
				var RepairofWatchesandJewellery = ["Clock, Jewelry and Watch Repair Shops (7631)"];
				var FurnitureRepair = ["Furniture - Reupholstery, Repair and Refinishing (7641)"];
				var WeldingWorks = ["Welding Repair (7692)"];
				var Repairs = ["Miscellaneous Repair Shops and Related Services (7699)"];
				var Charity = ["Organizations, Charitable and Social Service (8398)"];
				var PublicOrganizations = ["Associations - Civic, Social and Fraternal (8641)"];
				var OrganizationsPolitical = ["Organizations, Political (8651)"];
				var OrganizationsReligious = ["Organizations, Religious (8661)"];
				var Autoclub = ["Automobile Associations (8675)"];
				var OrganizationsMembership = ["Organizations, Membership (8699)"];
				var IPurchasingPilot = ["I-Purchasing Pilot (9034)","I-Purchasing Pilot (9041)"];
				var Court = ["Court Costs Including Alimony and Child Support (9211)"];
				var Fines = ["Fines (9222)"];
				var PayoutsBonds = ["Bail and Bond Payments (9223)"];
				var Taxes = ["Tax Payments (9311)"];
				var GovernmentServices = ["Government Services (9399)","Government loan payments (9411)"];
				var Mail = ["Postal Services - Government Only (9402)"];
				var GovernmentProcurement = ["Intra-Government Purchases - Government Only (9405)"];
				var HorseDogRacing = ["Government-Licensed Horse / Dog Racing (9754)"];
				var GovernmentOwnedLottery = ["Government Owned Lottery (7800)"];
				var OnlineCasino = ["Government-Licensed Casinos (Online or Internet Gambling) (7801)"];
				var HorseDogRacing = ["Government-Licensed Horse / Dog Racing (7802)"];
				var VideoRental = ["Motion Picture and Video Tape Production and Distribution (7829)","DVD/Video Tape Rental Stores (7841)"];
				var Cinemas = ["Motion Picture Theaters (7832)","Express Payment Service — Motion Picture Theater (7833)"];
				var DanceStudiosDanceSchools = ["Dance Halls, Schools and Studios (7911)"];
				var Tickets = ["Theatrical Producers (Except Motion Pictures), Ticket Agencies (7922)"];
				var MusicBandsOrchestras = ["Bands, Orchestras and Miscellaneous Entertainers (7929)"];
				var Billiard = ["Pool and Billiard Establishments (7932)"];
				var BowlingClubs = ["Bowling Alleys (7933)"];
				var SportsClubs = ["Athletic Fields, Commercial Sports, Professional Sports Clubs, Sports Promoters (7941)"];
				var Tourism = ["Tourist Attractions and Exhibits (7991)"];
				var Golf = ["Golf Courses, Public (7992)"];
				var Videogames = ["Video Amusement Game Supplies (7993)","Video Game Arcades and Establishments(7994)"];
				var Gambling = ["Gambling Transactions, Betting (7995)"];
				var Entertainment = ["Amusement Parks, Carnivals, Circuses, Fortune Tellers (7996)"];
				var EntertainmentandSport = ["Clubs-Country Clubs, Membership (Athletic, Recreation, Sports), Private Golf Courses (7997)"];
				var AquariumsDolphinariums = ["Aquariums, Dolphinariums, Zoos and Seaquariums (7998)"];
				var EntertainmentandSport = ["Recreation Services (7999)"];
				var Medicine  = ["Doctors (8011)","Osteopathic Physicians (8031)"];
				var Dentistry  = ["Dentists and Orthodontists (8021)"];
				var Chiropractors  = ["Chiropractors (8041)"];
				var Optics  = ["Optometrists and Ophthalmologists (8042)","Opticians, Optical Goods and Eyeglasses (8043)","Optical Goods and Eyeglasses (8044)"];
				var Podiatrists  = ["Chiropodists, Podiatrists (8049)"];
				var CaregiverNurse  = ["Nursing and Personal Care Facilities (8050)"];
				var Hospitals  = ["Hospitals (8062)"];
				var MedicineandDentistry  = ["Dental and Medical Laboratories (8071)"];
				var MedicalServices  = ["Health Practitioners, Medical Services (8099)"];
				var Lawyers  = ["Attorneys, Legal Services (8110)","Attorneys, Legal Services (8111)"];
				var School  = ["Schools, Elementary and Secondary (8211)"];
				var EducationUniversity  = ["Colleges, Universities, Professional Schools and Junior Colleges (8220)"];
				var SchoolsCorrespondence  = ["Schools, Correspondence (8241)"];
				var EducationBusiness  = ["Schools, Business and Secretarial  (8244)"];
				var Education  = ["Schools, Trade and Vocational (8249)","Schools And Educational Services (8299)"];
				var Kindergarten  = ["Child Care Services (8351)"];
				var Testinglaboratories  = ["Testing Laboratories (Non-Medical) (8734)","Testing Laboratories (Non-Medical) (8743)"];
				var Architects  = ["Architectural, Engineering and Surveying Services (8911)"];
				var AccountingAudit  = ["Accounting, Auditing and Bookkeeping Services (8931)"];
				var ProfessionalServices  = ["Professional services (8999)"];

				$("#category").change(function(){
				  var SubCategory = $(this).val();
				  var optionsSubList;
				  var htmlString = "";
	
				  switch (SubCategory) {
					case "Veterinary Services":
						optionsSubList = VeterinaryServices;
						break;
					case "Wine Producers":
						optionsSubList = WineProducers;
						break;
					case "Champagne Producers":
						optionsSubList = ChampagneProducers;
						break;
					case "Agricultural Co-operatives":
						optionsSubList = AgriculturalCoOperatives;
						break;
					case "Horticultural and Landscaping":
						optionsSubList = HorticulturalAndLandscaping;
						break;
					case "General Contractors":
						optionsSubList = GeneralContractors;
						break;
					case "Heating, Plumbing, A/C":
						optionsSubList = HeatingPlumbingAC;
						break;
					case "Electrical Contractors":
						optionsSubList = ElectricalContractors;
						break;
					case "Masonry, Stonework, and Plaster":
						optionsSubList = MasonryStoneworkAandPlaster;
						break;
					case "Carpentry Contractors":
						optionsSubList = CarpentryContractors;
						break;
					case "Roofing/Siding, Sheet Metal":
						optionsSubList = RoofingSidingSheetMetal;
						break;
					case "Concrete Work Contractors":
						optionsSubList = ConcreteWorkContractors;
						break;
					case "Special Trade Contractors":
						optionsSubList = GeneralConSpecialTradeContractorstractors;
						break;
					case "Miscellaneous Publishing and Printing":
						optionsSubList = MiscellaneousPublishingandPrinting;
						break;
					case "Typesetting, Plate Making":
						optionsSubList = TypesettingPlateMaking;
						break;
					case "Specialty Cleaning":
						optionsSubList = SpecialtyCleaning;
						break;
					case "Airlines":
						optionsSubList = Airlines1;
						break;
					case "Security":
						optionsSubList = Security;
						break;
					case "Car Rent":
						optionsSubList = CarRent;
						break;
					case "Truck Rental":
						optionsSubList = TruckRental;
						break;
					case "Hotel / Resorts":
						optionsSubList = HotelResorts;
						break;
					case "Cashing":
						optionsSubList = Cashing;
						break;
					case "Miscellaneous":
						optionsSubList = Miscellaneous1;
						break;
					case "Cashback":
						optionsSubList = Cashback;
						break;
					case "VISA":
						optionsSubList = VISA;
						break;
					case "Emergency Services":
						optionsSubList = EmergencyServices;
						break;
					case "In-company purchases":
						optionsSubList = InCompanyPurchases;
						break;
					case "Railway":
						optionsSubList = Railway;
						break;
					case "Passenger Transportation":
						optionsSubList = PassengerTransportation;
						break;
					case "Passenger Railways":
						optionsSubList = PassengerRailways;
						break;
					case "Ambulance":
						optionsSubList = Ambulance;
						break;
					case "Taxi":
						optionsSubList = Taxi;
						break;
					case "Transportation Bus":
						optionsSubList = TransportationBus;
						break;
					case "Transportation Delivery":
						optionsSubList = TransportationDelivery;
						break;
					case "Delivery Service":
						optionsSubList = DeliveryService;
						break;
					case "Storage":
						optionsSubList = Storage1;
						break;
					case "Cruise Lines":
						optionsSubList = CruiseLines1;
						break;
					case "Boat Rentals":
						optionsSubList = BoatRentals;
						break;
					case "Yachting Service":
						optionsSubList = YachtingService;
						break;
					case "Airports":
						optionsSubList = Airports;
						break;
					case "Tourism":
						optionsSubList = Tourism;
						break;
					case "Tour Operators":
						optionsSubList = TourOperators;
						break;
				    case "Transportation Services":
						optionsSubList = TransportationServices;
						break;
					case "Telemarketing":
						optionsSubList = Telemarketing;
						break;
					case "Toll Roads":
						optionsSubList = TollRoads;
						break;
					case "TelecommunicationEquipment":
						optionsSubList = TelecommunicationEquipment;
						break;
					case "Retail Outlet With Telephony":
						optionsSubList = RetailOutletWithTelephony;
						break;
					case "Mobile Connection":
						optionsSubList = MobileConnection;
						break;
					case "Telephone Services":
						optionsSubList = TelephoneServices;
						break;
					case "Information Services":
						optionsSubList = InformationServices;
						break;
					case "Telegraph":
						optionsSubList = Telegraph;
						break;
					case "TheTelevision":
						optionsSubList = TheTelevision;
						break;
					case "Utilities":
						optionsSubList = Utilities;
						break;
					case "Money Transfer":
						optionsSubList = MoneyTransfer;
						break;
					case "Caterers":
						optionsSubList = Caterers;
						break;
					case "Cashier Office":
						optionsSubList = CashiersOffice;
						break;
					case "Financial Services":
						optionsSubList = FinancialServices;
						break;
					case "Banks":
						optionsSubList = Banks;
						break;
					case "Quasi Cash":
						optionsSubList = QuasiCash;
						break;
					case "Securities":
						optionsSubList = Securities;
						break;
					case "Insurance":
						optionsSubList = Insurance;
						break;
					case "Rental Property":
						optionsSubList = RentalProperty;
						break;
					case "Card Replenishment":
						optionsSubList = CardReplenishment;
						break;
					case "Bonds":
						optionsSubList = Bonds;
						break;
					case "Timeshares":
						optionsSubList = Timeshares;
						break;
					case "Recreation":
						optionsSubList = Recreation;
						break;
					case "Campgrounds":
						optionsSubList = Campgrounds;
						break;
					case "Auto Parts":
						optionsSubList = AutoParts;
						break;
					case "Furniture":
						optionsSubList = Furniture;
						break;
					case "Building Materials":
						optionsSubList = BuildingMaterials;
						break;
					case "Office Equipment":
						optionsSubList = OfficeEquipment;
						break;
					case "Computers and Software":
						optionsSubList = ComputersandSoftware;
						break;
					case "Equipment":
						optionsSubList = Equipment;
						break;
					case "Medical Equipment":
						optionsSubList = MedicalEquipment;
						break;
					case "Metal processing":
						optionsSubList = MetalProcessing;
						break;
					case "Electronics":
						optionsSubList = Electronics;
						break;
					case "Plumbing":
						optionsSubList = Plumbing;
						break;
					case "Industry":
						optionsSubList = Industry;
						break;
					case "Jewellery":
						optionsSubList = Jewelry;
						break;
					case "Goods":
						optionsSubList = Goods;
						break;
						case "Chancery":
						optionsSubList = Chancery;
						break;
					case "Drugs":
						optionsSubList = Drugs;
						break;
					case "Haberdashery":
						optionsSubList = Haberdashery;
						break;
					case "Clothing":
						optionsSubList = Clothing;
						break;
					case "Footwear":
						optionsSubList = Footwear;
						break;
					case "Chemicals":
						optionsSubList = Chemicals;
						break;
					case "Petroleum":
						optionsSubList = Petroleum;
						break;
					case "Books Press":
						optionsSubList = BooksPress;
						break;
					case "Flowers":
						optionsSubList = Flowers;
						break;
					case "Paints":
						optionsSubList = Paints;
						break;
					case "Alcohol":
						optionsSubList = Alcohol;
						break;
					case "Document Flow":
						optionsSubList = DocumentFlow;
						break;
					case "Household Products":
						optionsSubList = HouseholdProducts;
						break;
					case "Building Materials":
						optionsSubList = BuildingMaterials;
						break;
					case "Renovation":
						optionsSubList = Renovation;
						break;
					case "Hardware Stores":
						optionsSubList = HardwareStores;
						break;
					case "Garden Accessories":
						optionsSubList = GardenAccessories;
						break;
					case "Marketplaces":
						optionsSubList = Marketplaces;
						break;
					case "Mobile Homes":
						optionsSubList = MobileHomes;
						break;
					case "Retail Stores":
						optionsSubList = RetailStores;
						break;
					case "Gas Sales":
						optionsSubList = GasSales;
						break;
					case "Wholesalers":
						optionsSubList = Wholesalers;
						break;
					case "Duty Free":
						optionsSubList = DutyFree;
						break;
					case "Discounters":
						optionsSubList = Discounters;
						break;
					case "Department Stores":
						optionsSubList = DepartmentStores;
						break;
					case "Variety Stores":
						optionsSubList = VarietyStores;
						break;
					case "Merchandise Stores":
						optionsSubList = MerchandiseStores;
						break;
					case "Grocery":
						optionsSubList = Grocery;
						break;
					case "Meat":
						optionsSubList = Meat;
						break;
						case "Sweets":
						optionsSubList = Sweets;
						break;
					case "Farm Goods":
						optionsSubList = FarmGoods;
						break;
					case "Bakeries":
						optionsSubList = Bakeries;
						break;
					case "Food stores":
						optionsSubList = FoodStores;
						break;
					case "Car Dealerships":
						optionsSubList = CarDealerships;
						break;
					case "Auto Parts":
						optionsSubList = AutoParts;
						break;
					case "Tires":
						optionsSubList = Tires;
						break;
					case "Auto Shops":
						optionsSubList = AutoShops;
						break;
					case "Service Stations":
						optionsSubList = ServiceStations;
						break;
					case "Gas Station":
						optionsSubList = GasStation;
						break;
					case "Boats":
						optionsSubList = Boats;
						break;
					case "Charging Stations":
						optionsSubList = ChargingStations;
						break;
					case "Mens Clothing":
						optionsSubList = MensClothing;
						break;
					case "Womens Clothing":
						optionsSubList = WomensClothing;
						break;
					case "Clothing Stores":
						optionsSubList = ClothingStores;
						break;
					case "Baby Clothes":
						optionsSubList = BabyClothes;
						break;
					case "Clothes":
						optionsSubList = Clothes;
						break;
					case "Sportswear":
						optionsSubList = Sportswear;
						break;
					case "Shoes":
						optionsSubList = Shoes;
						break;
					case "Fur":
						optionsSubList = Fur;
						break;
					case "Atelier":
						optionsSubList = Atelier;
						break;
					case "Wigs":
						optionsSubList = Wigs;
						break;
					case "Accessories":
						optionsSubList = Accessories;
						break;
					case "Furniture":
						optionsSubList = Furniture;
						break;
					case "Floor Coverings":
						optionsSubList = FloorCoverings;
						break;
					case "Curtains":
						optionsSubList = Curtains;
						break;
					case "Alcohols":
						optionsSubList = Alcohol1;
						break;
					case "Fireplaces":
						optionsSubList = Fireplaces;
						break;
					case "Household Appliance":
						optionsSubList = HouseholdAppliance;
						break;
					case "Musical Instruments":
						optionsSubList = MusicalInstruments;
						break;
					case "Computer Software":
						optionsSubList = ComputerSoftware;
						break;
					case "Record Shops":
						optionsSubList = RecordShops;
						break;
					case "Cafe Restaurants":
						optionsSubList = CafeRestaurants;
						break;
					case "Bars":
						optionsSubList = Bars;
						break;
					case "Fast Food":
						optionsSubList = FastFood;
						break;
					case "Digital Goods":
						optionsSubList = DigitalGoods;
						break;
					case "Games":
						optionsSubList = Games;
						break;
					case "Applications":
						optionsSubList = Applications;
						break;
					case "Digital Goods":
						optionsSubList = DigitalGoods;
						break;
					case "Antiques":
						optionsSubList = Antiques;
						break;
					case "Drug Stores":
						optionsSubList = DrugStores;
						break;
					case "Second Hand":
						optionsSubList = SecondHand;
						break;
					case "Pawn Shops":
						optionsSubList = PawnShops;
						break;
					case "Car Dump":
						optionsSubList = CarDump;
						break;
					case "Reproduction Stores":
						optionsSubList = ReproductionStores;
						break;
					case "Bicycles":
						optionsSubList = Bicycles;
						break;
					case "Sports Goods":
						optionsSubList = SportsGoods;
						break;
					case "Book Stores":
						optionsSubList = BookStores;
						break;
					case "Stationery":
						optionsSubList = Stationery;
						break;
					case "Clock":
						optionsSubList = Clock;
						break;
					case "Toys":
						optionsSubList = Toys;
						break;
					case "Photo Goods":
						optionsSubList = PhotoGoods;
						break;
					case "Souvenirs":
						optionsSubList = Souvenirs;
						break;
					case "Leather Products":
						optionsSubList = LeatherProducts;
						break;
					case "Sewing Supplies":
						optionsSubList = SewingSupplies;
						break;
					case "Crystal / Glassware":
						optionsSubList = CrystalGlassware;
						break;
					case "Salesmen":
						optionsSubList = Salesmen;
						break;
					case "Art Goods":
						optionsSubList = ArtGoods;
						break;
					case "Galleries":
						optionsSubList = Galleries;
						break;
					case "Philatelicism":
						optionsSubList = Philatelicism;
						break;
					case "Church Shops":
						optionsSubList = ChurchShops;
						break;
					case "Rubber Stamp":
						optionsSubList = RubberStamp;
						break;
					case "Hearing Aids":
						optionsSubList = HearingAids;
						break;
					case "Prostheses":
						optionsSubList = Prostheses;
						break;
					case "Cosmetics":
						optionsSubList = Cosmetics;
						break;
					case "Printing Machines":
						optionsSubList = PrintingMachines;
						break;
					case "Fuel":
						optionsSubList = Fuel;
						break;
					case "Florists":
						optionsSubList = Florists;
						break;
					case "Tobacco Products":
						optionsSubList = TobaccoProducts;
						break;
					case "Newspapers Magazines":
						optionsSubList = NewspapersMagazines;
						break;
					case "Pet Supplies":
						optionsSubList = PetSupplies;
						break;
					case "Swimming Pools":
						optionsSubList = SwimmingPools;
						break;
					case "Razors":
						optionsSubList = Razors;
						break;
					case "Tents":
						optionsSubList = Tents;
						break;
					case "Miscellaneous Stores":
						optionsSubList = MiscellaneousStores;
						break;
					case "Insurance":
						optionsSubList = Insurance;
						break;
					case "Goods by mail":
						optionsSubList = Goodsbymail;
						break;
					case "Travels":
						optionsSubList = Travels;
						break;
					case "Information Services":
						optionsSubList = InformationServices;
						break;
					case "Subscriptions":
						optionsSubList = Subscriptions;
						break;
					case "Dry Cleaners":
						optionsSubList = DryCleaners;
						break;
					case "Laundry":
						optionsSubList = Laundry;
						break;
					case "Cleaning":
						optionsSubList = Cleaning;
						break;
					case "Subscriptions":
						optionsSubList = Subscriptions;
						break;
					case "Dry Cleaners":
						optionsSubList = DryCleaners;
						break;
					case "Photographic Studios":
						optionsSubList = PhotographicStudios;
						break;
					case "The Beauty":
						optionsSubList = TheBeauty;
						break;
					case "Clothing Repair":
						optionsSubList = ClothingRepair;
						break;
					case "Funeral Services":
						optionsSubList = FuneralServices;
						break;
					case "Escort":
						optionsSubList = Escort;
						break;
					case "Dating Escort":
						optionsSubList = DatingEscort;
						break;
					case "Taxes":
						optionsSubList = Taxes;
						break;
					case "Consultation":
						optionsSubList = Consultation;
						break;
					case "Shopping":
						optionsSubList = Shopping;
						break;
					case "Hospitals":
						optionsSubList = Hospitals;
						break;
					case "Babysitters":
						optionsSubList = Babysitters;
						break;
					case "Clothing Rental":
						optionsSubList = ClothingRental;
						break;
					case "Massage":
						optionsSubList = Massage;
						break;
					case "Health and Beauty":
						optionsSubList = HealthandBeauty;
						break;
					case "miscellaneous":
						optionsSubList = miscellaneous;
						break;
					case "Advertising":
						optionsSubList = Advertising;
						break;
					case "Credit Bureaus":
						optionsSubList = CreditBureaus;
						break;
					case "Collection Agencies":
						optionsSubList = CollectionAgencies;
						break;
					case "Copy Centers":
						optionsSubList = CopyCenters;
						break;
					case "Photography and Art":
						optionsSubList = PhotographyandArt;
						break;
					case "Copy Centers":
						optionsSubList = CopyCenters;
						break;
					case "Stenography":
						optionsSubList = Stenography;
						break;
					case "Disinfecting":
						optionsSubList = Disinfecting;
						break;
					case "Cleaning and Maintenance":
						optionsSubList = CleaningandMaintenance;
						break;
					case "Employment":
						optionsSubList = Employment;
						break;
					case "Programming":
						optionsSubList = Programming;
						break;
					case "Information Services":
						optionsSubList = InformationServices;
						break;
					case "Computer Repair":
						optionsSubList = ComputerRepair;
						break;
					case "Business Services":
						optionsSubList = BusinessServices;
						break;
					case "Consulting, PR":
						optionsSubList = ConsultingPR;
						break;
					case "Detective Agencies":
						optionsSubList = DetectiveAgencies;
						break;
					case "Equipment Rental":
						optionsSubList = EquipmentRental;
						break;
					case "Photo Printing":
						optionsSubList = PhotoPrinting;
						break;
					case "Parking":
						optionsSubList = Parking;
						break;
					case "Auto Repair":
						optionsSubList = AutoRepair;
						break;
					case "Tire Service":
						optionsSubList = TireService;
						break;
					case "Car Paints":
						optionsSubList = CarPaints;
						break;
					case "Maintenance Stations":
						optionsSubList = MaintenanceStations;
						break;
					case "Car Washes":
						optionsSubList = CarWashes;
						break;
					case "Tow Truck":
						optionsSubList = TowTruck;
						break;
					case "Repair of Equipment":
						optionsSubList = RepairofEquipment;
						break;
					case "HVAC Equipment Repair":
						optionsSubList = HVACEquipmentRepair;
						break;
					case "Repair of Watches and Jewellery":
						optionsSubList = RepairofWatchesandJewellery;
						break;
					case "Furniture Repair":
						optionsSubList = FurnitureRepair;
						break;
					case "Welding Works":
						optionsSubList = WeldingWorks;
						break;
					case "Repairs":
						optionsSubList = Repairs;
						break;
					case "Government Owned Lottery":
						optionsSubList = GovernmentOwnedLottery;
						break;
					case "Online Casino":
						optionsSubList = OnlineCasino;
						break;
					case "Horse / Dog Racing":
						optionsSubList = HorseDogRacing;
						break;
					case "Video Rental":
						optionsSubList = VideoRental;
						break;
					case "Cinemas":
						optionsSubList = Cinemas;
						break;
					case "Dance studios / Dance Schools":
						optionsSubList = DanceStudiosDanceSchools;
						break;
					case "Tickets":
						optionsSubList = Tickets;
						break;
					case "Music Bands Orchestras":
						optionsSubList = MusicBandsOrchestras;
						break;
					case "Billiard":
						optionsSubList = Billiard;
						break;
					case "Bowling Clubs":
						optionsSubList = BowlingClubs;
						break;
					case "Sports Clubs":
						optionsSubList = SportsClubs;
						break;
					case "Tourism":
						optionsSubList = Tourism;
						break;
					case "Golf":
						optionsSubList = Golf;
						break;
					case "Videogames":
						optionsSubList = Videogames;
						break;
					case "Gambling":
						optionsSubList = Gambling;
						break;
					case "Entertainment":
						optionsSubList = Entertainment;
						break;
					case "Entertainment and Sport":
						optionsSubList = EntertainmentandSport;
						break;
					case "Aquariums Dolphinariums":
						optionsSubList = AquariumsDolphinariums;
						break;
					case "Medicine":
						optionsSubList = Medicine;
						break;
					case "Dentistry":
						optionsSubList = Dentistry;
						break;	
					case "Chiropractors":
						optionsSubList = Chiropractors;
						break;
					case "Optics":
						optionsSubList = Optics;
						break;
					case "Podiatrists":
						optionsSubList = Podiatrists;
						break;
					case "Caregiver / Nurse":
					    optionsSubList = CaregiverNurse;
						break;
					case "Hospitals":
						optionsSubList = Hospitals;
							break;
					case "Medicine and Dentistry":
						optionsSubList = MedicineandDentistry;
						break;
					case "Medical Services":
						optionsSubList = MedicalServices;
						break;
					case "Lawyers":
						optionsSubList = Lawyers;
						break;
					case "School":
						optionsSubList = School;
						break;
					case "Education University":
						optionsSubList = EducationUniversity;
						break;
					case "Schools, Correspondence":
						optionsSubList = SchoolsCorrespondence;
						break;
					case "Education Business":
						optionsSubList = EducationBusiness;
						break;
					case "Education":
						optionsSubList = Education;
						break;
					case "Kindergarten":
						optionsSubList = Kindergarten;
						break;
						case "Testing laboratories":
						optionsSubList = Testinglaboratories;
						break;
						case "Architects":
						optionsSubList = Architects;
						break;
						case "Accounting Audit":
						optionsSubList = AccountingAudit;
						break;
						case "Professional Services":
						optionsSubList = ProfessionalServices;
						break;
					case "Charity":
						optionsSubList = Charity;
						break;
					case "Public Organizations":
						optionsSubList = PublicOrganizations;
						break;
					case "Organizations, Political":
						optionsSubList = OrganizationsPolitical;
						break;
					case "Organizations, Religious":
						optionsSubList = OrganizationsReligious;
						break;
					case "Autoclub":
						optionsSubList = Autoclub;
						break;
					case "Organizations, Membership":
						optionsSubList = OrganizationsMembership;
						break;
					case "I-Purchasing Pilot":
						optionsSubList = IPurchasingPilot;
						break;
					case "Court":
						optionsSubList = Court;
						break;
					case "Fines":
						optionsSubList = Fines;
						break;
					case "Payouts Bonds":
						optionsSubList = PayoutsBonds;
						break;
					case "Taxes":
						optionsSubList = Taxes;
						break;
					case "Government Services":
						optionsSubList = GovernmentServices;
						break;
					case "Mail":
						optionsSubList = Mail;
						break;
					case "Government Procurement":
						optionsSubList = GovernmentProcurement;
						break;
					case "Horse / Dog Racing":
						optionsSubList = HorseDogRacing;
						break;
				}
	
				for(var i = 0; i < optionsSubList.length; i++){
					htmlString = htmlString+"<option value='"+ optionsSubList[i] +"'>"+ optionsSubList[i] +"</option>";
				}
				$("#subCategory").html(htmlString);
	
				});

			});

