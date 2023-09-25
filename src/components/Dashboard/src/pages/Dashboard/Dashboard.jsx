import Statistics from '../../components/Statistics/Statistics';
import css from './Dashboard.module.css';
import Orders from '../../components/Orders/Orders';
const Dashboard = ({details}) => {
  return <div className={`${css.container} dashboard-container`}>
    <div className={css.dashboard}>
      
      <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
         <span className={css.analysisText}>Analysis Data</span>
        </div>
      </div>
      <Statistics details={details}/>
    </div>
    <Orders details={details}/>
  </div>
}
export default Dashboard