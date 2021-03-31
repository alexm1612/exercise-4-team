import styles from '../styles/Home.module.css';
import ChatUI from '../comps/Chat';
import Photo from './PhotoComponent';
// import Poll from './PollComponent';

export default function Home() {
  return (
    <div id="main" className={styles.main}>
      <ChatUI />

    </div>
  )
}
