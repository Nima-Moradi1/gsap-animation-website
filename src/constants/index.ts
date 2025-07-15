const navLinks = [
    {id: 'cocktails' , title : 'کوکتل های ویژه'} ,
    {id: 'about' ,  title : "درباره ما"} ,
     {id: 'contact' ,  title : "تماس با ما"} ,
]


const cocktailLists = [
 {
	name: "چپل هیل شیراز",
	country: "ایران",
	detail: "بطری",
	price: "۱۵۰۰۰۰",
 },
 {
	name: "کاتن مالبی",
	country: "دبی",
	detail: "بطری",
	price: "۱۷۰۰۰۰",
 },
 {
	name: "کوکتل رینو",
	country: "کانادا",
	detail: "۷۵۰ میل",
	price: "۲۱۰۰۰۰",
 },
 {
	name: "گینس ایرلندی",
	country: "ایرلند",
	detail: "۷۵۰ میل",
	price: "۲۹۰۰۰۰",
 },
];

const mockTailLists = [
 {
	name: "شکوفه استوایی",
	country: "آمریکا",
	detail: "بطری",
	price: "۳۸۰۰۰۰",
 },
 {
	name: "پشن فروت نعنا",
	country: "آمریکا",
	detail: "بطری",
	price: "۷۶۰۰۰۰",
 },
 {
	name: "سیتروس میروپ",
	country: "کانادا",
	detail: "۷۵۰ میل",
	price: "۵۴۰۰۰۰",
 },
 {
	name: "لاوندر فیز",
	country: "کانادا",
	detail: "۶۰۰ میل",
	price: "۴۹۰۰۰۰",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
"ترکیب‌های کاملاً متعادل",
"گارنیش شده تا حد زیاد",
"همیشه خنک",
"استیرینگ با دقت بالا"
];

const goodLists = [
 "مواد اولیه دست‌چین شده" ,
"تکنیک‌های ویژه" ,
"هنر میکسولوژی در عمل" ,
"طعم‌های تازه ترکیب‌شده"
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "تهران محله آذری نرسیده به به خیابان چهل و پنج متری - بر سه راه آذری - موهیتولند عمو سعید",
 contact: {
	phone: "+۹۸۹۰۳۶۸۳۷۷۸۸",
	email: "mohitolandamoosaeed@gmail.com",
 },
};

const openingHours = [
 { day: "شنبه تا چهارشنبه", time: "۱۲ ظهر تا ۱۰ شب" },
 { day: "پنج شنبه", time: "۹ صبح تا ۱۰ شب " },
 { day: "جمعه", time: "۸ صبح تا ۱۲ شب " }
];

const socials = [
 {
	name: "اینستاگرام",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "توییتر",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "فیسبوک",
	icon: "/images/fb.png",
	url: "#",
 },
];

const sliderLists = [
 {
	id: 1,
	name: "موهیتوی کلاسیک",
	image: "/images/drink1.png",
	title: "مواد اولیه ساده با طعمی جسورانه",
	description: "مارگاریتا که با تکیلا، آبلیمو، و لیکور پرتقال درست می‌شود، به راحتی آماده می‌شود و سرشار از طعم و مزه است. برای داشتن یک نوشیدنی عالی در شب‌های تابستان، لبه لیوان را نمکی کنید."
 },
 {
	id: 2,
	name: "موهیتوی مارگاریتا",
	image: "/images/drink2.png",
	title: "یه کلاسیک تند و تیز و شکست ناپذیر",
	description: "مارگاریتا یک نوشیدنی کلاسیک است که تعادل بین طعم تند لیمو، تکیلای ملایم و کمی شیرینی را به ارمغان می‌آورد. چه شیک شده، چه یخ‌زده یا با یخ سرو شود، همیشه تازه و گواراست."
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "مواد اولیه تازه با یه طعم قوی",
	description: "با تکیلا، آبلیمو، و لیکور پرتقال تهیه می‌شود، به راحتی درست می‌شود و پر از شخصیت است. برای یک نوشیدنی عالی در شب‌های تابستان، لبه لیوان را نمکی کنید."
 },
 {
	id: 4,
	name: "موهیتو کارائیب ",
	image: "/images/drink4.png",
	title: "طعم دزدان دریایی",
	description:
	 "هر کوکتل با مواد اولیه تازه و اشتیاق برای بی‌عیب و نقص کردن هر سرو، چه در حال جشن گرفتن باشید و چه صرفاً در حال استراحت، تهیه می‌شود.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 sliderLists,
};