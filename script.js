document.addEventListener("DOMContentLoaded", () => {
  const pitch = document.getElementById("pitch");
  const mainContent = document.querySelector(".main-content");
  const trashBin = document.getElementById("trash-bin");
  const playerCounter = document.getElementById("player-counter");
  const exportBtn = document.getElementById("export-btn");
  let playersOnField = 0;
  let selectedPlayerDiv = null;

  // Player data organized by position
  const players = {
    goalkeepers: [
      {
        name: "בן גורדין",
        image:
          "https://hbsfc.co.il/pics/%D7%91%D7%9F%20%D7%92%D7%95%D7%A8%D7%93%D7%99%D7%9F.jpg",
      },
      {
        name: "ניב אליאסי",
        image:
          "https://hbsfc.co.il/pics/%D7%A0%D7%99%D7%91%20%D7%90%D7%9C%D7%99%D7%90%D7%A1%D7%99(3).jpg",
      },
      {
        name: "אופיר מרציאנו",
        image:
          "https://hbsfc.co.il/pics/%D7%90%D7%95%D7%A4%D7%99%D7%A8%20%D7%9E%D7%A8%D7%A6%D7%99%D7%90%D7%A0%D7%95(1).jpg",
      },
    ],
    defenders: [
      {
        name: "גיא מזרחי",
        image:
          "https://hbsfc.co.il/pics/%D7%92%D7%99%D7%90%20%D7%9E%D7%96%D7%A8%D7%97%D7%99.jpg",
      },
      {
        name: "מתן בלטקסה",
        image:
          "https://hbsfc.co.il/pics/%D7%9E%D7%AA%D7%9F%20%D7%91%D7%9C%D7%98%D7%A1%D7%A7%D7%94.jpg",
      },
      {
        name: "אור בלוריאן",
        image:
          "https://hbsfc.co.il/pics/%D7%90%D7%95%D7%A8%20%D7%91%D7%9C%D7%95%D7%A8%D7%99%D7%90%D7%9F(1).jpg",
      },
      {
        name: "איתן טיבי",
        image:
          "https://hbsfc.co.il/pics/%D7%90%D7%99%D7%AA%D7%9F%20%D7%98%D7%99%D7%91%D7%99(4).jpg",
      },
      {
        name: "הלדר לופס",
        image:
          "https://hbsfc.co.il/pics/%D7%94%D7%9C%D7%93%D7%A8%20%D7%9C%D7%95%D7%A4%D7%A1(4).jpg",
      },
      {
        name: "אור דדיה",
        image:
          "https://hbsfc.co.il/pics/%D7%90%D7%95%D7%A8%20%D7%93%D7%93%D7%99%D7%94(3).jpg",
      },
      {
        name: "מיגל ויטור",
        image:
          "https://hbsfc.co.il/pics/%D7%9E%D7%99%D7%92%D7%9C%20%D7%95%D7%99%D7%98%D7%95%D7%A8(3).jpg",
      },
    ],
    midfielders: [
      {
        name: "רועי גורדנה",
        image:
          "https://hbsfc.co.il/pics/%D7%A8%D7%95%D7%A2%D7%99%20%D7%92%D7%95%D7%A8%D7%93%D7%A0%D7%94(4).jpg",
      },
      {
        name: "דן ביטון",
        image:
          "https://hbsfc.co.il/pics/%D7%93%D7%9F%20%D7%91%D7%99%D7%98%D7%95%D7%9F(1).jpg",
      },
      {
        name: "קינגס קנגוואה",
        image:
          "https://hbsfc.co.il/pics/%D7%A7%D7%99%D7%A0%D7%92%D7%A1%20%D7%A7%D7%A0%D7%92%D7%90%D7%95%D7%95%D7%94.jpg",
      },
      {
        name: "גיא בדש",
        image:
          "https://hbsfc.co.il/pics/%D7%92%D7%99%D7%90%20%D7%91%D7%93%D7%A9(2).jpg",
      },
      {
        name: "לוקאס ונטורה",
        image:
          "https://hbsfc.co.il/pics/%D7%9C%D7%95%D7%A7%D7%90%D7%A1%20%D7%95%D7%A0%D7%98%D7%95%D7%A8%D7%94.jpg",
      },
      {
        name: "אליאל פרץ",
        image:
          "https://hbsfc.co.il/pics/%D7%90%D7%9C%D7%99%D7%90%D7%9C%20%D7%A4%D7%A8%D7%A5.jpg",
      },
      {
        name: "אנטוניו ספר",
        image:
          "https://hbsfc.co.il/pics/%D7%90%D7%A0%D7%98%D7%95%D7%A0%D7%99%D7%95%20%D7%A1%D7%A4%D7%A8(1).jpg",
      },
      {
        name: "יוני סטויאנוב",
        image:
          "https://hbsfc.co.il/pics/%D7%99%D7%95%D7%94%D7%9F%20%D7%A1%D7%98%D7%95%D7%99%D7%90%D7%A0%D7%95%D7%91.jpg",
      },
      {
        name: "מריאנו בריירו",
        image:
          "https://hbsfc.co.il/pics/%D7%9E%D7%A8%D7%99%D7%90%D7%A0%D7%95%20%D7%91%D7%A8%D7%99%D7%99%D7%A8%D7%95(2).jpg",
      },
      {
        name: "תומר יוספי",
        image:
          "https://hbsfc.co.il/pics/%D7%AA%D7%95%D7%9E%D7%A8%20%D7%99%D7%95%D7%A1%D7%A4%D7%99(3).jpg",
      },
      {
        name: "שי אליאס",
        image:
          "https://hbsfc.co.il/pics/%D7%A9%D7%99%20%D7%90%D7%9C%D7%99%D7%90%D7%A1(4).jpg",
      },
    ],
    forwards: [
      {
        name: "אלון תורגמן",
        image:
          "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/465578255_1116470217153116_5887339467017858657_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=fWahGlPr5r0Q7kNvgEoe8Wn&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=Aoa0XMpR09YEat-FzZDQxiC&oh=00_AYAjra0vR6-AM7LFr7klur6IiSbD4E91Obh5yMTw5HanjA&oe=6737F6F2",
      },
      {
        name: "זאהי אחמד",
        image:
          "https://hbsfc.co.il/pics/%D7%96%D7%90%D7%94%D7%99%20%D7%90%D7%97%D7%9E%D7%93.jpg",
      },
      {
        name: "סמיר פרהוד",
        image:
          "https://hbsfc.co.il/pics/%D7%A1%D7%9E%D7%99%D7%A8%20%D7%A4%D7%A8%D7%94%D7%95%D7%93.jpg",
      },
      {
        name: "אילון אלמוג",
        image:
          "https://hbsfc.co.il/pics/%D7%90%D7%99%D7%9C%D7%95%D7%9F%20%D7%90%D7%9C%D7%9E%D7%95%D7%92(1).jpg",
      },
      {
        name: "ארנולד גריטה",
        image:
          "https://hbsfc.co.il/pics/%D7%90%D7%A8%D7%A0%D7%95%D7%9C%D7%93%20%D7%A4%D7%95%D7%9C.jpg",
      },
      {
        name: "אמיר גנאח",
        image:
          "https://hbsfc.co.il/pics/%D7%90%D7%9E%D7%99%D7%A8%20%D7%92%D7%90%D7%A0%D7%97(1).jpg",
      },
      {
        name: "רותם חטואל",
        image:
          "https://hbsfc.co.il/pics/%D7%A8%D7%95%D7%AA%D7%9D%20%D7%97%D7%98%D7%95%D7%90%D7%9C(2).jpg",
      },
    ],
  };

  // Mobile position selector handling
  const positionBtns = document.querySelectorAll(".position-btn");
  positionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      positionBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const position = btn.dataset.position;
      document.querySelectorAll(".position-group").forEach((group) => {
        group.classList.remove("active");
      });
      document.getElementById(position).classList.add("active");
    });
  });

  // Create player element function
  function createPlayerElement(player, forPitch = false) {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player");
    playerDiv.dataset.name = player.name;
    playerDiv.innerHTML = `
          <img src="${player.image}" alt="${player.name}">
          <span>${player.name}</span>
      `;

    if (forPitch) {
      playerDiv.style.position = "absolute";
      setupDragEvents(playerDiv);
    }

    return playerDiv;
  }

  // Setup drag events for pitch players
  function setupDragEvents(playerDiv) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    function startDragging(e) {
      if (e.type === "mousedown") {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      } else {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      }

      if (e.target.closest(".player")) {
        isDragging = true;
        selectedPlayerDiv = playerDiv;
        playerDiv.style.zIndex = "1000";
      }
    }

    function drag(e) {
      if (!isDragging) return;
      e.preventDefault();

      if (e.type === "mousemove") {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      } else {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      // Get pitch boundaries
      const pitchRect = pitch.getBoundingClientRect();
      const playerRect = playerDiv.getBoundingClientRect();

      // Constrain to pitch boundaries
      let left = currentX;
      let top = currentY;

      left = Math.max(0, Math.min(left, pitchRect.width - playerRect.width));
      top = Math.max(0, Math.min(top, pitchRect.height - playerRect.height));

      setTranslate(left, top, playerDiv);
    }

    function stopDragging() {
      if (!isDragging) return;

      // Check if player was dropped on trash bin
      const trashRect = trashBin.getBoundingClientRect();
      const playerRect = playerDiv.getBoundingClientRect();

      if (isOverlapping(playerRect, trashRect)) {
        handlePlayerRemoval(playerDiv);
      }

      isDragging = false;
      selectedPlayerDiv = null;
      playerDiv.style.zIndex = "";
      initialX = currentX;
      initialY = currentY;
    }

    playerDiv.addEventListener("mousedown", startDragging);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDragging);

    // Touch events
    playerDiv.addEventListener("touchstart", startDragging);
    document.addEventListener("touchmove", drag);
    document.addEventListener("touchend", stopDragging);
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate(${xPos}px, ${yPos}px)`;
  }

  function isOverlapping(rect1, rect2) {
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  }

  // Populate the bench with players
  Object.keys(players).forEach((position) => {
    const list = document.getElementById(`${position}-list`);
    players[position].forEach((player) => {
      const playerDiv = createPlayerElement(player);

      if (window.innerWidth > 768) {
        playerDiv.draggable = true;
        playerDiv.addEventListener("dragstart", (e) => {
          if (playersOnField >= 11) {
            e.preventDefault();
            alert("ניתן לבחור עד 11 שחקנים בלבד");
            return;
          }
          if (playerDiv.classList.contains("used")) {
            e.preventDefault();
            alert("שחקן זה כבר נמצא במגרש");
            return;
          }
          e.dataTransfer.setData("application/json", JSON.stringify(player));
          playerDiv.classList.add("dragging");
        });

        playerDiv.addEventListener("dragend", () => {
          playerDiv.classList.remove("dragging");
        });
      } else {
        // Mobile click handler
        playerDiv.addEventListener("click", () =>
          handleMobilePlayerSelect(player, playerDiv)
        );
      }

      list.appendChild(playerDiv);
    });
  });

  // Handle mobile player selection
  function handleMobilePlayerSelect(player, benchPlayerDiv) {
    if (playersOnField >= 11) {
      alert("ניתן לבחור עד 11 שחקנים בלבד");
      return;
    }

    if (benchPlayerDiv.classList.contains("used")) {
      alert("שחקן זה כבר נמצא במגרש");
      return;
    }

    const playerOnPitch = createPlayerElement(player, true);
    playerOnPitch.style.left = "50%";
    playerOnPitch.style.top = "50%";
    playerOnPitch.style.transform = "translate(-50%, -50%)";
    pitch.appendChild(playerOnPitch);

    benchPlayerDiv.classList.add("used");
    playersOnField++;
    updatePlayerCounter();

    showPlacementIndicator();
  }

  // Show placement indicator for mobile
  function showPlacementIndicator() {
    const indicator = document.createElement("div");
    indicator.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px 20px;
        background: rgba(184, 0, 0, 0.9);
        color: white;
        border-radius: 20px;
        z-index: 1000;
        animation: fadeOut 2s forwards;
    `;
    indicator.textContent = "גרור את השחקן למיקום הרצוי";
    document.body.appendChild(indicator);

    setTimeout(() => {
      indicator.remove();
    }, 2000);
  }

  // Pitch drag and drop handling
  pitch.addEventListener("dragover", (e) => e.preventDefault());

  pitch.addEventListener("drop", (e) => {
    e.preventDefault();
    try {
      const playerData = JSON.parse(e.dataTransfer.getData("application/json"));
      if (!playerData) return;

      const benchPlayer = document.querySelector(
        `.player[data-name="${playerData.name}"]`
      );
      if (benchPlayer.classList.contains("used")) return;

      const rect = pitch.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const playerOnPitch = createPlayerElement(playerData, true);
      playerOnPitch.style.left = `${x - 45}px`;
      playerOnPitch.style.top = `${y - 45}px`;
      pitch.appendChild(playerOnPitch);

      benchPlayer.classList.add("used");
      playersOnField++;
      updatePlayerCounter();
    } catch (error) {
      console.error("Error handling drop:", error);
    }
  });

  // Trash bin functionality
  trashBin.addEventListener("dragover", (e) => {
    e.preventDefault();
    trashBin.style.backgroundColor = "rgba(184, 0, 0, 0.1)";
  });

  trashBin.addEventListener("dragleave", () => {
    trashBin.style.backgroundColor = "";
  });

  trashBin.addEventListener("drop", (e) => {
    e.preventDefault();
    const playerName = e.dataTransfer.getData("text/plain");
    handlePlayerRemoval(
      document.querySelector(`.pitch .player[data-name="${playerName}"]`)
    );
    trashBin.style.backgroundColor = "";
  });

  function handlePlayerRemoval(playerElement) {
    if (!playerElement) return;

    const playerName = playerElement.dataset.name;
    const benchPlayer = document.querySelector(
      `.bench .player[data-name="${playerName}"]`
    );
    if (benchPlayer) {
      benchPlayer.classList.remove("used");
    }
    playerElement.remove();
    playersOnField--;
    updatePlayerCounter();
  }

  function updatePlayerCounter() {
    playerCounter.textContent = playersOnField;
    if (playersOnField >= 11) {
      playerCounter.parentElement.style.backgroundColor = "#900";
    } else {
      playerCounter.parentElement.style.backgroundColor = "#b80000";
    }
  }

  // Export functionality
  exportBtn.addEventListener("click", () => {
    if (playersOnField === 0) {
      alert("יש להוסיף שחקנים למגרש לפני שמירת התמונה");
      return;
    }

    const loadingDiv = document.createElement("div");
    loadingDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px;
        border-radius: 10px;
        z-index: 1000;
    `;
    loadingDiv.textContent = "מייצר תמונה...";
    document.body.appendChild(loadingDiv);

    html2canvas(pitch, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
    })
      .then((canvas) => {
        const link = document.createElement("a");
        link.download = "hapoel-beer-sheva-lineup.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        loadingDiv.remove();
      })
      .catch((err) => {
        console.error("Error generating image:", err);
        alert("אירעה שגיאה בייצוא התמונה");
        loadingDiv.remove();
      });
  });

  // Window resize handling
  let lastWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    if (
      (currentWidth <= 768 && lastWidth > 768) ||
      (currentWidth > 768 && lastWidth <= 768)
    ) {
      location.reload();
    }
    lastWidth = currentWidth;
  });

  // Set initial mobile view if needed
  if (window.innerWidth <= 768) {
    document
      .querySelector('.position-btn[data-position="goalkeepers"]')
      .classList.add("active");
    document.getElementById("goalkeepers").classList.add("active");
  }
});
