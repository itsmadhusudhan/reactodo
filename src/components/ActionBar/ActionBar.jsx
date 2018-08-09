import React from 'react';
import styles from './ActionBar.scss';

const ActionBar=({clearCompleted,changeViewStatus,status})=>{
  return(
    <div className={styles.action__bar}>
      <li className={status==='ALL'?`${styles.action} ${styles.view}`:styles.action} onClick={()=>changeViewStatus('ALL')}>All</li>
      <li className={status==='ACTIVE'?`${styles.action} ${styles.view}`:styles.action} onClick={()=>changeViewStatus('ACTIVE')}>Active</li>
      <li className={status==='COMPLETED'?`${styles.action} ${styles.view}`:styles.action}  onClick={()=>changeViewStatus('COMPLETED')}>Completed</li>
      <li className={styles.action} onClick={clearCompleted}>ClearCompleted</li>
    </div>
  )
}

export default ActionBar;