document.addEventListener("DOMContentLoaded", () => {
    const pitch = document.getElementById('pitch');
    const mainContent = document.querySelector('.main-content');
  
    // Player data organized by position
    const players = {
      goalkeepers: [{ name: 'אופיר מרציאנו', image: 'https://hbsfc.co.il/pics/%D7%90%D7%95%D7%A4%D7%99%D7%A8%20%D7%9E%D7%A8%D7%A6%D7%99%D7%90%D7%A0%D7%95(1).jpg' }],
      goalkeepers: [
        { name: 'בן גורדין', image: 'https://hbsfc.co.il/pics/%D7%91%D7%9F%20%D7%92%D7%95%D7%A8%D7%93%D7%99%D7%9F.jpg' },
        { name: 'ניב אליאסי', image: 'https://hbsfc.co.il/pics/%D7%A0%D7%99%D7%91%20%D7%90%D7%9C%D7%99%D7%90%D7%A1%D7%99(3).jpg' },
        { name: 'אופיר מרציאנו', image: 'https://hbsfc.co.il/pics/%D7%90%D7%95%D7%A4%D7%99%D7%A8%20%D7%9E%D7%A8%D7%A6%D7%99%D7%90%D7%A0%D7%95(1).jpg' }
      ],
      defenders: [
        { name: 'גיא מזרחי', image: 'https://hbsfc.co.il/pics/%D7%92%D7%99%D7%90%20%D7%9E%D7%96%D7%A8%D7%97%D7%99.jpg' },
        { name: 'מתן בלטקסה', image: 'https://hbsfc.co.il/pics/%D7%9E%D7%AA%D7%9F%20%D7%91%D7%9C%D7%98%D7%A1%D7%A7%D7%94.jpg' },
        { name: 'אור בלוריאן', image: 'https://hbsfc.co.il/pics/%D7%90%D7%95%D7%A8%20%D7%91%D7%9C%D7%95%D7%A8%D7%99%D7%90%D7%9F(1).jpg' },
        { name: 'איתן טיבי', image: 'https://hbsfc.co.il/pics/%D7%90%D7%99%D7%AA%D7%9F%20%D7%98%D7%99%D7%91%D7%99(4).jpg' },
        { name: 'הלדר לופס', image: 'https://hbsfc.co.il/pics/%D7%94%D7%9C%D7%93%D7%A8%20%D7%9C%D7%95%D7%A4%D7%A1(4).jpg' },
        { name: 'אור דדיה', image: 'https://hbsfc.co.il/pics/%D7%90%D7%95%D7%A8%20%D7%93%D7%93%D7%99%D7%94(3).jpg' },
        { name: 'מיגל ויטור', image: 'https://hbsfc.co.il/pics/%D7%9E%D7%99%D7%92%D7%9C%20%D7%95%D7%99%D7%98%D7%95%D7%A8(3).jpg' }
      ],
      midfielders: [
        { name: 'רועי גורדנה', image: 'https://hbsfc.co.il/pics/%D7%A8%D7%95%D7%A2%D7%99%20%D7%92%D7%95%D7%A8%D7%93%D7%A0%D7%94(4).jpg' },
        { name: 'דן ביטון', image: 'https://hbsfc.co.il/pics/%D7%93%D7%9F%20%D7%91%D7%99%D7%98%D7%95%D7%9F(1).jpg' },
        
        { name: 'קינגס קנגוואה', image: 'https://hbsfc.co.il/pics/%D7%A7%D7%99%D7%A0%D7%92%D7%A1%20%D7%A7%D7%A0%D7%92%D7%90%D7%95%D7%95%D7%94.jpg' },
        { name: 'גיא בדש', image: 'https://hbsfc.co.il/pics/%D7%92%D7%99%D7%90%20%D7%91%D7%93%D7%A9(2).jpg' },
        { name: 'לוקאס ונטורה', image: 'https://hbsfc.co.il/pics/%D7%9C%D7%95%D7%A7%D7%90%D7%A1%20%D7%95%D7%A0%D7%98%D7%95%D7%A8%D7%94.jpg' },
        { name: 'אליאל פרץ', image: 'https://hbsfc.co.il/pics/%D7%90%D7%9C%D7%99%D7%90%D7%9C%20%D7%A4%D7%A8%D7%A5.jpg' },
        { name: 'אנטוניו ספר', image: 'https://hbsfc.co.il/pics/%D7%90%D7%A0%D7%98%D7%95%D7%A0%D7%99%D7%95%20%D7%A1%D7%A4%D7%A8(1).jpg' },
        { name: 'יוני סטויאנוב', image: 'https://hbsfc.co.il/pics/%D7%99%D7%95%D7%94%D7%9F%20%D7%A1%D7%98%D7%95%D7%99%D7%90%D7%A0%D7%95%D7%91.jpg' },
        { name: 'מריאנו בריירו', image: 'https://hbsfc.co.il/pics/%D7%9E%D7%A8%D7%99%D7%90%D7%A0%D7%95%20%D7%91%D7%A8%D7%99%D7%99%D7%A8%D7%95(2).jpg' },

        { name: 'תומר יוספי', image: 'https://hbsfc.co.il/pics/%D7%AA%D7%95%D7%9E%D7%A8%20%D7%99%D7%95%D7%A1%D7%A4%D7%99(3).jpg' },
        { name: 'שי אליאס', image: 'https://hbsfc.co.il/pics/%D7%A9%D7%99%20%D7%90%D7%9C%D7%99%D7%90%D7%A1(4).jpg' }
      ],
      forwards: [
        { name: 'אלון תורגמן', image: 'https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/465578255_1116470217153116_5887339467017858657_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=fWahGlPr5r0Q7kNvgEoe8Wn&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=Aoa0XMpR09YEat-FzZDQxiC&oh=00_AYAjra0vR6-AM7LFr7klur6IiSbD4E91Obh5yMTw5HanjA&oe=6737F6F2' },
        
        { name: 'זאהי אחמד', image: 'https://hbsfc.co.il/pics/%D7%96%D7%90%D7%94%D7%99%20%D7%90%D7%97%D7%9E%D7%93.jpg' },
        { name: 'סמיר פרהוד', image: 'https://hbsfc.co.il/pics/%D7%A1%D7%9E%D7%99%D7%A8%20%D7%A4%D7%A8%D7%94%D7%95%D7%93.jpg' },
        { name: 'אילון אלמוג', image: 'https://hbsfc.co.il/pics/%D7%90%D7%99%D7%9C%D7%95%D7%9F%20%D7%90%D7%9C%D7%9E%D7%95%D7%92(1).jpg' },
        { name: 'ארנולד גריטה', image: 'https://hbsfc.co.il/pics/%D7%90%D7%A8%D7%A0%D7%95%D7%9C%D7%93%20%D7%A4%D7%95%D7%9C.jpg' },
        { name: 'אמיר גנאח', image: 'https://hbsfc.co.il/pics/%D7%90%D7%9E%D7%99%D7%A8%20%D7%92%D7%90%D7%A0%D7%97(1).jpg' },
        { name: 'רותם חטואל', image: 'https://hbsfc.co.il/pics/%D7%A8%D7%95%D7%AA%D7%9D%20%D7%97%D7%98%D7%95%D7%90%D7%9C(2).jpg' }
      ]
    };
  
    // Populate the bench with players organized by position
    Object.keys(players).forEach(position => {
      players[position].forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.draggable = true;
        playerDiv.innerHTML = `
          <img src="${player.image}" alt="${player.name}">
          <span>${player.name}</span>
        `;
  
        // Drag-and-drop events for each player on the bench
        playerDiv.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', JSON.stringify(player)); // Store player data
          playerDiv.classList.add('dragging');
        });
  
        playerDiv.addEventListener('dragend', () => {
          playerDiv.classList.remove('dragging');
        });
  
        document.getElementById(`${position}-list`).appendChild(playerDiv);
      });
    });
  
    // Enable players to be dropped onto the main content area
    mainContent.addEventListener('dragover', (e) => e.preventDefault());
  
    mainContent.addEventListener('drop', (e) => {
      e.preventDefault();
      const playerData = JSON.parse(e.dataTransfer.getData('text/plain'));
      
      // Create a new player element for the main content area
      const playerOnPitch = document.createElement('div');
      playerOnPitch.classList.add('player');
      playerOnPitch.style.position = 'absolute';
      playerOnPitch.style.left = `${e.clientX - mainContent.offsetLeft - 45}px`;
      playerOnPitch.style.top = `${e.clientY - mainContent.offsetTop - 45}px`;
      playerOnPitch.draggable = true;
      playerOnPitch.innerHTML = `
        <img src="${playerData.image}" alt="${playerData.name}">
        <span>${playerData.name}</span>
      `;
  
      // Allow repositioning of players on the main content area
      playerOnPitch.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', ''); // Empty data for repositioning
        playerOnPitch.classList.add('dragging');
      });
  
      playerOnPitch.addEventListener('dragend', (e) => {
        playerOnPitch.style.left = `${e.clientX - mainContent.offsetLeft - 45}px`;
        playerOnPitch.style.top = `${e.clientY - mainContent.offsetTop - 45}px`;
        playerOnPitch.classList.remove('dragging');
      });
  
      mainContent.appendChild(playerOnPitch);
    });

    
  });
  