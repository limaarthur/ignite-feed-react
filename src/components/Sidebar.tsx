import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Seidebar() {
  return (
    <asside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/66640568?v=4" />

        <strong>Arthur Lima</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </asside>
  );
}