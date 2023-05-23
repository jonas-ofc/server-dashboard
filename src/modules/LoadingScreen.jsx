import "../styles/Loading.scss"

function LoadingScreen() {

  function removeLoader(){
    document.querySelector(".loading").addEventListener("animationend", () => {
      document.getElementById("loadingSection").style.display = "none";
    })
  }
 
  return (
    <section id="loadingSection">
      <div className="contentWrapper">
        <div className="loading">
          <span><b>O</b></span>
          <span><b>A</b></span>
          <span><b>K</b></span>
          <span>D</span>
          <span>I</span>
          <span>G</span>
          <span>I</span>
          <span>T</span>
          <span>A</span>
          <span>L</span>
        </div>
        <svg id="logo" width="auto" height="120" viewBox="0 0 117 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="scale(3)">
            <path
              className="path"
              stroke="#204561"
              strokeWidth="0.5"
              d="M19.5 0C8.74453 0 0 8.96875 0 20C0 31.0312 8.74453 40 19.5 40C30.2555 40 39 31.0312 39 20C39 8.96875 30.2555 0 19.5 0ZM27.9398 25.0938C27.4523 25.5 26.7516 25.4688 26.3859 25L22.8211 20.5L25.1063 26C22.0289 28.25 17.3977 30.4375 12.3094 28.6562C11.2734 28.2812 10.5117 27.3438 10.3594 26.2188C9.62813 20.8125 12.5531 16.5938 15.2648 13.9062L20.4141 17.5312L16.5445 12.75C16.1789 12.2812 16.2703 11.5625 16.7578 11.1562C18.3727 9.78125 21.968 11.5 24.9844 14.9688C26.1422 13.875 26.5992 12.6875 26.6602 12.0938C26.6602 12.0625 26.6602 12.0625 26.6602 12.0312C26.6602 11.8125 26.843 11.6562 27.0563 11.6875H27.1477L27.3914 11.7188C27.5742 11.75 27.6961 11.875 27.7266 12.0625C27.7875 12.75 27.4828 14.6562 25.9289 16.125C28.6406 19.8125 29.5547 23.75 27.9398 25.0938Z"
              fill="#00000000"
            ></path>
          </g>
        </svg>
      </div>
    </section>
  );
}

export default LoadingScreen;
