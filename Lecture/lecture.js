const Pid = [
    // Branch 0 (CSE)
    [
      // Semester (I)
      [
        // Subject 0 (sub I)
        "PLdM-WZokR4tZb3xr9l1hBdzd-7m5mgHh_",
        // Subject 1 (sub II)
        null,
        // Subject 2 (sub III)
        null,
        // Subject 3 (sub IV)
        null,
      ],
      // Semester 2
      [
        // Subject 0 (sub I)
        "PLBliHJXnYGcoWgNqYH23eqI91LgeeY5fe",
        // Subject 1 (sub II)
        'PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA',
        // Subject 2 (sub III)
        'null',
        // Subject 3 (sub IV)
        'null',
      ]
      
    ]
   
  ];
  
  const playlistContainer = document.getElementById("playlist");
  const videoPlayer = document.getElementById("videoPlayer");
  
  document
    .getElementById("branch")
    .addEventListener("change", updatePlaylist);
  document
    .getElementById("fileSelect")
    .addEventListener("change", updatePlaylist);
  document
    .getElementById("SelectSubject")
    .addEventListener("change", updatePlaylist);
  
  function updatePlaylist() {
    const branchIndex = document.getElementById("branch").value;
    const semesterIndex = document.getElementById("fileSelect").value;
    const subjectIndex = document.getElementById("SelectSubject").value;
    const selectedPlaylistId = Pid[branchIndex][semesterIndex][subjectIndex];
  
    playlistContainer.innerHTML = ''; 
  
    if (selectedPlaylistId !== null) {
      const apiKey = 'AIzaSyAB8BQbb9CzhQphOEZ9U4ZbmaIfC51hShc'; 
  
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${selectedPlaylistId}&key=${apiKey}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const videos = data.items;
          videos.forEach((video) => {
            const title = video.snippet.title;
            const videoId = video.snippet.resourceId.videoId;
            const playlistItem = document.createElement("div");
            playlistItem.className = "playlist-item";
            playlistItem.innerHTML = `<a href="#" onclick="playVideo('${videoId}')">${title}</a>`;
            playlistContainer.appendChild(playlistItem);
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  
  function playVideo(videoId) {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    videoPlayer.src = videoUrl;
  }
  