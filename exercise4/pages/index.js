import styles from '../styles/Home.module.css';

import ChatUI from '../comps/Chat';
import PhotoUI from '../comps/photo/index';

export default function Home() {
  return (
    <div id="main" className={styles.container}>
      <ChatUI />
      <PhotoUI />

    </div>
  )
}
