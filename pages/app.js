var container = document.getElementById("container");
var row = document.getElementById("row");
var user = [
    {
        video: "https://www.youtube.com/embed/C_CZCsj_x9g",
        logo: "https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png",
        heading: "Aamir khan on '3 idiots' Movie and Chatur Ramalingam | Aap Ki Adalat",
        fullName: "web development",
        verified: true,
        views: "32M views. 1 week ago"
    },
    {
        video: "https://www.youtube.com/embed/PPKtC_YJiK4",
        logo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
        heading: "How Pakistani Army Controls Politics in Pakistan? | Nitish Rajput | Hindi",
        fullName: "ABC",
        verified: false,
        views: "235k views. 1 week ago"
    },
    {
        video: "https://www.youtube.com/embed/C_CZCsj_x9g",
        logo: "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
        heading: "Aamir khan on '3 idiots' Movie and Chatur Ramalingam | Aap Ki Adalat",
        fullName: "Dhruv Rathee",
        verified: true,
        views: "32M views. 1 week ago"
    },
    {
        video: "https://www.youtube.com/embed/aiTGvNeGo1U",
        logo: "https://i.playboard.app/p/AATXAJzzss6zxBzMJ6FNEv-YTcoczPf1CaVNU44pkjcA/default.jpg",
        heading: "Mohenjo Daro Full History And Documentary In Urdu/Hindi | Mysteries of 5000 years old Mohenjo Daro",
        fullName: "Rah E Hayat Official",
        verified: false,
        views: "3M views. 2day ago"
    },
    {
        video: "https://www.youtube.com/embed/Y8MCD_0G5ws",
        logo: "https://yt3.googleusercontent.com/ytc/AOPolaRk10Eo9r4O8lRUeBSwAbNmfdlqkzM4NZJqjvpK4w=s900-c-k-c0x00ffffff-no-rj",
        heading: "How Ancient Engineers built Impossible Pyramids 4500 Years Ago",
        fullName: "Zem TV",
        verified: true,
        views: "21M views. 2 year ago"
    },
    {
        video: "https://www.youtube.com/embed/QOLRrv1kAbI",
        logo: "https://yt3.googleusercontent.com/ytc/AOPolaR6hT52k7hpkMWXfQhW1Qa9o_k6WiGbw5l-lYVY=s900-c-k-c0x00ffffff-no-rj",
        heading: "Mahindra Thar LX RWD 2023- ₹11.5 lakh | Real-life review",
        fullName: "Namste Car",
        verified: false,
        views: "231k views. 2 week ago"
    },
    {
        video: "https://www.youtube.com/embed/c-u2MHAosiQ",
        logo: "https://yt3.googleusercontent.com/ytc/AOPolaTjKN2zK4t14wgO9huLJ0CqdkyjVyxc9a0phhLe=s900-c-k-c0x00ffffff-no-rj",
        heading: "Wonders of Amazon Jungle | Urdu/Hindi",
        fullName: "BigBang Studio",
        verified: true,
        views: "2.4M views. 1 year ago"
    },
    {
        video: "https://www.youtube.com/embed/llLIXT_vXl8",
        logo: "https://yt3.googleusercontent.com/P0viPy-7XiNVI-lp4yF3fUCijqfqrIP9rTDpNaPWTGG3LCeEl__eBlM2TOcyCOWSppGS-aZDjg=s900-c-k-c0x00ffffff-no-rj",
        heading: "Ali Zafar's fan moment with Amitabh Bachchan | Kill Dil Cast | KBC",
        fullName: "Ali Zafar",
        verified: false,
        views: "12M views. 3 year ago"
    },
    {
        video: "https://www.youtube.com/embed/BZtEObMmWwI",
        logo: "https://yt3.googleusercontent.com/eu051krrRNQMMi5h6ynfnvhFJzxzSKulJQ42g5v72MQ9Bvv8KdpNIa6yM-0iGpnDgSF0itAD=s900-c-k-c0x00ffffff-no-rj",
        heading: "Alia & Ram Social Media Posts के Comments सुनकर हुए हंसी से लोट पोट | The Kapil Sharma Show | Movies",
        fullName: "SET India",
        verified: true,
        views: "722k views. 1day ago"
    },
]
// 
for(i=0; i<user.length; i++){
    // col
    var col = document.createElement("div");
    row.appendChild(col);
    col.setAttribute("class" , "col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4")
    // card
    var card = document.createElement("div");
    col.appendChild(card);
    card.setAttribute("class" , "card");
    // iframe
    var iframe = document.createElement("iframe");
    card.appendChild(iframe);
    iframe.setAttribute("src" , user[i].video);
    // data
    var data = document.createElement("div");
    card.appendChild(data);
    data.setAttribute("class" , "data");
    // logo
    var logo = document.createElement("div");
    data.appendChild(logo);
    logo.setAttribute("class" , "logo");
    // logo image
    var logoImg = document.createElement("img");
    logo.appendChild(logoImg);
    logoImg.setAttribute("src" , user[i].logo);
    // other data
    var otherData = document.createElement("div");
    data.appendChild(otherData);
    otherData.setAttribute("class" , "otherdata");
    // heading
    var heading = document.createElement("h5");
    otherData.appendChild(heading);
    heading.innerHTML = user[i].heading;
    if(user[i].heading.length >= 20){
    heading.innerHTML = user[i].heading.slice(0,58) + "...";
       
    }else{}
    // fullname
    var fullName = document.createElement("span");
    otherData.appendChild(fullName);
    fullName.innerHTML = user[i].fullName;
    // verified
    if(user[i].verified === true){
        var verified = document.createElement("img");
        fullName.appendChild(verified);
        verified.setAttribute("src" ,"https://cdn-icons-png.flaticon.com/512/6928/6928921.png");
    }else{}
    // views
    var views = document.createElement("span");
    otherData.appendChild(views);
    views.innerHTML = user[i].views;

}
