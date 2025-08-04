// Bangladesh administrative data
const bangladeshData = {
    divisions: [
        {
            name: "ঢাকা",
            districts: [
                { name: "ঢাকা", upazilas: ["চক (বাতিল)", "আদাবর", "বাড্ডা", "বংশাল", "বিমান বন্দর", "বনানী", "ক্যান্টনমেন্ট", "চকবাজার", "দক্ষিণখান", "দারুসসালাম", "ডেমরা", "ধামরাই", "ধানমন্ডি", "দোহার", "ভাষানটেক", "ভাটারা", "গেন্ডারিয়া", "গুলশান", "হাতিরঝিল", "হাজারীবাগ", "যাত্রাবাড়ী", "কাফরুল", "কদমতলী", "কলাবাগান", "কামরাঙ্গীর চর", "খিলগাঁও", "খিলক্ষেত", "কেরানীগঞ্জ", "কোতয়ালী", "লালবাগ", "মিরপুর", "মোহাম্মদপুর", "মতিঝিল", "মুগদা", "নবাবগঞ্জ", "নিউ মার্কেট", "পল্লবী", "পল্টন", "রমনা", "রামপুরা", "সবুজবাগ", "রুপনগর", "সাভার", "শাহজাহানপুর", "শাহ্ আলী", "শাহবাগ", "শ্যামপুর", "শেরে বাংলা নগর", "সুত্রাপুর", "তেজগাঁও", "তেজগাঁও শিল্প এলাকা", "তুরাগ", "উত্তরা পশ্চিম", "উত্তরা পূর্ব", "উত্তর খান", "ওয়ারী"] },
                { name: "ফরিদপুর", upazilas: ["আলফাডাঙ্গা", "ভাঙ্গা", "বোয়ালমারী", "চরভদ্রাসন", "ফরিদপুর সদর", "মধুখালী", "নগরকান্দা", "সদরপুর", "সালথা"] },
                { name: "গাজীপুর", upazilas: ["গাজীপুর সদর", "কালিয়াকৈর", "কাপাসিয়া", "শ্রীপুর", "কালীগঞ্জ"] },
                { name: "গোপালগঞ্জ", upazilas: ["গোপালগঞ্জ সদর", "কাশিয়ানি", "কোটালীপাড়া", "মুকসুদপুর", "টুংগীপাড়া"] },
                { name: "কিশোরগঞ্জ", upazilas: ["অষ্টগ্রাম", "বাজিতপুর", "ভৈরব", "হোসেনপুর", "ইটনা", "করিমগঞ্জ", "কটিয়াদী", "কিশোরগঞ্জ সদর", "কুলিয়ারচর", "মিঠামইন", "নিকলী", "পাকুন্দিয়া", "তাড়াইল"] },
                { name: "মাদারীপুর", upazilas: ["কালকিনি", "মাদারীপুর সদর", "রাজৈর", "শিবচর"] },
                { name: "মানিকগঞ্জ", upazilas: ["দৌলতপুর", "ঘিওর", "হরিরামপুর", "মানিকগঞ্জ সদর", "সাটুরিয়া", "শিবালয়", "সিংগাইর"] },
                { name: "মুন্সিগঞ্জ", upazilas: ["গজারিয়া", "লৌহজং", "মুন্সিগঞ্জ সদর", "সিরাজদিখান", "শ্রীনগর", "টঙ্গীবাড়ি"] },
                { name: "নারায়ণগঞ্জ", upazilas: ["আড়াইহাজার", "বন্দর", "নারায়ণগঞ্জ সদর", "রূপগঞ্জ", "সোনারগাঁ"] },
                { name: "নরসিংদী", upazilas: ["বেলাবো", "মনোহরদী", "নরসিংদী সদর", "পলাশ", "রায়পুরা", "শিবপুর"] },
                { name: "রাজবাড়ী", upazilas: ["বালিয়াকান্দি", "গোয়ালন্দ", "পাংশা", "রাজবাড়ী সদর"] },
                { name: "শরীয়তপুর", upazilas: ["ভেদরগঞ্জ", "দামুদ্যা", "গোসাইরহাট", "নড়িয়া", "শরীয়তপুর সদর", "জাজিরা"] },
                { name: "টাঙ্গাইল", upazilas: ["বাসাইল", "ভুয়াপুর", "দেলদুয়ার", "ধনবাড়ী", "ঘাটাইল", "গোপালপুর", "কালিহাতী", "মধুপুর", "মির্জাপুর", "নাগরপুর", "সখিপুর", "টাঙ্গাইল সদর"] }
            ]
        },
        {
            name: "চট্টগ্রাম",
            districts: [
                { name: "বান্দরবান", upazilas: ["আলীকদম", "বান্দরবান সদর", "লামা", "নাইক্ষ্যংছড়ি", "রোয়াংছড়ি", "রুমা", "থানচি"] },
                { name: "ব্রাহ্মণবাড়িয়া", upazilas: ["আখাউড়া", "বাঞ্ছারামপুর", "ব্রাহ্মণবাড়িয়া সদর", "কসবা", "নবীনগর", "নাসিরনগর", "সরাইল", "আশুগঞ্জ", "বিজয়নগর"] },
                { name: "চাঁদপুর", upazilas: ["চাঁদপুর সদর", "ফরিদগঞ্জ", "হাইমচর", "হাজীগঞ্জ", "কচুয়া", "মতলব দক্ষিণ", "মতলব উত্তর", "শাহরাস্তি"] },
                { name: "চট্টগ্রাম", upazilas: ["আনোয়ারা", "বাঁশখালী", "বোয়ালখালী", "চন্দনাইশ", "ফটিকছড়ি", "হাটহাজারী", "লোহাগাড়া", "মীরসরাই", "পটিয়া", "রাঙ্গুনিয়া", "রাউজান", "সন্দ্বীপ", "সাতকানিয়া", "সীতাকুণ্ড"] },
                { name: "কুমিল্লা", upazilas: ["বরুড়া", "ব্রাহ্মণপাড়া", "বুড়িচং", "চান্দিনা", "চৌদ্দগ্রাম", "দাউদকান্দি", "দেবীদ্বার", "হোমনা", "কুমিল্লা সদর", "লাকসাম", "মনোহরগঞ্জ", "মেঘনা", "মুরাদনগর", "নাঙ্গলকোট", "কুমিল্লা আদর্শ সদর", "তিতাস"] },
                { name: "কক্সবাজার", upazilas: ["চকরিয়া", "কক্সবাজার সদর", "কুতুবদিয়া", "মহেশখালী", "রামু", "টেকনাফ", "উখিয়া", "পেকুয়া"] },
                { name: "ফেনী", upazilas: ["ছাগলনাইয়া", "দাগনভূঞা", "ফেনী সদর", "পরশুরাম", "সোনাগাজী", "ফুলগাজী"] },
                { name: "খাগড়াছড়ি", upazilas: ["দিঘীনালা", "খাগড়াছড়ি সদর", "লক্ষ্মীছড়ি", "মহালছড়ি", "মানিকছড়ি", "মাটিরাঙ্গা", "পানছড়ি", "রামগড়"] },
                { name: "লক্ষ্মীপুর", upazilas: ["লক্ষ্মীপুর সদর", "রায়পুর", "রামগঞ্জ", "রামগতি", "কমলনগর"] },
                { name: "নোয়াখালী", upazilas: ["বেগমগঞ্জ", "চাটখিল", "কোম্পানীগঞ্জ", "হাতিয়া", "সেনবাগ", "নোয়াখালী সদর", "সোনাইমুড়ি", "সুবর্ণচর", "কবিরহাট"] },
                { name: "রাঙ্গামাটি", upazilas: ["বাঘাইছড়ি", "বরকল", "কাউখালী", "বিলাইছড়ি", "কাপ্তাই", "জুরাছড়ি", "লংগদু", "নানিয়ারচর", "রাজস্থলী", "রাঙ্গামাটি সদর"] }
            ]
        },
        {
            name: "সিলেট",
            districts: [
                { name: "হবিগঞ্জ", upazilas: ["আজমিরীগঞ্জ", "বাহুবল", "বানিয়াচং", "চুনারুঘাট", "হবিগঞ্জ সদর", "লাখাই", "মাধবপুর", "নবীগঞ্জ", "শায়েস্তাগঞ্জ"] },
                { name: "মৌলভীবাজার", upazilas: ["বড়লেখা", "জুড়ী", "কমলগঞ্জ", "কুলাউড়া", "মৌলভীবাজার সদর", "রাজনগর", "শ্রীমঙ্গল"] },
                { name: "সুনামগঞ্জ", upazilas: ["বিশ্বম্ভরপুর", "ছাতক", "দিরাই", "ধর্মপাশা", "দোয়ারাবাজার", "জগন্নাথপুর", "জামালগঞ্জ", "সুল্লা", "সুনামগঞ্জ সদর", "তাহিরপুর"] },
                { name: "সিলেট", upazilas: ["বালাগঞ্জ", "বিয়ানীবাজার", "বিশ্বনাথ", "কোম্পানীগঞ্জ", "ফেঞ্চুগঞ্জ", "গোলাপগঞ্জ", "গোয়াইনঘাট", "জৈন্তাপুর", "কানাইঘাট", "সিলেট সদর", "জাকিগঞ্জ", "দক্ষিণ সুরমা", "ওসমানী নগর"] }
            ]
        },
        {
            name: "রাজশাহী",
            districts: [
                { name: "বগুড়া", upazilas: ["আদমদীঘি", "বগুড়া সদর", "শেরপুর", "ধুনট", "ধুপচাঁচিয়া", "গাবতলী", "কাহালু", "নন্দীগ্রাম", "সাহজাদপুর", "সারিয়াকান্দি", "শিবগঞ্জ", "সোনাতলা"] },
                { name: "চাঁপাইনবাবগঞ্জ", upazilas: ["ভোলাহাট", "গোমস্তাপুর", "নাচোল", "চাঁপাইনবাবগঞ্জ সদর", "শিবগঞ্জ"] },
                { name: "জয়পুরহাট", upazilas: ["আক্কেলপুর", "জয়পুরহাট সদর", "কালাই", "ক্ষেতলাল", "পাঁচবিবি"] },
                { name: "নওগাঁ", upazilas: ["আত্রাই", "বাদলগাছি", "ধামইরহাট", "মান্দা", "মহাদেবপুর", "নওগাঁ সদর", "নিয়ামতপুর", "পত্নীতলা", "পোরশা", "রাণীনগর", "সাপাহার"] },
                { name: "নাটোর", upazilas: ["বাগাতিপাড়া", "বড়াইগ্রাম", "গুরুদাসপুর", "লালপুর", "নাটোর সদর", "সিংড়া"] },
                { name: "পাবনা", upazilas: ["আটঘরিয়া", "বেড়া", "ভাঙ্গুড়া", "চাটমোহর", "ফরিদপুর", "ঈশ্বরদী", "পাবনা সদর", "সাঁথিয়া", "সুজানগর"] },
                { name: "রাজশাহী", upazilas: ["বাগমারা", "বাগমারা", "চারঘাট", "দুর্গাপুর", "গোদাগাড়ী", "মোহনপুর", "পবা", "পুঠিয়া", "তানোর"] },
                { name: "সিরাজগঞ্জ", upazilas: ["বেলকুচি", "চৌহালি", "কামারখন্দ", "কাজীপুর", "রায়গঞ্জ", "শাহজাদপুর", "সিরাজগঞ্জ সদর", "তারাশ", "উল্লাপাড়া"] }
            ]
        },
        {
            name: "রংপুর",
            districts: [
                { name: "দিনাজপুর", upazilas: ["বিরামপুর", "বীরগঞ্জ", "বিরল", "বোচাগঞ্জ", "চিরিরবন্দর", "ফুলবাড়ী", "ঘোড়াঘাট", "হাকিমপুর", "কাহারোল", "খানসামা", "দিনাজপুর সদর", "নবাবগঞ্জ", "পার্বতীপুর"] },
                { name: "গাইবান্ধা", upazilas: ["ফুলছড়ি", "গাইবান্ধা সদর", "গোবিন্দগঞ্জ", "পলাশবাড়ী", "সাদুল্লাপুর", "সাঘাটা", "সুন্দরগঞ্জ"] },
                { name: "কুড়িগ্রাম", upazilas: ["ভুরুঙ্গামারী", "চর রাজিবপুর", "চিলমারী", "ফুলবাড়ী", "কুড়িগ্রাম সদর", "নাগেশ্বরী", "রাজারহাট", "রৌমারী", "উলিপুর"] },
                { name: "লালমনিরহাট", upazilas: ["আদিতমারী", "হাতিবান্ধা", "কালীগঞ্জ", "লালমনিরহাট সদর", "পাটগ্রাম"] },
                { name: "নীলফামারী", upazilas: ["ডিমলা", "ডোমার", "জলঢাকা", "কিশোরগঞ্জ", "নীলফামারী সদর", "সৈয়দপুর"] },
                { name: "পঞ্চগড়", upazilas: ["আটোয়ারী", "বোদা", "দেবীগঞ্জ", "পঞ্চগড় সদর", "তেতুলিয়া"] },
                { name: "রংপুর", upazilas: ["বদরগঞ্জ", "গঙ্গাচড়া", "কাউনিয়া", "রংপুর সদর", "মিঠাপুকুর", "পীরগঞ্জ", "পীরগাছা", "তারাগঞ্জ"] },
                { name: "ঠাকুরগাঁও", upazilas: ["বালিয়াডাঙ্গী", "হরিপুর", "পীরগঞ্জ", "রাণীশংকৈল", "ঠাকুরগাঁও সদর"] }
            ]
        },
        {
            name: "খুলনা",
            districts: [
                { name: "বাগেরহাট", upazilas: ["বাগেরহাট সদর", "চিতলমারী", "ফকিরহাট", "কচুয়া", "মোল্লাহাট", "মোংলা", "মোরেলগঞ্জ", "রামপাল", "শরণখোলা"] },
                { name: "চুয়াডাঙ্গা", upazilas: ["আলমডাঙ্গা", "চুয়াডাঙ্গা সদর", "দামুড়হুদা", "জীবননগর"] },
                { name: "যশোর", upazilas: ["অভয়নগর", "বাঘারপাড়া", "চৌগাছা", "ঝিকরগাছা", "কেশবপুর", "যশোর সদর", "মনিরামপুর", "শার্শা"] },
                { name: "ঝিনাইদহ", upazilas: ["হরিণাকুণ্ড", "ঝিনাইদহ সদর", "কালীগঞ্জ", "কোটচাঁদপুর", "মহেশপুর", "শৈলকুপা"] },
                { name: "খুলনা", upazilas: ["বটিয়াঘাটা", "দাকোপ", "ডুমুরিয়া", "দিঘলিয়া", "কয়রা", "পাইকগাছা", "ফুলতলা", "রূপসা", "তেরখাদা"] },
                { name: "কুষ্টিয়া", upazilas: ["ভেড়ামারা", "দৌলতপুর", "খোকসা", "কুমারখালী", "কুষ্টিয়া সদর", "মিরপুর"] },
                { name: "মাগুরা", upazilas: ["মাগুরা সদর", "মোহাম্মদপুর", "শালিখা", "শ্রীপুর"] },
                { name: "মেহেরপুর", upazilas: ["গাংনি", "মেহেরপুর সদর", "মুজিবনগর"] },
                { name: "নড়াইল", upazilas: ["কালিয়া", "লোহাগড়া", "নড়াইল সদর"] },
                { name: "সাতক্ষীরা", upazilas: ["আসসুনি", "দেবহাটা", "কলারোয়া", "কালীগঞ্জ", "সাতক্ষীরা সদর", "শ্যামনগর", "তালা"] }
            ]
        },
        {
            name: "বরিশাল",
            districts: [
                { name: "বরিশাল", upazilas: ["আগৈলঝাড়া", "বাবুগঞ্জ", "বাকেরগঞ্জ", "বানারীপাড়া", "গৌরনদী", "হিজলা", "বরিশাল সদর", "মেহেন্দিগঞ্জ", "মুলাদী", "ওজিরপুর"] },
                { name: "ভোলা", upazilas: ["ভোলা সদর", "বুরহানউদ্দিন", "চর ফ্যাশন", "দৌলতখান", "লালমোহন", "তজুমদ্দিন", "মনপুরা"] },
                { name: "ঝালকাঠি", upazilas: ["ঝালকাঠি সদর", "কাঠালিয়া", "নলছিটি", "রাজাপুর"] },
                { name: "পটুয়াখালী", upazilas: ["বাউফল", "দশমিনা", "গলাচিপা", "কলাপাড়া", "মির্জাগঞ্জ", "পটুয়াখালী সদর", "রাঙ্গাবালী", "দুমকি"] },
                { name: "পিরোজপুর", upazilas: ["ভান্ডারিয়া", "কাউখালী", "মঠবাড়িয়া", "নাজিরপুর", "পিরোজপুর সদর", "নেছারাবাদ", "জিয়ানগর"] },
                { name: "বরগুনা", upazilas: ["আমতলী", "বামনা", "বরগুনা সদর", "বেতাগী", "পাথরঘাটা", "তালতলী"] }
            ]
        },
        {
            name: "ময়মনসিংহ",
            districts: [
                { name: "জামালপুর", upazilas: ["বকশীগঞ্জ", "দেওয়ানগঞ্জ", "ইসলামপুর", "জামালপুর সদর", "মাদারগঞ্জ", "মেলান্দহ", "সরিষাবাড়ী"] },
                { name: "ময়মনসিংহ", upazilas: ["ভালুকা", "ধোবাউড়া", "ফুলবাড়ীয়া", "গফরগাঁও", "গৌরীপুর", "হালুয়াঘাট", "ঈশ্বরগঞ্জ", "ময়মনসিংহ সদর", "মুক্তাগাছা", "নান্দাইল", "ফুলপুর", "ত্রিশাল"] },
                { name: "নেত্রকোণা", upazilas: ["আটপাড়া", "বারহাট্টা", "দুর্গাপুর", "খালিয়াজুরী", "কেন্দুয়া", "মদন", "মোহনগঞ্জ", "নেত্রকোণা সদর", "পূর্বধলা"] },
                { name: "শেরপুর", upazilas: ["ঝিনাইগাতী", "নকলা", "নালিতাবাড়ী", "শেরপুর সদর", "শ্রীবরদী"] }
            ]
        }
    ]
};

// Populate divisions in a select element
function populateDivisions(selectId) {
    // Check if select element exists
    const selectElement = document.getElementById(selectId);
    if (!selectElement || !bangladeshData?.divisions) return;

    // Clear existing options
    selectElement.innerHTML = '';

    // Add default "All Divisions" option
    const defaultOption = document.createElement('option');
    defaultOption.value = 'all';
    defaultOption.textContent = 'সকল বিভাগ';
    defaultOption.selected = true;
    selectElement.appendChild(defaultOption);

    // Add division options
    bangladeshData.divisions.forEach(division => {
        const option = document.createElement('option');
        option.value = division.name;
        option.textContent = division.name;
        selectElement.appendChild(option);
    });
}

// Update districts based on selected division
function updateDistricts(divisionName, districtSelectId) {
    const districtSelect = document.getElementById(districtSelectId);
    if (!districtSelect) return;

    districtSelect.innerHTML = '<option value="" selected disabled>জেলা নির্বাচন করুন</option>';
    districtSelect.disabled = !divisionName;

    if (divisionName) {
        const division = bangladeshData.divisions.find(d => d.name === divisionName);
        if (division) {
            division.districts.forEach(district => {
                const option = document.createElement('option');
                option.value = district.name;
                option.textContent = district.name;
                districtSelect.appendChild(option);
            });
            districtSelect.disabled = false;
        }
    }
}

// Update upazilas based on selected district
function updateUpazilas(divisionName, districtName, upazilaSelectId) {
    const upazilaSelect = document.getElementById(upazilaSelectId);
    if (!upazilaSelect) return;

    upazilaSelect.innerHTML = '<option value="" selected disabled>উপজেলা নির্বাচন করুন</option>';
    upazilaSelect.disabled = !districtName;

    if (divisionName && districtName) {
        const division = bangladeshData.divisions.find(d => d.name === divisionName);
        if (division) {
            const district = division.districts.find(d => d.name === districtName);
            if (district) {
                district.upazilas.forEach(upazila => {
                    const option = document.createElement('option');
                    option.value = upazila;
                    option.textContent = upazila;
                    upazilaSelect.appendChild(option);
                });
                upazilaSelect.disabled = false;
            }
        }
    }
}

// Setup form validation
function setupFormValidation(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);
}

// Format phone number
function formatPhoneNumber(phone) {
    let cleaned = phone.replace(/\D/g, '');

    if (cleaned.startsWith('88')) {
        cleaned = cleaned.substring(2);
    } else if (cleaned.startsWith('+88')) {
        cleaned = cleaned.substring(3);
    }

    if (cleaned.length === 10 && cleaned.startsWith('1')) {
        cleaned = '0' + cleaned;
    }

    return cleaned;
}

// Generate WhatsApp link
function generateWhatsAppLink(phone, message) {
    const formattedPhone = phone.startsWith('+') ? phone.substring(1) :
        phone.startsWith('88') ? phone :
            phone.startsWith('0') ? '88' + phone : '880' + phone;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

// Check if donor is active based on last donation date
function isDonorActive(lastDonationDate) {
    if (!lastDonationDate) return true;

    const donationDate = new Date(lastDonationDate);
    const today = new Date();
    const daysSinceDonation = Math.floor((today - donationDate) / (1000 * 60 * 60 * 24));

    return daysSinceDonation >= 90;
}

// Format date for display
function formatDate(date) {
    if (!date) return 'N/A';
    const d = date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString('bn-BD');
}

// Create donor card HTML
function createDonorCard(donor) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';

    const card = document.createElement('div');
    card.className = 'card donor-card h-100';

    card.innerHTML = `
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="card-title mb-0">${donor.name}</h5>
                <span class="blood-group-badge">${donor.bloodGroup}</span>
            </div>
            <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${donor.division}, ${donor.district}</p>
            <p class="card-text"><i class="fas fa-phone"></i> ${donor.phone}</p>
            <div class="last-donation-info">
                <i class="fas fa-calendar-alt"></i> সর্বশেষ রক্তদান: ${formatDate(donor.lastDonation)}
            </div>
            <div class="mt-2">
                <span class="donor-status" style="background-color: ${isDonorActive(donor.lastDonation) ? '#28a745' : '#dc3545'}">
                    ${isDonorActive(donor.lastDonation) ? 'সক্রিয়' : 'অসক্রিয়'}
                </span>
            </div>
        </div>
        <div class="card-footer bg-transparent d-flex gap-2">
            <a href="tel:${donor.phone}" class="btn btn-primary flex-grow-1 contact-btn">
                <i class="fas fa-phone"></i> কল করুন
            </a>
            <a href="${generateWhatsAppLink(donor.phone, `রক্তদানের অনুরোধ - RJF Blood Connect\n\nআপনার রক্তের গ্রুপ ${donor.bloodGroup} এর জন্য জরুরি প্রয়োজন। অনুগ্রহ করে যোগাযোগ করুন।`)}" 
               class="btn whatsapp-btn">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    `;

    col.appendChild(card);
    return col;
}

// Create success story card HTML
function createSuccessStoryCard(story) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    const card = document.createElement('div');
    card.className = 'card success-card h-100';

    card.innerHTML = `
        <div class="card-body">
            <div class="success-badge">
                <i class="fas fa-check-circle"></i> সফল রক্তদান
            </div>
            <div class="d-flex align-items-center mb-3">
                <div class="blood-group-badge-lg">${story.bloodGroup}</div>
                <h5 class="card-title mb-0 ms-3">${story.patientName || 'গোপনীয়'}</h5>
            </div>
            <p class="card-text"><i class="fas fa-hospital"></i> ${story.hospital || 'বেসরকারি চিকিৎসা'}</p>
            <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${story.location}</p>
            <p class="card-text"><i class="fas fa-calendar-day"></i> ${formatDate(story.completedAt)}</p>
            <div class="testimonial mt-3">
                <i class="fas fa-quote-left"></i>
                <p>${story.testimonial || 'রক্তদাতার মহানুভবতায় জীবন ফিরে পেয়েছি। আল্লাহ তাদের উত্তম প্রতিদান দিক।'}</p>
            </div>
        </div>
    `;

    col.appendChild(card);
    return col;
}

// Load recent donors
async function loadRecentDonors() {
    const loading = document.getElementById('donorLoading');
    const donorList = document.getElementById('donorList');

    try {
        loading.style.display = 'block';
        donorList.innerHTML = '';

        const q = query(collection(db, "donors"), orderBy("createdAt", "desc"), limit(3));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const donor = doc.data();
            donor.id = doc.id;
            donorList.appendChild(createDonorCard(donor));
        });
    } catch (error) {
        console.error("Error loading donors: ", error);
        donorList.innerHTML = '<div class="col-12 text-center py-4"><p>ত্রুটি ঘটেছে, পরে আবার চেষ্টা করুন</p></div>';
    } finally {
        loading.style.display = 'none';
    }
}

// Load success stories
async function loadSuccessStories() {
    const loading = document.getElementById('successStoriesLoading');
    const storiesList = document.getElementById('successStoriesList');

    try {
        loading.style.display = 'block';
        storiesList.innerHTML = '';

        // Get completed requests with donor and recipient info
        const q = query(
            collection(db, "requests"),
            where("status", "==", "completed"),
            orderBy("completedAt", "desc"),
            limit(3)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const story = doc.data();
            story.id = doc.id;
            storiesList.appendChild(createSuccessStoryCard(story));
        });
    } catch (error) {
        console.error("Error loading success stories: ", error);
        storiesList.innerHTML = '<div class="col-12 text-center py-4"><p>ত্রুটি ঘটেছে, পরে আবার চেষ্টা করুন</p></div>';
    } finally {
        loading.style.display = 'none';
    }
}

// Update stats
async function updateStats() {
    try {
        console.log("Updating stats...");

        // Get total registered donors count
        const donorsQuery = query(collection(db, "donors"));
        const donorsSnapshot = await getDocs(donorsQuery);
        document.getElementById('donors-count').textContent = donorsSnapshot.size + '+';
        console.log("Total donors:", donorsSnapshot.size);

        // Get total blood requests count
        const requestsQuery = query(collection(db, "requests"));
        const requestsSnapshot = await getDocs(requestsQuery);
        document.getElementById('requests-count').textContent = requestsSnapshot.size + '+';
        console.log("Total requests:", requestsSnapshot.size);

        // Get successful donations count (completed requests)
        const donationsQuery = query(collection(db, "requests"), where("status", "==", "completed"));
        const donationsSnapshot = await getDocs(donationsQuery);
        document.getElementById('lives-saved').textContent = donationsSnapshot.size + '+';
        console.log("Successful donations:", donationsSnapshot.size);

        // Get unique districts covered by donors
        const districtsQuery = query(collection(db, "donors"));
        const districtsSnapshot = await getDocs(districtsQuery);

        const uniqueDistricts = new Set();
        districtsSnapshot.forEach(doc => {
            const data = doc.data();
            if (data.district) {
                uniqueDistricts.add(data.district);
            }
        });

        document.getElementById('districts-covered').textContent = uniqueDistricts.size;
        console.log("Districts covered:", uniqueDistricts.size);

    } catch (error) {
        console.error("Error updating stats: ", error);
        // Fallback to default values if there's an error
        document.getElementById('donors-count').textContent = '3580+';
        document.getElementById('requests-count').textContent = '1425+';
        document.getElementById('lives-saved').textContent = '1128+';
        document.getElementById('districts-covered').textContent = '64';
    }
}

// Initialize Firebase
async function initializeFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyBSgyeYCbyB8cMFdqMcNtDZeL4aM-_FfQ4",
        authDomain: "rjf-blood-connect.firebaseapp.com",
        databaseURL: "https://rjf-blood-connect-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "rjf-blood-connect",
        storageBucket: "rjf-blood-connect.firebasestorage.app",
        messagingSenderId: "536870508483",
        appId: "1:536870508483:web:1ce2211ec28f79ce514f76",
        measurementId: "G-34RDD8GL9C"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

    return db;
}

// Initialize the home page
document.addEventListener('DOMContentLoaded', async function () {
    // Initialize Firebase
    const db = await initializeFirebase();

    // Highlight active nav item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(item => {
        const link = item.getAttribute('href');
        if (link === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Initialize forms if they exist
    if (document.getElementById('donorForm')) {
        populateDivisions('donorDivision');
        setupFormValidation('donorForm');
    }

    if (document.getElementById('requestForm')) {
        populateDivisions('requestDivision');
        setupFormValidation('requestForm');
    }

    if (document.getElementById('searchForm')) {
        populateDivisions('searchDivision');
    }

    if (document.getElementById('emergencyForm')) {
        setupFormValidation('emergencyForm');
    }

    // Load data
    await loadRecentDonors();
    await loadSuccessStories();
    await updateStats();

    // Handle donation date update
    document.getElementById('updateDonationForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        if (this.checkValidity()) {
            try {
                const phone = document.getElementById('donorPhoneUpdate').value;
                const lastDonation = document.getElementById('lastDonationUpdate').value;

                // Format phone number consistently
                const formattedPhone = formatPhoneNumber(phone);

                // Find donor by phone
                const q = query(collection(db, "donors"), where("phone", "==", formattedPhone));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    showAlert("এই মোবাইল নম্বরের সাথে কোনো রক্তদাতা পাওয়া যায়নি", "danger");
                    return;
                }

                // Update all matching donors
                const batch = writeBatch(db);
                querySnapshot.forEach((doc) => {
                    const docRef = doc.ref;
                    batch.update(docRef, {
                        lastDonation: new Date(lastDonation),
                        updatedAt: new Date()
                    });
                });

                await batch.commit();

                showAlert("রক্তদানের তারিখ সফলভাবে আপডেট করা হয়েছে!", "success");
                this.reset();
                this.classList.remove('was-validated');
                const modal = bootstrap.Modal.getInstance(document.getElementById('updateDonationModal'));
                modal.hide();

                // Refresh donor list
                await loadRecentDonors();
            } catch (error) {
                console.error("Error updating donation date: ", error);
                showAlert("ত্রুটি ঘটেছে, পরে আবার চেষ্টা করুন", "danger");
            }
        } else {
            this.classList.add('was-validated');
        }
    });

    // Handle testimonial submission
    document.getElementById('testimonialForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        if (this.checkValidity()) {
            try {
                const requestId = document.getElementById('requestId').value;
                const testimonialText = document.getElementById('testimonialText').value;
                const isAnonymous = document.getElementById('anonymousCheck').checked;

                // Update the request with testimonial
                const requestRef = doc(db, "requests", requestId);
                await updateDoc(requestRef, {
                    testimonial: testimonialText,
                    isAnonymous: isAnonymous,
                    testimonialAddedAt: new Date()
                });

                showAlert("আপনার অভিজ্ঞতা সফলভাবে জমা দেওয়া হয়েছে!", "success");
                this.reset();
                this.classList.remove('was-validated');
                const modal = bootstrap.Modal.getInstance(document.getElementById('testimonialModal'));
                modal.hide();

                // Refresh success stories
                await loadSuccessStories();
            } catch (error) {
                console.error("Error submitting testimonial: ", error);
                showAlert("ত্রুটি ঘটেছে, পরে আবার চেষ্টা করুন", "danger");
            }
        } else {
            this.classList.add('was-validated');
        }
    });
});

// Helper function to show alerts
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show alert-fixed`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(alertDiv);

    // Auto remove after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Handle vote for successful donation
document.getElementById('voteDonationForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
        try {
            const requestPhone = formatPhoneNumber(document.getElementById('requestPhone').value);
            const donorPhone = formatPhoneNumber(document.getElementById('donorPhone').value);

            // Find the request
            const requestQuery = query(
                collection(db, "requests"),
                where("requesterPhone", "==", requestPhone),
                where("status", "==", "pending")
            );

            const requestSnapshot = await getDocs(requestQuery);

            if (requestSnapshot.empty) {
                showAlert("এই মোবাইল নম্বরের সাথে কোনো রক্তের অনুরোধ পাওয়া যায়নি", "danger");
                return;
            }

            // Find the donor
            const donorQuery = query(
                collection(db, "donors"),
                where("phone", "==", donorPhone)
            );

            const donorSnapshot = await getDocs(donorQuery);

            if (donorSnapshot.empty) {
                showAlert("এই মোবাইল নম্বরের সাথে কোনো রক্তদাতা পাওয়া যায়নি", "danger");
                return;
            }

            // Update request status to completed
            const batch = writeBatch(db);

            requestSnapshot.forEach((doc) => {
                const requestRef = doc.ref;
                batch.update(requestRef, {
                    status: "completed",
                    donorId: donorSnapshot.docs[0].id,
                    completedAt: new Date()
                });
            });

            // Update donor's last donation date
            donorSnapshot.forEach((doc) => {
                const donorRef = doc.ref;
                batch.update(donorRef, {
                    lastDonation: new Date(),
                    updatedAt: new Date()
                });
            });

            await batch.commit();

            showAlert("সফলভাবে রক্তদান আপডেট করা হয়েছে!", "success");
            this.reset();
            this.classList.remove('was-validated');
            const modal = bootstrap.Modal.getInstance(document.getElementById('voteDonationModal'));
            modal.hide();

            // Refresh data
            await loadRecentDonors();
            await loadSuccessStories();
            await updateStats();
        } catch (error) {
            console.error("Error updating donation: ", error);
            showAlert("ত্রুটি ঘটেছে, পরে আবার চেষ্টা করুন", "danger");
        }
    } else {
        this.classList.add('was-validated');
    }
});

