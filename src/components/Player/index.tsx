import Image from 'next/image';
import styles from './styles.module.scss';

const Player: React.FC = (): JSX.Element => (
  <div className={styles.playerContainer}>
    <header>
      <Image src="/playing.svg" alt="Playing now" width={32} height={32} />
      <strong>Playing now</strong>
    </header>

    <div className={styles.emptyPlayer}>
      <strong>Choose a podcast</strong>
    </div>

    <footer className={styles.empty}>
      <div className={styles.progress}>
        <span>00:00</span>
        <div className={styles.slider}>
          <div className={styles.emptySlider} />
        </div>
        <span>00:00</span>
      </div>

      <div className={styles.buttons}>
        <button type="button">
          <Image src="/shuffle.svg" height={24} width={24} alt="Shuffle" />
        </button>
        <button type="button">
          <Image src="/play-previous.svg" height={24} width={24} alt="Play Previous" />
        </button>
        <button type="button" className={styles.playButton}>
          <Image src="/play.svg" height={32} width={32} alt="Play" />
        </button>
        <button type="button">
          <Image src="/play-next.svg" height={24} width={24} alt="Play Next" />
        </button>
        <button type="button">
          <Image src="/repeat.svg" height={24} width={24} alt="Repeat" />
        </button>
      </div>
    </footer>
  </div>
);

export default Player;
