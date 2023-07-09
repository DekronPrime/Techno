let accountBtn = document.querySelector(".profile");

accountBtn.addEventListener("click", async () => {
    let nickname = document.querySelector(".profile>figure>figcaption").innerHTML;
    const result = await fetch(`/user/single/${nickname.trim()}`, {
        method: "GET",
        headers: { 'Content-Type' : 'application/json'}
    })
    if (result.ok) {
        const profileData = await result.json();
        setupProfile(profileData);
        
    } else {
        console.log("something went wrong while trying to get prodile data");
    }
    showModal("modal-account");
})

let profile = document.querySelector('.profile');
let profileImg = document.querySelector('.profile>figure>img');
let text = document.querySelector(".profile>figure>figcaption");

function setupProfile(profileData) {
    const nicknameField = document.querySelector("#user-nickname");
    const emailField = document.querySelector("#user-email");
    const statusField = document.querySelector("#user-status");
    const profileImage = document.querySelector("#modal-account .profile-image > img")

    nicknameField.innerHTML = profileData.user_nickname;
    emailField.innerHTML = profileData.user_email;
    if (profileData.isAdmin) {
        statusField.innerHTML = "Адміністратор";
        profileImage.setAttribute("src", "img/icons/admin_dark.png")
    } else {
        statusField.innerHTML = "Користувач";
        profileImage.setAttribute("src", "img/icons/user_dark.png")
    }
}

const upperHeader = document.querySelector("header > .upper_header");
upperHeader.classList.remove("d-none");