import React from 'react';
import styles from './ActionBar.scss';

const ActionBar=({clearCompleted,changeViewStatus})=>{
  return(
    <div className={styles.action__bar}>
      <li className={styles.action} onClick={()=>changeViewStatus('ALL')}>All</li>
      <li className={styles.action} onClick={()=>changeViewStatus('ACTIVE')}>Active</li>
      <li className={styles.action}  onClick={()=>changeViewStatus('COMPLETED')}>Completed</li>
      <li className={styles.action} onClick={clearCompleted}>ClearCompleted</li>
    </div>
  )
}

export default ActionBar;