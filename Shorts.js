
const Body = document.querySelector(".Body");
const VideoWrapper = document.querySelector(".video-wrapper");
const VideoContainer = document.querySelector(".video-container");
const TB = document.querySelector(".TB");
const Play = document.querySelector(".play");
const Pause = document.querySelector(".pause");
const Back = document.querySelector(".Back");
const Items = document.querySelectorAll(".list1 .item, .list2 .item");
const Icons = document.querySelectorAll(".Icons .Icon");
const Likes = document.querySelectorAll(".like");
const Dislikes = document.querySelectorAll(".dislike");
const LikeFs = document.querySelectorAll(".like-filled");
const DislikeFs = document.querySelectorAll(".dislike-filled");
const NumAs = document.querySelectorAll(".numA");
const NumBs = document.querySelectorAll(".numB");
const Subscribes = document.querySelectorAll(".Subscribe");
const ChannelTitles = document.querySelectorAll(".channel-title span");
const carousel = document.querySelector(".video-carousel");
const icons = document.querySelectorAll("#BottomNavbar .icon.X");
const Pages = document.querySelectorAll(".page");
const List1 = document.querySelector(".list1");
const List2 = document.querySelector(".list2");
const Title2 = document.querySelector(".title2");
const settings = document.querySelectorAll(".item .settings");
const Settings = document.querySelector(".Settings");
const SettingsList = document.querySelector(".Settings-list");
const Background = document.querySelector(".Settings .Background");
const Options = document.querySelectorAll(".option");
const Delete = document.querySelector(".delete");
const sendFeedback = document.querySelector(".send-feedback");
const report = document.querySelector(".report");
const SendFeedback = document.querySelector(".SendFeedback");
const Report = document.querySelector(".Report");
const Back1 = document.querySelector(".SendFeedback .back");
const Back2 = document.querySelector(".Report .back");
const CommentList = document.querySelector(".comments-list");
const CommentSection = document.querySelector(".comments-section");
const CommentIcons = document.querySelectorAll(".Icon.Comment");
const Cross = document.querySelector(".comments-section .cross");
const Avatar = document.querySelector(".footer .avatar");
const Input = document.querySelector(".footer .input");
const Enter = document.querySelector(".footer .enter");

let videoData = [

[{avatar:"profile1.jpg", username:"@Amalia550", comment:"WOW!!! I really want to try this recipe 😋😋"}, {avatar:"profile2.jpg", username:"@Christina234", comment:"So Yummy ..."}, {avatar:"profile3.jpg", username:"@Gwen489", comment:"How is this even real?! It looks better than restaurant food 🤤"}],
[{avatar:"profile5.jpg", username:"@Kila805", comment:"This looks absolutely mouthwatering! 😍 Can’t wait to give it a try!"}, {avatar:"profile6.jpg", username:"@Klara677", comment:"Just saved this — making it tonight for sure! 🍽️🔥"}, {avatar:"profile1.jpg", username:"@Amalia550", comment:"Adding this to my weekend menu ASAP! 😍 Thanks for sharing!"}, {avatar:"profile4.jpg", username:"@Katie267", comment:"I’m drooling already… this is a must-try for me! 🙌🍴"}],
[{avatar:"profile10.jpg", username:"@Rose996", comment:"OMG 😱 This recipe is calling my name!!"}, {avatar:"profile8.jpg", username:"@Martina285", comment:"That looks insanely good 😍 I can almost taste it through the screen!"}],
[{avatar:"profile3.jpg", username:"@Gwen489", comment:"YUM!! This is exactly what I’ve been craving 😋"}, {avatar:"profile9.jpg", username:"@Lola556", comment:"SO TASTY 🤩"}],
[{avatar:"profile2.jpg", username:"@Christina234", comment:"Absolutely stunning! This design is a showstopper 😍✨"}, {avatar:"profile3.jpg", username:"Gwen489", comment:"Wow!! The detail on this dress is incredible 😱💖"}, {avatar:"profile8.jpg", username:"@Martina285", comment:"This is pure elegance 😍 I need this in my wardrobe!"}, {avatar:"profile1.jpg", username:"@Amalia550", comment:"Obsessed with the cut and fabric — such a masterpiece 😍👏"}, {avatar:"profile6.jpg", username:"@Klara677", comment:"This dress is giving main character energy 💃🔥"}],
[{avatar:"profile4.jpg", username:"@Katie267", comment:"So chic and unique! I’ve never seen anything like it 😍"}, {avatar:"profile3.jpg", username:"@Gwen489", comment:"Total fashion goals! You nailed this design 😍🖤"}, {avatar:"profile10.jpg", username:"@Rose996", comment:"I’m in love with every detail — perfection from top to bottom 😩✨"}],
[{avatar:"profile7.jpg", username:"@Lisa143", comment:"Amazing texture and color — so powerful 🎨🔥"}, {avatar:"profile9.jpg", username:"@Lola556", comment:"Your style is bold and beautiful 💫🖌️"}, {avatar:"profile10.jpg", username:"@Rose890", comment:"Incredible use of acrylics — love this ❤️🎨"}],
[{avatar:"profile6.jpg", username:"@Klara677", comment:"So much emotion in every brushstroke 😍🖼️"}, {avatar:"profile1.jpg", username:"@Amalia550", comment:"Your talent shines through every piece ✨👏"}]

];


let slides = Array.from(carousel.children);

Title2.style.top=`${List1.offsetHeight + 140}px`;
List2.style.top=`${List1.offsetHeight + 190}px`;
Pages[0].style.height=`${List1.offsetHeight + List2.offsetHeight + 270}px`;

window.addEventListener("resize", () => {

Title2.style.top=`${List1.offsetHeight + 140}px`;
List2.style.top=`${List1.offsetHeight + 190}px`;
Pages[0].style.height=`${List1.offsetHeight + List2.offsetHeight + 270}px`;

});

function empty() {

if(document.querySelectorAll(".list1 .item").length === 0){List1.querySelector(".empty").style.display="flex";List1.style.height="240px";}else{List1.querySelector(".empty").style.display="none";};
if(document.querySelectorAll(".list2 .item").length === 0){List2.querySelector(".empty").style.display="flex";}else{List2.querySelector(".empty").style.display="none";};

}


function Comments(index) {
    const comments = videoData[index]; // Get the comment list for this video
    const CommentList = document.querySelector(".comments-list"); // Make sure this matches your HTML
    
    CommentList.innerHTML="";
    for (let i = 0; i < comments.length; i++) {
        const data = comments[i];
        const comment = document.createElement('li');
        
comment.className = "comment";
        comment.innerHTML = `
            <div class="settings">
                <div class="circle"></div>
                <img src="settings.svg">
            </div>
            <div class="user-info">
                <img src="${data.avatar}">
                <span>${data.username}</span>
            </div>
            <p>${data.comment}</p>
        `;

        CommentList.appendChild(comment);
        comment.querySelector(".settings").addEventListener("click",() => {
comment.querySelector(".settings").style.background="red";
});
        
        const p = comment.querySelector("p");
        comment.style.height = `${p.offsetHeight + 50}px`;
    }
}

for (let i = 0; i < videoData.length; i++) {
    CommentIcons[i].querySelector("span").innerHTML = videoData[i].length;
}

let currentVideoIndex = null;

CommentIcons.forEach((CommentIcon,index) => {
CommentIcon.addEventListener("click", () => {
       currentVideoIndex = index
setTimeout(() => {
VideoWrapper.classList.add("comments");
VideoWrapper.classList.add("Comments");},300);

Comments(index);

});
});

Cross.addEventListener("click", () => {

setTimeout(() => {
VideoWrapper.classList.remove("Comments");},300);

VideoWrapper.classList.remove("comments");

});

let comment;

Input.addEventListener("input", () => {
    comment = Input.value;
});

Enter.addEventListener("click", () => {
    if (comment && comment.trim() !== "" && currentVideoIndex !== null) {
        const newComment = {
            avatar: Avatar.src, // Replace with user’s avatar if available
            username: Pages[3].innerHTML,      // Replace with dynamic username
            comment: comment.trim()
        };

        //Add to the current video's comment list
        videoData[currentVideoIndex].push(newComment);

        //Refresh the comments UI
        Comments(currentVideoIndex);

        //Update the counter (if needed)
        CommentIcons[currentVideoIndex].querySelector("span").innerHTML = videoData[currentVideoIndex].length;

        // ClearInput
        Input.value = "";
        comment = "";
    }
});


let x;

settings.forEach((setting,index) => {
setting.addEventListener("click", () => {

x = index;

setting.querySelector(".circle").classList.add("active");
        
setTimeout(() => {
setting.querySelector(".circle").classList.remove("active");
Settings.classList.add("active");
Body.style.overflowY="hidden";
}, 300);

});
});


Delete.addEventListener("click", () => {

Delete.querySelector(".circle").classList.add("active");
        
setTimeout(() => {
    // Get data-video of the item to be deleted
    const targetVideo = Items[x].dataset.video;

    // Remove the item
    Items[x].remove();

    // Remove the matching slide based on data-video
    const allSlides = document.querySelectorAll(".video-carousel .video-slide");
    allSlides.forEach(slide => {
      if (slide.dataset.video === targetVideo) {
        slide.remove();
        empty();
      }
    });

    // Update global slides array after deletion
    slides = Array.from(document.querySelectorAll(".video-carousel .video-slide"));

    // Hide settings panel
    Settings.classList.remove("active");
    Delete.querySelector(".circle").classList.remove("active");

  }, 300);
});


sendFeedback.addEventListener("click", () => {

sendFeedback.querySelector(".circle").classList.add("active");

setTimeout(() => {
SendFeedback.classList.add("active");
Body.style.overflowY="hidden";
sendFeedback.querySelector(".circle").classList.remove("active");

},300);

setTimeout(() => {Settings.classList.remove("active");},600);

});

report.addEventListener("click", () => {

report.querySelector(".circle").classList.add("active");

setTimeout(() => {
Report.classList.add("active");
Body.style.overflowY="hidden";
report.querySelector(".circle").classList.add("active");

},300);

setTimeout(() => {Settings.classList.remove("active");},600);

});

Back1.addEventListener("click", () => {

SendFeedback.classList.remove("active");
Body.style.overflowY="auto";

});

Back2.addEventListener("click", () => {

Report.classList.remove("active");
Body.style.overflowY="auto";

});


Background.addEventListener("click", () => {

Settings.classList.remove("active");
Body.style.overflowY="auto";

});


icons.forEach((icon,index) => {
icon.addEventListener("click", () => {

icons.forEach(icon => {icon.classList.remove("active");});
icons[index].classList.add("active");

Pages.forEach(Page => {Page.classList.remove("active");});
Pages[index].classList.add("active");


});
});

// Handle Subscribe buttons
Subscribes.forEach(Subscribe => {
    Subscribe.addEventListener("click", () => {
        if (Subscribe.classList.contains("active")) {
            Subscribe.classList.remove("active");
            Subscribe.innerHTML = "Subscribe";
        } else {
            Subscribe.classList.add("active");
            Subscribe.innerHTML = "Subscribed";
        }
    });
});

for (let i = 0; i < Items.length; i++) {
    Subscribes[i].style.left = `${ChannelTitles[i].offsetWidth + 40}px`;
}

// Handle Icons click
Icons.forEach((Icon, index) => {
    Icon.addEventListener("click", () => {
        Icon.querySelector(".circle").classList.add("active");
        setTimeout(() => {
            Icon.querySelector(".circle").classList.remove("active");
        }, 500);
    });
});

// Handle Items click
Items.forEach((Item, index) => {
    Item.querySelector(".block").addEventListener("click", () => {
        const selectedVideo = Item.dataset.video;
        reorderSlides(selectedVideo);
        carousel.scrollTop = 0;
        VideoWrapper.classList.add("active");
        attachVideoEvents(); // reattach click & ended handlers after reordering
    });
});

// Back button logic
Back.addEventListener("click", () => {
    setTimeout(() => {
        carousel.scrollTop = 0;
        VideoWrapper.classList.remove("active");
        const Videos = document.querySelectorAll(".video-slide video");
        Videos.forEach(Video => {
            Video.pause();
            Video.currentTime = 0;
        });
    }, 300);
});

// Function to reorder slides
function reorderSlides(selectedVideo) {
    const reordered = [
        ...slides.filter(slide => slide.dataset.video === selectedVideo),
        ...slides.filter(slide => slide.dataset.video !== selectedVideo)
    ];

    carousel.innerHTML = "";
    reordered.forEach(slide => {
        carousel.appendChild(slide);
    });

    slides = reordered;

for(let i = 2; i < Items.length; i++) {

reordered[i].querySelector("video").load();

}

    reordered.forEach(slide => {
        const video = slide.querySelector("video");
        video.pause();
        video.currentTime = 0;
    });

    const firstVideo = reordered[0].querySelector("video");
    firstVideo.play();
}

// Attach click & ended listeners for all videos
function attachVideoEvents() {
    const Videos = document.querySelectorAll(".video-slide video");

    Videos.forEach(Video => {
        Video.onclick = () => {
            TB.classList.remove("active");
            void TB.offsetWidth;
            TB.classList.add("active");
            if (Video.paused) {
                Video.play();
                Play.style.display = "none";
                Pause.style.display = "flex";
            } else {
                Video.pause();
                Play.style.display = "flex";
                Pause.style.display = "none";
            }
        };

        // Only add ended listener once
        Video.onended = () => {
            Video.currentTime = 0;
            Video.play();
        };
    });

}

// Initialize events on first load
attachVideoEvents();

// Active slide management
let currentIndex = 0;

const updateActiveSlide = () => {
    const Slides = document.querySelectorAll(".video-carousel .video-slide");
    const Videos = document.querySelectorAll(".video-slide video");

    const index = Math.round(carousel.scrollTop / Slides[0].offsetHeight);
    if (index === currentIndex) return;

    currentIndex = index;

    
Videos.forEach(Video => {
  
Video.pause();
Video.currentTime = 0;

});
    
if(Videos[index]){
Videos[index].play();};

};


// Handle touch move distance threshold
let touchMoved = false;

carousel.addEventListener("touchstart", () => {
    touchMoved = false;
});

carousel.addEventListener("touchmove", () => {
    touchMoved = true;
});

carousel.addEventListener("touchend", () => {
    if (touchMoved) {
        setTimeout(() => {
            updateActiveSlide();
        }, 100);
    }
});



let countA;
let countB;


for (let i = 0; i < Items.length; i++) {

Likes[i].addEventListener("click",() => {

countA = NumAs[i].innerHTML;
countB = NumBs[i].innerHTML;

if(LikeFs[i].classList.contains("active")){
LikeFs[i].classList.remove("active");countA--;}
else{LikeFs[i].classList.add("active");countA++;

if(DislikeFs[i].classList.contains("active")){
DislikeFs[i].classList.remove("active");countB--;};

};

NumAs[i].innerHTML = countA;
NumBs[i].innerHTML = countB;

});

Dislikes[i].addEventListener("click",() => {

countA = NumAs[i].innerHTML;
countB = NumBs[i].innerHTML;

if(DislikeFs[i].classList.contains("active")){
DislikeFs[i].classList.remove("active");countB--;}
else{DislikeFs[i].classList.add("active");countB++;

if(LikeFs[i].classList.contains("active")){
LikeFs[i].classList.remove("active");countA--;};

};

NumAs[i].innerHTML = countA;
NumBs[i].innerHTML = countB;

});

}


