document.addEventListener('DOMContentLoaded', () => {

    // --- 1. A PLAYLIST GLOBAL ---
    const playlist = [
        {
            title: 'Nossa Canção',
            artist: 'Um momento especial',
            src: 'assets/audio/home-edward-shape-&-the-magnetic-zeros.mp3',
            art: 'assets/img/fotos/foto-2-1.jpg'
        },
        {
            title: 'A Paz que Você Traz',
            artist: 'Trilha sonora dos nossos dias',
            src: 'assets/audio/Ben E. King - Stand By Me (Audio).mp3',
            art: 'assets/img/fotos/foto-2-1.jpg'
        },
        // Adicione mais músicas aqui
    ];

    // --- NOVA LÓGICA: GERENCIADOR DE PLAYERS ---
    // Uma lista que vai guardar todos os players que criarmos.
    const todosOsPlayers = [];

    // Função que pausa todos os players, EXCETO o que está tocando agora.
    function pausarOutrosPlayers(playerAtivo) {
        todosOsPlayers.forEach(player => {
            if (player !== playerAtivo && !player.audio.paused) {
                player.audio.pause();
                player.playIcon.style.display = 'block';
                player.pauseIcon.style.display = 'none';
            }
        });
    }

    // --- 2. A "FÁBRICA" DE PLAYERS (CLASSE) ---
    class MusicPlayer {
        constructor(playerID) {
            // ... (toda a seleção de elementos continua a mesma)
            this.audio = document.getElementById(`player-musica-${playerID}`);
            this.playPauseBtn = document.getElementById(`play-pause-btn-${playerID}`);
            this.playIcon = document.getElementById(`play-icon-${playerID}`);
            this.pauseIcon = document.getElementById(`pause-icon-${playerID}`);
            this.prevBtn = document.getElementById(`prev-btn-${playerID}`);
            this.nextBtn = document.getElementById(`next-btn-${playerID}`);
            this.progressBarFill = document.getElementById(`progress-bar-fill-${playerID}`);
            this.progressBarBackground = document.querySelector(`#player-card-${playerID} .progress-bar-background`);
            this.currentTimeEl = document.getElementById(`current-time-${playerID}`);
            this.totalDurationEl = document.getElementById(`total-duration-${playerID}`);
            this.albumArtImg = document.getElementById(`album-art-img-${playerID}`);
            this.songTitleEl = document.querySelector(`#player-card-${playerID} .song-title`);
            this.songArtistEl = document.querySelector(`#player-card-${playerID} .song-artist`);

            this.currentTrackIndex = 0;
            this.addEventListeners();
        }

        loadTrack(trackIndex) {
            if (trackIndex >= 0 && trackIndex < playlist.length) {
                const track = playlist[trackIndex];
                this.audio.src = track.src;
                this.albumArtImg.src = track.art;
                this.songTitleEl.textContent = track.title;
                this.songArtistEl.textContent = track.artist;
            }
        }

        // FUNÇÃO 'togglePlayPause' ATUALIZADA
        togglePlayPause() {
            if (this.audio.paused) {
                // ANTES de dar play, mandamos pausar todos os outros players.
                pausarOutrosPlayers(this); 
                
                this.audio.play();
                this.playIcon.style.display = 'none';
                this.pauseIcon.style.display = 'block';
            } else {
                this.audio.pause();
                this.playIcon.style.display = 'block';
                this.pauseIcon.style.display = 'none';
            }
        }
        
        // ... (o resto das funções: updateProgress, formatTime, etc., continuam EXATAMENTE as mesmas) ...
        updateProgress() {
            if (this.audio.duration) {
                const percentage = (this.audio.currentTime / this.audio.duration) * 100;
                this.progressBarFill.style.width = `${percentage}%`;
                this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
            }
        }
        formatTime(seconds) {
            if (isNaN(seconds)) return '0:00';
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }
        setDuration() {
            this.totalDurationEl.textContent = this.formatTime(this.audio.duration);
        }
        setProgress(e) {
            const width = this.progressBarBackground.clientWidth;
            const clickX = e.offsetX;
            this.audio.currentTime = (clickX / width) * this.audio.duration;
        }
        nextTrack() {
            this.currentTrackIndex = (this.currentTrackIndex + 1) % playlist.length;
            this.loadTrack(this.currentTrackIndex);
            this.togglePlayPauseOnTrackChange();
        }
        prevTrack() {
            this.currentTrackIndex = (this.currentTrackIndex - 1 + playlist.length) % playlist.length;
            this.loadTrack(this.currentTrackIndex);
            this.togglePlayPauseOnTrackChange();
        }
        // NOVA FUNÇÃO para garantir que a troca de faixa também pause os outros players
        togglePlayPauseOnTrackChange() {
            setTimeout(() => {
                pausarOutrosPlayers(this);
                this.audio.play();
                this.playIcon.style.display = 'none';
                this.pauseIcon.style.display = 'block';
            }, 150);
        }

        addEventListeners() {
            this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
            this.prevBtn.addEventListener('click', () => this.prevTrack());
            this.nextBtn.addEventListener('click', () => this.nextTrack());
            this.audio.addEventListener('timeupdate', () => this.updateProgress());
            this.audio.addEventListener('canplay', () => this.setDuration());
            this.audio.addEventListener('ended', () => this.nextTrack());
            this.progressBarBackground.addEventListener('click', (e) => this.setProgress(e));
        }
    }

    // --- 3. INICIALIZAÇÃO DOS PLAYERS (LÓGICA CORRIGIDA E FINAL) ---
    const playerElements = document.querySelectorAll('.player-card-spotify');

    playerElements.forEach(playerEl => {
        const playerId = playerEl.id.split('-')[2];
        if (playerId) {
            const trackIndex = parseInt(playerId) - 1;
            if (trackIndex >= 0 && trackIndex < playlist.length) {
                // Cria um novo player
                const player = new MusicPlayer(playerId);
                
                // Define e carrega a música inicial correta
                player.currentTrackIndex = trackIndex;
                player.loadTrack(trackIndex);
                
                // Adiciona o player recém-criado à nossa lista de gerenciamento
                todosOsPlayers.push(player);
            }
        }
    });
});