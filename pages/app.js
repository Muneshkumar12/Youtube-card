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
        video: "https://www.youtube.com/embed/Xms6aKyrHmM",
        logo: "https://yt3.googleusercontent.com/ytc/AOPolaQ0QP5Nk3TGXS8y-Hr7mo1XNKai7ngGvfZOPvAv=s900-c-k-c0x00ffffff-no-rj",
        heading: "6 - 6 - 6 | Shahid Afridi vs Chris Woakes | Pakistan vs England | 2nd T20I 2015 | PCB | MA2A",
        fullName: "Sport Central",
        verified: false,
        views: "3.5M views. 5months ago"
    },
    {
        Image: "https://media.istockphoto.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=",
        logo: "https://w7.pngwing.com/pngs/676/989/png-transparent-muhammad-ali-jinnah-thumbnail.png",
        heading: "He is revered in Pakistan as the Quaid-e-Azam (Great Leader) and Baba-e-Qaum (Father of the Nation). His birthday is observed as a national holiday in ...",
        fullName: "Quaid-e-Azam",
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
        Image: "https://hips.hearstapps.com/hmg-prod/images/sunset-at-the-pyramids-giza-cairo-egypt-royalty-free-image-1588090066.jpg",
        logo: "https://t3.ftcdn.net/jpg/00/98/99/90/360_F_98999018_ciSefrfzn3803uakMljzbcyEfXFf1iPT.jpg",
        heading: "How Ancient Engineers built Impossible Pyramids 4500 Years Ago",
        fullName: "Pyramids",
        verified: false,
        views: "21M views. 2 year ago"
    },
    {
        video: "https://www.youtube.com/embed/QOLRrv1kAbI",
        logo: "https://yt3.googleusercontent.com/ytc/AOPolaR6hT52k7hpkMWXfQhW1Qa9o_k6WiGbw5l-lYVY=s900-c-k-c0x00ffffff-no-rj",
        heading: "Mahindra Thar LX RWD 2023- ₹11.5 lakh | Real-life review",
        fullName: "Namste Car",
        verified: true,
        views: "231k views. 2 week ago"
    },
    {
        Image: "https://img-aws.ehowcdn.com/560x560p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/98f3a9c4d5774269baac0f5d9358b27c",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HDA9pFVR1ukp3VNbWOe-VNRfISIHhXMdoA&usqp=CAU",
        heading: "Wonders of Amazon Jungle | Urdu/Hindi",
        fullName: "Jungle",
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
    if(user[i].video){
        var iframe = document.createElement("iframe");
        card.appendChild(iframe);
        iframe.setAttribute("src" , user[i].video);
        iframe.setAttribute("class" , "iframe");
    }else{
        var image = document.createElement("img");
        card.appendChild(image);
        image.setAttribute("src" , user[i].Image)
        image.setAttribute("class" , "image")
    }
  
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
    if(user[i].heading.length >= 58){
    heading.innerHTML = user[i].heading.slice(0,58) + "...";
    }else{
          heading.innerHTML = user[i].heading;
    }
    // fullname
    var fullName = document.createElement("span");
    otherData.appendChild(fullName);
    fullName.innerHTML = user[i].fullName;
    // verified
    if(user[i].verified === true){
        var verified = document.createElement("img");
        fullName.appendChild(verified);
        verified.setAttribute("src" ,"https://cdn-icons-png.flaticon.com/512/6928/6928921.png");
    }
    // views
    var views = document.createElement("span");
    otherData.appendChild(views);
    views.innerHTML = user[i].views;

}
