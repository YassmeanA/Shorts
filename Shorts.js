
const Body = document.querySelector(".Body");
const VideoWrapper = document.querySelector(".video-wrapper");
const VideoContainer = document.querySelector(".video-container");
const Back = document.querySelector(".Back");
const carousel = document.querySelector(".video-carousel");
const icons = document.querySelectorAll("#BottomNavbar .icon.X");
const Pages = document.querySelectorAll(".page");
const List1 = document.querySelector(".list1");
const List2 = document.querySelector(".list2");
const List3 = document.querySelector(".list3");
const List4 = document.querySelector(".sub-list");
const Title2 = document.querySelector(".title2");
const Settings = document.querySelector(".Settings");
const SettingsList = document.querySelector(".Settings-list");
const Background = document.querySelector(".Settings .Background");
const Options = document.querySelectorAll(".option");
const TopIcons = document.querySelectorAll(".TopIcon");
const Delete = document.querySelector(".delete");
const SubBtns = document.querySelectorAll(".sub-btn");
const SubPages = document.querySelectorAll(".sub-page");
const share = document.querySelector(".share");
const save = document.querySelector(".save");
const edit = document.querySelector(".edit");
const remove = document.querySelector(".remove");
const backs = document.querySelectorAll(".back");
const CommentList = document.querySelector(".comments-list");
const CommentSection = document.querySelector(".comments-section");
const Cross = document.querySelector(".comments-section .cross");
const Avatar = document.querySelector(".footer .avatar");
const Input = document.querySelector(".footer .input");
const Enter = document.querySelector(".footer .enter");
const Footer = document.querySelector(".footer");
const Alert = document.querySelector(".alert");
const Username = document.querySelector(".Username h3");
const Profile = document.querySelector(".Profile");
const Add = document.querySelector(".Add");
const UploadVideo = document.querySelector(".UploadVideo");
const UploadAudio = document.querySelector(".UploadAudio");
const UploadCover = document.querySelector(".UploadCover");
const Upload1 = document.querySelector(".UploadVideo .upload");
const Upload2 = document.querySelector(".UploadAudio .upload");
const Next = document.querySelector(".UploadVideo .next");
const Skip = document.querySelector(".UploadAudio .skip");
const Finish = document.querySelector(".UploadVideo .finish");
const videoInput = document.querySelector("#videoInput");
const imageInput = document.querySelector("#imageInput");
const audioInput = document.querySelector("#audioInput");
const coverInput = document.querySelector("#coverInput");
const previewVideo = document.querySelector(".UploadVideo video");
const previewAudio = document.querySelector(".UploadVideo audio");
const ToggleButton = document.querySelector(".ToggleButton");
const TBPlay = document.querySelector(".TBPlay");
const MusicCover = document.querySelector(".MusicCover");
const ITEM = document.querySelector(".Item");
const DeleteV = document.querySelector(".deleteV");
const Edit = document.querySelector(".account-edit");
const Save = document.querySelector(".account-save");


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

let NumOfVideos = videoData.length;
let comment;
let x;
let countA;
let countB;
let currentIndex = 0;
let currentVideoIndex = null;



//Check if the user uses touchscreen or not
if ("ontouchstart" in document.documentElement)

{Body.classList.add("touch");Body.classList.remove("mouse");}

else {Body.classList.add("mouse");Body.classList.remove("touch");}

Title2.style.top=`${List1.offsetHeight + 190}px`;
List2.style.top=`${List1.offsetHeight + 240}px`;
Title2.style.display="flex";
List2.style.display="flex";


function empty() {

if(document.querySelectorAll(".list1 .item").length === 0){List1.querySelector(".empty").style.display="flex";List1.style.height="240px";}else{List1.querySelector(".empty").style.display="none";};
if(document.querySelectorAll(".list2 .item").length === 0){List2.querySelector(".empty").style.display="flex";}else{List2.querySelector(".empty").style.display="none";};
if(document.querySelectorAll(".list3 .item").length === 0){Pages[1].querySelector(".empty").style.display="flex";}else{Pages[1].querySelector(".empty").style.display="none";};
if(document.querySelectorAll(".sub-list li").length === 0){Pages[2].querySelector(".empty").style.display="flex";}else{Pages[2].querySelector(".empty").style.display="none";};

}

empty();

function Comments(index) {
  
    const comments = videoData[index]; // Get the comment list for this video
    const CommentList = document.querySelector(".comments-list"); // Make sure this matches your HTML
   
    CommentList.innerHTML="";
    for (let i = 0; i < comments.length; i++) {
        const data = comments[i];
        const comment = document.createElement('li');
        
comment.className = "comment";
if(data.isNew){comment.classList.add("added");}

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
        empty();
      
       if(comment.classList.contains("added")){comment.querySelector(".user-info img").src = Profile.src;}

comment.querySelector(".settings").addEventListener("click",() => {

x = i;

comment.querySelector(".settings .circle").classList.add("active");
setTimeout(() => {
comment.querySelector(".settings .circle").classList.remove("active");
Settings.classList.add("active");
if(comment.classList.contains("added")){

Settings.classList.add("C");
Settings.classList.remove("A");
Settings.classList.remove("B");
Settings.classList.remove("D");

}else{

Settings.classList.add("B");
Settings.classList.remove("A");
Settings.classList.remove("C");
Settings.classList.remove("D");

};

}, 400);

});
        
const p = comment.querySelector("p");
comment.style.height = `${p.offsetHeight + 50}px`;

}

}

if (window.innerWidth > 0.75 * window.innerHeight){
document.querySelectorAll(".video-carousel .video-slide").forEach(Slide => {Slide.querySelector("video").style.width = "auto";if(Slide.classList.contains("new")){Slide.querySelector("video").style.width = "56vh";};});}

else {
document.querySelectorAll(".video-carousel .video-slide").forEach(Slide => {Slide.querySelector("video").style.width = "100%";if(Slide.classList.contains("new")){Slide.querySelector("video").style.width ="100%";};});}

let resizeTimeout;

window.addEventListener("resize", () => {

// Disable transitions immediately
SubPages.forEach(SubPage => {
if(!SubPage.classList.contains("active")){SubPage.style.display = "none";}});
if(!UploadVideo.classList.contains("active")){UploadVideo.style.display = "none";}
if(!UploadAudio.classList.contains("active")){UploadAudio.style.display = "none";}
if(!UploadCover.classList.contains("active")){UploadCover.style.display = "none";}
  
// Clear previous timeout and set a new one
clearTimeout(resizeTimeout);
resizeTimeout = setTimeout(() => {
SubPages.forEach(SubPage => {
SubPage.style.display = "flex";});
UploadVideo.style.display = "flex";
UploadAudio.style.display = "flex";
UploadCover.style.display = "flex";
}, 300); // Delay after resize stops
  

if (window.innerWidth > 0.75 * window.innerHeight){
document.querySelectorAll(".video-carousel .video-slide").forEach(Slide => {Slide.querySelector("video").style.width = "auto";if(Slide.classList.contains("new")){Slide.querySelector("video").style.width = "56vh";};});}

else {
document.querySelectorAll(".video-carousel .video-slide").forEach(Slide => {Slide.querySelector("video").style.width = "100%";if(Slide.classList.contains("new")){Slide.querySelector("video").style.width ="100%";};});}

document.querySelectorAll(".comments-section .comment").forEach(Comment => {
const p = Comment.querySelector("p");
Comment.style.height = `${p.offsetHeight + 50}px`;
});


Input.style.height = "35px"; // Reset height
Input.style.height = Math.min(Input.scrollHeight, 80) + "px";
Footer.style.height=`${Input.offsetHeight + 20}px`;
if(Input.offsetHeight >= 80){Input.style.border="10px solid #272727";}else{Input.style.border="none";};

if (VideoWrapper.classList.contains("active") || Array.from(SubPages).some(SubPage => SubPage.classList.contains("active"))) return;

Title2.style.top = `${List1.offsetHeight + 190}px`;
List2.style.top = `${List1.offsetHeight + 240}px`;
  
});


Background.addEventListener("click", () => {

Settings.classList.remove("active");
Pages.forEach(Page => {
if(VideoWrapper.classList.contains("active")){Page.style.overflowY="hidden";}else{Page.style.overflowY="auto";};

});
});


icons.forEach((icon,index) => {
icon.addEventListener("click", () => {

icons.forEach(icon => {icon.classList.remove("active");});
icons[index].classList.add("active");

Pages.forEach(Page => {Page.classList.remove("active");});
Pages[index].appendChild(document.querySelector("header"));
Pages[index].classList.add("active");

empty();

});
});


Cross.addEventListener("click", () => {

setTimeout(() => {
VideoWrapper.classList.remove("Comments");},300);

VideoWrapper.classList.remove("comments");

});


Input.addEventListener("input", () => {
   
   Input.style.height = "35px"; // Reset height
   Input.style.height = Math.min(Input.scrollHeight, 80) + "px";
   Footer.style.height=`${Input.offsetHeight + 20}px`;
   if(Input.offsetHeight >= 80){Input.style.border="10px solid #272727";}else{Input.style.border="none";};

 comment = Input.value;
});

Options.forEach(Option => {
Option.addEventListener("click", () => {
  
Option.querySelector(".circle").classList.add("active");

setTimeout(() => {
Settings.classList.remove("active");
Option.querySelector(".circle").classList.remove("active");

Pages.forEach(Page => {
if(VideoWrapper.classList.contains("active")){Page.style.overflowY="hidden";}else{Page.style.overflowY="auto";};
});

}, 500);

});
});

TopIcons.forEach(TopIcon => {
TopIcon.addEventListener("click", () => {
  
TopIcon.querySelector(".circle").classList.add("active");
setTimeout(() => {
TopIcon.querySelector(".circle").classList.remove("active");
}, 500);

});
});

SubBtns.forEach((SubBtn,index) => {
SubBtn.addEventListener("click", () => {

setTimeout(() => {
SubPages[index].classList.add("active");
setTimeout(() => {Pages.forEach(Page => {Page.style.overflowY="hidden";});},300);
},500);

});
});


share.addEventListener("click", () => {

Alert.innerHTML = "Link copied to the clipboard";

Alert.classList.add("active");

setTimeout(() => {
Alert.classList.remove("active");
},1500);

});


save.addEventListener("click", () => {

if(Settings.classList.contains("D")){
Alert.innerHTML = "Video saved";
}else{Alert.innerHTML = "Comment saved";};


Alert.classList.add("active");

setTimeout(() => {
Alert.classList.remove("active");
},1500);

});


backs.forEach(back => {
back.addEventListener("click", () => {

SubPages.forEach(SubPage => {
SubPage.classList.remove("active");});

Pages.forEach(Page => {
if(VideoWrapper.classList.contains("active")){Page.style.overflowY="hidden";}else{Page.style.overflowY="auto";};
});

});
});



let isDragging = false, startX, startScrollLeft;
let dragMoved = false;


// Enable horizontal dragging for lists
  const lists = [List1, List2, List3];

  lists.forEach(list => {

    const dragStart = (e) => {
      isDragging = true;
      dragMoved = false;
      list.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = list.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 5) dragMoved = true; // movement threshold
      e.preventDefault();
      list.scrollLeft = startScrollLeft - dx;
    };

    const dragStop = () => {
      isDragging = false;
      setTimeout(() => {
        list.classList.remove("dragging");
      }, 200);
    };

    list.addEventListener("mousedown", dragStart);
    list.addEventListener("mousemove", dragging);
    list.addEventListener("mouseup", dragStop);
    list.addEventListener("mouseleave", dragStop);
  });



function slideButtons(Slide) {


// Subscribe Btn
Slide.querySelector(".Subscribe").addEventListener("click", () => {
  const classList = Slide.classList;
  const channelMap = {
    C1: { img: "TurkuazKitchen.jpg", name: "@TurkuazKitchen" },
    C2: { img: "UTaste.jpg", name: "@U-Taste" },
    C3: { img: "MissJophiel.jpg", name: "@MissJophiel" },
    C4: { img: "MyArtShine.jpg", name: "@MyArtShine" }
  };

  // Detect which channel class the slide has (e.g., C1, C2, etc.)
  let channelClass = null;
  for (const key in channelMap) {
    if (classList.contains(key)) {
      channelClass = key;
      break;
    }
  }

  if (!channelClass) return; // No valid channel class found

  // Skip if already subscribed (any one slide having it is enough)
  const alreadySubscribed = document.querySelector(`.video-slide.${channelClass} .Subscribe.active`);
  if (alreadySubscribed) return;

  // Mark all slides with this channel as subscribed
  document.querySelectorAll(`.video-slide.${channelClass} .Subscribe`).forEach(btn => {
    btn.classList.add("active");
    btn.innerHTML = "Subscribed";
  });

  // Create and append the subscription list item
  const { img, name } = channelMap[channelClass];
  const Sub = document.createElement("li");
  Sub.className = "sub";
  Sub.innerHTML = `
    <section class="Sub-Channel">
      <img src="${img}">
      <div class="sub-channel-title">
        <span>${name}</span>
      </div>
      <button class="Sub-Subscribe">Unsubscribe</button>
    </section>
  `;
  document.querySelector(".sub-list").appendChild(Sub);

  // Unsubscribe handler
  Sub.querySelector(".Sub-Subscribe").addEventListener("click", () => {
    Sub.remove();
    empty();
    document.querySelectorAll(`.video-slide.${channelClass} .Subscribe`).forEach(btn => {
      btn.classList.remove("active");
      btn.innerHTML = "Subscribe";
    });
  });
});
  

Slide.querySelector(".Subscribe").style.left = `${Slide.querySelector(".channel-title span").offsetWidth + 40}px`;

  
//Slide Icons
Slide.querySelectorAll(".Icons .Icon").forEach(Icon => {
Icon.addEventListener("click", () => {
Icon.querySelector(".circle").classList.add("active");
setTimeout(() => {
Icon.querySelector(".circle").classList.remove("active");},500);
});
});

// Like & Dislike Btns
Slide.querySelector(".like").addEventListener("click",() => {

countA = Slide.querySelector(".numA").innerHTML;
countB = Slide.querySelector(".numB").innerHTML;

if(Slide.querySelector(".like-filled").classList.contains("active")){
Slide.querySelector(".like-filled").classList.remove("active");countA--;}
else{Slide.querySelector(".like-filled").classList.add("active");countA++;

if(Slide.querySelector(".dislike-filled").classList.contains("active")){
Slide.querySelector(".dislike-filled").classList.remove("active");countB--;};

};

Slide.querySelector(".numA").innerHTML = countA;
Slide.querySelector(".numB").innerHTML = countB;

});

Slide.querySelector(".dislike").addEventListener("click",() => {

countA = Slide.querySelector(".numA").innerHTML;
countB = Slide.querySelector(".numB").innerHTML;

if(Slide.querySelector(".dislike-filled").classList.contains("active")){
Slide.querySelector(".dislike-filled").classList.remove("active");countB--;}
else{Slide.querySelector(".dislike-filled").classList.add("active");countB++;

if(Slide.querySelector(".like-filled").classList.contains("active")){
Slide.querySelector(".like-filled").classList.remove("active");countA--;};

};

Slide.querySelector(".numA").innerHTML = countA;
Slide.querySelector(".numB").innerHTML = countB;

});


// Share Icons
Slide.querySelector(".Icon.Share").addEventListener("click", () => {

Alert.innerHTML = "Link copied to the clipboard";

Alert.classList.add("active");

setTimeout(() => {Alert.classList.remove("active");},1500);

let shareNumber = Slide.querySelector(".Icon.Share").querySelector("span").innerHTML;

if(Slide.querySelector(".Icon.Share").classList.contains("shared")) return;
Slide.querySelector(".Icon.Share").classList.add("shared");
shareNumber++;
Slide.querySelector(".Icon.Share").querySelector("span").innerHTML = shareNumber;

});


// (Play-Pause) Video & Audio
Slide.querySelector("video").onclick = () => {

Slide.querySelector(".TB").classList.remove("active");
void Slide.querySelector(".TB").offsetWidth;
Slide.querySelector(".TB").classList.add("active");

if (Slide.querySelector("video").paused) {

Slide.querySelector("video").play();
Slide.querySelector("audio").play();
Slide.querySelector(".play").style.display = "none";
Slide.querySelector(".pause").style.display = "flex";

} else {
                
Slide.querySelector("video").pause();
Slide.querySelector("audio").pause();         
Slide.querySelector(".play").style.display = "flex";
Slide.querySelector(".pause").style.display = "none";

}

};

// Only add ended listener once
Slide.querySelector("video").onended = () => {
Slide.querySelector("video").currentTime = 0;
Slide.querySelector("video").play();
Slide.querySelector("audio").pause();
Slide.querySelector("audio").currentTime = 0;
Slide.querySelector("audio").play();

};


// Loading Animation
Slide.querySelector(".spinner").style.display="flex";

// When enough data is loaded to play, hide loader
Slide.querySelector("video").addEventListener('canplay', () => {
Slide.querySelector(".spinner").style.display="none";});

// If video starts buffering later, show loader again
Slide.querySelector("video").addEventListener('waiting', () => {
Slide.querySelector(".spinner").style.display="flex";});

// When video resumes playing, hide loader
Slide.querySelector("video").addEventListener('playing', () => {
Slide.querySelector(".spinner").style.display="none";});


if (Slide.querySelector("audio").src === "") return;

// When enough data is loaded to play, hide loader
Slide.querySelector("audio").addEventListener('canplay', () => {
Slide.querySelector(".spinner").style.display="none";});

// If audio starts buffering later, show loader again
Slide.querySelector("audio").addEventListener('waiting', () => {
Slide.querySelector(".spinner").style.display="flex";});

// When audio resumes playing, hide loader
Slide.querySelector("audio").addEventListener('playing', () => {
Slide.querySelector(".spinner").style.display="none";});


}  


// Attach EventListeners for all Btns of each Slide
document.querySelectorAll(".video-carousel .video-slide").forEach(Slide => {
slideButtons(Slide);});


function load() {


// Handle Items click
document.querySelectorAll(".item").forEach(Item => {
  Item.querySelector(".block").addEventListener("click", () => {
    if (dragMoved) return;

    // Reorder using CSS order
    reorderSlides(Item.dataset.video);

    // Scroll to top of the carousel
    carousel.scrollTop = 0;

    // Prevent body scroll
    Body.style.overflowY = "hidden";

    // Show video player
    VideoWrapper.classList.add("active");

    // Mark the selected slide as "active" for index tracking
    document.querySelectorAll(".video-carousel .video-slide").forEach(Slide => {
      Slide.classList.remove("active");
      if (Slide.dataset.video === Item.dataset.video) {
        Slide.classList.add("active");
      }
    });
  });
});



document.querySelectorAll(".item .settings").forEach((setting,index) => {
setting.addEventListener("click", () => {

setting.classList.add("selected");
setting.querySelector(".circle").classList.add("active");
        
setTimeout(() => {
setting.querySelector(".circle").classList.remove("active");
Settings.classList.add("active");
if(document.querySelectorAll(".item")[index].classList.contains("new")){Settings.classList.add("D");Settings.classList.remove("A");
}else{Settings.classList.add("A");Settings.classList.remove("D");};
Settings.classList.remove("B");
Settings.classList.remove("C");
Body.style.overflowY="hidden";
}, 500);

});
});


//Comment Icons
document.querySelectorAll(".video-carousel .video-slide .Icon.Comment").forEach((CommentIcon,index) => {
CommentIcon.addEventListener("click", () => {
  currentVideoIndex = index;
  setTimeout(() => {
  VideoWrapper.classList.add("comments");
  VideoWrapper.classList.add("Comments");},300);
  Comments(index);
  if(videoData[index].length === 0){document.querySelector(".comments-section .empty").style.display="flex";}else{document.querySelector(".comments-section .empty").style.display="none";};

});
  });

Enter.addEventListener("click", () => {
    Input.style.height = "35px"; // Reset height
    Input.style.border="none";
    Footer.style.height = "55px"; 
    if (comment && comment.trim() !== "" && currentVideoIndex !== null) {
        const newComment = {
            avatar: Profile.src,
            username: Username.innerHTML,
            comment: comment.trim(),
            isNew: true //Flag new comment
        };

        videoData[currentVideoIndex].push(newComment);
        Comments(currentVideoIndex);
        if(videoData[currentVideoIndex].length === 0){document.querySelector(".comments-section .empty").style.display="flex";}else{document.querySelector(".comments-section .empty").style.display="none";};

        // ✅ Get the matching slide
        document.querySelectorAll(".video-carousel .video-slide")[currentVideoIndex].querySelector(".Icon.Comment span").innerHTML = videoData[currentVideoIndex].length;

        Input.value = "";
        comment = "";
        empty();
    }
   
});

remove.addEventListener("click", () => {

if (currentVideoIndex !== null && x !== undefined) {        

setTimeout(() => {

       // Remove the comment from the array
       videoData[currentVideoIndex].splice(x, 1);

       // Refresh the comment list UI
       Comments(currentVideoIndex);
       if(videoData[currentVideoIndex].length === 0){document.querySelector(".comments-section .empty").style.display="flex";}else{document.querySelector(".comments-section .empty").style.display="none";};

       // ✅ Get the matching slide
       document.querySelectorAll(".video-carousel .video-slide")[currentVideoIndex].querySelector(".Icon.Comment span").innerHTML = videoData[currentVideoIndex].length;

      empty();
      
   }, 500);
  }
});

edit.addEventListener("click", () => {
    
setTimeout(() => {
        
   if (currentVideoIndex !== null && typeof x === "number") {
     // Get current comment data
     const currentComment = videoData[currentVideoIndex][x];

     // Put comment text into input field for editing
     Input.value = currentComment.comment;
     Input.focus();
     comment = currentComment.comment;

     // When user presses Enter, treat as an updated comment
     Enter.onclick = () => {
     Input.style.height = "35px";
     Input.style.border = "none";
     Footer.style.height = "55px";

     // Remove the old comment temporarily
     videoData[currentVideoIndex].splice(x, 1);

     // Refresh comment list (removes the comment visually)
     Comments(currentVideoIndex);

     // ✅ Get the matching slide
     document.querySelectorAll(".video-carousel .video-slide")[currentVideoIndex].querySelector(".Icon.Comment span").innerHTML = videoData[currentVideoIndex].length;


     if (comment && comment.trim() !== "") {
     const updatedComment = {
             avatar: Avatar.src,
             username: Username.innerHTML,
             comment: comment.trim(),
             isNew: true
      };

      // Add updated comment
      videoData[currentVideoIndex].splice(x, 0, updatedComment);
      Comments(currentVideoIndex);

      // Update counter again
      document.querySelectorAll(".video-carousel .Icon.Comment")[currentVideoIndex].querySelector("span").innerHTML = videoData[currentVideoIndex + 1].length;
      

      Input.value = "";
      comment = "";

      // Restore Enter button behavior
      Enter.onclick = defaultEnterHandler;
       
       }
     };
   }
  
}, 500);
});


for (let i = 0; i < document.querySelectorAll(".video-carousel .Icon.Comment").length; i++) {

  document.querySelectorAll(".video-carousel .Icon.Comment")[i].querySelector("span").innerHTML = videoData[i].length;

};

}

load();


//Back Btn
Back.addEventListener("click", () => {

  carousel.style.scrollBehavior="auto";
  
  setTimeout(() => {
  carousel.scrollTop = 0;
  VideoWrapper.classList.remove("active");
  Body.style.overflowY="auto";
  document.querySelectorAll(".video-carousel .video-slide video").forEach((Video,index) => {
  Video.pause();
  Video.currentTime = 0;
  document.querySelectorAll(".video-carousel .video-slide")[index].querySelector("audio").pause();
  document.querySelectorAll(".video-carousel .video-slide")[index].querySelector("audio").currentTime = 0;
  
  });
  
  }, 300);
  
});

let Index = 0;

//Scroll Using Arrows
document.addEventListener("keydown", (e) => {

if (!VideoWrapper.classList.contains("active") || VideoWrapper.classList.contains("Comments") || Body.classList.contains("touch")) return;

const slides = Array.from(document.querySelectorAll(".video-carousel .video-slide"));
const slideHeight = slides[0]?.offsetHeight || window.innerHeight;

// Limit scrolling if no slides
if (slides.length === 0) return;

// Adjust index
if (e.key === "ArrowDown" || e.key === "Enter") {
if (Index < slides.length - 1) Index++;
} else if (e.key === "ArrowUp") {
if (Index > 0) Index--;
} else {
return; // Exit if not up/down/enter
}

// Smooth scroll
carousel.style.scrollBehavior = "smooth";
carousel.scrollTop = Index * slideHeight;
  
// Sync playback after scroll
setTimeout(() => {updateActiveSlide();},300);

});

  
  function reorderSlides(selectedVideo) {
    const allSlides = Array.from(document.querySelectorAll(".video-carousel .video-slide"));
  
    allSlides.forEach((slide, index) => {
        const isSelected = slide.dataset.video === selectedVideo;
  
        // Assign lower order (e.g., 0) to the selected video, and higher order (e.g., 1+) to the rest
        slide.style.order = isSelected ? 0 : index + 1;
  
        // Reset playback state
        const video = slide.querySelector("video");
        const audio = slide.querySelector("audio");
        video.pause();
        video.currentTime = 0;
        audio.pause();
        audio.currentTime = 0;
    });
  
    // Play the selected slide
    const selectedSlide = allSlides.find(slide => slide.dataset.video === selectedVideo);
    if (selectedSlide) {
        const video = selectedSlide.querySelector("video");
        const audio = selectedSlide.querySelector("audio");
        video.play();
        audio.play();
    }
  }
  
  

  const updateActiveSlide = () => {
    
    const slideHeight = document.querySelector(".video-slide")?.offsetHeight;
    
    if (!slideHeight) return;
    
    const scrolledIndex = Math.round(carousel.scrollTop / slideHeight);
    
        // Sort slides visually using the `order` style
        const orderedSlides = Array.from(document.querySelectorAll(".video-carousel .video-slide"))
            .sort((a, b) => parseInt(a.style.order) - parseInt(b.style.order));
    
        if (scrolledIndex === currentIndex) return;
    
        currentIndex = scrolledIndex;
    
        // Stop all playback
        orderedSlides.forEach(slide => {
            const video = slide.querySelector("video");
            const audio = slide.querySelector("audio");
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    
        // Play only the active one
        const activeSlide = orderedSlides[scrolledIndex];
        if (activeSlide) {
            const video = activeSlide.querySelector("video");
            const audio = activeSlide.querySelector("audio");
            if (video) video.play();
            if (audio) audio.play();
        }
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
  
  setTimeout(() => {updateActiveSlide();}, 300);
  
  }
  
  });
  
 
Delete.addEventListener("click", () => {

setTimeout(() => {

  document.querySelectorAll(".item").forEach((Item, index) => {
    if (Item.querySelector(".settings").classList.contains("selected")) {
   
      // Remove the matching slide
      document.querySelectorAll(".video-carousel .video-slide")[index].remove();
  
      //Remove the corresponding entry from videoData
      videoData.splice(index, 1);

      // Remove the item
      Item.remove();
     
      // Cleanup & reload
      empty();
      load();
      
    }
  });

}, 500);

});


DeleteV.addEventListener("click", () => {
Delete.click();});

Add.addEventListener("click", () => {
  // Reset global media state
  currentAudio = "";
  currentVideo = "";
  currentImage = "";
  currentCover = "";
  musicTitle = "";
  videoTitle = "";
  setTimeout(() => {
  UploadVideo.classList.add("active");
  Pages.forEach(Page => {Page.style.overflowY="hidden";});}, 200);
});

UploadVideo.querySelector(".back").addEventListener("click", () => {
  setTimeout(() => {UploadVideo.classList.remove("active");}, 200);
  Upload1.classList.remove("active");
});

Upload1.addEventListener("click", () => {
  Upload1.classList.add("active");
  videoInput.value = "";
  videoInput.click();

});


videoInput.addEventListener("change", () => {

    Upload1.classList.remove("active");
    UploadVideo.querySelector(".upload-section").style.display = "none";
    UploadVideo.querySelector(".back").style.display = "none";
    
  const file = videoInput.files[0];

  if (file) {
    currentVideo = URL.createObjectURL(file);
    previewVideo.src = currentVideo;

    TBPlay.style.display = "flex";
    Next.style.display = "flex";

    UploadVideo.querySelector(".video-info .channel-title span").innerHTML = document.querySelector(".YourChannel h3").innerHTML;
    UploadVideo.querySelector(".video-info .Channel img").src = document.querySelector(".Profile").src;
    UploadVideo.querySelector(".UploadVideo .video-slide").style.opacity = "1";
    UploadVideo.querySelector(".UploadVideo .video-slide").style.pointerEvents = "auto";
      
   }
});

previewVideo.addEventListener("click", () => {
    
  TBPlay.style.display = "none";

  ToggleButton.classList.remove("active");
  void ToggleButton.offsetWidth;
  ToggleButton.classList.add("active");

  if (previewVideo.paused) {
    previewVideo.play();
    previewAudio.play();
    ToggleButton.querySelector(".TBplay").style.display = "none";
    ToggleButton.querySelector(".TBpause").style.display = "flex";
  } else {
    previewVideo.pause();
    previewAudio.pause();
    ToggleButton.querySelector(".TBplay").style.display = "flex";
    ToggleButton.querySelector(".TBpause").style.display = "none";
  }

  if (previewVideo.ended) {
    previewAudio.pause();
    previewAudio.currentTime = 0;
  }
});

Next.addEventListener("click", () => {
  previewVideo.pause();
  previewVideo.currentTime = 0;
  previewAudio.pause();
  previewAudio.currentTime = 0;

  UploadAudio.classList.add("active");
});

let musicTitle = "";
let videoTitle = "";

function updateNextButtonVisibility() {
  if (Skip.classList.contains("active")) {
    UploadAudio.querySelector(".next").style.display = videoTitle.trim() !== "" ? "flex" : "none";
  } else {
    UploadAudio.querySelector(".next").style.display = (musicTitle.trim() !== "" && videoTitle.trim() !== "") ? "flex" : "none";
  }
}

UploadAudio.querySelector(".music-input").addEventListener("input", () => {
  musicTitle = UploadAudio.querySelector(".music-input").value;
  updateNextButtonVisibility();
});

UploadAudio.querySelector(".video-input").addEventListener("input", () => {
  videoTitle = UploadAudio.querySelector(".video-input").value;
  updateNextButtonVisibility();
});

Skip.addEventListener("click", () => {
  Skip.classList.add("active");
  Upload2.classList.remove("active");
  UploadAudio.querySelector(".audio-container").style.display = "none";
  UploadAudio.querySelector(".cover-container").style.display = "flex";
  UploadAudio.querySelector(".titleV-container").style.display = "flex";
  UploadAudio.querySelector(".circle1").style.display = "none";
  UploadAudio.querySelector(".circle2").style.display = "none";
  UploadAudio.querySelector(".text1").style.display = "none";
  MusicCover.style.pointerEvents = "none";
  Skip.style.display = "none";
});

Upload2.addEventListener("click", () => {
  Upload2.classList.add("active");
  audioInput.value = "";
  audioInput.click();
});

audioInput.addEventListener("change", () => {

  Upload2.classList.remove("active");
  UploadAudio.querySelector(".audio-container").style.display = "none";
  UploadAudio.querySelector(".cover-container").style.display = "flex";
  Skip.style.display = "none";

  const file = audioInput.files[0];
  if (file) {
    currentAudio = URL.createObjectURL(file);
  }
});

MusicCover.addEventListener("click", () => {
  imageInput.value = "";
  imageInput.click();
});

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) {
    currentImage = URL.createObjectURL(file);
    MusicCover.src = currentImage;

    UploadAudio.querySelector(".title-container").style.display = "flex";
    UploadAudio.querySelector(".titleV-container").style.display = "flex";
    UploadAudio.querySelector(".circle1").style.display = "none";
    UploadAudio.querySelector(".circle2").style.display = "none";
    UploadAudio.querySelector(".text1").style.display = "none";
    MusicCover.style.pointerEvents = "none";
  }
});

UploadAudio.querySelector(".next").addEventListener("click", () => {

  UploadVideo.querySelector(".cover").src = MusicCover.src;
  UploadVideo.querySelector(".Title span").innerHTML = videoTitle;
  ITEM.querySelector("span").innerHTML = videoTitle;
  TBPlay.style.display = "flex";

  UploadAudio.classList.remove("active");
  UploadCover.classList.add("active");

  if (Skip.classList.contains("active")) return;

  UploadVideo.querySelector("audio").src = currentAudio;

  UploadVideo.querySelector(".video-info").innerHTML += `
    <section class="Music">
      <span>${musicTitle}</span>
      <div class="music"><img src="music.svg"></div>
    </section>`;
});

ITEM.addEventListener("click", () => {
  coverInput.value = "";
  coverInput.click();
  Skip.classList.remove("active");
});

coverInput.addEventListener("change", () => {
  const file = coverInput.files[0];
  if (file) {
    currentCover = URL.createObjectURL(file);
    ITEM.querySelector("img").src = currentCover;

    UploadCover.querySelector(".next").style.display = "flex";
    UploadCover.querySelector(".circle1").style.display = "none";
    UploadCover.querySelector(".circle2").style.display = "none";
    UploadCover.querySelector(".text4").style.display = "none";
  }
});

UploadCover.querySelector(".next").addEventListener("click", () => {
  Finish.style.display = "flex";
  Next.style.display = "none";
  UploadCover.classList.remove("active");
});

Finish.addEventListener("click", () => {

Finish.style.pointerEvents="none";

  const newVideoId = `${NumOfVideos + 1}`;


  videoData.push([]);
  const musicCover = document.querySelector('.UploadVideo .cover').src;
  const uploadedCover = document.querySelector('.UploadCover img').src;
  const uploadedTitle = document.querySelector('.UploadVideo .Title span').innerHTML;
  const uploadedVideo = document.querySelector('.UploadVideo video').src;
  const uploadedAudio = document.querySelector('.UploadVideo audio').src;
  const channelImg = document.querySelector('.UploadVideo .Channel img').src;
  const channelName = document.querySelector('.UploadVideo .channel-title span').innerHTML;
  const musicTitleText = document.querySelector('.UploadVideo .Music span')?.innerHTML || "";

  const item = document.createElement("li");
  item.className = "item new";
  item.dataset.video = newVideoId;
  item.innerHTML = `<img src="${uploadedCover}">
<span>${uploadedTitle}</span>
<div class="block"></div>
<div class="settings">
<div class="circle"></div>
<img src="settings.svg">
</div>`;
  document.querySelector(".list3").appendChild(item);

  const Slide = document.createElement("li");
  Slide.className = "video-slide new";
  Slide.dataset.video = newVideoId;
  Slide.innerHTML = `
<video preload="auto" class="video" poster="">
<source src="${uploadedVideo}" type="video/mp4"/>
</video>
<audio preload="auto" class="audio">
<source src="${uploadedAudio}" type="audio/mp3"/>
</audio>
<ul class="Icons">
<li class="Icon"><div class="circle"></div><img src="like.svg" class="like"><img src="likeFilled.svg" class="like-filled"><span class="numA">0</span></li>
<li class="Icon"><div class="circle"></div><img src="dislike.svg" class="dislike"><img src="dislikeFilled.svg" class="dislike-filled"><span class="numB">0</span></li>
<li class="Icon Comment"><div class="circle"></div><img src="comments.svg"><span>0</span></li>
<li class="Icon Share"><div class="circle"></div><img src="share.svg"><span>0</span></li>
</ul>
<img class="cover" src="${musicCover}">
<div class="video-info">
<section class="Channel">
<img src="${channelImg}">
<div class="channel-title"><span>${channelName}</span></div>
<button class="Subscribe" style="display:none;">Subscribe</button>
</section>
<section class="Title"><span>${uploadedTitle}</span></section>
</div>
<svg class="spinner" width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="20" stroke-linecap="round"/></svg>
<div class="TB"><img class="pause" src="pause.svg" style="display:none;"><img class="play" src="play.svg" style="display:flex;"></div>`;

if(UploadVideo.querySelector(".video-info .Music")){
        
Slide.querySelector(".video-info").innerHTML += `
<section class="Music">
<span>${musicTitleText}</span>
<div class="music"><img src="music.svg"></div>
</section>`;

};
    
  document.querySelector(".video-carousel").appendChild(Slide);

  Slide.querySelector("video").style.width = "56vh";

  slideButtons(Slide);
  load();
  empty();

  NumOfVideos++;

  Alert.innerHTML = "Video uploaded successfully";
  Alert.classList.add("active");
  setTimeout(() => {UploadVideo.classList.remove("active");},300);
  setTimeout(() => {Alert.classList.remove("active");},1000);
 
  setTimeout(() => {
  // Reset all upload UIs
  UploadVideo.querySelector(".UploadVideo .video-slide").style.opacity = "0";
  UploadVideo.querySelector(".UploadVideo .video-slide").style.pointerEvents = "none";
  UploadVideo.querySelector("video").src = "";
  UploadVideo.querySelector(".audio").src = "";
  UploadVideo.querySelector(".upload-section").style.display = "flex";
  UploadVideo.querySelector(".back").style.display = "flex";
  UploadVideo.querySelector(".Title span").innerHTML = "";
  UploadVideo.querySelector(".cover").src = "default.svg";
  UploadVideo.querySelector(".video-info .Music")?.remove();

  UploadAudio.querySelector(".music-input").value = "";
  UploadAudio.querySelector(".video-input").value = "";
  UploadAudio.querySelector(".next").style.display = "none";
  UploadAudio.querySelector(".audio-container").style.display = "flex";
  UploadAudio.querySelector(".cover-container").style.display = "none";
  UploadAudio.querySelector(".titleV-container").style.display = "none";
  UploadAudio.querySelector(".title-container").style.display = "none";
  UploadAudio.querySelector(".circle1").style.display = "flex";
  UploadAudio.querySelector(".circle2").style.display = "flex";
  UploadAudio.querySelector(".text1").style.display = "flex";
  MusicCover.src = "default.svg";
  MusicCover.style.pointerEvents = "auto";
  Skip.style.display = "flex";

  UploadCover.querySelector(".next").style.display = "none";
  UploadCover.querySelector(".circle1").style.display = "flex";
  UploadCover.querySelector(".circle2").style.display = "flex";
  UploadCover.querySelector(".text4").style.display = "flex";
  ITEM.querySelector("img").src = "default-cover.svg";

  Finish.style.display = "none";
  Finish.style.pointerEvents="auto";
  Pages.forEach(Page => {Page.style.overflowY="auto";});
    
  },600);
                    
});


// Edit Account Settings
Edit.addEventListener("click", () => {
  Edit.classList.add("active");
  setTimeout(() => {
  Edit.classList.remove("active");
  }, 800);
});

// Store original values
let originalImg = document.querySelector(".Profile").src;
let originalUsername = document.querySelector(".Username h3").innerHTML;
let originalEmail = document.querySelector(".Email h3").innerHTML;
let originalChannel = document.querySelector(".YourChannel h3").innerHTML;

Avatar.src = originalImg;

// Set inputs with current values
const profileEditImg = document.querySelector(".account-settings .wrapper .Profile-Edit");
const usernameInput = document.querySelector(".account-input.username");
const emailInput = document.querySelector(".account-input.email");
const channelInput = document.querySelector(".account-input.yourChannel");

profileEditImg.src = originalImg;
usernameInput.value = originalUsername;
emailInput.value = originalEmail;
channelInput.value = originalChannel;

// Check for changes
function checkForChanges() {
  const imgChanged = profileEditImg.src !== originalImg;
  const usernameChanged = usernameInput.value !== originalUsername;
  const emailChanged = emailInput.value !== originalEmail;
  const channelChanged = channelInput.value !== originalChannel;

  const allFieldsFilled =
    usernameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    channelInput.value.trim() !== "";

  if (allFieldsFilled && (imgChanged || usernameChanged || emailChanged || channelChanged)) {
    Save.style.display = "flex";
  } else {
    Save.style.display = "none";
  }
}

// Listen to input changes
usernameInput.addEventListener("input", checkForChanges);
emailInput.addEventListener("input", checkForChanges);
channelInput.addEventListener("input", checkForChanges);
profileEditImg.addEventListener("load", checkForChanges); // triggers when image changes

// Handle camera upload
document.querySelector(".account-settings .camera").addEventListener("click", () => {
  CameraInput.value = "";
  CameraInput.click();
});

CameraInput.addEventListener("change", () => {
  const file = CameraInput.files[0];
  if (file) {
    const currentCamera = URL.createObjectURL(file);
    profileEditImg.src = currentCamera; // triggers 'load' → checkForChanges()
  }
});

// Handle Save
Save.addEventListener("click", () => {
Save.classList.add("active");

setTimeout(() => {
Save.classList.remove("active");
Save.style.display = "none"; // hide again
}, 800);

  // Apply updates
  document.querySelector(".Profile").src = profileEditImg.src;
  document.querySelector(".Username h3").innerHTML = usernameInput.value;
  document.querySelector(".Email h3").innerHTML = emailInput.value;
  document.querySelector(".YourChannel h3").innerHTML = channelInput.value;
  Avatar.src = profileEditImg.src;
  Pages.forEach(Page => {Page.style.overflowY="auto";});

  // Reset originals
  originalImg = profileEditImg.src;
  originalUsername = usernameInput.value;
  originalEmail = emailInput.value;
  originalChannel = channelInput.value;


  setTimeout(() => {
    SubPages.forEach(SubPage => {
      SubPage.classList.remove("active");
    });

    Alert.innerHTML = "Changes saved";
    Alert.classList.add("active");

    setTimeout(() => {
      Alert.classList.remove("active");
    }, 1500);
  }, 600);
});


